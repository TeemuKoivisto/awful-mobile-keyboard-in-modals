<script lang="ts">
  import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
  import x from '@iconify-icons/feather/x'
  import { createDialog, melt } from '@melt-ui/svelte'
  import { fade, scale } from 'svelte/transition'

  import Content from '$components/Content.svelte'
  import AfterContent from '$components/AfterContent.svelte'

  const MODAL_DURATION = 300
  const {
    elements: { trigger, portalled, overlay, content, title, description, close },
    states: { open }
  } = createDialog()
</script>

<div class="flex flex-col">
  <p>Based on V3</p>
  <button class="rounded px-4 py-1 bg-gray-200 hover:bg-gray-300" use:melt={$trigger}>
    melt-ui v2
  </button>
</div>

{#if $open}
  <div use:melt={$portalled}>
    <div
      transition:fade={{ duration: MODAL_DURATION }}
      class="fixed inset-0 z-50 bg-black/50"
      use:melt={$overlay}
    />
    <div class="fixed inset-0 z-50 flex justify-center items-center">
      <div
        transition:scale={{ duration: MODAL_DURATION }}
        class="absolute top-0 bottom-0 sm:top-4 sm:bottom-4 flex items-center justify-center mx-auto overflow-y-auto md:max-w-3xl"
      >
        <div
          class="p-2 pt-4 flex relative w-screen sm:w-full max-w-2xl h-full max-h-[580px] bg-white sm:rounded-xl shadow-lg sm:p-4 sm:min-w-[512px]"
          use:melt={$content}
        >
          <div class="relative flex flex-col">
            <h2 class="mb-2 text-4xl font-semibold text-black flex items-center justify-between">
              <span use:melt={$title}>Modal</span>
              <button
                class="flex items-center text-sm rounded-full px-2 py-2 hover:bg-gray-200"
                use:melt={$close}
              >
                <Icon icon={x} width={24} />
              </button>
            </h2>
            <p class="mb-5 mt-2 leading-normal text-zinc-600" use:melt={$description}>
              Dialog description
            </p>
            <Content />
            <AfterContent />
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
