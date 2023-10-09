// rollup.config.js
const typescript = require("@rollup/plugin-typescript");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.mjs",
      format: "es",
      name: "icks",
      sourcemap: false,
      exports: "named",
    },
    {
      file: "lib/index.umd.js",
      name: "icks",
      format: "umd",
      sourcemap: false,
      exports: "named",
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./configs/tsconfig.esm.json",
      sourceMap: false,
    }),
  ],
};
