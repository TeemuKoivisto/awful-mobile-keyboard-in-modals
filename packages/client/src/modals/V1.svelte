<script lang="ts">
  import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
  import x from '@iconify-icons/feather/x'

  import type { ModalParams } from '$stores/modal'
  import { onMount } from 'svelte'

  export let params: ModalParams['v1']
  export let hideModal: () => void = () => undefined

  let originalFocusedEl: HTMLElement
  let closeButtonEl: HTMLElement

  onMount(() => {
    // Hacky focus capture into modal and returning it back to the button when the modal is closed
    if (document.activeElement instanceof HTMLElement) {
      originalFocusedEl = document.activeElement
    }
    closeButtonEl.focus()
    // Lock scrolling of viewport behind the modal
    document.querySelector('html')?.classList.add('scroll-lock')
    return () => {
      originalFocusedEl.focus()
      document.querySelector('html')?.classList.remove('scroll-lock')
    }
  })

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      hideModal()
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div bind:this={closeButtonEl} tabindex="-1" class="p-4 flex flex-col relative focus:outline-none">
  <div class="absolute top-2 right-2">
    <button
      class="flex items-center text-sm rounded-full px-2 py-2 hover:bg-gray-200"
      on:click={hideModal}
    >
      <Icon icon={x} width={24} />
    </button>
  </div>
  <h2 class="pl-1.5 mt-4 mb-2 text-4xl sm:text-5xl font-semibold text-black">Modal</h2>
  <article class="w-full p-2 pb-4">
    <p>
      this is a modal that should scale corresponding to the viewport as adjusted by virtual
      keyboard
    </p>
    <input />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus at erat quis
      consectetur. Suspendisse quis dolor non urna congue pharetra lacinia ut nulla. Curabitur ut
      iaculis magna, rhoncus accumsan turpis. Proin non consectetur mauris. Nullam efficitur dui vel
      magna convallis, id ultricies urna faucibus. Nullam turpis orci, sollicitudin in tortor a,
      euismod maximus magna. Quisque tristique, dolor cursus dignissim tristique, tellus turpis
      dignissim arcu, non dignissim ligula eros ac nulla. Morbi sed tortor et eros tristique
      vehicula. Suspendisse turpis augue, laoreet nec augue scelerisque, dignissim pulvinar dolor.
    </p>
    <p>
      In pretium tristique ornare. Pellentesque sed felis sit amet neque condimentum finibus. Nunc
      consectetur ultrices eros at pellentesque. Vestibulum posuere velit metus, at gravida justo
      mattis ac. Aliquam orci erat, dapibus eu cursus eu, placerat in nulla. Praesent feugiat lectus
      ornare porttitor eleifend. Aliquam cursus sem a leo venenatis, et ultrices nisl egestas. Nunc
      pulvinar pharetra elit, id interdum libero vestibulum eu.
    </p>
    <p>
      Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac
      nibh quis turpis vulputate pretium non vel magna. Praesent venenatis sodales sodales.
      Pellentesque luctus lacinia aliquam. Donec odio nunc, consectetur ac turpis non, egestas
      luctus lectus. Nam risus felis, sodales eget neque id, consectetur maximus mauris. Nullam
      pellentesque felis ac pellentesque suscipit. Suspendisse malesuada tortor nunc, id sodales ex
      molestie eu. Donec vel laoreet risus. Aliquam vitae dolor eu velit bibendum porta ut posuere
      nisl.
    </p>
    <p>
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras
      molestie ipsum in ipsum molestie, eu pellentesque tellus sagittis. Vestibulum pellentesque
      turpis in neque placerat, ac porta erat euismod. Sed porttitor, turpis in ornare congue, enim
      turpis consectetur metus, vel aliquet eros nibh nec mi. Nam hendrerit eget dolor at bibendum.
      Vestibulum eu quam mi. Suspendisse eu tempus metus. Pellentesque vitae turpis tincidunt,
      interdum ligula at, rutrum lorem. Sed eros leo, hendrerit vitae pretium a, sodales a orci.
      Donec accumsan sapien eu consequat condimentum. Morbi odio lorem, faucibus at quam non,
      facilisis consequat magna.
    </p>
    <p>
      Praesent mauris tortor, faucibus vitae purus vel, ultricies congue odio. Morbi mattis quam sit
      amet bibendum dignissim. Quisque a sagittis nunc. Pellentesque aliquet neque tellus, sed
      sagittis libero sodales venenatis. Suspendisse iaculis vitae libero molestie volutpat. Integer
      ut pellentesque magna, non aliquet lacus. Curabitur laoreet dapibus tellus, et lacinia nibh
      porta sit amet. Suspendisse in purus ante. Nunc commodo laoreet tincidunt. Nullam justo nibh,
      luctus et ullamcorper id, venenatis ut sapien. Phasellus maximus condimentum urna, ac cursus
      sapien convallis posuere.
    </p>
    <p>
      Nam fermentum est est, eu congue ligula pulvinar fringilla. Morbi dignissim, neque nec finibus
      dapibus, nisi libero sollicitudin nisi, vel porta ligula lacus eu metus. Interdum et malesuada
      fames ac ante ipsum primis in faucibus. Aenean fermentum felis augue, et vulputate eros
      suscipit eget. Pellentesque rutrum bibendum libero. Nam eget felis bibendum, molestie nisi
      nec, interdum turpis. In viverra ipsum et risus vehicula fermentum. Suspendisse pharetra odio
      id mattis imperdiet. Proin vel orci scelerisque, suscipit neque at, fringilla tellus. Aenean
      tempor turpis auctor, tristique orci vel, rhoncus nunc. Ut consequat faucibus finibus. Donec
      mi tellus, euismod et eros non, consequat convallis purus. Proin lobortis massa nec mi
      facilisis luctus. Maecenas mattis libero vel nisi lacinia congue nec vel eros. Fusce at
      sollicitudin turpis.
    </p>
    <p>
      Nullam dictum quis dolor eget vestibulum. Donec porttitor elit at dui tincidunt, quis dapibus
      ex pellentesque. Sed scelerisque neque vitae dui bibendum vestibulum. Praesent eu erat odio.
      Integer blandit volutpat enim, non rutrum tortor interdum eget. Praesent auctor congue enim
      facilisis maximus. Suspendisse placerat urna in posuere venenatis. Phasellus sem justo,
      ullamcorper eu iaculis vehicula, rhoncus a ipsum. Nullam vestibulum tempor hendrerit. Aenean
      vitae faucibus mauris.
    </p>
    <p>
      Ut commodo ex ac eros fermentum pretium sed ac odio. Ut tortor mi, vulputate et elit vitae,
      blandit volutpat neque. Etiam erat lacus, lacinia vitae ipsum in, auctor consequat neque.
      Aenean non nisi nec nunc euismod dignissim. Proin non gravida magna, ut pulvinar dui. Nam nec
      metus in lacus pulvinar tincidunt eget ac est. Donec et sem vel ex feugiat consectetur eget in
      justo. Morbi porta ipsum et erat efficitur pellentesque.
    </p>
    <p>
      Integer dolor massa, maximus sed luctus id, ullamcorper ac lorem. In purus sem, maximus nec
      rhoncus vel, fermentum non mauris. Vestibulum euismod sapien leo, non consequat justo suscipit
      at. Pellentesque in dolor elit. Nullam eget bibendum nibh. In at quam ullamcorper, pharetra
      arcu id, cursus dui. Curabitur ante risus, vestibulum sit amet ultricies eget, malesuada at
      ante. Vivamus vestibulum interdum commodo. Pellentesque fringilla quis tortor non porttitor.
      Proin facilisis diam diam, sit amet convallis eros rutrum at. Aenean pretium mauris nec augue
      faucibus dictum. Maecenas nec accumsan massa, id bibendum arcu.
    </p>
    <p>
      Duis efficitur metus eu ultrices ullamcorper. In massa massa, porttitor sed congue vel,
      bibendum tincidunt urna. Curabitur in iaculis sapien. Nunc dapibus venenatis enim non feugiat.
      Donec mattis, elit fringilla molestie venenatis, nibh odio pretium elit, quis dignissim ligula
      lacus at erat. Nam viverra cursus orci, a suscipit nisl aliquam et. Donec vel nisl sem.
      Vestibulum laoreet semper mauris, in efficitur purus dictum sit amet. Donec sed malesuada
      enim. Vivamus sit amet vehicula nisl, sed vulputate enim. Nunc in augue mi. Nam tellus risus,
      venenatis a maximus eu, gravida ornare tortor. Integer lacus arcu, scelerisque id luctus et,
      fermentum et tellus. Donec malesuada orci lectus, eget blandit lectus fringilla nec. Sed id
      euismod ex.
    </p>
    <p>
      Maecenas in mattis felis. Donec sed libero sed lectus mattis bibendum sit amet non lorem.
      Phasellus sit amet pellentesque justo. Nulla molestie enim at cursus auctor. In magna ipsum,
      egestas non ultricies ac, porta vitae diam. Integer non mauris id ex sodales maximus at ac
      est. Vivamus dignissim augue quis risus lobortis, vel rhoncus felis maximus. Cras vel lectus
      eu velit ullamcorper venenatis nec eget augue. Vestibulum vitae augue fringilla, rutrum lorem
      at, tincidunt nisl. Etiam feugiat posuere arcu.
    </p>
    <p>
      Integer pharetra dui id odio varius porttitor. Cras rutrum, massa eu interdum rutrum, libero
      turpis congue nibh, ac lacinia ipsum arcu id ligula. Curabitur vel turpis et neque faucibus
      aliquam sit amet sit amet nunc. Aliquam non dictum magna. Maecenas nunc nibh, egestas et
      interdum non, consequat sit amet ante. Etiam dapibus non libero fringilla tempus. Cras in
      fringilla dui. Mauris et pellentesque ipsum. Curabitur ac nulla vitae elit posuere eleifend.
      Morbi eget nunc id diam malesuada commodo. Morbi purus libero, convallis eu ante quis, posuere
      molestie felis. Aliquam posuere erat a vestibulum bibendum. Praesent pulvinar dui eros, ac
      dapibus dolor cursus a. Mauris ac urna consequat, iaculis nibh rhoncus, commodo nunc. Nam a mi
      vehicula, rhoncus odio sed, feugiat ante. Fusce ex purus, tincidunt ac facilisis eget,
      tincidunt quis magna.
    </p>
    <p>
      Mauris pulvinar convallis felis, a cursus neque aliquam sit amet. Cras lorem nibh, ullamcorper
      at fermentum ac, lobortis quis libero. Morbi mattis et nibh ac gravida. Quisque at tellus ex.
      Etiam non elit molestie nisi convallis scelerisque. Sed ac consequat lorem, in tincidunt mi.
      Duis a varius dolor, id iaculis purus. Nunc felis purus, auctor sollicitudin ligula sit amet,
      blandit dapibus arcu. Nam finibus id nulla mattis fermentum.
    </p>
    <input />
  </article>
</div>

<style lang="scss">
  article {
    a {
      font-weight: 600;
      @apply underline text-[#0000ff] break-all;
    }
    hr {
      @apply my-16 border-gray-900;
    }
    p {
      @apply my-4 pl-[2px];
    }
    & > h3 {
      @apply font-sans mt-10 mb-6 text-2xl sm:text-3xl tracking-tight pl-[1px];
    }
    pre {
      // padding-left: 6px;
      @apply my-4;
      code {
        @apply p-4 block bg-white rounded overflow-y-auto;
      }
    }
  }
</style>
