export function inview(node, options = {}) {
  const { threshold = 0.15, once = true } = options;
  if (typeof IntersectionObserver === 'undefined') {
    node.classList.add('in-view');
    return {};
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add('in-view');
          if (once) observer.unobserve(node);
        } else if (!once) {
          node.classList.remove('in-view');
        }
      }
    },
    { threshold },
  );
  observer.observe(node);
  return {
    destroy() {
      observer.disconnect();
    },
  };
}
