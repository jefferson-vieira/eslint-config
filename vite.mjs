import reactRefresh from 'eslint-plugin-react-refresh';

import base from './base.mjs';
import react from './react.mjs';
import typescript from './typescript.mjs';

export default [...base, ...typescript, ...react, reactRefresh.configs.vite];
