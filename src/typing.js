import Typed from 'typed.js';

export function typing(node) {
  // Actions are essentially element-level lifecycle functions.
  // Alternative to `onMount` and `onDestroy`.
  // More info:
  // - https://svelte.dev/tutorial/actions
  // - https://svelte.dev/docs#use_action

  // console.log(node);

  // The node has been mounted in the DOM
  // More info:
  // - https://github.com/mattboldt/typed.js#strings-from-static-html-seo-friendly
  // - https://github.com/mattboldt/typed.js#setup
  // - https://github.com/MelihAltintas/svelte-typed-js
  // - https://github.com/Los-Crackitos/svelte-typed-js/blob/master/src/TypedJs.svelte
  // - https://github.com/mattboldt/typed.js/blob/master/src/initializer.js#L15
  // - https://github.com/mattboldt/typed.js/blob/master/src/initializer.js#L74
  const typed = new Typed('#typed', {
    // stringsElement: '#typed-strings',
    stringsElement: node,
    typeSpeed: 40,
  });

  return {
    destroy() {
      // More info: https://github.com/MelihAltintas/svelte-typed-js/blob/master/src/components/SvelteTypedJs.svelte#L32
      // The node has been removed from the DOM
      typed.destroy();
    },
  };
}
