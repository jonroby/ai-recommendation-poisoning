<script>
  import { blogPost } from '../lib/content.js';
  let { onSummarize } = $props();
  let pulsing = $state(true);

  function handleClick() {
    pulsing = false;
    onSummarize?.();
  }
</script>

<article class="blog">
  <div class="browser-chrome" aria-hidden="true">
    <div class="dots"><span></span><span></span><span></span></div>
    <div class="address-bar">productivityweekly.example.com/5-pm-tools-2026</div>
  </div>
  <div class="blog-body">
    <div class="meta">
      <span class="cat">{blogPost.category}</span>
      <span>·</span>
      <span>{blogPost.readTime}</span>
    </div>
    <h2>{blogPost.title}</h2>
    <div class="byline">
      <div class="avatar" aria-hidden="true">SC</div>
      <div>
        <div class="author">{blogPost.author}</div>
        <div class="date">{blogPost.date}</div>
      </div>
    </div>
    {#each blogPost.paragraphs as p}
      <p>{p}</p>
    {/each}

    <div class="ai-row">
      <button class="ai-button" class:pulsing onclick={handleClick}>
        <span class="sparkle" aria-hidden="true">✦</span>
        Summarize with AI
        <span class="arrow" aria-hidden="true">→</span>
      </button>
      <span class="hint">Powered by your favorite assistant</span>
    </div>
  </div>
</article>

<style>
  .blog {
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 12px 32px rgba(8, 6, 13, 0.06);
  }
  .browser-chrome {
    background: #f5f5f7;
    border-bottom: 1px solid var(--border);
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .dots {
    display: flex;
    gap: 6px;
  }
  .dots span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #d8d8de;
  }
  .dots span:nth-child(1) { background: #ff5f57; }
  .dots span:nth-child(2) { background: #febc2e; }
  .dots span:nth-child(3) { background: #28c840; }
  .address-bar {
    flex: 1;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 4px 12px;
    font-family: var(--mono);
    font-size: 12px;
    color: var(--text-muted);
  }
  .blog-body {
    padding: 32px 40px 36px;
  }
  .meta {
    display: flex;
    gap: 8px;
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 12px;
  }
  .cat {
    color: var(--accent);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  h2 {
    font-size: 28px;
    line-height: 1.2;
    margin: 0 0 20px;
    color: var(--text-h);
    font-weight: 600;
  }
  .byline {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--border);
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
  }
  .author { font-size: 15px; color: var(--text-h); font-weight: 500; }
  .date { font-size: 13px; color: var(--text-muted); }
  p {
    font-size: 16px;
    line-height: 1.7;
    color: var(--text);
    margin: 0 0 16px;
  }
  .ai-row {
    margin-top: 28px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .ai-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 22px;
    border-radius: 999px;
    border: none;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .ai-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 28px rgba(37, 99, 235, 0.4);
  }
  .ai-button.pulsing {
    animation: pulse 2.4s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3); }
    50% { box-shadow: 0 6px 28px rgba(37, 99, 235, 0.55), 0 0 0 8px rgba(37, 99, 235, 0.08); }
  }
  .sparkle {
    font-size: 14px;
  }
  .hint {
    font-size: 13px;
    color: var(--text-muted);
  }
  @media (max-width: 720px) {
    .blog-body { padding: 24px 20px; }
    h2 { font-size: 22px; }
  }
</style>
