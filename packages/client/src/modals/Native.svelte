<script lang="ts">
  import { fade, scale } from 'svelte/transition'
  import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
  import x from '@iconify-icons/feather/x'

  import Content from '$components/Content.svelte'

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

<dialog bind:this={modalEl}>
  <div class="absolute top-2 right-2">
    <button
      class="flex items-center text-sm rounded-full px-2 py-2 hover:bg-gray-200"
      on:click={close}
    >
      <Icon icon={x} width={24} />
    </button>
  </div>
  <h2 class="pl-1.5 mt-4 mb-2 text-4xl sm:text-5xl font-semibold text-black">Native Modal</h2>
  <Content />
</dialog>

<style lang="postcss">
  dialog {
    margin: 10% auto;
    width: 80%;
    max-width: 350px;
    background-color: #fff;
    padding: 34px;
    border: 0;
    border-radius: 5px;
  }
</style>
