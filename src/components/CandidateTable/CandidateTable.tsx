import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { CandidateMajor } from '@/constants/CandidateMajor';
import type { Candiate } from '@/service/models/candidate';

const CandidateTable = ({ data = [] }: { data?: Candiate[] }) => {
  return (
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
              <span className="bg-neutral-800 rounded-md px-[4px] font-bold font-mono">
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
  );
};

export default CandidateTable;
