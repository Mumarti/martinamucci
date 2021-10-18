function activateNavigation() {
  const sections = document.querySelectorAll("section");
  const navContainer = document.createElement("nav");
  const navItems = Array.from(sections).map((section) => {
    return '<div class="nav-item"><a href="#home" class="nav-link"></a><span class="nav-label">HOME</span></div>';
  });

  console.log(sections);
  console.log(navItems);
}
activateNavigation();
