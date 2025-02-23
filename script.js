document.addEventListener('DOMContentLoaded', function() {
  // Navigation and slider functionality (if any existing code is present)
  const navItems = document.querySelectorAll('.nav-item');
  const slidingLine = document.querySelector('.sliding-line');
  const currentPage = window.location.pathname.split('/').pop();

  // Set active class based on current page
  navItems.forEach(item => {
    if (item.href.endsWith(currentPage)) {
      item.classList.add('active');
    }
  });

  function updateSliderPosition() {
    const activeItem = document.querySelector('.nav-item.active');
    if (!activeItem) return;
    
    const itemRect = activeItem.getBoundingClientRect();
    const containerRect = document.querySelector('.nav-items').getBoundingClientRect();
    
    slidingLine.style.width = `${itemRect.width}px`;
    slidingLine.style.left = `${itemRect.left - containerRect.left}px`;
  }

  // Initialize slider position
  updateSliderPosition();

  // Handle window resize
  window.addEventListener('resize', updateSliderPosition);

  // Smooth navigation: clicking a nav item updates the active class and redirects.
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      updateSliderPosition();
      window.location.href = this.href;
    });
  });

  // Dropdown toggle for Playlist nav:
  // When the Playlist nav item is clicked, it ALWAYS toggles the dropdown.
  document.querySelectorAll('.custom-dropdown .dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();        // Prevent default link behavior
      e.stopPropagation();       // Stop the click from bubbling up (which would trigger the document click)
      const menu = this.nextElementSibling;
      // Toggle the dropdown menu display
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
  });

  // Close the dropdown when clicking anywhere outside the dropdown container.
  document.addEventListener('click', function(e) {
    document.querySelectorAll('.custom-dropdown .dropdown-menu').forEach(menu => {
      if (!menu.parentElement.contains(e.target)) {
        menu.style.display = 'none';
      }
    });
  });
});
