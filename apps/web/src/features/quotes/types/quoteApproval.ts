export type ApprovalDecision = 'approved' | 'declined';

export type QuoteApprovalStatus =
  | 'sent'
  | 'approved'
  | 'partiallyApproved'
  | 'declined'
  | 'expired';


export interface QuoteApprovalLineItem {
  id: string;
  kind: 'labour' | 'part' | 'consumable';
  description: string;
  quantity: number;
  unitPrice: number;   
  lineTotal: number;
}

export interface QuoteApprovalQuote {
  id: string;
  reference: string;
  status: QuoteApprovalStatus;
  currency: 'ZAR';
  expiresAt: string | null;
  lineItems: QuoteApprovalLineItem[];
  decisions: Record<string, ApprovalDecision>;
}

export interface QuoteApprovalSummary {
  approvedCount: number;
  declinedCount: number;
  pendingCount: number;
  approvedTotal: number;
  declinedTotal: number;
}