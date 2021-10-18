<script>
  // More info
  // - Recipe: https://svelte.recipes/components/icon
  // - Icons (15×15): https://icons.modulz.app/
  // - https://windicss.org/utilities/svg.html#fill-color
  import pathsByName from '../data/icon-paths';

  export let name;

  // More info: https://svelte.dev/docs#3_$_marks_a_statement_as_reactive
  $: paths = pathsByName[name] || [];
</script>

<svg
  class="c"
  viewBox="0 0 15 15"
  fill-rule="evenodd"
  clip-rule="evenodd"
  xmlns="http://www.w3.org/2000/svg"
>
  {#each paths as path}
    <path d={path} />
  {/each}
</svg>

<style>
  .c {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: visible;
  }
</style>
