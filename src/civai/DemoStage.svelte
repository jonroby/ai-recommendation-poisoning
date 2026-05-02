<script>
  let { children, caption = '' } = $props();
</script>

<div class="my-8 block">
  <div class="relative w-screen flex flex-col border-y bg-gray-100 px-3 py-8 lg:px-4 lg:py-10" style="margin-left: calc(-50vw + 50%);">
    <div class="flex w-full flex-1 flex-col items-center justify-center gap-6 lg:gap-8">
      {@render children?.()}
    </div>
  </div>
  {#if caption}
    <div class="mt-3 text-center text-sm text-gray-500">{caption}</div>
  {/if}
</div>
