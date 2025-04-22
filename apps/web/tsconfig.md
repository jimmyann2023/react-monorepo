### tsconfig.json

#### tsconfig.json 👉 主入口 tsconfig

用于 Vite 项目的主配置

```json
{
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "files": []
}
```

### tsconfig.app.json

### 👉 给特定工具使用

给 app 代码（src）配置，避免 node/config 混淆

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "jsx": "react-jsx",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "moduleDetection": "force",
    "useDefineForClassFields": true,
    "module": "ESNext",

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,

    /* Linting */
    "strict": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

### tsconfig.node.json

#### tsconfig.node.json 👉 专门给 Vite config / Node 脚本用

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "moduleDetection": "force",
    "module": "ESNext",

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,

    /* Linting */
    "strict": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```
