<script lang="ts">
  import { Button, Modal } from 'flowbite-svelte'
  let scrollingModal = false
  // From https://flowbite-svelte.com/docs/components/modal#Scrolling_behaviour
</script>

<Button on:click={() => (scrollingModal = true)} autoclose>Flowbite Example</Button>

<Modal
  class="max-h-[580px]"
  title="Terms of Service"
  outsideclose={true}
  bind:open={scrollingModal}
>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    With less than a month to go before the European Union enacts new consumer privacy laws for its
    citizens, companies around the world are updating their terms of service agreements to comply.
  </p>
  <input />
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25
    and is meant to ensure a common set of data rights in the European Union. It requires
    organizations to notify users as soon as possible of high-risk data breaches that could
    personally affect them.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    With less than a month to go before the European Union enacts new consumer privacy laws for its
    citizens, companies around the world are updating their terms of service agreements to comply.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25
    and is meant to ensure a common set of data rights in the European Union. It requires
    organizations to notify users as soon as possible of high-risk data breaches that could
    personally affect them.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    With less than a month to go before the European Union enacts new consumer privacy laws for its
    citizens, companies around the world are updating their terms of service agreements to comply.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25
    and is meant to ensure a common set of data rights in the European Union. It requires
    organizations to notify users as soon as possible of high-risk data breaches that could
    personally affect them.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    With less than a month to go before the European Union enacts new consumer privacy laws for its
    citizens, companies around the world are updating their terms of service agreements to comply.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25
    and is meant to ensure a common set of data rights in the European Union. It requires
    organizations to notify users as soon as possible of high-risk data breaches that could
    personally affect them.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    With less than a month to go before the European Union enacts new consumer privacy laws for its
    citizens, companies around the world are updating their terms of service agreements to comply.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25
    and is meant to ensure a common set of data rights in the European Union. It requires
    organizations to notify users as soon as possible of high-risk data breaches that could
    personally affect them.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    With less than a month to go before the European Union enacts new consumer privacy laws for its
    citizens, companies around the world are updating their terms of service agreements to comply.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25
    and is meant to ensure a common set of data rights in the European Union. It requires
    organizations to notify users as soon as possible of high-risk data breaches that could
    personally affect them.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    With less than a month to go before the European Union enacts new consumer privacy laws for its
    citizens, companies around the world are updating their terms of service agreements to comply.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25
    and is meant to ensure a common set of data rights in the European Union. It requires
    organizations to notify users as soon as possible of high-risk data breaches that could
    personally affect them.
  </p>
  <input />
  <svelte:fragment slot="footer">
    <Button on:click={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>
