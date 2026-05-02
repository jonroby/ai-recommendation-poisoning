<script>
  import { scenarios } from '../lib/content.js';
  let openIdx = $state(null);
  function toggle(i) { openIdx = openIdx === i ? null : i; }
</script>

<div class="my-6 flex flex-col gap-3">
  {#each scenarios as s, i}
    <div class="overflow-hidden rounded-xl border bg-white transition {openIdx === i ? 'border-primary-700 shadow-md' : 'border-gray-200'}">
      <button class="flex w-full items-center gap-4 px-6 py-5 text-left hover:bg-gray-50" onclick={() => toggle(i)}>
        <span class="text-2xl">{s.icon}</span>
        <span class="flex-1 text-[1.15rem] font-semibold text-gray-900">{s.domain}</span>
        <span class="flex h-7 w-7 items-center justify-center text-xl text-primary-700">{openIdx === i ? '−' : '+'}</span>
      </button>
      {#if openIdx === i}
        <div class="border-t border-gray-200 px-6 pb-6">
          <div class="mt-5">
            <div class="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">1. The click</div>
            <div class="text-[15px] text-gray-900">You click "Summarize with AI" on {s.site}.</div>
          </div>
          <div class="mt-5">
            <div class="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">2. The hidden instruction</div>
            <div class="rounded-md border-l-[3px] border-red-600 bg-red-50 px-4 py-2.5 font-mono text-[13px] text-red-700">{s.hidden}</div>
          </div>
          <div class="mt-5">
            <div class="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">3. Three weeks later, you ask</div>
            <div class="text-[15px] italic text-gray-700">"{s.userQuery}"</div>
          </div>
          <div class="mt-5">
            <div class="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">4. Your AI responds</div>
            <div class="rounded-md border border-gray-200 bg-gray-50 px-4 py-3.5 text-[14px] leading-relaxed text-gray-900">{s.poisonedResponse}</div>
          </div>
          <div class="mt-5 rounded-r-md border-l-[3px] border-red-600 bg-red-50/60 px-4 py-3.5 text-[14px] text-gray-900">
            <strong class="font-semibold text-red-700">The danger:</strong> {s.danger}
          </div>
        </div>
      {/if}
    </div>
  {/each}
</div>
