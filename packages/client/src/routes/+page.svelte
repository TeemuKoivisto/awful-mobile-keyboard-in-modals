<script lang="ts">
  import Scroller from '$components/Scroller.svelte'
  import Flowbite from '$modals/Flowbite.svelte'
  import MeltUi from '$modals/MeltUI.svelte'
  import Native from '$modals/Native.svelte'
  import V1 from '$modals/V1.svelte'
  import V2 from '$modals/V2.svelte'
</script>

<header>
  <h1
    class="mt-12 px-2 mb-4 md:mt-16 font-cursive text-4xl md:text-7xl tracking-tight flex items-center justify-between"
  >
    svelte
  </h1>
</header>

<section class="px-4 flex flex-col">
  <div class="px-4 mb-8 md:mb-10 flex gap-2 items-end">
    <Flowbite />
    <MeltUi />
    <Native />
    <V1 />
    <V2 />
  </div>
</section>

<Scroller />

<style lang="postcss">
</style>
