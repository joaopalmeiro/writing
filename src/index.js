// More info:
// - https://www.resset.dev/docs
// - https://github.com/filipelinhares/ress/blob/master/ress.css (it hides the default focus indicators)
// - https://github.com/necolas/normalize.css/blob/master/normalize.css
// - https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-svelte
// Imported here to be the first stylesheet
import 'ress';
import App from './App.svelte';

// More info:
// - https://github.com/maxboeck/mxb/blob/master/src/layouts/base.njk by Max Böck
// - https://en.wikipedia.org/wiki/Source_code
let app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR). Remove this snippet to remove HMR. More info:
// - https://www.snowpack.dev/concepts/hot-module-replacement
// - https://github.com/snowpackjs/snowpack/blob/main/create-snowpack-app/app-template-svelte/src/index.js
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
