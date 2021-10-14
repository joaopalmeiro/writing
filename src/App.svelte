<script>
  import CardList from './components/CardList.svelte';
  import { PERSONAL_SITE_URL } from './data/misc';
</script>

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
    --base-black: 0, 0%, 11%; /* #1b1b1b */

    --black: hsla(var(--base-black), 1);
    --black-transparent: hsla(var(--base-black), 0.5);

    --box-shadow-offset: 4px;
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
