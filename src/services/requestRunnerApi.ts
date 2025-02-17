const BASE_URL = import.meta.env.VITE_BE_SERVER_URL || '';

export async function requestRunner() {
  try {
    const response = await fetch(BASE_URL + '/request-runner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Server is not available.');
    }
  } catch (error) {
    throw new Error(`Error to run requests. ${error}`);
  }
}
