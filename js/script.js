var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector("main")
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = "<h1>SEI ROCKS!</h1>"
mainEl.classList.add("flex-ctr")

const topMenuEL = document.querySelector("nav#top-menu")

topMenuEL.style.height = "100%"
topMenuEL.style.backgroundColor = "var(--top-menu-bg)"
topMenuEL.classList.add("flex-around")

for (menu of menuLinks){
    const a = document.createElement("a")
    a.setAttribute("href", menu.href)
    a.innerHTML = menu.text
    topMenuEL.append(a)
}
// 2sd part lab

let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
