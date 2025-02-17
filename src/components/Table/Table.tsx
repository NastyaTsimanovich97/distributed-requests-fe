import { useTableData } from '../../hooks/useTableData';
import { HeaderCell } from './HeaderCell';
import { Row } from './Row';
import './Table.css';

const HEADER_LIST = [
  { name: 'ID' },
  { name: 'URL' },
  { name: 'Status' },
  { name: 'HTTP code' },
];

interface ITableProps {
  isLoading: boolean;
}

export function Table({ isLoading }: ITableProps) {
  const { data, isLoadingData } = useTableData(isLoading);

  return (
    <div className="table-container">
      <h2>Requests</h2>
      <div className="table-column-container">
        {HEADER_LIST.map((i) => (
          <HeaderCell
            key={i.name}
            name={i.name}
            isLoading={isLoading || isLoadingData}
          />
        ))}
      </div>
      {data?.map((item) => (
        <Row key={item.id} item={item} isLoading={isLoading || isLoadingData} />
      ))}
    </div>
  );
}
