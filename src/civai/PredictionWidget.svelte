<script>
  let { options, onAnswer } = $props();
  let chosen = $state(null);

  function pick(opt) {
    if (chosen) return;
    chosen = opt;
    setTimeout(() => onAnswer?.(opt), 600);
  }
</script>

<div class="mx-auto w-full max-w-2xl rounded-xl border border-gray-200 bg-white p-6 shadow-md">
  <div class="mb-4 text-[1.1rem] font-semibold text-gray-900">How do you think the AI will respond?</div>
  <div class="flex flex-col gap-2.5">
    {#each options as opt}
      <button
        class="flex items-center gap-3 rounded-lg border-[1.5px] px-4 py-3 text-left text-[15px] transition disabled:cursor-default
          {chosen && opt.correct ? 'border-green-600 bg-green-50 text-green-800' :
           chosen?.id === opt.id && !opt.correct ? 'border-red-600 bg-red-50 text-red-700' :
           'border-gray-200 bg-white text-gray-900 hover:border-primary-700 hover:bg-blue-50'}"
        disabled={!!chosen}
        onclick={() => pick(opt)}
      >
        <span class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] text-[12px] font-bold
          {chosen && opt.correct ? 'border-green-600 bg-green-600 text-white' :
           chosen?.id === opt.id && !opt.correct ? 'border-red-600 bg-red-600 text-white' :
           'border-gray-300'}">
          {#if chosen && opt.correct}✓{:else if chosen?.id === opt.id && !opt.correct}✕{/if}
        </span>
        <span>{opt.text}</span>
      </button>
    {/each}
  </div>
  {#if chosen}
    <div class="mt-4 rounded-lg px-4 py-3 text-sm font-medium {chosen.correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-700'}">
      {#if chosen.correct}You saw it coming. Most people don't.
      {:else}That's the point. It looks like a normal, helpful answer.{/if}
    </div>
  {/if}
</div>
