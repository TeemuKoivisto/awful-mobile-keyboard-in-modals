<script lang="ts">
  import { modalActions } from '$stores/modal'

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
</script>

<header>
  <h1
    class="mt-12 px-2 mb-4 md:mt-16 font-cursive text-4xl md:text-7xl tracking-tight flex items-center justify-between"
  >
    svelte
  </h1>
</header>

<section class="px-4 flex flex-col">
  <div class="px-4 mb-8 md:mb-10">
    <button
      class="btn-pill border-2 border-gray-300 hover:bg-gray-200"
      on:click={() => handleClick()}>Modal</button
    >
  </div>
</section>

<dialog class="modal" bind:this={modalEl}>
  <p>Udohgram</p>
  <p>Insert pretty picture</p>
  <button class="close-button">Close modal</button>
  <p>Sorry, you can't login. You can't contact support either.</p>
</dialog>

<style lang="postcss">
  button {
    display: block;
    margin: 40px auto;
    border: 0;
    border-radius: 8px;
    padding: 7px 32px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
    background: rgb(0, 149, 246);
    cursor: pointer;
    color: #fff;
    transition: all 240ms linear;
  }
  button:hover {
    filter: brightness(0.8);
  }
  button:active {
    transform: scale(0.9);
  }
  dialog {
    margin: 10% auto;
    width: 80%;
    max-width: 350px;
    background-color: #fff;
    padding: 34px;
    border: 0;
    border-radius: 5px;
  }
  dialog > p {
    text-align: center;
    margin: 0;
  }
  dialog > p:first-of-type {
    margin: 0 auto 20px;
    font-size: 32px;
    font-weight: 600;
  }
  dialog > button {
    margin: 20px auto;
  }
</style>
