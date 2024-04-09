const baseUrl = 'http://127.0.0.1:5000/contacts';

export const getContacts = async () => {
  try {
    const res = await fetch(baseUrl);
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
