export interface BankUpdateRequest {
  bankId: string;
  bankName: string;
  branchName: string;
  ifscCode: string;
  ufi: string;
  address: string;
  timestamp: string;
}

export interface BankUpdateResponse {
  success: boolean;
  message: string;
  data?: BankUpdateRequest;
} 