<script>
  let { userMessage, aiMessage, showAI = false, label = 'ChatGPT' } = $props();

  function renderAI(text) {
    return text
      .split('\n\n')
      .map((p) => p.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'))
      .map((p) => `<p>${p}</p>`)
      .join('');
  }
</script>

<div class="chat">
  <div class="chat-header">
    <span class="model-dot"></span>
    {label}
  </div>
  <div class="bubble user">
    <div class="bubble-label">You</div>
    <div class="bubble-text">{userMessage}</div>
  </div>
  {#if showAI}
    <div class="bubble ai" class:in={showAI}>
      <div class="bubble-label">{label}</div>
      <div class="bubble-text">{@html renderAI(aiMessage)}</div>
    </div>
  {/if}
</div>

<style>
  .chat {
    border: 1px solid var(--border);
    border-radius: 12px;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(8, 6, 13, 0.05);
  }
  .chat-header {
    padding: 12px 18px;
    border-bottom: 1px solid var(--border);
    font-size: 13px;
    font-weight: 600;
    color: var(--text-h);
    display: flex;
    align-items: center;
    gap: 8px;
    background: #fafafa;
  }
  .model-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #16a34a;
  }
  .bubble {
    padding: 18px 22px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .bubble.user {
    background: #f0f6ff;
    border-bottom: 1px solid var(--border);
    align-items: flex-end;
    text-align: right;
  }
  .bubble.ai {
    background: #fff;
    animation: slide 0.4s ease;
  }
  @keyframes slide {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .bubble-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-weight: 600;
    color: var(--text-muted);
  }
  .bubble.user .bubble-label { color: #2563eb; }
  .bubble-text {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-h);
  }
  .bubble-text :global(p) {
    margin: 0 0 12px;
  }
  .bubble-text :global(p:last-child) {
    margin-bottom: 0;
  }
  .bubble-text :global(strong) {
    color: var(--accent);
    font-weight: 700;
  }
</style>
