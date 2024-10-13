<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'
  interface $$Props extends HTMLAttributes<HTMLDivElement> {}
</script>

<div
  {...$$restProps}
  class={`${$$props.class || ''} text-gray-500 border-gray-200 divide-gray-200 flex items-center space-x-3 rtl:space-x-reverse rounded-b-lg`}
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
