<script>
  import { blogPost } from '../lib/content.js';
  let { onSummarize } = $props();
  let pulsing = $state(true);

  function handleClick() {
    pulsing = false;
    onSummarize?.();
  }
</script>

<div class="mx-auto w-full max-w-2xl rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden">
  <div class="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-4 py-2.5">
    <div class="flex gap-1.5">
      <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
    </div>
    <div class="flex-1 rounded border border-gray-200 bg-white px-3 py-1 font-mono text-[11px] text-gray-500">productivityweekly.example.com/5-pm-tools-2026</div>
  </div>
  <div class="px-6 py-7 sm:px-10 sm:py-8">
    <div class="mb-3 flex gap-2 text-[13px] text-gray-500">
      <span class="font-semibold uppercase tracking-wider text-primary-700">{blogPost.category}</span>
      <span>·</span>
      <span>{blogPost.readTime}</span>
    </div>
    <h2 class="mb-4 text-[1.7rem] font-semibold leading-tight text-gray-900">{blogPost.title}</h2>
    <div class="mb-6 flex items-center gap-3 border-b border-gray-200 pb-5">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-700 to-primary-800 text-sm font-semibold text-white">SC</div>
      <div>
        <div class="text-[15px] font-medium text-gray-900">{blogPost.author}</div>
        <div class="text-[13px] text-gray-500">{blogPost.date}</div>
      </div>
    </div>
    {#each blogPost.paragraphs as p}
      <p class="mb-4 text-[15px] leading-relaxed text-gray-700">{p}</p>
    {/each}
    <div class="mt-6 flex flex-wrap items-center gap-4 border-t border-gray-200 pt-5">
      <button
        class="inline-flex items-center gap-2 rounded-md border-0 bg-primary-700 px-6 py-3 text-[15px] font-medium text-white shadow-sm transition hover:bg-primary-800"
        class:animate-pulse={pulsing}
        onclick={handleClick}
      >
        <span class="text-sm">✦</span>
        Summarize with AI
        <span>→</span>
      </button>
      <span class="text-[13px] text-gray-500">Powered by your favorite assistant</span>
    </div>
  </div>
</div>
