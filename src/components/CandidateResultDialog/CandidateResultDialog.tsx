import { CandidateMajor } from '@/constants/CandidateMajor';
import type { Candiate } from '@/service/models/candidate';
import { Loader2 } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent } from '../ui/dialog';
import './CandidateResultDialog.css';
const CandidateResultDialog = ({
  isOpenDialog,
  setIsOpenDialog,
  candidate,
  motivatedText="",
}: {
  isOpenDialog: boolean;
  setIsOpenDialog: (isOpen: boolean) => void;
  candidate: Candiate | null;
  motivatedText?: string;
}) => {
  

  return (
    <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
      <DialogContent className="max-w-[800px]">
        <div className="content-conatiner">
          {candidate ? (
            <>
              <div className="success-header">ขอแสดงความยินดี</div>
              <div className="name">
                คุณ{' '}
                <span className="candidate-name">
                  {candidate.firstName} {candidate.lastName}
                </span>
              </div>
              <div className="sub-header">ได้ผ่านการคัดเลือก ในตำแหน่ง</div>
              <div className="badge-container">
                <Badge className={CandidateMajor[candidate.major].color}>
                  <span className="major-text">
                    {CandidateMajor[candidate.major].title}
                  </span>
                </Badge>
              </div>
              <div className="sub-header">
                หมายเลขสัมภาษณ์ {' '}
                <span className="bg-neutral-800 rounded-md px-[4px] font-bold font-mono border">
                  {candidate.interviewRefNo}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="failed-header">ขอแสดงความเสียใจ</div>
              <div className="sub-header">
                ไม่มีรายชื่อของคุณอยู่ในรายชื่อที่ผ่านการคัดเลือก
              </div>
              <div className="sub-header mt-[8px]">
                การไม่ผ่านการคัดเลือกในครั้งนี้
                ไม่ได้หมายความว่าคุณไม่มีความสามารถ 
                มันเป็นเพียงแค่จุดเริ่มต้นของการเดินทางที่ยิ่งใหญ่กว่า
                ใช้ประสบการณ์นี้เป็นแรงผลักดันในการพัฒนาตัวเอง
              </div>

              <div className="sub-header">
                เชื่อมั่นในตัวเอง และก้าวต่อไปอย่างมั่นคง
              </div>

              {motivatedText ? (
                <div className="sub-header border quote-text">
                  " {motivatedText} "
                </div>
              ) : (
                <div className='sub-header border quote-text'>
                    <Loader2 className='animate-spin' />
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CandidateResultDialog;
