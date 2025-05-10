import CandidateResultDialog from '@/components/CandidateResultDialog/CandidateResultDialog';
import SearchInput from '@/components/SearchInput/SearchInput';
import { Card } from '@/components/ui/card';
import NavigationBarLayout from '@/layouts/NavigationBarLayout/NavigationBarLayout';
import { getCandidateList } from '@/service/candidate.service';
import type { Candiate } from '@/service/models/candidate';
import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';
import './Home.css';
import { getMotivatedText } from '@/service/gemini.service';

const Home = () => {
  const [candidateList, setCandidateList] = useState<Candiate[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [targetCandidate, setTargetCandidate] = useState<Candiate | null>(null);
  const [motivatedText, setMotivatedText] = useState<string>('');


  const handleSearch = () => {
    if (!searchInput) return;
    setIsLoading(true);
    setMotivatedText('');
    setTimeout(() => {
      
      const [firstname, lastname] = searchInput.toLowerCase().split(' ');
      const candidate = candidateList.find(
        (candidate) =>
          candidate.firstName.toLowerCase() === firstname &&
          candidate.lastName.toLowerCase() === lastname
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
      } else {
        getMotivatedText().then((text) => {
          setMotivatedText(text);
        });
      }

      setIsLoading(false);
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
    <NavigationBarLayout noAutoPaddingTop>
      <CandidateResultDialog
        motivatedText={motivatedText}
        candidate={targetCandidate}
        isOpenDialog={isOpenDialog}
        setIsOpenDialog={setIsOpenDialog}
      />

      <div className="page-container">
        <div className="search-input-label">ใส่ชื่อของคุณ</div>
        <div className="search-input-container-sm">
          <Card className="search-input-card">
            <SearchInput
              isLoading={isLoading}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onSearch={handleSearch}
            />
          </Card>
        </div>
        <div className="search-input-container-lg">
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
