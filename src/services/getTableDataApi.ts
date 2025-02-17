import { ITableData } from '../interfaces/tableData.interface';

const BASE_URL = import.meta.env.VITE_BE_SERVER_URL || '';

export async function getTableData(): Promise<ITableData[]> {
  try {
    const response = await fetch(BASE_URL + '/requests');

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Server is not available.');
    }
  } catch (error) {
    throw new Error(`Error to fetch response item. ${error}`);
  }
}
