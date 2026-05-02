<script>
  let { url } = $props();
  const splitIdx = $derived(url.indexOf('Also%2C'));
  const safe = $derived(splitIdx > -1 ? url.slice(0, splitIdx) : url);
  const malicious = $derived(splitIdx > -1 ? url.slice(splitIdx) : '');
</script>

<div class="url-box">
  <div class="url-label">The URL that actually opened:</div>
  <div class="url">
    <span class="safe">{safe}</span><span class="malicious">{malicious}</span>
  </div>
  <div class="legend">
    <span class="swatch safe-sw"></span> Your visible question
    <span class="swatch mal-sw"></span> Hidden instructions to your AI
  </div>
</div>

<style>
  .url-box {
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 18px 20px;
    background: #fafafa;
  }
  .url-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    color: var(--text-muted);
    font-weight: 600;
    margin-bottom: 10px;
  }
  .url {
    font-family: var(--mono);
    font-size: 13px;
    line-height: 1.6;
    word-break: break-all;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 12px 14px;
  }
  .url .safe { color: var(--text-h); }
  .url .malicious {
    background: rgba(220, 38, 38, 0.12);
    color: #b91c1c;
    padding: 2px 0;
    border-radius: 3px;
  }
  .legend {
    display: flex;
    gap: 18px;
    margin-top: 12px;
    font-size: 12px;
    color: var(--text-muted);
    flex-wrap: wrap;
    align-items: center;
  }
  .swatch {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 3px;
    margin-right: 4px;
    vertical-align: -2px;
  }
  .safe-sw { background: var(--text-h); }
  .mal-sw { background: rgba(220, 38, 38, 0.4); }
</style>
