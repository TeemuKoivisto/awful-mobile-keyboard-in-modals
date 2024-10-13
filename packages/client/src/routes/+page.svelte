<script lang="ts">
  import Scroller from '$components/Scroller.svelte'
  import MeltUi from '$modals/MeltUI.svelte'
  import Native from '$modals/Native.svelte'

  import { modalActions } from '$stores/modal'
</script>

<header>
  <h1
    class="mt-12 px-2 mb-4 md:mt-16 font-cursive text-4xl md:text-7xl tracking-tight flex items-center justify-between"
  >
    svelte
  </h1>
</header>

<section class="px-4 flex flex-col">
  <div class="px-4 mb-8 md:mb-10">
    <button
      class="rounded px-4 py-1 bg-gray-200 hover:bg-gray-300"
      on:click={() => modalActions.open('v1', undefined)}>Modal v1</button
    >
    <button
      class="rounded px-4 py-1 bg-gray-200 hover:bg-gray-300"
      on:click={() => modalActions.open('flowbite', undefined)}>Flowbite</button
    >
    <button
      class="rounded px-4 py-1 bg-gray-200 hover:bg-gray-300"
      on:click={() => modalActions.open('v2', undefined)}>Modal v2</button
    >
    <MeltUi />
    <Native />
  </div>
</section>

<Scroller />

<style lang="postcss">
</style>
