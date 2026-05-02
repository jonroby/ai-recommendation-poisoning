<script>
  let { userMessage, aiMessage, showAI = false } = $props();
  function renderAI(text) {
    return text
      .split('\n\n')
      .map((p) => p.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>'))
      .map((p) => `<p class="mb-3 last:mb-0">${p}</p>`)
      .join('');
  }
</script>

<div class="mx-auto w-full max-w-2xl space-y-3">
  <div class="flex justify-end">
    <div class="max-w-[85%] rounded-2xl bg-blue-600 px-5 py-3.5 text-[1rem] leading-relaxed text-white">
      {userMessage}
    </div>
  </div>
  {#if showAI}
    <div class="flex justify-start">
      <div class="max-w-[85%] rounded-2xl bg-orange-100 px-5 py-3.5 text-[1rem] leading-relaxed text-gray-900">
        {@html renderAI(aiMessage)}
      </div>
    </div>
  {/if}
</div>
