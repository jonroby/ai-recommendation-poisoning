<script>
  let { title, subhead, breadcrumb = 'Our Work' } = $props();
</script>

<header
  class="relative w-full h-72 border-b-[4px] border-civ-red pt-4 sm:h-80 sm:pt-0 flex flex-col justify-center font-assistant text-white"
  style="background: linear-gradient(to bottom, rgb(var(--color-primary)), hsl(209 64% 22%)); clip-path: path('M 0 0 H 100% V calc(100% - 20px) C 50% 110% 50% 110% 0 calc(100% - 20px) ');"
>
  <div class="mx-auto flex w-full flex-col px-0" style="max-width: min(96%, 53rem)">
    <h1 class="w-full px-2 font-bold sm:px-0 sm:font-semibold mb-2 text-3xl sm:text-4xl lg:text-[3.2rem]">{title}</h1>
    <p class="mt-2 w-full hyphens-auto px-2 text-[1.2rem] opacity-80 xs:hyphens-none sm:px-0 sm:text-[1.4rem] md:mt-4">{subhead}</p>
  </div>

  <div class="absolute left-0 right-0 top-4 mx-auto flex items-center justify-between" style="max-width: min(96%, 53rem)">
    <div class="font-assistant px-2 sm:px-0">
      <div class="hidden text-base md:inline">
        <a href="#" class="opacity-50 transition-opacity hover:opacity-100">{breadcrumb}</a>
        <span class="mx-2 opacity-40">›</span>
        <span class="opacity-70">{title}</span>
      </div>
      <a href="#" class="text-base opacity-60 transition-opacity hover:opacity-100 md:hidden">
        <b class="mr-[3px]">←</b> {breadcrumb}
      </a>
    </div>
    <div class="flex">
      <button class="font-assistant mr-3 flex select-none items-center justify-center rounded-md border bg-transparent px-3 py-[2px] text-base font-semibold text-white hover:bg-primary-800">Live Demo</button>
      <span class="font-assistant rounded-md border border-white bg-white px-3 py-[2px] text-base font-semibold text-primary-700">Article</span>
    </div>
  </div>
</header>
