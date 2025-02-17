import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import './Table.css';

interface IHeaderCellProps {
  name: string;
  isLoading: boolean;
}

export function HeaderCell({ name, isLoading }: IHeaderCellProps) {
  return <>{isLoading ? <Skeleton /> : <h3>{name}</h3>}</>;
}
