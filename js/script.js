var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl = document.querySelector("main")
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = "<h1>SEI ROCKS!</h1>"
mainEl.classList.add("flex-ctr")

let topMenuEL = document.getElementById("top-menu")

topMenuEL.style.height = "100%"
topMenuEL.style.backgroundColor = "var(--top-menu-bg)"
topMenuEL.classList.add("flex-around")

for (menu of menuLinks){
    let a = document.createElement("a")
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
subMenuEl.style.top = "0";

let topMenuLinks = document.querySelectorAll("a");
console.log(topMenuLinks)

var showingSubMenu = false;

topMenuEL.addEventListener("click", handler)

function handler(e) {

    e.preventDefault()
    if (e.target.tagName !== "A"){return}
    else {console.log(e)};
    
    if(e.target.getAttribute("class") === "active") {
       e.target.classList.remove("active")
       showingSubMenu = false
       subMenuEl.style.top = "0"
      //  console.log(showingSubMenu)
       return
     } else { 
              for(topMenu of topMenuLinks){
                  topMenu.classList.remove("active")
                  }
              e.target.classList.add("active")
            };
 
    let links = menuLinks.filter(menuLink => (menuLink.text === e.target.innerHTML) && (menuLink.subLinks)) 
    

    if(links.length) {showingSubMenu = true;
                      console.log(links);
                      console.log(showingSubMenu)
                      let subs = links[0].subLinks
                      buildSubMenu(subs)
                      subMenuEl.style.top = "100%"
    } else {showingSubMenu = false
            console.log(showingSubMenu)
            subMenuEl.style.top = "0"
            }

      function buildSubMenu (subs) {
        subMenuEl.innerHTML = ''
        for(sub of subs){
          let a2 = document.createElement("a")
          a2.setAttribute('href',sub.href)
          a2.innerHTML = sub.text
          subMenuEl.append(a2)
        }}
        if (e.target.innerHTML === "about"){
          mainEl.innerHTML = "<h1>ABOUT</h1>"}
 }
 
 subMenuEl.addEventListener('click',handlerSub)

 function handlerSub(e){
   e.preventDefault()
   if (e.target.tagName !== "A"){return}
   else {console.log(e.target.textContent)};

   showingSubMenu = false;
   subMenuEl.style.top = "0";
   for(topMenu of topMenuLinks){
    topMenu.classList.remove("active")
    };

    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`
    
 }
      
     

