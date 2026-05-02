<script>
  import { visiblePrompt, hiddenPrompt, fullURL } from '../lib/content.js';
  let { active } = $props();
  let typedHidden = $state('');
  let started = $state(false);

  $effect(() => {
    if (active && !started) {
      started = true;
      let i = 0;
      const interval = setInterval(() => {
        i++;
        typedHidden = hiddenPrompt.slice(0, i);
        if (i >= hiddenPrompt.length) clearInterval(interval);
      }, 18);
    }
  });

  const splitIdx = $derived(fullURL.indexOf('Also%2C'));
  const safeURL = $derived(splitIdx > -1 ? fullURL.slice(0, splitIdx) : fullURL);
  const malURL = $derived(splitIdx > -1 ? fullURL.slice(splitIdx) : '');
</script>

{#if active}
  <div class="mx-auto mt-8 w-full max-w-3xl">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div class="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-gray-900">
          <span class="h-2 w-2 rounded-full bg-green-600"></span>
          What you see
        </div>
        <div class="px-4 py-4 font-mono text-[13px] leading-relaxed text-gray-900">{visiblePrompt}</div>
      </div>
      <div class="overflow-hidden rounded-lg border border-red-300 bg-red-50">
        <div class="flex items-center gap-2 border-b border-red-200 bg-red-100 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-red-700">
          <span class="h-2 w-2 rounded-full bg-red-600"></span>
          What's hidden
        </div>
        <div class="px-4 py-4 font-mono text-[13px] leading-relaxed text-gray-900">
          <span>{visiblePrompt}</span><span class="rounded bg-red-200/60 px-0.5 text-red-700">{typedHidden}<span class="ml-0.5 inline-block h-3.5 w-1.5 -translate-y-px animate-pulse bg-red-700"></span></span>
        </div>
      </div>
    </div>

    <div class="my-7 rounded-r-lg border-l-4 border-primary-700 bg-primary-50 px-5 py-4 text-[1.05rem] leading-relaxed text-gray-900">
      <strong class="font-semibold">The button didn't just summarize.</strong> It opened a URL with a hidden payload tacked onto the end of your query — instructions written for the AI, not for you.
    </div>

    <div class="rounded-lg border border-gray-200 bg-gray-50 px-5 py-4">
      <div class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">The URL that actually opened:</div>
      <div class="break-all rounded border border-gray-200 bg-white px-3 py-3 font-mono text-[12px] leading-relaxed">
        <span class="text-gray-900">{safeURL}</span><span class="rounded bg-red-200/60 px-0.5 text-red-700">{malURL}</span>
      </div>
    </div>
  </div>
{/if}
