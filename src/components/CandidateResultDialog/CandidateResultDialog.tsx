import type { Candiate } from '@/service/models/candidate';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent } from '../ui/dialog';
import './CandidateResultDialog.css';
import { CandidateMajor } from '@/constants/CandidateMajor';

const CandidateResultDialog = ({
  isOpenDialog,
  setIsOpenDialog,
  candidate,
}: {
  isOpenDialog: boolean;
  setIsOpenDialog: (isOpen: boolean) => void;
  candidate: Candiate | null;
}) => {
  return (
    <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
      <DialogContent className="max-w-[800px]">
        <div className="content-conatiner">
          {candidate ? (
            <>
              <div className="header">ขอแสดงความยินดี</div>
              <div className="name">
                คุณ{' '}
                <span className="candidate-name">
                  {candidate.firstName} {candidate.lastName}
                </span>
              </div>
              <div className="sub-header">ได้ผ่านการคัดเลือก ในตำแหน่ง</div>
              <Badge className={CandidateMajor[candidate.major].color}>
                <span className="major-text">
                  {CandidateMajor[candidate.major].title}
                </span>
              </Badge>
            </>
          ) : (
            <div className="message">
              <p>
                การไม่ผ่านการคัดเลือกในครั้งนี้
                ไม่ได้หมายความว่าคุณไม่มีความสามารถ
              </p>
              <p>มันเป็นเพียงแค่จุดเริ่มต้นของการเดินทางที่ยิ่งใหญ่กว่า</p>
              <p>ใช้ประสบการณ์นี้เป็นแรงผลักดันในการพัฒนาตัวเอง</p>
              <p>เชื่อมั่นในตัวเอง และก้าวต่อไปอย่างมั่นคง</p>
              <p className="quote">
                "ความล้มเหลวไม่ใช่จุดจบ แต่เป็นจุดเริ่มต้นของเรื่องราวใหม่"
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CandidateResultDialog;
