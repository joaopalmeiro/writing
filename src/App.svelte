<script>
  import CardList from './components/CardList.svelte';
  import Header from './components/Header.svelte';
</script>

<svelte:head>
  <!-- More info: 
    - https://leveluptutorials.com/
    - https://svelte.dev/tutorial/svelte-head
    - https://svelte.dev/docs#svelte_head
    - https://www.fontpair.co/all
    - https://fonts.google.com/specimen/Domine
    - https://fonts.google.com/specimen/Inter
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Domine:wght@500;700&family=Inter&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<!-- More info: https://www.w3.org/WAI/tutorials/page-structure/regions/ -->
<!-- Alternative: <Header /> inside <main> and without `role="banner"` (e.g., https://mxb.dev/blog/) -->
<Header />
<main role="main" class="wrapper">
  <h2 class="sr-only">Writings</h2>
  <CardList />
</main>

<style>
  :global(:root) {
    /* https://convertacolor.com/ */
    --base-black: 0, 0%, 11%; /* #1b1b1b */
    --black: hsla(var(--base-black), 1);
    --black-transparent: hsla(var(--base-black), 0.5);

    /* Source: https://www.bruegel.org/ */
    --white-yellow: hsla(60, 22.2%, 96.5%, 1); /* #f8f8f4 */
    --white: hsla(0, 0%, 100%, 1); /* #ffffff */

    --box-shadow-offset: 4px;

    --font-family-base: 'Inter', sans-serif;
    --font-family-display: 'Domine', serif;
  }

  :global(body) {
    font-family: var(--font-family-base);
    /* background-color: red; */
    /* background-color: var(--white-yellow); */
    /* Source: https://www.conic.style/ */
    background: conic-gradient(at 0% 0%, snow, var(--white));
    color: var(--black);
  }

  :global(h1, h2, h3) {
    /* More info: https://mxb.dev/blog/ */
    font-family: var(--font-family-display);
    text-rendering: optimizeLegibility;
  }

  :global(h1, h2) {
    /* More info: https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight */
    font-weight: 700;
  }

  :global(h3) {
    font-weight: 500;
  }

  /* :global(a:focus:not(:focus-visible)) {
    outline: none;
  } */

  /* Show the focus indicator when interacting with keyboard  */
  :global(a:focus-visible) {
    /* More info: 
     * - https://css-tricks.com/having-a-little-fun-with-custom-focus-styles/#bonus-customize-the-default-outline 
     * - https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset
     * - https://developer.mozilla.org/en-US/docs/Web/CSS/outline
     */
    outline: var(--black) solid 3px;
    /* outline-offset: 3px; */
  }

  :global(a) {
    /* Single color */
    /* More info: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links */
    color: var(--black);
    /* More info: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color */
    text-decoration-color: var(--black-transparent);
  }

  /* Source: 
   * - https://kittygiraudel.com/snippets/sr-only-class/ 
   * - https://github.com/sandrina-p/portfolio_v3/blob/master/src/theme/Theme.svelte#L120
   */
  :global(.sr-only) {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    overflow: hidden !important;
    margin: -1px !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  .wrapper {
    /* Based on: 
     * - https://www.sandrina-p.net/writing/ by Sandrina Pereira 
     * - https://overreacted.io/ by Dan Abramov
     * - https://windicss.org/utilities/sizing.html#max-width
     * - https://www.swyx.io/css-100-bytes/ (here or in `html`/`body`)
     */
    /* max-width: 42rem; */
    /* max-width: 65ch; */
    max-width: 70ch;
    margin: 0 auto;
  }
</style>
