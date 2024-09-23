<script lang="ts">
  import { fade, scale } from 'svelte/transition'
  import V1 from './V1.svelte'
  import V2 from './V2.svelte'
  import Flowbite from './Flowbite.svelte'

  import { modalActions, openModal, modals } from '$stores/modal'

  const components = {
    v1: V1,
    v2: V2,
    flowbite: Flowbite
  }

  const MODAL_DURATION = 400

  function handleOverlayClick() {
    modalActions.close()
  }
</script>

{#if $openModal}
  <div
    class="fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full flex justify-center items-center"
    aria-modal="true"
    role="dialog"
  >
    <button
      transition:fade={{ duration: MODAL_DURATION }}
      class="fixed z-40 inset-0 h-full w-full bg-black bg-opacity-50 outline-none cursor-default"
      on:click={handleOverlayClick}
      tabindex="-1"
    />
    <div
      transition:scale={{ duration: MODAL_DURATION }}
      class="absolute top-4 bottom-0 mb-4 z-50 bg-gray-100 mx-auto rounded-xl shadow-lg overflow-y-auto md:max-w-3xl"
    >
      <svelte:component
        this={components[$openModal]}
        params={$modals[$openModal]}
        hideModal={handleOverlayClick}
      />
    </div>
  </div>
{/if}

<style lang="postcss">
  .h-modal2 {
    height: calc(100% - 2rem);
  }
</style>
