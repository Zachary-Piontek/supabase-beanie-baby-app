// import services and utilities
import { getBeanies } from './services/services-beanies.js';

// import component creators
import createBeanieList from './components/beanie-list.js';

// declare state variables
let beanies = [];
// write handler functions
async function handlePageLoad() {
    beanies = await getBeanies();
    display();
}
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const beanieList = createBeanieList(document.querySelector('#beanie-list'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    beanieList({ beanies });
}

// Call display on page load
handlePageLoad();
