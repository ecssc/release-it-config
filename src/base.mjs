export default {
  git: {
    commitMessage: 'release: v${version}',
  },
  github: {
    release: true,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'conventionalcommits',
      presetConfig: {
        types: [
          { type: 'feat', section: 'Features' },
          { type: 'fix', section: 'Bug Fixes' },
          { type: 'perf', section: 'Performance' },
          { type: 'revert', section: 'Reverts' },
          { type: 'docs', hidden: true },
          { type: 'style', hidden: true },
          { type: 'refactor', hidden: true },
          { type: 'test', hidden: true },
          { type: 'build', hidden: true },
          { type: 'ci', hidden: true },
          { type: 'chore', hidden: true },
        ],
      },
      infile: 'CHANGELOG.md',
    },
  },
}
