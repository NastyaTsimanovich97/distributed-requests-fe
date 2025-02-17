import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import './Table.css';

interface ICellProps {
  name: string | number | null;
  isLoading: boolean;
}

export function Cell({ name, isLoading }: ICellProps) {
  return <>{isLoading ? <Skeleton /> : <p>{name}</p>}</>;
}
