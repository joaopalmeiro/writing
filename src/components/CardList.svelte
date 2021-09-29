<script>
  import writings from '../data/writings';
  import { getRandomIntInclusive } from '../utils';

  function getBlobBorderRadius() {
    // Source: https://codepen.io/LekovicMilos/pen/omVzYv
    const percentage1 = getRandomIntInclusive(25, 75);
    const percentage2 = getRandomIntInclusive(25, 75);
    const percentage3 = getRandomIntInclusive(25, 75);
    const percentage4 = getRandomIntInclusive(25, 75);

    const percentage11 = 100 - percentage1;
    const percentage21 = 100 - percentage2;
    const percentage31 = 100 - percentage3;
    const percentage41 = 100 - percentage4;

    return `${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage41}% ${percentage31}%`;
  }
</script>

<ul>
  {#each writings as writing}
    <li class="card-item">
      <div class="blob-wrapper">
        <div
          class="blob"
          style="border-radius: {getBlobBorderRadius()}; background-color: var(--black-transparent);"
        />
        <div
          class="blob"
          style="border-radius: {getBlobBorderRadius()}; background-color: var(--black);"
        />
      </div>
      <!-- More info: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang -->
      <h3 lang={writing.language}>{writing.title}</h3>
    </li>
  {/each}
</ul>

<style>
  .card-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .blob-wrapper {
    width: 3rem;
    height: 3rem;
    /* More info: https://css-tricks.com/how-to-stack-elements-in-css/ */
    position: relative;
  }

  .blob {
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
