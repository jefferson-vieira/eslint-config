# eslint-config

Reusable ESLint flat config package for JS, React, and TypeScript projects.

## Installation

```bash
npm install eslint-config
```

## Usage

Use the package exports to import only the presets you need.

### Recommended bundle

```js
import eslintConfig from "eslint-config";

export default eslintConfig;
```

### JS only

```js
import { js } from "eslint-config";

export default js;
```

### React only

```js
import { react } from "eslint-config";

export default react;
```

### TypeScript only

```js
import { typescript } from "eslint-config";

export default typescript;
```

### Combined JS + React

```js
import { js, react } from "eslint-config";

export default [js, react];
```

### Combined JS + React + TypeScript

```js
import { js, react, typescript } from "eslint-config";

export default [js, react, typescript];
```

## Package exports

- `eslint-config` — default recommended bundle
- `eslint-config/js` — JavaScript-only preset
- `eslint-config/react` — React preset
- `eslint-config/typescript` — TypeScript preset
- `eslint-config/base` — shared base config
