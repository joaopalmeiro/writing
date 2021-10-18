# writing

My writings published in different sites and aggregated here.

## Quickstart

- `npm install`.
- `npm start`.

## Notes

### Svelte

> Source: [Svelte](https://frontendmasters.com/courses/svelte/) course by Rich Harris and Frontend Masters.

- Svelte is a component framework.
- Svelte is a compiler that takes declarative code and turns it into imperative JS.
- HTML is the base language rather than JavaScript.
- Svelte gives a warning if an image (`<img>`) does not have the `alt` attribute by default, for example. In other words, Svelte provides [accessibility warnings](https://svelte.dev/docs#Accessibility_warnings).
- Styles (`<style>`) are scoped to the component (and the markup defined in it, not affecting nested components). You can use `:global()` for global styles.
- Unused CSS classes are removed from output by default.
- Use the `{@html ...}` tag to render strings with HTML. However, Svelte does not perform any sanitization.
- Svelte + Reactivity:
  - Use `$:` (`$: doubled = count * 2;`, for example) for reactive declarations.
  - `$: console.log(count);`.
  - Svelte’s reactivity is triggered by assignments. So, array methods like `push` and `splice` won’t (automatically) cause updates.
- Use `export let variableName;` to declare properties/props.
- Use `<Component {...obj}/>` to spread props.
- Keyed each blocks: `{#each things as thing (thing.id)}...{/each}` (`(thing.id)` is a unique identifier).
- Await blocks: `{#await promise}...{:then number}...{:catch error}...{/await}`.
- Use _Chrome DevTools_ > _Network_ tab > _Online_ -> _Offline_ ([Throttling dropdown](https://developer.chrome.com/docs/devtools/network/)) to test catch the error.
- You can add event modifiers to event handlers (after the `on:` directive). The `once` modifier is an example.
- Components can also dispatch events (component events + event forwarding). In a nutshell, an inner component creates an event (called `message`, for example), broadcasts it, and then the outer component is able to handle it (`on:message={handleMessage}`, for example).
- To leverage event forwarding, add `on:click` to the button of an inner component to handle it in the `App.Svelte` file, for example.
- Bindings (some simple examples):
  - `<input bind:value={variableName}>`.
  - `<input type=checkbox bind:checked={variableName}>`.
- There are bindings for `<audio>` and `<video>` as well.
- Every block-level element has `clientWidth`, `clientHeight`, `offsetWidth`, and `offsetHeight` bindings (imagine adding this to a `<div>` with a `<span>` to know the dimensions of a piece of text).
- The `this` binding allows you to obtain a reference to rendered elements.
- Components (props) can also have bindings.
- `onMount` lifecycle function. It runs after the component is first rendered to the DOM.
- It is possible to have an `{:else}` in an Each block to render something when the size of the array in question is zero, for example.
- It is recommended to put the `fetch` in `onMount` because of SSR (with the exception of `onDestroy`, lifecycle functions don’t run during SSR).
- `beforeUpdate` and `afterUpdate` are useful for implementing auto scrolling.
- When you update component state, it doesn’t update the DOM immediately. Instead, it waits until the next _microtask_ to see if there are any other changes that need to be applied. The `tick` lifecycle function returns a promise that resolves as soon as any pending state changes have been applied to the DOM.
- It is possible to reference a store value by prefixing the store name with `$` (auto-subscription).
- It is possible to bind to store values.
- Svelte provides two motion-oriented functions (`tweened` and `spring`) for creating stores whose values change over time rather than immediately. Svelte also provides easing functions.
- Svelte provides transitions via the `transition:` directive (or the `in:` and `out:` directives) and the functions (e.g., `fade`) of the `svelte/transition` module. There are also transition events that can be listened to.
- Deferred transitions. The `crossfade` function returns a pair of transitions that talk to each other.
- Actions are element-level lifecycle functions.
- Component composition allows a component to accept children. The (default or named) `<slot>` element is used to specify where these should be placed.
- The Context API is a mechanism that allows components to talk to each other without data being passed around as props.
- The `<svelte:component>` special element is useful for dynamic components.
- The `<svelte:window>` special element lets you add event listeners to the `window` object. It also supports bindings.
- The `<svelte:body>` special element lets you add event listeners to the `document.body` object. It is useful for the `mouseenter` and `mouseleave` events, for example.
- The `<svelte:head>` special element allows you to insert elements inside the `<head>`.
- The `<svelte:options>` special element allows you to specify compiler options.
- The `<script context=”module”>` block will run once, when the module first evaluates, rather than when a component is instantiated.
- `{@debug variableName}` for debugging.
- [Svelte Preprocess](https://github.com/sveltejs/svelte-preprocess) package.
- Sapper is an application framework, similar to Next.js (vs. React).
- [Svelte for VS Code](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-vscode):
  - Run _Svelte: Restart Language Server_ if Prettier configuration changes.

> Tooling

- [Svelma](https://c0bra.github.io/svelma/): Bulma components for Svelte.

### [Snowpack](https://www.snowpack.dev/)

- [Template](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/app-template-svelte).
- [Create Snowpack App (CSA)](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/cli) CLI:
  - `npx create-snowpack-app svelte-snowpack --template @snowpack/app-template-minimal`.
- [Hot Module Replacement (HMR)](https://www.snowpack.dev/concepts/hot-module-replacement): to push file updates to the browser without triggering a full page refresh.

### Prettier

- [Prettier and ESLint Setup for Svelte.js](https://www.rockyourcode.com/prettier-and-es-lint-setup-for-svelte-js/) blog post.
- [prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte):
  - [`.prettierrc` file](https://github.com/sveltejs/prettier-plugin-svelte/blob/master/.prettierrc).

### Accessibility

- Blogs/Websites:
  - [a11y with Lindsey](https://www.a11ywithlindsey.com/).
  - [The A11Y Project](https://www.a11yproject.com/).
  - [Periodic Table of ARIA 1.0 Roles](https://dylanb.github.io/periodic-aria-roles.html).
  - [Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/).
- [Page Regions](https://www.w3.org/WAI/tutorials/page-structure/regions/):
  - To maximize compatibility with browsers and assistive technologies that support WAI-ARIA but do not yet support HTML5, it is advisable to use both the HTML5 elements and the corresponding WAI-ARIA roles:
    - `<header role="banner">…</header>`.
    - `<main role="main">…</main>`.
    - `<nav role="navigation">…</nav>`.
    - `<footer role="contentinfo">…</footer>`.
- [VoiceOver Keyboard Shortcuts on a Mac](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts).

### CSS

> Source: [CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js) course by Josh Comeau.

- The `em` unit is a _relative_ unit. It is equal to the font size of the current element.
- Using `em` means that a component will change depending on the font size of the container it is placed within.
- The `rem` unit is similar to the `em` unit. However, it is relative to the root element (`<html>` tag). The author suggests using this unit for font sizes/typography.
- If necessary, change the baseline font size using `em` or `rem`, not `px` (e.g., `html { font-size: 1.2em; }`).
- As for box model properties (padding, border, and margin), the author typically uses `px`.

### [Windi CSS](https://windicss.org/)

- Utility-first CSS framework. Alternative to Tailwind CSS.

### Misc

- [List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
- [atipo](https://www.atipofoundry.com/) fonts.
- [Random blob generator](https://codepen.io/LekovicMilos/pen/omVzYv) pen by Milos Lekovic.
- [Fontsource](https://fontsource.org/) package:
  - Example: [Alice](https://fonts.google.com/specimen/Alice) font (`npm install @fontsource/alice`).
- [Svelte Society](https://sveltesociety.dev/) website.

### References

- [currentColor](https://css-tricks.com/currentcolor/) blog post by Chris Coyier.
- [Icon](https://svelte.recipes/components/icon) recipe by Amelia Wattenberger.
- [Deploy Svelte with Vercel](https://vercel.com/guides/deploying-svelte-with-vercel).
- [17 Open Source Fonts You’ll Actually Love](https://www.webdesignerdepot.com/2020/08/17-open-source-fonts-youll-actually-love/) blog post by Jonathan Kelley.
- [@snowpack/plugin-svelte](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-svelte) plugin.
- [Simulate different prefers-color-scheme and prefers-reduced-motion preferences](https://developer.chrome.com/blog/new-in-devtools-79/#userpreferences) (Chrome DevTools).
