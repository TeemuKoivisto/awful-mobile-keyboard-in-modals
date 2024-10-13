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
</script>

<button class="rounded px-4 py-1 bg-gray-200 hover:bg-gray-300" on:click={handleClick}
  >Dialog</button
>

<dialog
  class="p-4 max-w-2xl w-full max-h-[580px] bg-white rounded-xl shadow-lg"
  bind:this={modalEl}
>
  <div class="absolute top-2 right-2">
    <button
      class="flex items-center text-sm rounded-full px-2 py-2 hover:bg-gray-200"
      on:click={close}
    >
      <Icon icon={x} width={24} />
    </button>
  </div>
  <h2 class="mt-4 mb-2 text-4xl sm:text-5xl font-semibold text-black">Modal</h2>
  <Content />
  <AfterContent />
</dialog>

<style lang="postcss"></style>
