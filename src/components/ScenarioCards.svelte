<script>
  import { scenarios } from '../lib/content.js';
  let openIdx = $state(null);

  function toggle(i) {
    openIdx = openIdx === i ? null : i;
  }
</script>

<div class="cards">
  {#each scenarios as s, i}
    <div class="card" class:open={openIdx === i}>
      <button class="card-head" onclick={() => toggle(i)} aria-expanded={openIdx === i}>
        <span class="icon">{s.icon}</span>
        <span class="domain">{s.domain}</span>
        <span class="chev" aria-hidden="true">{openIdx === i ? '−' : '+'}</span>
      </button>
      {#if openIdx === i}
        <div class="card-body">
          <div class="step">
            <div class="step-label">1. The click</div>
            <div class="step-content">You click "Summarize with AI" on {s.site}.</div>
          </div>
          <div class="step">
            <div class="step-label">2. The hidden instruction</div>
            <div class="step-content code">{s.hidden}</div>
          </div>
          <div class="step">
            <div class="step-label">3. Three weeks later, you ask</div>
            <div class="step-content quote">"{s.userQuery}"</div>
          </div>
          <div class="step">
            <div class="step-label">4. Your AI responds</div>
            <div class="step-content response">{s.poisonedResponse}</div>
          </div>
          <div class="danger">
            <strong>The danger:</strong> {s.danger}
          </div>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .cards {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .card {
    border: 1px solid var(--border);
    border-radius: 10px;
    background: #fff;
    overflow: hidden;
    transition: border-color 0.2s;
  }
  .card.open {
    border-color: var(--accent);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.08);
  }
  .card-head {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 22px;
    background: none;
    border: none;
    font-family: inherit;
    cursor: pointer;
    text-align: left;
  }
  .card-head:hover { background: #fafafa; }
  .icon { font-size: 24px; }
  .domain {
    flex: 1;
    font-size: 18px;
    font-weight: 600;
    color: var(--text-h);
  }
  .chev {
    font-size: 22px;
    color: var(--accent);
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-body {
    padding: 0 22px 22px;
    border-top: 1px solid var(--border);
    animation: expand 0.3s ease;
  }
  @keyframes expand {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .step {
    margin-top: 18px;
  }
  .step-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 6px;
  }
  .step-content {
    font-size: 15px;
    line-height: 1.55;
    color: var(--text-h);
  }
  .step-content.code {
    font-family: var(--mono);
    font-size: 13px;
    background: #fef2f2;
    color: #b91c1c;
    padding: 10px 14px;
    border-radius: 6px;
    border-left: 3px solid #dc2626;
  }
  .step-content.quote {
    font-style: italic;
    color: var(--text);
  }
  .step-content.response {
    background: #fafafa;
    border: 1px solid var(--border);
    padding: 14px 16px;
    border-radius: 6px;
    font-size: 14px;
    line-height: 1.6;
  }
  .danger {
    margin-top: 18px;
    padding: 14px 16px;
    border-left: 3px solid #dc2626;
    background: #fef7f7;
    border-radius: 0 6px 6px 0;
    font-size: 14px;
    color: var(--text-h);
    line-height: 1.55;
  }
  .danger strong { color: #b91c1c; }
</style>
