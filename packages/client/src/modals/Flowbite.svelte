<script lang="ts">
  import { fade, scale } from 'svelte/transition'

  import Content from '$components/Content.svelte'

  const MODAL_DURATION = 400
  let open = false
  let originalFocusedEl: HTMLElement
  let closeButtonEl: HTMLElement

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      close()
    }
  }
  function openModal() {
    open = true
    if (document.activeElement instanceof HTMLElement) {
      originalFocusedEl = document.activeElement
    }
    closeButtonEl.focus()
    // Lock scrolling of viewport behind the modal
    document.querySelector('html')?.classList.add('scroll-lock')
  }
  function close() {
    open = false
    originalFocusedEl.focus()
    document.querySelector('html')?.classList.remove('scroll-lock')
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="flex flex-col">
  <a
    class="hover:underline"
    href="https://flowbite-svelte.com/docs/components/modal#Scrolling_behaviour">Source</a
  >
  <button class="rounded px-4 py-1 bg-gray-200 hover:bg-gray-300" on:click={openModal}>
    Flowbite Clone
  </button>
</div>

{#if open}
  <div
    class="fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full flex justify-center items-center"
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
      class="absolute top-4 bottom-0 mb-4 z-50 bg-gray-100 mx-auto rounded-xl shadow-lg overflow-y-auto md:max-w-3xl"
    >
      <div
        class="fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex justify-center items-center"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div class="flex relative max-w-2xl w-full max-h-full">
          <div
            class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 shadow-md relative flex flex-col mx-auto w-full divide-y"
          >
            <div
              class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 flex justify-between items-center p-4 md:p-5 rounded-t-lg"
            >
              <h3 class="text-xl font-semibold p-0">Terms of Service</h3>
              <button
                type="button"
                class="focus:outline-none whitespace-normal m-0.5 rounded-lg focus:ring-2 p-1.5 focus:ring-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 ms-auto"
                aria-label="Close modal"
                on:click={close}
                ><span class="sr-only">Close modal</span>
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path></svg
                ></button
              >
            </div>
            <div
              class="p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain"
              role="document"
              tabindex="0"
            >
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply.
              </p>
              <input />
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
              <input />
            </div>
            <div
              class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg"
            >
              <button
                type="button"
                class="text-center font-medium focus-within:ring-4 focus-within:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus-within:ring-primary-300 dark:focus-within:ring-primary-800 rounded-lg"
                >I accept</button
              >
              <button
                type="button"
                class="text-center font-medium focus-within:ring-4 focus-within:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-600 focus-within:ring-gray-200 dark:focus-within:ring-gray-700 rounded-lg"
                >Decline</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .h-modal {
    height: calc(100% - 2rem);
  }
</style>
