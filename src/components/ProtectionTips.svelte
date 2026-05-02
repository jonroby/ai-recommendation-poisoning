<script>
  import { protectionTips } from '../lib/content.js';
</script>

<div class="tips">
  {#each protectionTips as tip, i}
    <div class="tip">
      <div class="num">{String(i + 1).padStart(2, '0')}</div>
      <div class="body">
        <div class="title">{tip.title}</div>
        <div class="text">{tip.body}</div>
      </div>
    </div>
  {/each}
</div>

<style>
  .tips {
    display: flex;
    flex-direction: column;
    gap: 0;
    border-top: 1px solid var(--border);
  }
  .tip {
    display: flex;
    gap: 24px;
    padding: 24px 0;
    border-bottom: 1px solid var(--border);
  }
  .num {
    font-family: var(--mono);
    font-size: 14px;
    font-weight: 500;
    color: var(--accent);
    width: 32px;
    flex-shrink: 0;
    padding-top: 2px;
  }
  .body { flex: 1; }
  .title {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-h);
    margin-bottom: 6px;
  }
  .text {
    font-size: 15px;
    line-height: 1.6;
    color: var(--text);
  }
</style>
