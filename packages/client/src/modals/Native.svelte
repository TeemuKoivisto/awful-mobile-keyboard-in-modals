<script lang="ts">
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

<button class="dialog-btn" on:click={handleClick}>Dialog</button>

<dialog class="modal" bind:this={modalEl}>
  <p>Udohgram</p>
  <p>Insert pretty picture</p>
  <button class="dialog-btn" on:click={handleClick}>Close modal</button>
  <p>Sorry, you can't login. You can't contact support either.</p>
</dialog>

<style lang="postcss">
  .dialog-btn {
    display: block;
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
  .dialog-btn:hover {
    filter: brightness(0.8);
  }
  .dialog-btn:active {
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
