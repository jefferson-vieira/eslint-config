import nextVitals from 'eslint-config-next/core-web-vitals';
import { globalIgnores } from 'eslint/config';

import base from './base.mjs';
import react from './react.mjs';
import typescript from './typescript.mjs';

export default [
  ...base,
  ...typescript,
  ...react,
  ...nextVitals,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
];
