import type { Linter } from 'eslint';

import {
  ignores,
  importPluginConfig,
  jsdoc,
  jsonc,
  node,
  perfectionist,
  react,
  typescript,
} from './config';

type FlatConfig = Linter.Config;

type FlatConfigPromise = FlatConfig | FlatConfig[] | Promise<FlatConfig> | Promise<FlatConfig[]>;

async function defineConfig(customConfig: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    react(),
    ignores(),
    perfectionist(),
    jsdoc(),
    jsonc(),
    importPluginConfig(),
    node(),
    typescript(),
    ...customConfig,
  ];

  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export { defineConfig };
