<script lang="ts">
  import { createDialog, melt } from '@melt-ui/svelte'

  import Content from '$components/Content.svelte'

  const {
    elements: { trigger, portalled, overlay, content, title, description, close },
    states: { open }
  } = createDialog()
</script>

<div class="flex flex-col">
  <a class="hover:underline" href="https://melt-ui.com/docs/builders/dialog">Source</a>
  <button class="rounded px-4 py-1 bg-gray-200 hover:bg-gray-300" use:melt={$trigger}>
    MeltUI
  </button>
</div>

{#if $open}
  <div use:melt={$portalled}>
    <div class="fixed inset-0 z-50 bg-black/50" use:melt={$overlay} />
    <div
      class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2"
      use:melt={$content}
    >
      <div
        class="p-2 pt-4 flex relative w-screen sm:w-full max-w-2xl max-h-full bg-white sm:rounded-xl shadow-lg sm:p-4 sm:min-w-[512px]"
      >
        <div class="flex flex-col">
          <h2 class="m-0 text-lg font-medium text-black" use:melt={$title}>Dialog Title</h2>
          <p class="mb-5 mt-2 leading-normal text-zinc-600" use:melt={$description}>
            Dialog description
          </p>
          <Content />
          <button
            class="inline-flex h-8 items-center justify-center rounded-sm bg-zinc-100 px-4 font-medium leading-none text-zinc-600"
            use:melt={$close}
          >
            Close Dialog
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
