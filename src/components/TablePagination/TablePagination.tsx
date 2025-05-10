import { ChevronLeft, ChevronRight } from 'lucide-react';
import ThemedButton from '../ThemedButton/ThemedButton';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import { Button } from '../ui/button';

const TablePagination = ({
  currentPage = 1,
  totalPages = 3,
  onPageChange,
}: {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}) => {
  const handlePageClick = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const handlePreviousClick = () => {
    if (onPageChange && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (onPageChange && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            className="cursor-pointer"
            disabled={currentPage === 1}
            variant="ghost"
            onClick={handlePreviousClick}
          >
            <ChevronLeft />
          </Button>
        </PaginationItem>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem className="hidden md:block" key={index}>
            <ThemedButton
              variant={index + 1 === currentPage ? 'primary' : 'ghost'}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </ThemedButton>
          </PaginationItem>
        ))}

        <ThemedButton
          className="md:hidden"
          variant="primary"
        >
          {currentPage}
        </ThemedButton>
        <PaginationItem>
          <Button
            className="cursor-pointer"
            disabled={currentPage === totalPages}
            variant="ghost"
            onClick={handleNextClick}
          >
            <ChevronRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
