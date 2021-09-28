<script>
  import { PERSONAL_SITE_URL } from './data/misc.js';
  import writings from './data/writings.js';
</script>

<!-- More info: https://www.w3.org/WAI/tutorials/page-structure/regions/ -->
<main role="main">
  <h1>Scatter plot</h1>
  <!-- More info: https://web.dev/external-anchors-use-rel-noopener/ -->
  <p>
    Scattered writings by <a href={PERSONAL_SITE_URL} target="_blank" rel="noreferrer"
      >João Palmeiro</a
    >
  </p>

  <ul>
    {#each writings as writing}
      <li>{writing.title}</li>
    {/each}
  </ul>
</main>
