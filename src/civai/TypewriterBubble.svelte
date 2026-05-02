<script>
  let { text, speed = 12 } = $props();
  let shown = $state(0);

  $effect(() => {
    shown = 0;
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      shown = i;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  });

  function render(raw) {
    return raw
      .split('\n\n')
      .map((p) => p.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>'))
      .map((p) => `<p class="mb-3 last:mb-0">${p}</p>`)
      .join('');
  }

  let visible = $derived(text.slice(0, shown));
</script>

<div class="flex justify-start">
  <div class="max-w-[85%] rounded-2xl px-5 py-3.5 text-[1rem] leading-relaxed text-gray-900" style="background-color: rgb(254, 221, 208);">
    {@html render(visible)}
  </div>
</div>
