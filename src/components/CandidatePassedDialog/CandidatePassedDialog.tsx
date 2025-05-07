import type { Candiate } from '@/service/models/candidate';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent } from '../ui/dialog';
import './CandidatePassedDialog.css';
import { CandidateMajor } from '@/constants/CandidateMajor';

const CandidatePassedDialog = ({
  isOpenDialog,
  setIsOpenDialog,
  candidate,
}: {
  isOpenDialog: boolean;
  setIsOpenDialog: (isOpen: boolean) => void;
  candidate: Candiate;
}) => {
  return (
    <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
      <DialogContent>
        <div className="content-conatiner">
          <div className="header">ขอแสดงความยินดี</div>
          <div className="name">
            คุณ{' '}
            <span className="candidate-name">
              {candidate.firstName} {candidate.lastName}
            </span>
          </div>
          <div className="sub-header">ได้ผ่านการคัดเลือก ในตำแหน่ง</div>
          <Badge className={CandidateMajor[candidate.major].color}>
            <span className="major-text">{CandidateMajor[candidate.major].title}</span>
          </Badge>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CandidatePassedDialog;
