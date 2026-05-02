<script>
  import { protectionTips } from '../lib/content.js';
</script>

<div class="my-6 border-t border-gray-200">
  {#each protectionTips as tip, i}
    <div class="flex gap-6 border-b border-gray-200 py-6">
      <div class="w-8 flex-shrink-0 pt-1 font-mono text-[14px] font-medium text-primary-700">{String(i + 1).padStart(2, '0')}</div>
      <div class="flex-1">
        <div class="mb-1.5 text-[1.1rem] font-semibold text-gray-900">{tip.title}</div>
        <div class="text-[15px] leading-relaxed text-gray-700">{tip.body}</div>
      </div>
    </div>
  {/each}
</div>
