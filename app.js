// import services and utilities
import { getBeanies } from './services/services-beanies.js';

// import component creators
import createBeanieList from './components/beanie-list.js';
import createFilter from './components/filter.js';

// declare state variables
let beanies = [];

// write handler functions
async function handlePageLoad() {
    beanies = await getBeanies();
    display();
}
// Create each component: 
const Filter = createFilter(document.querySelector('.filter'), { handleFilter });
const beanieList = createBeanieList(document.querySelector('#beanie-list'));

// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
function handleFilter(name) {
    console.log(name);
}


// Roll-up display function that renders (calls with state) each component
function display() {
    Filter();
    // Call each component passing in props that are the pieces of state this component needs
    beanieList({ beanies });
}

// Call display on page load
handlePageLoad();
