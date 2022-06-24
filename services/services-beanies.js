const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeanies(name) {
    let query = client
    
        .from('beanie_babies')
        .select(`id, title, image`);
    
    if (name) {
        query = query.ilike('title', `%${name}%`); //NEEDTOFIX  when i implement .ilike, homepage beanies do not display  --> needed to change await response to await query because data was coming in before page load perhaps...
    }
    
    const response = await query;
    return response.data;
}

export async function getBeanie(id) {
    const response = await client
        .from('beanie_babies')
        .select()
        .match({ id: id })
        .single();

    return response.data;
}