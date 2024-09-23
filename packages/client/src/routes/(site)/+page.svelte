<script lang="ts">
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
      class="btn-pill border-2 border-gray-300 hover:bg-gray-200"
      on:click={() => modalActions.open('introduction', undefined)}>Modal</button
    >
  </div>
</section>

<style lang="postcss">
</style>
