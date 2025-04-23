import type { PluginOption } from 'vite';

import type {
  ApplicationPluginOptions,
  CommonPluginOptions,
  ConditionPlugin,
  LibraryPluginOptions,
} from '../typing';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { visualizer as viteVisualizerPlugin } from 'rollup-plugin-visualizer';
import viteCompressPlugin from 'vite-plugin-compression';
import viteDtsPlugin from 'vite-plugin-dts';

/**
 * 获取条件成立的 vite 插件
 * @param conditionPlugins
 */
async function loadConditionPlugins(conditionPlugins: ConditionPlugin[]) {
  const plugins: PluginOption[] = [];
  for (const conditionPlugin of conditionPlugins) {
    if (conditionPlugin.condition) {
      const realPlugins = await conditionPlugin.plugins();
      plugins.push(...realPlugins);
    }
  }
  return plugins.flat();
}

/**
 * 根据条件获取通用的vite插件
 */
async function loadCommonPlugins(options: CommonPluginOptions): Promise<ConditionPlugin[]> {
  const { isBuild, visualizer } = options;
  return [
    {
      condition: true,
      plugins: () => [react()],
    },
    {
      condition: true,
      plugins: () => [tailwindcss()],
    },
    {
      condition: isBuild && !!visualizer,
      plugins: () => [<PluginOption>viteVisualizerPlugin({
          filename: './node_modules/.cache/visualizer/stats.html',
          gzipSize: true,
          open: true,
        })],
    },
  ];
}

/**
 * 根据条件获取应用类型的vite插件
 */
async function loadApplicationPlugins(options: ApplicationPluginOptions): Promise<PluginOption[]> {
  // 单独取，否则commonOptions拿不到
  const isBuild = options.isBuild;

  const { compress, compressTypes, ...commonOptions } = options;

  const commonPlugins = await loadCommonPlugins(commonOptions);

  return await loadConditionPlugins([
    ...commonPlugins,
    {
      condition: isBuild && !!compress,
      plugins: () => {
        const compressPlugins: PluginOption[] = [];
        if (compressTypes?.includes('brotli')) {
          compressPlugins.push(viteCompressPlugin({ deleteOriginFile: false, ext: '.br' }));
        }
        if (compressTypes?.includes('gzip')) {
          compressPlugins.push(viteCompressPlugin({ deleteOriginFile: false, ext: '.gz' }));
        }
        return compressPlugins;
      },
    },
  ]);
}

/**
 * 根据条件获取库类型的vite插件
 */
async function loadLibraryPlugins(options: LibraryPluginOptions): Promise<PluginOption[]> {
  // 单独取，否则commonOptions拿不到
  const isBuild = options.isBuild;
  const { dts, ...commonOptions } = options;
  const commonPlugins = await loadCommonPlugins(commonOptions);
  return await loadConditionPlugins([
    ...commonPlugins,
    {
      condition: isBuild && !!dts,
      plugins: () => [viteDtsPlugin({ logLevel: 'error' })],
    },
  ]);
}
export {
  loadApplicationPlugins,
  loadLibraryPlugins,
  viteCompressPlugin,
  viteDtsPlugin,
  viteVisualizerPlugin,
};
