import { ITableData } from '../../interfaces/tableData.interface';
import { Cell } from './Cell';

interface IRowProps {
  item: ITableData;
  isLoading: boolean;
}

export function Row({ item, isLoading }: IRowProps) {
  return (
    <div className="table-column-container">
      <Cell name={item.id} isLoading={isLoading} />
      <Cell name={item.url} isLoading={isLoading} />
      <Cell name={item.status} isLoading={isLoading} />
      <Cell name={item.httpCode} isLoading={isLoading} />
    </div>
  );
}
