  <template>
    <iframe
      ref="tallyFrame"
      data-tally-src="https://tally.so/embed/3xZ9WG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="120%"
      height="768"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      title="Registration form"
    ></iframe>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
  
    const loadTally = () => {
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      }
    };
  
    if (typeof Tally !== 'undefined') {
      loadTally();
    } else if (d.querySelector(`script[src="${w}"]`) == null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = loadTally;
      s.onerror = loadTally;
      d.body.appendChild(s);
    }
    
  });
  </script>
  