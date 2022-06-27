export default function createPages(root, { handlePages }) {
    // const forward = root.querySelector('button');
    // const back = root.querySelector('button');

    const [forward, back] = root.querySelectorAll('button');
    const pageSize = root.querySelector('select');

    forward.addEventListener('click', () => {
        handlePages(-1, pageSize.value);
    });

    back.addEventListener('click', () => {
        handlePages(1, pageSize.value);
    });

    pageSize.addEventListener('change', () => {
        handlePages(0, pageSize.value);
    });
    return () => {

    };
    
}