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

const CandidateTable = ({
  data = [],
}: {
  data?: Candiate[];
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center w-[150px]">
            หมายเลขผู้สัมภาษณ์
          </TableHead>
          <TableHead>ชื่อ</TableHead>
          <TableHead>นามสกุล</TableHead>
          <TableHead className="text-center">สาขา</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((candidate) => (
          <TableRow key={candidate.interviewRefNo}>
            <TableCell className="text-center">
              <span className="bg-neutral-800 rounded-md px-[4px] font-bold font-mono border">
                {candidate.interviewRefNo}
              </span>
            </TableCell>
            <TableCell>{candidate.firstName}</TableCell>
            <TableCell>{candidate.lastName}</TableCell>
            <TableCell className="text-center">
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
