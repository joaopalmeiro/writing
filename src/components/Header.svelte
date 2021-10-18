<script>
  import { NAME, PERSONAL_SITE_URL } from '../data/misc';
  import { reducedMotion } from '../stores';
  import { typing } from '../typing.js';

  // More info:
  // - https://svelte.dev/examples#html-tags
  // - https://svelte.dev/docs#html
  // - https://web.dev/external-anchors-use-rel-noopener/
  const text = `Scattered words by <a href=${PERSONAL_SITE_URL} target="_blank" rel="noreferrer" lang="pt-PT">${NAME}</a>`;

  // System Preferences > Accessibility > Display > Reduce motion (macOS)
  // $: console.log($reducedMotion);
</script>

<h1>Scatter plot</h1>
{#if $reducedMotion}
  <p>
    {@html text}
  </p>
{:else}
  <div id="typed-strings" use:typing>
    <p>
      {@html text}
    </p>
  </div>
  <!-- <span id="typed" /> -->
  <!-- More info: https://stackoverflow.com/a/2076111 -->
  <p id="typed" style="display: inline;" />
{/if}
