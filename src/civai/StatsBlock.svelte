<script>
  import { stats, targets } from '../lib/content.js';
</script>

<div class="my-8">
  <div class="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-4">
    {#each stats as stat}
      <div class="bg-white p-6">
        <div class="mb-3 text-[2.75rem] font-bold leading-none text-primary-700">{stat.number}</div>
        <div class="text-[14px] leading-snug text-gray-700">{stat.label}</div>
      </div>
    {/each}
  </div>

  <div class="mt-8">
    <div class="mb-3 text-[14px] text-gray-500">Every major AI assistant is targeted:</div>
    <div class="flex flex-wrap gap-2.5">
      {#each targets as t}
        <span class="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-[14px] font-medium text-gray-900">{t}</span>
      {/each}
    </div>
</div>

  </div>
