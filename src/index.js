import App from "./App.svelte";

let app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR). More info:
// - https://www.snowpack.dev/concepts/hot-module-replacement
// - https://github.com/snowpackjs/snowpack/blob/main/create-snowpack-app/app-template-svelte/src/index.js
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
