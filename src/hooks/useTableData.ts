import { useEffect, useState } from 'react';
import { getTableData } from '../services/getTableDataApi';
import { ITableData } from '../interfaces/tableData.interface';

export const useTableData = (isLoading: boolean) => {
  const [isLoadingData, setIsLoadingData] = useState(isLoading);
  const [data, setData] = useState<ITableData[]>();

  useEffect(() => {
    const getData = () => {
      setIsLoadingData(true);

      getTableData()
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.log(error.message))
        .finally(() => setIsLoadingData(false));
    };

    getData();
  }, [isLoading]);

  return { data, isLoadingData };
};
