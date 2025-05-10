import CandidateTable from '@/components/CandidateTable/CandidateTable';
import MajorDropdown from '@/components/MajorDropdown/MajorDropdown';
import TablePagination from '@/components/TablePagination/TablePagination';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import NavigationBarLayout from '@/layouts/NavigationBarLayout/NavigationBarLayout';
import { getCandidateList } from '@/service/candidate.service';
import type { Candiate } from '@/service/models/candidate';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './CandidateList.css';

const CandidateList = () => {
  const [params, setParams] = useSearchParams();
  const [candidateList, setCandidateList] = useState<Candiate[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(-1);
  const [currentPage, setCurrentPage] = useState<number>(-1);
  const [pageSize, setPageSize] = useState<number>(15);

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
    console.log('handleInputChange', e.target.value);
    console.log('set param from 52')
    setParams({ search: e.target.value });
  };

  const handlePageChange = (page: number) => {
    console.log('set param from 57')
    setParams({ page: page.toString(), size: pageSize.toString(), search: searchValue });
  };

  useEffect(() => {
    const search = params.get('search');
    const page = params.get('page');
    const size = params.get('size');
    console.log('setSearchValue', search);
    setSearchValue(search || '');
    setCurrentPage(page ? parseInt(page) : 1);
    setPageSize(size ? parseInt(size) : 15);
  }, [params]);

  useEffect(() => {
    getCandidateList().then((data) => {
      const totalCandidateList = [
        ...data.content,
        ...data.design,
        ...data.marketing,
        ...data.programming,
      ];

      setCandidateList(totalCandidateList);
    });
  }, []);

  useEffect(() => {
    // setParams({ page: '1', size: pageSize.toString() });
    setTotalPages(Math.ceil(filteredCandidateList.length / pageSize));
  }, [filteredCandidateList, pageSize]);

  useEffect(() => {
    const page = params.get('page');
    if (!page) {
      console.log('set param from 92');
      setParams({ page: '1', size: pageSize.toString(), search: params.get('search') || '' });
    }
  }, [pageSize]);

  return (
    <NavigationBarLayout>
      <div className="pt-[64px] mx-[32px]">
        <div className="flex gap-[8px]">
          <Input
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search"
          />
          <MajorDropdown>
            <Button variant="outline" className="cursor-pointer">
              Select
            </Button>
          </MajorDropdown>
        </div>
        <div className="mt-[8px]">
          <Card className="p-[16px]">
            <CandidateTable data={displayedList} />
            <TablePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Card>
        </div>
      </div>
    </NavigationBarLayout>
  );
};

export default CandidateList;
