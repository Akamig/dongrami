/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

function findActionTypeDeclaration() {
  const CandidatePaths = {
    localPath: './lib9c-wasm/dist/actions.d.ts',
    localSrcPath: './src/lib9c-wasm/dist/actions.d.ts',
    nodeModulesPath: './node_modules/lib9c-wasm/dist/actions.d.ts',
    parentFolderPath: '../lib9c-wasm/dist/actions.d.ts',
  };

  for (const name of Object.keys(CandidatePaths)) {
    if (fs.existsSync(path.join(__dirname, CandidatePaths[name]))) {
      return { name, path: CandidatePaths[name] };
    }
  }
}

function transformParams(
  /** @type {string} */ params,
  /** @type {boolean} */ isArray = false
) {
  const result = {};

  const paramLines = params
    .trim()
    .split('\n')
    .map((line) => line.trim());

  let context = '';
  for (const paramLine of paramLines) {
    if (context !== '' && !paramLine.includes('}')) {
      context += `\n${paramLine}`;
      continue;
    }

    if (context !== '' && paramLine.includes('}')) {
      context += `\n${paramLine}`;

      const object = context.split(':');
      const key = object[0].trim();
      const value = object.slice(1).join(':').trim().slice(1, -1);

      result[key] = transformParams(
        value.endsWith(']') ? value.slice(0, -3) : value,
        value.endsWith(']')
      );
      continue;
    }

    if (paramLine.includes('{')) {
      context += paramLine;
      continue;
    }

    const [param, type] = paramLine
      .replace(';', '')
      .split(':')
      .map((s) => s.trim());
    result[param] = type;
  }

  if (isArray) {
    result['__array'] = true;
  }

  return result;
}

function transformActionTypeDeclaration(path) {
  const data = fs.readFileSync(path, 'utf-8');

  const result = {};

  const matches = [
    ...data.matchAll(
      /export declare function (\w+)\(plainValue: {([\s\S]*?)}\): Uint8Array;/gm
    ),
  ];

  for (const match of matches) {
    const name = match[1];
    const params = match[2];

    result[name] = transformParams(params);
  }

  return JSON.stringify(result, null, 2);
}

function main() {
  const { name, path } = findActionTypeDeclaration();

  console.log(`Found actions.d.ts at ${name} (${path})`);

  fs.writeFileSync('./actions.json', transformActionTypeDeclaration(path));
}

main();
