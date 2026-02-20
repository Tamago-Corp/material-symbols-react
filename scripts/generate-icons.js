const fs = require('fs');
const path = require('path');

const SOURCE_DIR = './web';
const OUTPUT_DIR = './src/components/icons';

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const toPascalCase = (str) => {
    let pascal = str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    if (/^\d/.test(pascal)) pascal = `Icon${pascal}`;
    return pascal;
};

const getSvgPath = (svgString) => {
    // Regex to grab only the path data
    const match = svgString.match(/d="([^"]+)"/);
    return match ? match[1] : '';
};

async function generate() {
    const folders = fs.readdirSync(SOURCE_DIR).filter(f =>
        fs.lstatSync(path.join(SOURCE_DIR, f)).isDirectory()
    );

    folders.forEach(folderName => {
        const pascalName = toPascalCase(folderName);

        const getPathData = (style, isFilled) => {
            const fileName = isFilled ? `${folderName}_fill1_24px.svg` : `${folderName}_24px.svg`;
            const fullPath = path.join(SOURCE_DIR, folderName, `materialsymbols${style}`, fileName);
            if (fs.existsSync(fullPath)) {
                return getSvgPath(fs.readFileSync(fullPath, 'utf8'));
            }
            return null;
        };

        // Pre-extract all 4 variations
        const outDef = getPathData('outlined', false);
        const outFill = getPathData('outlined', true) || outDef; // Fallback to default
        const roundDef = getPathData('rounded', false) || outDef;
        const roundFill = getPathData('rounded', true) || roundDef || outDef;

        const componentContent = `
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ${pascalName} = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "${outFill}" : "${outDef}")
    : (variant === 'filled' ? "${roundFill}" : "${roundDef}");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
`.trim();

        fs.writeFileSync(path.join(OUTPUT_DIR, `${pascalName}.tsx`), componentContent);
    });

    console.log(`✅ ${folders.length} standalone icons generated in ${OUTPUT_DIR}`);
}

generate();