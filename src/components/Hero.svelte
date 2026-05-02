<script>
  import { inview } from '../lib/utils.js';
</script>

<section class="hero" use:inview>
  <div class="eyebrow">An Educational Demonstration</div>
  <h1>That Helpful Button Is Lying To You</h1>
  <p class="subhead">How a single click can secretly reprogram your AI assistant — forever.</p>
  <p class="lede">
    AI assistants now have memory. They remember your preferences across conversations
    so they can be more useful. But that memory is a new attack surface — and someone has
    already figured out how to exploit it at scale.
  </p>
  <div class="scroll-cue" aria-hidden="true">
    <span>Scroll</span>
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
      <rect x="1" y="1" width="12" height="20" rx="6" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="7" cy="7" r="2" fill="currentColor"/>
    </svg>
  </div>
</section>

<style>
  .hero {
    padding: 96px 0 80px;
    text-align: left;
    border-bottom: 1px solid var(--border);
  }
  .eyebrow {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 24px;
  }
  h1 {
    font-size: clamp(40px, 6vw, 72px);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin: 0 0 24px;
    color: var(--text-h);
    font-weight: 700;
  }
  .subhead {
    font-size: clamp(20px, 2.4vw, 26px);
    line-height: 1.35;
    color: var(--text-h);
    font-weight: 400;
    margin: 0 0 32px;
    max-width: 720px;
  }
  .lede {
    font-size: 18px;
    line-height: 1.6;
    color: var(--text);
    max-width: 640px;
    margin: 0 0 48px;
  }
  .scroll-cue {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--text-muted);
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    animation: bob 2s ease-in-out infinite;
  }
  @keyframes bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(4px); }
  }
  @media (max-width: 720px) {
    .hero { padding: 64px 0 56px; }
  }
</style>
