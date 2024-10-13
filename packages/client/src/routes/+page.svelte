<script lang="ts">
  import Scroller from '$components/Scroller.svelte'
  import Flowbite from '$modals/Flowbite.svelte'
  import MeltUi from '$modals/MeltUI.svelte'
  import Native from '$modals/Native.svelte'
  import V1 from '$modals/V1.svelte'
  import V2 from '$modals/V2.svelte'
</script>

<header>
  <h1 class="mt-12 mb-4 md:mt-16 text-4xl font-bold">Modals are hard</h1>
  <div class="pl-2 text-base">
    <p>An optimal modal should:</p>
    <ol class="pl-8 list-decimal">
      <li>Fit the viewport without scrolling the modal itself, only content</li>
      <li>Adjust height dynamically in mobile when keyboard is open, without overflowing</li>
      <li>Have clickable overlay background that closes the modal, not a global event listener</li>
      <li>Have overlay work on the empty space above & under modal as well</li>
    </ol>
  </div>
</header>

<section class="mt-8 gap-4 flex flex-col">
  <div class="flex gap-2 items-end">
    <Flowbite />
    <MeltUi />
    <Native />
    <V1 />
    <V2 />
  </div>
  <div>
    <Scroller />
  </div>
</section>

<style lang="postcss">
</style>
