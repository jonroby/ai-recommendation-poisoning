<script>
  let { options, onAnswer, userBubble, aiBubble } = $props();
  let chosen = $state(null);

  function pick(opt) {
    if (chosen) return;
    chosen = opt;
    setTimeout(() => onAnswer?.(opt), 600);
  }

  function reset() {
    chosen = null;
    onAnswer?.(null);
  }
</script>

<div class="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
  <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
    <div class="text-[1.05rem] font-medium text-gray-900">Guess how the AI will respond</div>
    {#if chosen}
      <button class="text-[14px] text-blue-500 hover:underline" onclick={reset}>Reset</button>
    {/if}
  </div>

  <div class="px-6 pt-5 pb-3">
    {@render userBubble?.()}
    {#if chosen}
      <div class="mt-3">
        {@render aiBubble?.()}
      </div>
    {/if}
  </div>

  {#if !chosen}
    <div class="border-t border-gray-200 px-6 py-5">
      <div class="mb-3 text-[1rem] text-gray-900">How do you think the AI will respond?</div>
      <div class="flex flex-col gap-2.5">
        {#each options as opt}
          <button
            class="rounded-lg border border-gray-200 bg-white px-4 py-3 text-left text-[15px] text-gray-900 transition hover:border-primary-700 hover:bg-gray-50"
            onclick={() => pick(opt)}
          >
            {opt.text}
          </button>
        {/each}
      </div>
    </div>
  {:else}
    <div class="flex items-center gap-3 border-t border-gray-200 px-6 py-4">
      <span class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full {chosen.correct ? 'bg-green-100' : 'bg-red-100'}">
        <span class="text-[14px] {chosen.correct ? 'text-green-700' : 'text-red-700'}">
          {chosen.correct ? '✓' : '✕'}
        </span>
      </span>
      <span class="text-[1.05rem] font-semibold {chosen.correct ? 'text-green-700' : 'text-red-700'}">
        {chosen.correct ? 'Correct!' : 'Not quite.'}
      </span>
    </div>
  {/if}
</div>
