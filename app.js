// import services and utilities
import { getBeanies } from './services/services-beanies.js';

// import component creators
import createBeanieList from './components/beanie-list.js';
import createFilter from './components/filter.js';
import createPages from './components/pages.js';

// declare state variables
let beanies = [];
let name = '';
let color = '';
let page = '';
let pageSize = 5;

// write handler functions
async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    name = params.get('name');
    color = params.get('color');
    page = Number(params.get('page'));
    // console.log(name, color);
    const start = (page - 1) * pageSize;
    const end = (page * pageSize) - 1;
    beanies = await getBeanies(name, color, { start, end });
    display();
}
// Create each component: 
const Filter = createFilter(document.querySelector('.filter'), { handleFilter });
const beanieList = createBeanieList(document.querySelector('#beanie-list'));
const Pages = createPages(document.querySelector('#pages'), { handlePages });

// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
function handleFilter(name, color) {
    // console.log(name, color);
    const params = new URLSearchParams(window.location.search);
    params.set('name', name);
    params.set('color', color);
    // console.log(name);
    window.location.search = params.toString();
    // console.log(params.toString()); // why does it not stay in console but shows in url? only flashes quickly on it. --> needed to add handlePageLoad params to show value in console
}
function handlePages(change) {
    // console.log(change); checking math logic on pages
    page += change;
    const params = new URLSearchParams(window.location.search);
    params.set('page', page);
    window.location.search = params.toString();
}

// Roll-up display function that renders (calls with state) each component
function display() {
    Filter({ name, color });
    Pages();
    // Call each component passing in props that are the pieces of state this component needs
    beanieList({ beanies });
}

// Call display on page load
handlePageLoad();
