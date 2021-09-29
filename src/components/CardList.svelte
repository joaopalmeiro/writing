<script>
  import writings from '../data/writings';
</script>

<ul>
  {#each writings as writing}
    <!-- More info: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang -->
    <li class="cardItem"><h3 lang={writing.language}>{writing.title}</h3></li>
  {/each}
</ul>

<style>
  .cardItem {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
