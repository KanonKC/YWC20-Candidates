import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import NavigationBarLayout from '@/layouts/NavigationBarLayout/NavigationBarLayout';
import { getCandidateList } from '@/service/candidate.service';
import type { Candiate } from '@/service/models/candidate';
import { useEffect, useState } from 'react';
import './CandidateList.css';
import ThemedButton from '@/components/ThemedButton/ThemedButton';

const CandidateList = () => {
  const [candidateList, setCandidateList] = useState<Candiate[]>([]);

  useEffect(() => {
    getCandidateList().then((data) => {
      setCandidateList([
        ...data.content,
        ...data.design,
        ...data.marketing,
        ...data.programming,
      ]);
      console.log('candidateList', candidateList);
    });
  }, [candidateList]);
  return (
    <NavigationBarLayout>
      <div className="page-container">
        <div className="table-container">
          <Input placeholder="Search" />
          <DropdownMenu>
            <DropdownMenuTrigger>
                <ThemedButton>Open</ThemedButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </NavigationBarLayout>
  );
};

export default CandidateList;
