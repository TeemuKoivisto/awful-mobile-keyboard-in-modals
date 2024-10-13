<script lang="ts">
  import { fade, scale } from 'svelte/transition'
  import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
  import x from '@iconify-icons/feather/x'

  import Content from '$components/Content.svelte'
  import AfterContent from '$components/AfterContent.svelte'

  let modalEl: HTMLDialogElement
  let open = false

  function handleClick() {
    if (open) {
      modalEl?.close()
    } else {
      modalEl?.showModal()
    }
    open = !open
  }
  function close() {
    modalEl?.close()
    open = false
  }
  function click(e: MouseEvent & { currentTarget: EventTarget & HTMLDialogElement }) {
    // Close on clicks to backdrop
    if (e.currentTarget === modalEl) {
      close()
    }
  }
</script>

<button class="rounded px-4 py-1 bg-gray-200 hover:bg-gray-300" on:click={handleClick}
  >Dialog</button
>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  class="relative max-w-2xl w-full max-h-[580px] bg-white rounded-xl shadow-lg open:animate-fade-in open:backdrop:animate-fade-in backdrop:bg-black backdrop:bg-opacity-50"
  bind:this={modalEl}
  transition:fade={{ duration: 400 }}
  on:click={click}
>
  <div class="p-4">
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
</dialog>

<style lang="postcss"></style>
