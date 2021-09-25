// More info:
// - https://www.snowpack.dev/reference/configuration
// - https://github.com/snowpackjs/snowpack/blob/main/create-snowpack-app/app-template-svelte/snowpack.config.mjs

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    // Key (local directory name): Value (build path)
    // public: "/",
    public: { url: "/", static: true },
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-svelte"],
  routes: [],
  optimize: {},
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
};
