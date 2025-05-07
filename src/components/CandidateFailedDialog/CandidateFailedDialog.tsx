import React from 'react';
import './CandidateFailedDialog.css';

const CandidateFailedDialog: React.FC = () => {
  return (
    <div className="failed-dialog">
      <div className="content-container">
        <h1 className="header">ไม่ผ่านการคัดเลือก</h1>
        <div className="message">
          <p>การไม่ผ่านการคัดเลือกในครั้งนี้ ไม่ได้หมายความว่าคุณไม่มีความสามารถ</p>
          <p>มันเป็นเพียงแค่จุดเริ่มต้นของการเดินทางที่ยิ่งใหญ่กว่า</p>
          <p>ใช้ประสบการณ์นี้เป็นแรงผลักดันในการพัฒนาตัวเอง</p>
          <p>เชื่อมั่นในตัวเอง และก้าวต่อไปอย่างมั่นคง</p>
          <p className="quote">"ความล้มเหลวไม่ใช่จุดจบ แต่เป็นจุดเริ่มต้นของเรื่องราวใหม่"</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateFailedDialog; 