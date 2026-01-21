// scripts/generate-index.js
import fs from "fs-extra";
import path from "node:path";

const ICONS_DIR = "src/icons";
const INDEX_FILE = "src/index.ts";

(async () => {
    const files = await fs.readdir(ICONS_DIR);

    const iconExports = files
        .filter((file) => file.endsWith(".tsx"))
        .map((file) => path.basename(file, ".tsx"))
        .sort((a, b) => a.localeCompare(b));

    const lines = [
        `export { IconBase } from "./IconBase";`,
        `export type { IconProps } from "./IconBase";`,
        `export type { IconVariant } from "./types";`,
        ``,
        ...iconExports.map(
            (name) => `export { ${name} } from "./icons/${name}";`
        ),
        ``,
    ];

    await fs.outputFile(INDEX_FILE, lines.join("\n"));

    console.log(
        `✅ index.ts generated with ${iconExports.length} icons`
    );
})();
