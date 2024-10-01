import { defineConfig } from '@hey-api/openapi-ts';
export default defineConfig({
    client: 'legacy/fetch',
    debug: true,
    input: 'https://localhost:44382/umbraco/swagger/Blend.V8Hemi-api-v1/swagger.json',
    output: {
        path: 'src/api',
        format: 'prettier',
        lint: 'eslint',
    },
    schemas: false,
    services: {
        asClass: true,
    },
    types: {
        enums: 'typescript',
    }
});

