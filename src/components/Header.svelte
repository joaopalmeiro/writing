<script>
  import { PERSONAL_SITE_URL } from '../data/misc';
  import { reducedMotion } from '../stores';
  import { typing } from '../typing.js';

  // System Preferences > Accessibility > Display > Reduce motion (macOS)
  $: console.log($reducedMotion);
</script>

<h1>Scatter plot</h1>
<!-- More info: https://web.dev/external-anchors-use-rel-noopener/ -->
<div id="typed-strings" use:typing>
  <p>
    Scattered words by <a href={PERSONAL_SITE_URL} target="_blank" rel="noreferrer" lang="pt-PT"
      >João Palmeiro</a
    >
  </p>
</div>
<!-- <span id="typed" /> -->
<!-- More info: https://stackoverflow.com/a/2076111 -->
<p id="typed" style="display: inline;" />
