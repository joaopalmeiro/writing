<script>
  import writings from '../data/writings';
  import { getBlobBorderRadius } from '../utils';
</script>

<ul class="card-list">
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
  .card-list {
    /* Reset */
    list-style: none;
    padding: 0;
  }

  .card-item {
    /* Layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    /* Aesthetics */
    border: 2px solid var(--black);
    /* More info: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#values */
    box-shadow: 0 4px 0 0 var(--black);
    border-radius: 8px;
    transition: all 200ms ease;
  }

  .card-item:not(:last-child) {
    margin: 0 0 25px;
  }

  .card-item:hover {
    /* Based on: https://www.designsystemsforfigma.com/ by Josh Cusick */
    box-shadow: none;
    transform: translate(0px, 4px);
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
