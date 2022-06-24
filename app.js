// import services and utilities
import { getBeanies } from './services/services-beanies.js';

// import component creators
import createBeanieList from './components/beanie-list.js';
import createFilter from './components/filter.js';

// declare state variables
let beanies = [];
let name = '';
let color = '';

// write handler functions
async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    name = params.get('name');
    color = params.get('color');
    console.log(name, color);
    beanies = await getBeanies(name, color);
    display();
}
// Create each component: 
const Filter = createFilter(document.querySelector('.filter'), { handleFilter });
const beanieList = createBeanieList(document.querySelector('#beanie-list'));

// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
function handleFilter(name, color) {
    console.log(name, color);
    const params = new URLSearchParams(window.location.search);
    params.set('name', name);
    params.set('color', color);
    // console.log(name);
    window.location.search = params.toString();
    // console.log(params.toString()); // why does it not stay in console but shows in url? only flashes quickly on it. --> needed to add handlePageLoad params to show value in console
}


// Roll-up display function that renders (calls with state) each component
function display() {
    Filter({ name, color });
    // Call each component passing in props that are the pieces of state this component needs
    beanieList({ beanies });
}

// Call display on page load
handlePageLoad();
