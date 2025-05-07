import config from '@/config';
import type { CandidateListResponse } from './models/candidate';

export async function getCandidateList() {
  const response = await fetch(`${config.apiEndpoint}/homework/candidates`, {
    headers: {
      'x-reference-id': config.referenceId,
    },
  });
  const data = await response.json() as CandidateListResponse;
  return data;
}
