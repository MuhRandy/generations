const body = document.body;
const nav = document.getElementsByTagName("nav")[0];

// When the user clicks on the icon, toggle between dark mode (moon icon) and light mode (sun icon)
function toggle() {
  body.classList.toggle("darkmode");
}

// When the user clicks, toggle between open and close menu
function openMenu() {
  nav.classList.toggle("menu-open");
}

// add class "card" on all article tag except the first one using for loop
const articles = document.getElementsByTagName("article");

for (let i = 1; i < articles.length; i++) {
  let article = articles[i];

  article.classList.add("card");
}

// Make text on h3 tag if index is even make it 'Sejarah Istilah' if else make it 'Kejadian Bersejarah yang Terjadi'
const sectionTitles = document.getElementsByTagName("h3");

for (let i = 0; i < sectionTitles.length; i++) {
  const sectionTitle = sectionTitles[i];

  if (i % 2 == 0) {
    sectionTitle.innerText = "Sejarah Istilah";
  } else {
    sectionTitle.innerText = "Kejadian Bersejarah yang Terjadi";
  }
}
