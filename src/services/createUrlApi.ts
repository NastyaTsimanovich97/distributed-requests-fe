const BASE_URL = import.meta.env.VITE_BE_SERVER_URL || '';

export async function createUrl(url: string) {
  try {
    const response = await fetch(BASE_URL + '/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Server is not available.');
    }
  } catch (error) {
    throw new Error(`Error to create item. ${error}`);
  }
}
