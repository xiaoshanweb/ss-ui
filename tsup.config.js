import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["./index.ts"],
  format: ["cjs","esm"],
  dts: true,
  outDir:'dist',
  // sourcemap: true,
  clean: true,
  // minify: true,
  // bundle: true,
  // splitting: false,
  // target: "es2022",
  // external: ["@types/node"],
});