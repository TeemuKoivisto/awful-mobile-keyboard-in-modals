<script lang="ts">
  import { fade, scale } from 'svelte/transition'
  import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
  import x from '@iconify-icons/feather/x'

  import Content from '$components/Content.svelte'
  import AfterContent from '$components/AfterContent.svelte'

  const MODAL_DURATION = 400
  let open = false

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      close()
    }
  }
  function openModal() {
    open = true
    document.querySelector('html')?.classList.add('scroll-lock')
  }
  function close() {
    open = false
    document.querySelector('html')?.classList.remove('scroll-lock')
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<button class="rounded px-4 py-1 bg-gray-200 hover:bg-gray-300" on:click={openModal}> V1 </button>

{#if open}
  <div
    class="fixed top-0 start-0 end-0 h-full md:inset-0 z-50 w-full flex justify-center items-center"
    aria-modal="true"
    role="dialog"
  >
    <button
      transition:fade={{ duration: MODAL_DURATION }}
      class="fixed z-40 inset-0 h-full w-full bg-black bg-opacity-50 outline-none cursor-default"
      on:click={close}
      tabindex="-1"
    />
    <div
      transition:scale={{ duration: MODAL_DURATION }}
      class="z-50 bg-white mx-auto h-full max-h-[580px] rounded-xl shadow-lg overflow-y-auto max-w-2xl"
    >
      <div class="p-4 flex flex-col">
        <h2
          class="my-2 text-4xl sm:text-5xl font-semibold text-black flex items-center justify-between"
        >
          <span> Modal </span>
          <button
            class="flex items-center text-sm rounded-full px-2 py-2 hover:bg-gray-200"
            on:click={close}
          >
            <Icon icon={x} width={24} />
          </button>
        </h2>
        <Content />
        <AfterContent />
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
</style>
