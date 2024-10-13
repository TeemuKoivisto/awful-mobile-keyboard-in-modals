<script lang="ts">
  import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
  import x from '@iconify-icons/feather/x'
  import { fade, scale } from 'svelte/transition'

  import Content from '$components/Content.svelte'
  import AfterContent from '$components/AfterContent.svelte'

  const MODAL_DURATION = 300
  let open = false
  let contentEl: HTMLDivElement

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
  function click(e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }) {
    // Close on clicks outside content
    if (!e.composedPath().includes(contentEl)) {
      close()
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<button class="rounded px-4 py-1 bg-gray-200 hover:bg-gray-300" on:click={openModal}> V3 </button>

{#if open}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="fixed inset-0 z-50 bg-black/50 flex justify-center items-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    aria-modal="true"
    data-state={open ? 'open' : 'closed'}
    role="dialog"
    transition:fade={{ duration: MODAL_DURATION }}
    on:click={click}
  >
    <div
      transition:scale={{ duration: MODAL_DURATION }}
      class="absolute top-0 bottom-0 sm:top-4 sm:bottom-4 flex items-center justify-center mx-auto overflow-y-auto md:max-w-3xl"
    >
      <div
        class="p-2 pt-4 flex relative w-screen sm:w-full max-w-2xl h-full max-h-[580px] bg-white sm:rounded-xl shadow-lg sm:p-4 sm:min-w-[512px]"
        role="dialog"
        bind:this={contentEl}
      >
        <div class="relative flex flex-col">
          <h2 class="mb-2 text-4xl font-semibold text-black flex items-center justify-between">
            <span>Modal</span>
            <button
              class="flex items-center text-sm rounded-full px-2 py-2 hover:bg-gray-200"
              on:click={close}
            >
              <Icon icon={x} width={24} />
            </button>
          </h2>
          <Content />
          <AfterContent class="pt-4" />
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
</style>
