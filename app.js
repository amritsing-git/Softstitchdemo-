/* =========================
   PAGE SWITCHING
========================= */

function showPage(pageName) {

  // Saare pages hide karo
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {

    page.classList.remove("active");

  });


  // Selected page show karo
  const selectedPage =
    document.getElementById(pageName);

  if (selectedPage) {

    selectedPage.classList.add("active");

  }


  // Menu automatically close
  const menu =
    document.getElementById("menu");

  if (menu) {

    menu.classList.remove("open");

  }


  // Page ko top par le jao
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================
   MENU
========================= */

function toggleMenu() {

  const menu =
    document.getElementById("menu");

  menu.classList.toggle("open");

}


/* =========================
   OUTSIDE CLICK
========================= */

document.addEventListener(
  "click",
  function(event) {

    const menu =
      document.getElementById("menu");

    const button =
      document.querySelector(".menu-btn");

    if (!menu || !button) return;


    if (
      menu.classList.contains("open") &&
      !menu.contains(event.target) &&
      !button.contains(event.target)
    ) {

      menu.classList.remove("open");

    }

  }
);