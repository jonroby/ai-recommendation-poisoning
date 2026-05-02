<script>
  let { options, onAnswer } = $props();
  let chosen = $state(null);

  function pick(opt) {
    if (chosen) return;
    chosen = opt;
    setTimeout(() => onAnswer?.(opt), 600);
  }
</script>

<div class="widget">
  <div class="prompt">How do you think the AI will respond?</div>
  <div class="options">
    {#each options as opt}
      <button
        class="option"
        class:selected={chosen?.id === opt.id}
        class:correct={chosen && opt.correct}
        class:incorrect={chosen?.id === opt.id && !opt.correct}
        disabled={!!chosen}
        onclick={() => pick(opt)}
      >
        <span class="marker">
          {#if chosen && opt.correct}✓{:else if chosen?.id === opt.id && !opt.correct}✕{/if}
        </span>
        <span class="text">{opt.text}</span>
      </button>
    {/each}
  </div>
  {#if chosen}
    <div class="result" class:right={chosen.correct} class:wrong={!chosen.correct}>
      {#if chosen.correct}
        You saw it coming. Most people don't.
      {:else}
        That's the point — it looks like a normal, helpful answer.
      {/if}
    </div>
  {/if}
</div>

<style>
  .widget {
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    background: #fff;
  }
  .prompt {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-h);
    margin-bottom: 18px;
  }
  .options {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .option {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 18px;
    border: 1.5px solid var(--border);
    border-radius: 10px;
    background: #fff;
    color: var(--text-h);
    font-size: 15px;
    font-family: inherit;
    text-align: left;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s, transform 0.1s;
  }
  .option:not(:disabled):hover {
    border-color: var(--accent);
    background: #f8faff;
  }
  .option:disabled {
    cursor: default;
    opacity: 0.7;
  }
  .option.correct {
    border-color: #16a34a;
    background: #f0fdf4;
    color: #166534;
    opacity: 1;
  }
  .option.incorrect {
    border-color: #dc2626;
    background: #fef2f2;
    color: #b91c1c;
    opacity: 1;
  }
  .marker {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1.5px solid var(--border);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    flex-shrink: 0;
  }
  .option.correct .marker {
    background: #16a34a;
    border-color: #16a34a;
    color: #fff;
  }
  .option.incorrect .marker {
    background: #dc2626;
    border-color: #dc2626;
    color: #fff;
  }
  .result {
    margin-top: 18px;
    padding: 14px 18px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    animation: fade 0.4s ease;
  }
  .result.right { background: #f0fdf4; color: #166534; }
  .result.wrong { background: #fef2f2; color: #b91c1c; }
  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
