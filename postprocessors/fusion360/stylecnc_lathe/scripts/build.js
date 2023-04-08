import fs from 'node:fs';
import path from 'node:path';

import {
    postName,
    files,
} from '../data.js';



const main = () => {
    const sourceDirectory = 'source';
    const buildDirectory = './build';

    const outputPath = path.join(
        buildDirectory,
        `${postName}.cps`,
    );

    let postText = '';

    for (const [index, file] of files.entries()) {
        const filePath = path.join(process.cwd(), sourceDirectory, file);
        const text = fs.readFileSync(filePath, 'utf8');

        postText += `// #region --- ${file} ---\n`;
        postText += text;
        postText += `// #endregion --- ${file} ---\n`;

        if (index !== files.length - 1) {
            postText += '\n\n\n';
        }
    }

    fs.mkdirSync(buildDirectory, { recursive: true });
    fs.writeFileSync(outputPath, postText);
}

main();
