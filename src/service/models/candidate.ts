type CandidateMajor = 'web_content' | 'web_design' | 'web_programming' | 'web_marketing';

export interface Candiate {
  firstName: string;
  lastName: string;
  interviewRefNo: string;
  major: CandidateMajor;
}

export interface CandidateListResponse {
  design: Candiate[];
  content: Candiate[];
  marketing: Candiate[];
  programming: Candiate[];
}
