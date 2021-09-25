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
