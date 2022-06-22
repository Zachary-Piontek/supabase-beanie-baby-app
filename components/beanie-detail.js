export default function createBeanieDetail(root) {
    const img = root.querySelector('img');
    
    // console.log(img);


    return ({ beanie }) => {
        // console.log(beanie);
        img.src = beanie.image;
    };


}