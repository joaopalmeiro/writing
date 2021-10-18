<script>
  import writings from '../data/writings';
  import { getBlobBorderRadius, getRandomItem } from '../utils';
  import Icon from './Icon.svelte';
</script>

<ul class="card-list">
  {#each writings as writing}
    <li
      class="card-item {getRandomItem([
        'bottom-border',
        'top-border',
        'left-border',
        'right-border',
      ])}"
    >
      <div class="blob-wrapper" aria-hidden="true">
        <div
          class="blob"
          style="border-radius: {getBlobBorderRadius()}; background-color: var(--black-transparent);"
        />
        <div
          class="blob"
          style="border-radius: {getBlobBorderRadius()}; background-color: var(--black);"
        />
        <div class="icon">
          <Icon name={writing.icon} />
        </div>
      </div>
      <div>
        <!-- More info: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang -->
        <h3 lang={writing.language}>
          <a href={writing.url} target="_blank" rel="noreferrer">{writing.title}</a>
        </h3>
        <!-- More info: 
        - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
        - https://www.a11ywithlindsey.com/blog -->
        <p>
          <!-- More info: https://sarah.dev/writing/ -->
          <span class="sr-only">Published on</span>
          <span lang={writing.publicationLanguage}>{writing.publication}</span>
          <span aria-hidden="true">•</span>
          <time>{writing.year}</time>
        </p>
      </div>
    </li>
  {/each}
</ul>

<style>
  /* 
   * This reset is not necessary because of `display: flex` and ress
   * More info: https://stackoverflow.com/a/34316093
   */
  /* .card-list {
    list-style: none;
    padding: 0;
  } */

  .card-item {
    /* Layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    /* Aesthetics */
    border: 2px solid var(--black);
    border-radius: 8px;
    transition: all 200ms ease;
    background-color: var(--white);
  }

  .card-item:not(:last-child) {
    margin: 0 0 25px;
  }

  .bottom-border {
    /* More info: 
     * - https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#values
     * - https://css-tricks.com/almanac/properties/b/box-shadow/
     * - box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color];
     */
    box-shadow: 0 var(--box-shadow-offset) 0 0 var(--black);
  }

  .bottom-border:hover {
    /* Based on: https://www.designsystemsforfigma.com/ by Josh Cusick */
    box-shadow: none;
    transform: translate(0px, var(--box-shadow-offset));
  }

  .top-border {
    /* More info: https://stackoverflow.com/a/49469345 */
    box-shadow: 0 calc(var(--box-shadow-offset) * -1) 0 0 var(--black);
  }

  .top-border:hover {
    box-shadow: none;
    transform: translate(0px, calc(var(--box-shadow-offset) * -1));
  }

  .left-border {
    box-shadow: calc(var(--box-shadow-offset) * -1) 0 0 0 var(--black);
  }

  .left-border:hover {
    box-shadow: none;
    transform: translate(calc(var(--box-shadow-offset) * -1), 0px);
  }

  .right-border {
    box-shadow: var(--box-shadow-offset) 0 0 0 var(--black);
  }

  .right-border:hover {
    box-shadow: none;
    transform: translate(var(--box-shadow-offset), 0px);
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

  .icon {
    /* Source: https://stackoverflow.com/a/36366223 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);
  }
</style>
