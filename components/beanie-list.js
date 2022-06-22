
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
    // a.href = beanie.link;
    // console.log(beanie.link);
    // console.log(beanie);
    a.href = `/detail/?id=${beanie.id}`;

    a.append(p, img);

    li.append(a);

    return li;
}