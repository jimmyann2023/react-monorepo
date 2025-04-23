import type { PluginVisualizerOptions } from 'rollup-plugin-visualizer';
import type { ConfigEnv, PluginOption, UserConfig } from 'vite';
import type { PluginOptions } from 'vite-plugin-dts';

interface ConditionPlugin {
  // 判断条件
  condition?: boolean;
  // 插件对象
  plugins: () => PluginOption[] | PromiseLike<PluginOption[]>;
}

interface CommonPluginOptions {
  /** 环境变量 */
  env?: Record<string, any>;
  /** 是否构建模式 */
  isBuild?: boolean;
  /** 构建模式 */
  mode?: string;
  /** 开启依赖分析 */
  visualizer?: boolean | PluginVisualizerOptions;
}

interface ApplicationPluginOptions extends CommonPluginOptions {
  /** 开启 gzip|brotli 压缩 */
  compress?: boolean;
  /** 压缩类型 */
  compressTypes?: ('brotli' | 'gzip')[];
}

interface LibraryPluginOptions extends CommonPluginOptions {
  /** 开启 dts 输出 */
  dts?: boolean | PluginOptions;
}

type ApplicationOptions = ApplicationPluginOptions;

type LibraryOptions = LibraryPluginOptions;

type DefineApplicationOptions = (config?: ConfigEnv) => Promise<{
  application?: ApplicationOptions;
  vite?: UserConfig;
}>;

type DefineLibraryOptions = (config?: ConfigEnv) => Promise<{
  library?: LibraryOptions;
  vite?: UserConfig;
}>;

type DefineConfig = DefineApplicationOptions | DefineLibraryOptions;

export type {
  ApplicationPluginOptions,
  CommonPluginOptions,
  ConditionPlugin,
  DefineApplicationOptions,
  DefineConfig,
  DefineLibraryOptions,
  LibraryPluginOptions,
};
