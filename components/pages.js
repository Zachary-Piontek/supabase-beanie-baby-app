export default function createPages(root, { handlePages }) {
    // const forward = root.querySelector('button');
    // const back = root.querySelector('button');

    const [forward, back] = root.querySelectorAll('button');

    forward.addEventListener('click', () => {
        handlePages(-1);
    });

    back.addEventListener('click', () => {
        handlePages(1);
    });
    return () => {
        
    };
    
}