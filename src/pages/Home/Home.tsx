import CandidateResultDialog from '@/components/CandidateResultDialog/CandidateResultDialog';
import SearchInput from '@/components/SearchInput/SearchInput';
import NavigationBarLayout from '@/layouts/NavigationBarLayout/NavigationBarLayout';
import { getCandidateList } from '@/service/candidate.service';
import type { Candiate } from '@/service/models/candidate';
import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [candidateList, setCandidateList] = useState<Candiate[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [targetCandidate, setTargetCandidate] = useState<Candiate | null>(null);

  const handleSearch = () => {
    if (!searchInput) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const [firstname, lastname] = searchInput.split(' ');
      const candidate = candidateList.find(
        (candidate) =>
          candidate.firstName === firstname && candidate.lastName === lastname
      );
      setIsOpenDialog(true);
      setTargetCandidate(candidate || null);
      if (candidate) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: {
            y: 0.7,
          },
        });
      }
    }, 1000);
  };

  useEffect(() => {
    getCandidateList().then((data) => {
      setCandidateList([
        ...data.content,
        ...data.design,
        ...data.marketing,
        ...data.programming,
      ]);
    });
  }, []);
  return (
    <NavigationBarLayout>
      <CandidateResultDialog
        candidate={targetCandidate}
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
      />

      <div className="page-container">
        <div className="search-input-label">ใส่ชื่อของคุณ</div>
        <div className="search-input-container">
          <SearchInput
            isLoading={isLoading}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onSearch={handleSearch}
          />
        </div>
      </div>
    </NavigationBarLayout>
  );
};

export default Home;
