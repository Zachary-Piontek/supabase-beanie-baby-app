export default function createFilter(form, { handleFilter }) {
    
    const nameInput = form.querySelectorAll('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        handleFilter(formData.get('name'));
    });

    // console.log('name');
    // console.log('title');

    return ({ name }) => {
        nameInput.value = name;
        // console.log();
    };

}