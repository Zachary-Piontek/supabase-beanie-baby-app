export default function createFilter(form, { handleFilter }) {
    

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        handleFilter(formData.get('name'));
    });

    // console.log('name');
    // console.log('title');

    return () => {
        // console.log();
    };

}