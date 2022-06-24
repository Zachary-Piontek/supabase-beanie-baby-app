// import services and utilities
import { getBeanies } from './services/services-beanies.js';

// import component creators
import createBeanieList from './components/beanie-list.js';
import createFilter from './components/filter.js';

// declare state variables
let beanies = [];
let name = '';

// write handler functions
async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    name = params.get('name');
    console.log(name);
    beanies = await getBeanies(name);
    display();
}
// Create each component: 
const Filter = createFilter(document.querySelector('.filter'), { handleFilter });
const beanieList = createBeanieList(document.querySelector('#beanie-list'));

// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
function handleFilter(name) {
    const params = new URLSearchParams(window.location.search);
    params.set('name', name);
    console.log(name);
    window.location.search = params.toString();
    console.log(params.toString()); // why does it not stay in console? only flashes quickly on it. --> needed to add handlePageLoad params to show value in console
}


// Roll-up display function that renders (calls with state) each component
function display() {
    Filter({ name });
    // Call each component passing in props that are the pieces of state this component needs
    beanieList({ beanies });
}

// Call display on page load
handlePageLoad();
