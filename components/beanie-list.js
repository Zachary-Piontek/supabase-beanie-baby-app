
export default function createBeanieList(root) {
    return ({ beanies }) => {
        root.innerHTML = '';
        // console.log(beanies);
        for (const beanie of beanies) {
            const li = beanieDiv({ beanie });
            root.append(li);
        }
    };
}

export function beanieDiv({ beanie }) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const a = document.createElement('a');


    p.textContent = beanie.title;
    li.classList.add('beanie-box');
    img.src = beanie.image;
    a.href = beanie.link;

    li.append(a, p, img);

    return li;
}