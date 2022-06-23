export default function createBeanieDetail(root) {
    const img = root.querySelector('img');
    const animal = root.querySelector('.animal');
    const releaseDate = root.querySelector('.release-date');
    const theme = root.querySelector('.theme');
    const color = root.querySelector('.color');
    const title = root.querySelector('.title');
    const retirementDate = root.querySelector('.retirement-date');
    const subtheme = root.querySelector('.sub-theme');
    const releaseYear = root.querySelector('.release-year');
    const astroSign = root.querySelector('.astro-sign');
    
    // console.log(img);


    return ({ beanie }) => {
        // console.log(beanie);
        img.src = beanie.image;
        animal.textContent = beanie.animal;
        releaseDate.textContent = beanie.releaseDate;
        theme.textContent = beanie.theme;
        color.textContent = beanie.color;
        title.textContent = beanie.title;
        retirementDate.textContent = beanie.retirementDate;
        subtheme.textContent = beanie.subtheme;
        releaseYear.textContent = beanie.releaseYear;
        astroSign.textContent = beanie.astroSign;
    };


}