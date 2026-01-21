import fs from "fs-extra";
import glob from "fast-glob";
import { transform } from "@svgr/core";
import path from "node:path";

const SRC =
    "symbols/web/**/materialsymbolsoutlined/*.svg";
const OUT_DIR = "src/icons";

// ---------- filename filters ----------
const isOutlined = (name) => /^[^_]+_24px\.svg$/.test(name);
const isFilled = (name) => /^[^_]+_fill1_24px\.svg$/.test(name);

// ---------- name helpers ----------
const baseName = (file) =>
    path
        .basename(file)
        .replace("_fill1_24px.svg", "")
        .replace("_24px.svg", "");

const pascalCase = (str) =>
    str.replace(/(^\w|[-_]\w)/g, (m) =>
        m.replace("-", "").replace("_", "").toUpperCase()
    );

// 🔑 numeric-safe component name
const safeComponentName = (rawName) => {
    const name = pascalCase(rawName);
    return /^\d/.test(name) ? `Icon${name}` : name;
};

// ---------- svg extraction ----------
const extractSvg = async (file) => {
    const svg = await fs.readFile(file, "utf8");

    const jsx = await transform(
        svg,
        {
            icon: false,
            expandProps: false,
            prettier: false,
            jsxRuntime: "automatic",
        },
        { componentName: "Svg" }
    );

    const viewBox =
        jsx.match(/viewBox="([^"]+)"/)?.[1] ??
        "0 0 24 24";

    const body = jsx
        .replace(/^[\s\S]*?<svg[^>]*>/, "")
        .replace("</svg>", "")
        .trim();

    return { viewBox, body };
};

(async () => {
    const allFiles = await glob(SRC);

    /**
     * iconMap structure:
     * {
     *   "1x_mobiledata": {
     *     outlined: { viewBox, body },
     *     filled:   { viewBox, body }
     *   }
     * }
     */
    const iconMap = new Map();

    for (const file of allFiles) {
        const filename = path.basename(file);

        if (!isOutlined(filename) && !isFilled(filename)) continue;

        const key = baseName(file);
        const entry = iconMap.get(key) ?? {};

        entry[isFilled(filename) ? "filled" : "outlined"] =
            await extractSvg(file);

        iconMap.set(key, entry);
    }

    for (const [key, variants] of iconMap) {
        if (!variants.outlined) continue; // outlined is mandatory

        const componentName = safeComponentName(key);
        const viewBox = variants.outlined.viewBox;

        const code = `
import { IconBase, IconProps } from "../IconBase";

export const ${componentName} = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="${viewBox}"
    paths={{
      outlined: <>${variants.outlined.body}</>,
      filled: <>${variants.filled?.body ?? variants.outlined.body}</>,
    }}
  />
);
`.trim();

        await fs.outputFile(
            `${OUT_DIR}/${componentName}.tsx`,
            code
        );
    }

    console.log("✅ Icons generated (numeric-safe, outlined + filled)");
})();
