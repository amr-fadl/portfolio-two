let links = document.querySelectorAll(".filter");

let items = document.querySelectorAll(".project");

links.forEach((link) => {
  link.addEventListener("click", function () {
    let filter = link.getAttribute("data-filter");
    links.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    items.forEach((item) => {
      item.classList.remove("aos-animate");
      item.style.display = "none";
    });
    let itmes = document.querySelectorAll(`${filter}`);
    itmes.forEach((item) => {
        item.classList.add("aos-animate");
      item.style.display = "flex";
    });

    // handle view Box  
    let allElement = document.querySelectorAll(`#projects-section .app_grid ${filter}`);
    if (allElement.length == 1) {
        document.querySelector('#projects-section .app_grid').style.gridTemplateColumns = 'repeat(4, 1fr)'
        allElement[0].style.gridColumn = "2 / 4";
    }
    else if (allElement.length >= 1) {
        document.querySelector('#projects-section .app_grid').style.gridTemplateColumns = 'repeat(3, 1fr)'
      allElement[0].style.gridColumn = "span 2";
    }
    if (allElement.length >= 2) {
      allElement[1].style.gridColumn = "span 1";
    }
    if (allElement.length >= 3) {
      allElement[2].style.gridColumn = "span 1";
    }
    if (allElement.length >= 4) {
      allElement[3].style.gridColumn = "span 2";
    }
    if (allElement.length >= 5) {
      allElement[4].style.gridColumn = "span 2";
    }
    if (allElement.length >= 6) {
      allElement[5].style.gridColumn = "span 1";
    }
    if (allElement.length >= 7) {
      allElement[6].style.gridColumn = "span 1";
    }
    if (allElement.length >= 8) {
      allElement[7].style.gridColumn = "span 2";
    }
    if (allElement.length >= 9) {
      allElement[8].style.gridColumn = "span 2";
    }
    if (allElement.length >= 10) {
      allElement[9].style.gridColumn = "span 1";
    }
  });
});
