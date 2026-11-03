document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = 'تم النسخ ✓';
      } catch {
        button.textContent = 'تعذر النسخ';
      }
      setTimeout(() => button.textContent = original, 1800);
    });
  });
});
