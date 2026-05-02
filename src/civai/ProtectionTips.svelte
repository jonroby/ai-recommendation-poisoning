<script>
  import { protectionTips } from '../lib/content.js';
</script>

<ul>
  {#each protectionTips as tip}
    <li><strong>{tip.title}.</strong> {tip.body}</li>
  {/each}
</ul>
