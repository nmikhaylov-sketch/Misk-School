
//Adds an animation to a Read More/Learn More link when hovered over
document.querySelectorAll('.more-link').forEach((link) => {
  //find the icon and text elements within the link
  const icon = link.querySelector('.more-link-icon');
  const text = link.querySelector('.more-link-text');
  
  //set the width of the text and icon as CSS variables so they can be used in the CSS for the animation
  link.style.setProperty('--text-w', (text.offsetWidth + 5) + 'px');
  link.style.setProperty('--icon-w', (icon.offsetWidth + 5) + 'px');

  //add event listeners to the link for mouse enter and leave events
  link.addEventListener('mouseenter', () => {
    icon.className = 'more-link-icon icon-swapped';
    text.className = 'more-link-text text-swapped';
  });
  link.addEventListener('mouseleave', () => {
    icon.className = 'more-link-icon';
    text.className = 'more-link-text';
  });
});
//-------------------------------------------------------------------------------
// animates the numbers to increase gradually when loaded,
//  found on https://codepen.io/lucamurante/pen/gZVymW
function animateValue(obj, start = 0, end = null, duration = 800) {
    if (obj) {
        // save starting text for later (and as a fallback text if JS not running and/or google)
        var textStarting = obj.innerHTML;
        // remove non-numeric from starting text if not specified
        end = end || parseInt(textStarting.replace(/\D/g, ""));
        var range = end - start;
        // no timer shorter than 50ms (not really visible any way)
        var minTimer = 50;
        // calc step time to show all interediate values
        var stepTime = Math.abs(Math.floor(duration / range));
        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);
        // get current time and calculate desired end time
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;
        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, 0);
            var value = Math.round(end - (remaining * range));
            // replace numeric digits only in the original string
            obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
            if (value == end) {
                clearInterval(timer);
            }
        }
        timer = setInterval(run, stepTime);
        run();
    }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateValue(entry.target);
      observer.unobserve(entry.target); // run once only
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.animate-number').forEach(el => observer.observe(el));
//--------------------------------------------------------------------------------------

//Locks scroll when the mobile menu is open, and unlocks it when closed
const menu = document.getElementById('toggleTarget');
// check if it exists, because this script is used on multiple pages and not all of them have a mobile menu
if (menu) { const mobileMenu = window.matchMedia('(max-width: 767.99px), (orientation: landscape) and (max-height: 500px)'
  );

menu.addEventListener('show.bs.collapse', () => {
  if (mobileMenu.matches){
  document.body.classList.add('overflow-hidden');
  }
});

menu.addEventListener('hidden.bs.collapse', () => {
  document.body.classList.remove('overflow-hidden');
});
}