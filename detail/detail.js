import { getBeanie } from '../services/services-beanies.js';

import createBeanieDetail from '../components/beanie-detail.js';

let beanie = {};

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) {
        window.location = '/';
    }

    beanie = await getBeanie(id);

    if (!beanie) window.location = '/';

    display();
}
const beanieDetail = createBeanieDetail(document.querySelector('#beanie-details'));


function display() {
    beanieDetail({ beanie });
}

handlePageLoad();