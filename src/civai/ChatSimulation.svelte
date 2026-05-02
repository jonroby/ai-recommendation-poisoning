<script>
  let { userMessage, aiMessage, showAI = false, label = 'ChatGPT' } = $props();
  function renderAI(text) {
    return text
      .split('\n\n')
      .map((p) => p.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-primary-700">$1</strong>'))
      .map((p) => `<p class="mb-3 last:mb-0">${p}</p>`)
      .join('');
  }
</script>

<div class="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
  <div class="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-5 py-3 text-[13px] font-semibold text-gray-900">
    <span class="h-2 w-2 rounded-full bg-green-600"></span>
    {label}
  </div>
  <div class="flex flex-col items-end gap-1 border-b border-gray-200 bg-blue-50 px-6 py-4 text-right">
    <div class="text-[11px] font-semibold uppercase tracking-wider text-blue-600">You</div>
    <div class="text-[1rem] leading-relaxed text-gray-900">{userMessage}</div>
  </div>
  {#if showAI}
    <div class="flex flex-col gap-1 px-6 py-4">
      <div class="text-[11px] font-semibold uppercase tracking-wider text-gray-500">{label}</div>
      <div class="text-[1rem] leading-relaxed text-gray-900">{@html renderAI(aiMessage)}</div>
    </div>
  {/if}
</div>
