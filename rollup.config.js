import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

export default [
  {
    input: './node_modules/diffable-html/dist/diffable-html.js',
    output: {
      file: './diffable-html.js',
      format: 'es',
    },
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      json(),
      commonjs(),
    ],
  },
];
