import { defineConfig } from "vitepress";
import path from 'path';
import { fileURLToPath } from 'url';

import { shared } from './shared.js'
import { en } from './en.js'
import { zh } from './zh.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitepress.dev/reference/site-config

export default defineConfig({
  ...shared,
  locales: {
    en: { label: 'English', ...en },
    root: { label: '中文', ...zh },
  }
});