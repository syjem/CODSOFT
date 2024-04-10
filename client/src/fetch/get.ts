const baseUrl = 'http://127.0.0.1:5000';

export const getContacts = async () => {
  try {
    const res = await fetch(`${baseUrl}/contacts`);
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }
    const data = await res.json();
    return data.contacts;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};

export const getContactWithId = async (id: string) => {
  try {
    const res = await fetch(`${baseUrl}/contact/${Number(id)}`);
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }
    const data = await res.json();
    return data.contact;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
