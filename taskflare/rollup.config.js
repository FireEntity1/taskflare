import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production
      }
    }),
    // Extract CSS into a separate file
    css({
      output: 'bundle.css'
    }),
    // Resolve node_modules
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    // Minify in production
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};