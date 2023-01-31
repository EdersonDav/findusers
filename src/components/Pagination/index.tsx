import { PaginationResults } from './style';

interface PaginationProps {
  current: number;
  total: number;
  onPageChange: (value: number) => void;
}

export const Pagination = ({
  current,
  total,
  onPageChange,
}: PaginationProps) => {
  return (
    <PaginationResults
      current={current}
      total={total}
      onPageChange={onPageChange}
      maxWidth={50}
    />
  );
};
