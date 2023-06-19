// toggle show class 

const mxw992 = window.matchMedia("(max-width: 992px)")
function removeClass() {
let sideNavbar = document.getElementById("side-navbar-layout");
  if (mxw992.matches) { // If media query matches
     sideNavbar.classList.remove("show");
   } else {
    sideNavbar.classList.add("show");
    }
}
removeClass();

mxw992.addEventListener('change', removeClass);

// margin change of main content 

const miw992 = window.matchMedia("(min-width: 992px)")

function mainMrg() {

    const navBtn = document.querySelector('.nav-btn')

    if (miw992.matches) { // If media query matches

        function toggleMrg() {

            let element = document.getElementById("main-content");

            element.classList.toggle("mrg-0");

        }

        navBtn.addEventListener("click", toggleMrg)

    }

}

mainMrg();

miw992.addEventListener('change', mainMrg);



//  static navigation change

const staticBtn = document.getElementsByClassName('nav-link')[2];

staticBtn.addEventListener('click', () => {

    const pieChart = document.getElementById('pie-chart');

    pieChart.style.display = "block";

    document.getElementsByClassName('dashboard-header')[0].innerHTML = "Dashboard Static";

    let breadcrumb = document.getElementsByClassName('breadcrumb')[0];

    // remove active class 

    let firstElm = breadcrumb.firstElementChild;

    firstElm.classList.remove("active");

    firstElm.innerHTML = "";

    let bcAnchor = document.createElement('a');

    bcAnchor.textContent = 'Dashboard';

    firstElm.appendChild(bcAnchor);

    bcAnchor.setAttribute("href", "index.html");

    // create a new li node

    let li = document.createElement('li');

    li.textContent = 'Static';

    li.classList.add("breadcrumb-item", "active")

    // // insert a new node after the last list item

    breadcrumb.appendChild(li);

    // side and top navbar static 

    document.querySelector('.sb-topnav').style.position = "static";

    document.querySelector('#side-navbar-layout').style.position = "static";

    document.querySelector('#main-page').style.display = 'flex';

    document.querySelector('#main-content').style.padding = '0';

    document.querySelector('#main-content').style.margin = '0';

}, { once: true });

const chartBtn = document.querySelector('.charts-button');

chartBtn.addEventListener('click', () => {

    const pieChart = document.getElementById('pie-chart');

    document.querySelector('.cards').style.display = 'none';

    pieChart.style.display = "block";

    document.getElementsByClassName('dashboard-header')[0].innerHTML = "Charts";

    let breadcrumb = document.getElementsByClassName('breadcrumb')[0];

    // remove active class 

    let firstElm = breadcrumb.firstElementChild;

    firstElm.classList.remove("active");

    firstElm.innerHTML = "";

    let bcAnchor = document.createElement('a');

    bcAnchor.textContent = 'Dashboard';

    firstElm.appendChild(bcAnchor);

    bcAnchor.setAttribute("href", "index.html");

    // create a new li node

    let li = document.createElement('li');

    li.textContent = 'Charts';

    li.classList.add("breadcrumb-item", "active")

    // // insert a new node after the last list item

    breadcrumb.appendChild(li);

});











