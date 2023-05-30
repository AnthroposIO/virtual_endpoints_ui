import esbuildServe from 'esbuild-serve';

esbuildServe({
    // esbuild options
    logLevel: "info",
    entryPoints: ["src/app.js"],
    bundle: true,
    outfile: "dist/app.js",
}, {
    // serve options (optional)
    port: 8000,
    root: '.'
});