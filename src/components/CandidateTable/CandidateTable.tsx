import { CandidateMajor } from '@/constants/CandidateMajor';
import type { Candiate } from '@/service/models/candidate';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CandidateTable = ({ data = [] }: { data?: Candiate[] }) => {
  return (
    <Card className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Interview Ref No</TableHead>
            <TableHead>Major</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((candidate) => (
            <TableRow key={candidate.interviewRefNo}>
              <TableCell>{candidate.firstName}</TableCell>
              <TableCell>{candidate.lastName}</TableCell>
              <TableCell>
                <span className='bg-neutral-300 rounded-md px-1 font-bold font-mono'>
                  {candidate.interviewRefNo}
                </span>
              </TableCell>
              <TableCell>
                <Badge className={CandidateMajor[candidate.major].color}>
                  {CandidateMajor[candidate.major].title}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CandidateTable;
