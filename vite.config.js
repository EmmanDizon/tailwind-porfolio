import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist", // Output dist folder outside of src
    emptyOutDir: true,
  },
});
