export default function createFilter(form, { handleFilter }) {
    
    const nameInput = form.querySelectorAll('input');
    const colorSelect = form.querySelectorAll('select');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        handleFilter(formData.get('name'), 
            formData.get('color'));
    });

    // console.log('name');
    // console.log('title');

    return ({ name, color }) => {
        nameInput.value = name;
        colorSelect.value = color;
        // console.log();
    };

}