<script lang="ts">
  import Scroller from '$components/Scroller.svelte'
  import Flowbite from '$modals/Flowbite.svelte'
  import MeltUI from '$modals/MeltUI.svelte'
  import MeltUIV2 from '$modals/MeltUI-v2.svelte'
  import Native from '$modals/Native.svelte'
  import V1 from '$modals/V1.svelte'
  import V2 from '$modals/V2.svelte'
  import V3 from '$modals/V3.svelte'
</script>

<header>
  <h1 class="mt-12 mb-4 md:mt-16 text-4xl font-bold">Modals are hard</h1>
  <div class="pl-2 text-base">
    <p>An optimal modal should:</p>
    <ol class="pl-8 list-decimal">
      <li>Fit the viewport without scrolling the modal itself, only content</li>
      <li>Adjust height dynamically in mobile when keyboard is open, without overflowing</li>
      <li>Have clickable overlay background that closes the modal</li>
      <li>Have overlay work on the empty space above & under modal as well</li>
    </ol>
    <p class="mt-2">I've put here some examples to showcase the different ways of doing it.</p>
    <ul class="pl-8 list-disc">
      <li>Flowbite has a pretty good scrolling modal</li>
      <li>melt-ui's example is no good</li>
      <li>Native dialog is too difficult to work with</li>
      <li>V1 doesn't scroll content</li>
      <li>V2 doesn't close on overlay clicks above/under</li>
      <li>V3 is the best way I've found so far. No clickable backdrop though</li>
    </ul>
  </div>
</header>

<section class="mt-8 gap-4 flex flex-col">
  <div class="flex flex-wrap gap-2 items-end">
    <Flowbite />
    <MeltUI />
    <MeltUIV2 />
    <Native />
    <V1 />
    <V2 />
    <V3 />
  </div>
  <div>
    <Scroller />
  </div>
</section>

<style lang="postcss">
</style>
