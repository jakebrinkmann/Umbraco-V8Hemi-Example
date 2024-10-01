import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/v8hemi-ui.ts", // your web component source file
            formats: ["es"],
        },
        outDir: "../wwwroot/app_plugins/blend.v8hemi.frontend",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/],
            onwarn: () => { },
        },
    },
});