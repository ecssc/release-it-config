# @ecssc/release-it-config

Shared release-it configuration for ECSSC projects.

## Installation

```bash
npm install --save-dev @ecssc/release-it-config release-it
```

## Usage

Create a `.release-it.mjs`:

```javascript
import { base, module } from '@ecssc/release-it-config'

export default {
  ...base,
  ...module,
}
```

## Exports

| Export | Description |
|--------|-------------|
| `base` | Core config: git commits, GitHub releases, changelog generation |
| `module` | npm publishing config for GitHub Packages registry |

## Features

- Automatic version bumping based on conventional commits
- Changelog generation with custom section headings
- GitHub release creation
- npm publishing to GitHub Packages

## Changelog Sections

| Commit Type | Changelog Section |
|-------------|-------------------|
| `feat:` | Features |
| `fix:` | Bug Fixes |
| `perf:` | Performance |
| `revert:` | Reverts |

Other commit types (docs, style, refactor, test, build, ci, chore) are hidden from the changelog.