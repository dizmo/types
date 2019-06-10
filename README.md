[![NPM version](https://badge.fury.io/js/%40dizmo%2Ftypes.svg)](https://npmjs.org/package/@dizmo/types)
[![Build Status](https://travis-ci.org/dizmo/types.svg?branch=master)](https://travis-ci.org/dizmo/types)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/types/badge.svg?branch=master)](https://coveralls.io/github/dizmo/types?branch=master)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdizmo%2Ftypes.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdizmo%2Ftypes?ref=badge_shield)

# @dizmo/types

Library module.

## Usage

### Install

```sh
npm install @dizmo/types --save
```

### Require

```javascript
const types = require('@dizmo/types');
```

### Examples

```typescript
import { Global } from '@dizmo/types'
```

```typescript
import { Bundle } from '@dizmo/types'
```

```typescript
import { Dizmo } from '@dizmo/types'
```

```typescript
import { Storage } from '@dizmo/types'
```

```typescript
import { Viewer } from '@dizmo/types'
```

```typescript
import { UUID } from '@dizmo/types'
```

## Development

### Clean

```sh
npm run clean
```

### Build

```sh
npm run build
```

#### without linting and cleaning:

```sh
npm run -- build --no-lint --no-clean
```

#### with UMD bundling (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD bundling (excl. minimization):

```sh
npm run -- build --prepack --no-minify
```

### Lint

```sh
npm run lint
```

#### with auto-fixing:

```sh
npm run -- lint --fix
```

### Test

```sh
npm run test
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- test --no-lint --no-clean --no-build
```

### Cover

```sh
npm run cover
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- cover --no-lint --no-clean --no-build
```

## Publish

```sh
npm publish
```

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © 2019 [dizmo AG](http://dizmo.com/), Switzerland


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdizmo%2Ftypes.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdizmo%2Ftypes?ref=badge_large)