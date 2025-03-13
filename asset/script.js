const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.className = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
};

// JavaScript for smooth scrolling
document.querySelectorAll('.navbar a').forEach(anchor => {
anchor.addEventListener('click', function(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  // Scroll to the section smoothly
  window.scrollTo({
      top: targetSection.offsetTop - 50,  // adjust the offset for navbar height
      behavior: 'smooth'
  });
});
});

document.querySelectorAll('.footer_tag a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Cek apakah link mengarah ke luar website
      if (this.hostname !== window.location.hostname) {
        return; // Biarkan default behavior untuk link eksternal
      }
  
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    });
  });
