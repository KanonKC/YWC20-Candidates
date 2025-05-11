import CandidateTable from '@/components/CandidateTable/CandidateTable';
import TablePagination from '@/components/TablePagination/TablePagination';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import NavigationBarLayout from '@/layouts/NavigationBarLayout/NavigationBarLayout';
import { getCandidateList } from '@/service/candidate.service';
import type { Candiate } from '@/service/models/candidate';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './CandidateList.css';
import { Loader2 } from 'lucide-react';

const CandidateList = () => {
  const [params, setParams] = useSearchParams();
  const [candidateList, setCandidateList] = useState<Candiate[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(-1);
  const [currentPage, setCurrentPage] = useState<number>(-1);
  const [pageSize, setPageSize] = useState<number>(15);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filteredCandidateList = useMemo(() => {
    const filteredList = candidateList.filter(
      (candidate) =>
        candidate.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        candidate.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
        candidate.interviewRefNo
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        `${candidate.firstName} ${candidate.lastName}`
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    );

    return filteredList;

    // return filteredList.slice(
    //   (currentPage - 1) * pageSize,
    //   currentPage * pageSize
    // );
  }, [candidateList, searchValue]);

  const displayedList = useMemo(() => {
    return filteredCandidateList.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
  }, [filteredCandidateList, currentPage, pageSize]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ search: e.target.value });
  };

  const handlePageChange = (page: number) => {
    setParams({
      page: page.toString(),
      size: pageSize.toString(),
      search: searchValue,
    });
  };

  useEffect(() => {
    const search = params.get('search');
    const page = params.get('page');
    const size = params.get('size');
    setSearchValue(search || '');
    setCurrentPage(page ? parseInt(page) : 1);
    setPageSize(size ? parseInt(size) : 15);
  }, [params]);

  useEffect(() => {
    setIsLoading(true);
    getCandidateList().then((data) => {
      const totalCandidateList = [
        ...data.content,
        ...data.design,
        ...data.marketing,
        ...data.programming,
      ];

      setCandidateList(totalCandidateList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    // setParams({ page: '1', size: pageSize.toString() });
    setTotalPages(Math.ceil(filteredCandidateList.length / pageSize));
  }, [filteredCandidateList, pageSize]);

  useEffect(() => {
    const page = params.get('page');
    if (!page) {
      setParams({
        page: '1',
        size: pageSize.toString(),
        search: params.get('search') || '',
      });
    }
  }, [pageSize]);

  return (
    <NavigationBarLayout>
      <div className="mx-[32px]">
        <div className="flex gap-[8px]">
          <Input
            value={searchValue}
            onChange={handleInputChange}
            placeholder="ค้นหา ชื่อ, นามสกุล, หมายเลขผู้สัมภาษณ์"
          />
        </div>
        <div className="mt-[8px]">
          <Card className="p-[16px]">
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <Loader2 className="animate-spin" />
              </div>
            ) : (
              <>
                <CandidateTable data={displayedList} />
                <TablePagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </Card>
        </div>
      </div>
    </NavigationBarLayout>
  );
};

export default CandidateList;
