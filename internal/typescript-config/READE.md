```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Base",
  "compilerOptions": {
    /** 跳过对 node_modules 中所有 .d.ts（类型声明文件）的类型检查 */
    "skipLibCheck": true,

    /** 🌐 模块和目标设置 */

    /** 指定编译后的 JavaScript 版本。ESNext 表示使用最新的 ECMAScript 标准 */
    "target": "ESNext",
    /** 指定模块系统，ESNext 也是使用最新的模块语法（例如 import/export） */
    "module": "ESNext",
    /** 模块解析策略，node 模拟 Node.js 的解析逻辑，适合现代前端项目 */
    "moduleResolution": "node",
    /** 强制将所有文件都当作模块处理，即使没有 import 或 export */
    "moduleDetection": "force",

    /** 🎯 路径相关 */

    /** 设置相对模块导入的基础目录，. 表示项目根目录 */
    "baseUrl": ".",
    /** 允许导入 .json 文件为模块 */
    "resolveJsonModule": true,

    /** 💡 装饰器 */

    /** 启用对实验性装饰器（decorators）的支持，常用于 class、Vue、NestJS 等框架 */
    "experimentalDecorators": true,

    /** ✅ 严格性检查 */

    /** 开启所有严格类型检查 */
    "strict": true,
    /** 不允许将 null 和 undefined 分配给非对应类型 */
    "strictNullChecks": true,
    /** 禁止隐式 any 类型（必须显式指定类型） */
    "noImplicitAny": true,
    /** 如果子类重写方法，必须显式加上 override 关键字 */
    "noImplicitOverride": true,
    /** 禁止函数中的 this 隐式推断为 any */
    "noImplicitThis": true,
    /** 强化索引签名类型，如 obj[key] 的返回值会包含 undefined */
    "noUncheckedIndexedAccess": true,
    /** 编译时报告未使用的本地变量 */
    "noUnusedLocals": true,
    /** 编译时报告未使用的函数参数 */
    "noUnusedParameters": true,
    /** 检查 switch 语句中是否缺失 break 导致“贯穿”错误 */
    "noFallthroughCasesInSwitch": true,

    /** 🛠️ 编译控制 */

    /** 不生成编译后的 .js 文件，仅做类型检查 */
    "noEmit": true,
    /** 删除编译输出中的注释（虽然 noEmit 为 true，这个也就无效了 */
    "removeComments": true,
    /** 不生成 .map 文件，用于调试映射 */
    "sourceMap": false,
    /** 不将源码嵌入 sourceMap 文件中 */
    "inlineSources": false,

    /**📦 模块兼容性 */

    /** 允许从没有默认导出的模块中默认导入。对 babel 项目或兼容旧库很有用 */
    "allowSyntheticDefaultImports": true,
    /** 启用更好的模块互操作，允许 import default 来兼容 commonjs 模块。 */
    "esModuleInterop": true,
    /** 保留原始的 import/export 语法，不自动添加默认导出等 */
    "verbatimModuleSyntax": true,

    /** 📁 文件系统控制 */

    /** 强制文件名大小写一致，防止 Windows/Linux 不一致导致的 bug */
    "forceConsistentCasingInFileNames": true,
    /** 确保每个文件都是模块，适用于 Babel/ESBuild 等构建工具使用的场景 */
    "isolatedModules": true,
    /** 是否启用项目引用。为 true 时表示当前项目可被其它 TypeScript 项目引用。你设置为 false，说明不使用项目引用。 */
    "composite": false,
    /** 在 --watch 模式下，保留控制台输出，不会被清空 */
    "preserveWatchOutput": true
  },
  "exclude": ["**/node_modules/**", "**/dist/**", "**/.turbo/**"]
}
```
