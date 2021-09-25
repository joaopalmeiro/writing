# writing

My writings published in different sites and aggregated here.

## Notes

### Svelte

> Source: [Svelte course](https://frontendmasters.com/courses/svelte/) by Rich Harris and Frontend Masters.

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
