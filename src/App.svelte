<script>
  // More info:
  // - https://www.resset.dev/docs
  // - https://github.com/filipelinhares/ress/blob/master/ress.css (it hides the default focus indicators)
  // - https://github.com/necolas/normalize.css/blob/master/normalize.css
  // - https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-svelte
  import 'ress';
  import CardList from './components/CardList.svelte';
  import { PERSONAL_SITE_URL } from './data/misc';
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
<main role="main" class="wrapper">
  <h1>Scatter plot</h1>
  <!-- More info: https://web.dev/external-anchors-use-rel-noopener/ -->
  <p>
    Scattered words by <a href={PERSONAL_SITE_URL} target="_blank" rel="noreferrer" lang="pt-PT"
      >João Palmeiro</a
    >
  </p>

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
     */
    max-width: 42rem;
    margin: 0 auto;
  }
</style>
