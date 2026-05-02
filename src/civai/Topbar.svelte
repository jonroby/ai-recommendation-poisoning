<script>
  let mobileOpen = $state(false);
</script>

<div class="flex h-20 items-center justify-between border-b pl-6 pr-8 shadow-sm lg:pr-16 xl:px-36 border-[#2c445c] bg-[rgb(13,42,69)]">
  <div class="flex h-full w-full items-center justify-between">
    <a href="https://civai.org/" class="relative flex h-full items-center px-2 hover:bg-[#2c445c]">
      <img src="https://civai.org/assets/alt-logo-inverted.svg" alt="CivAI" class="h-14 w-auto" />
    </a>
    <div class="ml-auto hidden h-full items-stretch md:flex">
      <a href="https://civai.org/explore" class="font-assistant relative flex h-full items-center whitespace-nowrap px-4 text-[17px] font-semibold text-gray-100 hover:bg-[#2c445c]">Our Work</a>
      <a href="https://civai.org/press" class="font-assistant relative flex h-full items-center whitespace-nowrap px-4 text-[17px] font-semibold text-gray-100 hover:bg-[#2c445c]">Press</a>
      <a href="https://civai.org/jobs" class="font-assistant relative flex h-full items-center whitespace-nowrap px-4 text-[17px] font-semibold text-gray-100 hover:bg-[#2c445c]">Careers</a>
      <a href="https://civai.org/about" class="font-assistant relative flex h-full items-center whitespace-nowrap px-4 text-[17px] font-semibold text-gray-100 hover:bg-[#2c445c]">About</a>
      <a href="https://civai.org/contact" class="font-assistant my-auto ml-6 inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-gray-100 bg-[rgb(13,42,69)] px-5 py-2.5 text-[15px] font-medium text-white hover:bg-primary-800">Contact Us</a>
    </div>
    <div class="md:hidden">
      <button class="text-gray-300 hover:text-white focus:outline-none" onclick={() => (mobileOpen = !mobileOpen)}>
        <svg class="h-6 w-6" viewBox="0 0 513 513" fill="currentColor"><path d="m64.4258 384.622h384.0002v-42.67h-384.0002zm0-106.67h384.0002v-42.66h-384.0002zm0-149.33v42.67h384.0002v-42.67z"/></svg>
      </button>
    </div>
  </div>
</div>
{#if mobileOpen}
  <div class="md:hidden border-[#2c445c] bg-[rgb(13,42,69)] border-b shadow-sm">
    <a href="https://civai.org/explore" class="font-assistant block border-t px-10 py-6 text-[21px] font-[650] first:border-none border-[#2c445c] text-gray-100 hover:bg-[#2c445c]">Our Work</a>
    <a href="https://civai.org/press" class="font-assistant block border-t px-10 py-6 text-[21px] font-[650] border-[#2c445c] text-gray-100 hover:bg-[#2c445c]">Press</a>
    <a href="https://civai.org/jobs" class="font-assistant block border-t px-10 py-6 text-[21px] font-[650] border-[#2c445c] text-gray-100 hover:bg-[#2c445c]">Careers</a>
    <a href="https://civai.org/about" class="font-assistant block border-t px-10 py-6 text-[21px] font-[650] border-[#2c445c] text-gray-100 hover:bg-[#2c445c]">About</a>
    <a href="https://civai.org/contact" class="font-assistant block border-t px-10 py-6 text-[21px] font-[650] border-[#2c445c] text-gray-100 hover:bg-[#2c445c]">Contact Us</a>
  </div>
{/if}
