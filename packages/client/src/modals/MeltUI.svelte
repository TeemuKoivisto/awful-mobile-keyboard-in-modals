<script lang="ts">
  import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
  import x from '@iconify-icons/feather/x'
  import { createDialog, melt } from '@melt-ui/svelte'

  import Content from '$components/Content.svelte'
  import AfterContent from '$components/AfterContent.svelte'

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
      <div class="p-2 pt-4 flex relative bg-white sm:rounded-xl shadow-lg sm:p-4">
        <div class="flex flex-col">
          <div class="absolute top-2 right-2">
            <button
              class="flex items-center text-sm rounded-full px-2 py-2 hover:bg-gray-200"
              use:melt={$close}
            >
              <Icon icon={x} width={24} />
            </button>
          </div>
          <h2 class="m-0 text-lg font-medium text-black" use:melt={$title}>Modal</h2>
          <p class="mb-5 mt-2 leading-normal text-zinc-600" use:melt={$description}>
            Dialog description
          </p>
          <Content />
          <AfterContent />
        </div>
      </div>
    </div>
  </div>
{/if}
