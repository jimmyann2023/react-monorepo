/**
 * @type {import('cz-git').UserConfig}
 */

const userConfig = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    allowBreakingChanges: ['feat', 'fix'],
    customScopesAlias: 'custom',
    customScopesAlign: 'bottom',
    emptyScopesAlias: 'empty',
    messages: {
      body: '填写更加详细的变更描述[可选]。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更[可选]。使用 "|" 换行 :\n',
      confirmCommit: '是否提交或修改commit ?',
      customFooterPrefixs: '输入自定义issue前缀 :',
      customScope: '请输入自定义的提交范围 :',
      footer: '列举关联issue [可选] 例如: #31, #I3244 :\n',
      footerPrefixsSelect: '选择关联issue前缀[可选]:',
      scope: '选择一个提交范围[可选]:',
      subject: '请简要描述提交 :\n',
      type: '选择你要提交的类型 :',
    },
    scopes: [],
    skipQuestions: ['scope', 'body', 'breaking', 'footerPrefix', 'footer'], // 自定义选择指定的问题不显示
    types: [
      { emoji: '✨', name: 'feat:   ✨  新增功能', value: 'feat' },
      { emoji: '🐛', name: 'fix:   🐛  修复缺陷', value: 'fix' },
      { emoji: '📝', name: 'docs:   📝  文档变更', value: 'docs' },
      {
        emoji: '💄',
        name: 'style:   💄  代码格式',
        value: 'style',
      },
      {
        emoji: '🔨',
        name: 'refactor:   🔨  代码重构',
        value: 'refactor',
      },
      { emoji: '⚡️', name: 'perf:    ⚡️  性能优化', value: 'perf' },
      {
        emoji: '✅',
        name: 'test:   ✅  测试',
        value: 'test',
      },
      {
        emoji: '📦️',
        name: 'build:   📦️  打包构建',
        value: 'build',
      },
      { emoji: '👷', name: 'ci:   👷  CI 配置变更', value: 'ci' },
      { emoji: '⏪️', name: 'revert:   ⏪️  代码回退', value: 'revert' },
      {
        emoji: '🚀',
        name: 'chore:   🚀  构建/工程依赖/工具',
        value: 'chore',
      },
      { emoji: '🚧', name: 'wip:   🚧  正在开发中', value: 'wip' },
      { emoji: '🎯', name: 'workflow:   🎯  工作流程改进', value: 'workflow' },
    ],
    useEmoji: true,
  },
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
};

export default userConfig;
