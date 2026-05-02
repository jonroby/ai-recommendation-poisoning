<script>
  const cards = [
    {
      tag: 'Live Demo',
      title: 'AI Has Opinions, and They\'re Not the Same as Yours.',
      blurb: "Explore how 20 leading AI models respond to tough ethical, social, and political questions.",
      gradient: 'from-purple-700 to-indigo-900',
    },
    {
      tag: 'Live Demo',
      title: 'Secret Languages of AI',
      blurb: 'AIs can talk to each other in coded messages.',
      gradient: 'from-emerald-700 to-teal-900',
    },
    {
      tag: 'Short',
      title: 'Giving AI the Rorschach Test',
      blurb: 'From mythical creatures to human faces, AI describes what it sees in classic inkblots.',
      gradient: 'from-rose-700 to-pink-900',
    },
  ];
</script>

<div class="w-full" style="background: rgb(var(--color-primary-off));">
  <div class="container mx-auto px-4 pt-4">
    <div class="border-b border-white/20 pb-16 pt-8">
      <h2 class="mb-10 text-center font-assistant text-4xl text-white">
        <span class="border-b-2 border-civ-red px-4">Featured Work</span>
      </h2>
      <div class="mx-auto grid w-fit grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each cards as c}
          <a href="#" class="mx-auto flex h-full max-w-sm flex-col overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:scale-[1.01] hover:shadow-lg">
            <div class="relative">
              <div class="absolute right-2 top-2 z-10">
                <span class="rounded-md border border-gray-800 bg-white px-3 py-[4px] font-assistant text-sm font-semibold text-primary-700">{c.tag}</span>
              </div>
              <div class="aspect-[2/1] w-full bg-gradient-to-br {c.gradient}"></div>
            </div>
            <div class="flex flex-grow flex-col px-4 pb-6 pt-6 font-assistant">
              <div class="text-xl font-bold text-gray-900">{c.title}</div>
              <p class="mb-3 mt-2 min-h-[5rem] text-[0.95rem] text-gray-700">{c.blurb}</p>
              <div class="mt-auto flex justify-end">
                <button class="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100">Learn More</button>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
