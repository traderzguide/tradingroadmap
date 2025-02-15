// PDF Data for Each Section


// Open Modal with PDFs
function openPdfModal(step) {
    const modal = document.getElementById("pdfModal");
    const pdfList = document.getElementById("pdfList");

    // Clear previous content
    pdfList.innerHTML = "";

    // Populate the PDF list
    if (pdfs[step]) {
        pdfs[step].forEach(pdf => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${pdf.url}" target="_blank">📄 ${pdf.name}</a>`;
            pdfList.appendChild(listItem);
        });
    }

    modal.style.display = "block";
}

// Close Modal
function closePdfModal() {
    document.getElementById("pdfModal").style.display = "none";
}

// Close Modal on Outside Click
window.onclick = function(event) {
    const modal = document.getElementById("pdfModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
function redirectTo(url) {
    window.open(url, "_blank");  // Opens in a new tab
  }
 //
 document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const slidingLine = document.querySelector('.sliding-line');
    const currentPage = window.location.pathname.split('/').pop();

    // Set active class based on current page
    navItems.forEach(item => {
      if (item.href.endsWith(currentPage)) { // FIXED: Removed extra parenthesis
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

    // Smooth navigation
    navItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        updateSliderPosition();
        window.location.href = this.href;
      });
    });
  }); // Added missing closing brace for DOMContentLoaded   

  
      // JavaScript to handle dropdown toggle
      function toggleDropdown(element) {
        element.classList.toggle("active");
        const pdfList = element.nextElementSibling;
        if (pdfList.style.display === "block") {
          pdfList.style.display = "none";
        } else {
          pdfList.style.display = "block";
        }
      }
// Smooth Scrolling for Sidebar Links
document.querySelectorAll('.sticky-sidebar a, .floating-sidebar a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});