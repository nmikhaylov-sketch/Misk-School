
//Adds an animation to a link when hovered over
document.querySelectorAll('.more-link').forEach((link) => {
  const icon = link.querySelector('.more-link-icon');
  const text = link.querySelector('.more-link-text');

  link.style.setProperty('--text-w', (text.offsetWidth + 5) + 'px');
  link.style.setProperty('--icon-w', (icon.offsetWidth + 5) + 'px');

  link.addEventListener('mouseenter', () => {
    icon.className = 'more-link-icon icon-swapped';
    text.className = 'more-link-text text-swapped';
  });
  link.addEventListener('mouseleave', () => {
    icon.className = 'more-link-icon';
    text.className = 'more-link-text';
  });
});
