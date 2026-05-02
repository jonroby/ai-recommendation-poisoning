<script>
  import { stats, targets } from '../lib/content.js';
  import { inview } from '../lib/utils.js';
</script>

<div class="stats" use:inview>
  <div class="stat-grid">
    {#each stats as stat}
      <div class="stat">
        <div class="num">{stat.number}</div>
        <div class="lbl">{stat.label}</div>
      </div>
    {/each}
  </div>

  <div class="targets">
    <div class="targets-label">Every major AI assistant is targeted:</div>
    <div class="target-list">
      {#each targets as t}
        <span class="target-pill">{t}</span>
      {/each}
    </div>
  </div>

  <div class="atlas">
    <div class="atlas-tag">MITRE ATLAS</div>
    <div class="atlas-id">AML.T0080 — Memory Poisoning</div>
    <div class="atlas-note">A formally classified attack technique. This isn't theoretical.</div>
  </div>
</div>

<style>
  .stats {
    margin: 32px 0;
  }
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
  }
  @media (max-width: 720px) {
    .stat-grid { grid-template-columns: repeat(2, 1fr); }
  }
  .stat {
    background: #fff;
    padding: 28px 22px;
    text-align: left;
  }
  .num {
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    color: var(--accent);
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }
  .lbl {
    font-size: 14px;
    line-height: 1.45;
    color: var(--text);
  }
  .targets {
    margin-top: 32px;
  }
  .targets-label {
    font-size: 14px;
    color: var(--text-muted);
    margin-bottom: 12px;
  }
  .target-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .target-pill {
    padding: 8px 16px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-h);
    background: #fafafa;
  }
  .atlas {
    margin-top: 32px;
    padding: 22px 24px;
    background: #0f172a;
    border-radius: 10px;
    color: #e2e8f0;
  }
  .atlas-tag {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    color: #94a3b8;
    margin-bottom: 8px;
  }
  .atlas-id {
    font-family: var(--mono);
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 6px;
  }
  .atlas-note {
    font-size: 14px;
    color: #cbd5e1;
  }
</style>
