<script>
  import writings from '../data/writings';
</script>

<ul>
  {#each writings as writing}
    <!-- More info: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang -->
    <li><h3 lang={writing.language}>{writing.title}</h3></li>
  {/each}
</ul>
