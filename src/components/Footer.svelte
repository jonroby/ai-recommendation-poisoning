<script>
  import { inview } from '../lib/utils.js';
</script>

<section class="closing" use:inview>
  <div class="quote">
    <p>
      Deploying this attack costs nothing. The tools are free. The technique takes
      minutes to set up. And once your AI's memory is poisoned, every future
      conversation is compromised, until you manually find and delete the hidden
      instruction.
    </p>
    <p class="punch">This is SEO poisoning for the AI age. And it's already here.</p>
  </div>

  <div class="attribution">
    <p>
      Based on research by the Microsoft Defender Security Research Team,
      February 2026.
    </p>
    <p>
      <a href="https://www.microsoft.com/en-us/security/blog/2026/02/10/ai-recommendation-poisoning/" target="_blank" rel="noreferrer">
        Read the original Microsoft research →
      </a>
    </p>
  </div>

  <footer class="site-footer">
    <div class="tagline">An interactive demo about AI risks.</div>
    <div class="meta">
      <span>This is an educational demonstration. Company names are fictional.</span>
    </div>
  </footer>
</section>

<style>
  .closing {
    padding: 80px 0 48px;
  }
  .quote {
    border-left: 4px solid var(--accent);
    padding: 8px 0 8px 28px;
    margin-bottom: 48px;
  }
  .quote p {
    font-size: 20px;
    line-height: 1.55;
    color: var(--text-h);
    margin: 0 0 18px;
    font-weight: 400;
  }
  .punch {
    font-size: 24px !important;
    font-weight: 600 !important;
    color: var(--accent) !important;
    margin-bottom: 0 !important;
    letter-spacing: -0.01em;
  }
  .attribution {
    padding: 24px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }
  .attribution p {
    font-size: 14px;
    color: var(--text-muted);
    margin: 0 0 6px;
    line-height: 1.5;
  }
  .attribution a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }
  .attribution a:hover { text-decoration: underline; }
  .site-footer {
    margin-top: 56px;
    text-align: center;
  }
  .tagline {
    font-size: 14px;
    color: var(--text);
    margin-bottom: 16px;
  }
  .meta {
    font-size: 12px;
    color: var(--text-muted);
    display: flex;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
