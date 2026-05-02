<script>
  import { inview } from '../lib/utils.js';
  let { eyebrow = '', title = '', children, narrow = false } = $props();
</script>

<section class="sec" class:narrow use:inview>
  {#if eyebrow}
    <div class="eyebrow">{eyebrow}</div>
  {/if}
  {#if title}
    <h2>{title}</h2>
  {/if}
  <div class="content">
    {@render children?.()}
  </div>
</section>

<style>
  .sec {
    padding: 64px 0;
    border-top: 1px solid var(--border);
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .sec:global(.in-view) {
    opacity: 1;
    transform: translateY(0);
  }
  .sec.narrow .content {
    max-width: 680px;
  }
  .eyebrow {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 14px;
  }
  h2 {
    font-size: clamp(28px, 3.5vw, 40px);
    line-height: 1.15;
    color: var(--text-h);
    font-weight: 600;
    margin: 0 0 28px;
    letter-spacing: -0.02em;
    max-width: 760px;
  }
  .content :global(p) {
    font-size: 17px;
    line-height: 1.7;
    color: var(--text);
    margin: 0 0 18px;
    max-width: 680px;
  }
  .content :global(p:last-child) { margin-bottom: 0; }
  .content :global(p strong) { color: var(--text-h); font-weight: 600; }
  @media (max-width: 720px) {
    .sec { padding: 48px 0; }
  }
</style>
