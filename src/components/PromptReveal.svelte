<script>
  import { visiblePrompt, hiddenPrompt, fullURL } from '../lib/content.js';
  import URLBreakdown from './URLBreakdown.svelte';

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
</script>

{#if active}
  <div class="reveal">
    <div class="panels">
      <div class="panel safe">
        <div class="panel-label">
          <span class="dot green"></span>
          What you see
        </div>
        <div class="panel-content">
          <div class="prompt-text">{visiblePrompt}</div>
        </div>
      </div>
      <div class="panel danger">
        <div class="panel-label">
          <span class="dot red"></span>
          What's hidden
        </div>
        <div class="panel-content">
          <div class="prompt-text">
            <span class="visible-part">{visiblePrompt}</span><span class="hidden-part">{typedHidden}<span class="caret"></span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="caption">
      <strong>The button didn't just summarize.</strong> It opened a URL with a hidden
      payload tacked onto the end of your query — instructions written for the AI, not for you.
    </div>

    <URLBreakdown url={fullURL} />
  </div>
{/if}

<style>
  .reveal {
    margin-top: 32px;
    animation: fadeUp 0.5s ease;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .panels {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  @media (max-width: 720px) {
    .panels { grid-template-columns: 1fr; }
  }
  .panel {
    border-radius: 10px;
    border: 1px solid var(--border);
    background: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .panel.danger {
    border-color: rgba(220, 38, 38, 0.35);
    background: #fff7f7;
  }
  .panel-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    font-weight: 600;
    padding: 10px 16px;
    border-bottom: 1px solid var(--border);
    background: #fafafa;
    color: var(--text-h);
  }
  .panel.danger .panel-label {
    background: #fef2f2;
    border-bottom-color: rgba(220, 38, 38, 0.2);
    color: #b91c1c;
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  .dot.green { background: #16a34a; }
  .dot.red { background: #dc2626; }
  .panel-content {
    padding: 18px 16px;
    flex: 1;
  }
  .prompt-text {
    font-family: var(--mono);
    font-size: 14px;
    line-height: 1.65;
    word-wrap: break-word;
    color: var(--text-h);
  }
  .hidden-part {
    color: #b91c1c;
    background: rgba(220, 38, 38, 0.1);
    padding: 2px 0;
    border-radius: 3px;
  }
  .caret {
    display: inline-block;
    width: 7px;
    height: 14px;
    background: #b91c1c;
    margin-left: 2px;
    vertical-align: -2px;
    animation: blink 0.9s steps(2) infinite;
  }
  @keyframes blink {
    50% { opacity: 0; }
  }
  .caption {
    margin: 28px 0 24px;
    padding: 18px 22px;
    border-left: 3px solid var(--accent);
    background: var(--accent-bg);
    color: var(--text-h);
    font-size: 16px;
    line-height: 1.55;
    border-radius: 0 8px 8px 0;
  }
  .caption strong {
    color: var(--text-h);
    font-weight: 600;
  }
</style>
