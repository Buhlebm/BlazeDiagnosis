import type { ApprovalDecision, QuoteApprovalQuote, QuoteApprovalSummary } from '@/types/quoteApproval';

export function summarizeDecisions(quote: QuoteApprovalQuote): QuoteApprovalSummary {
  let approvedCount = 0;
  let declinedCount = 0;
  let pendingCount = 0;
  let approvedTotal = 0;
  let declinedTotal = 0;

  for (const item of quote.lineItems) {
    const decision = quote.decisions[item.id];

    if (decision === 'approved') {
      approvedCount += 1;
      approvedTotal += item.lineTotal;
    } else if (decision === 'declined') {
      declinedCount += 1;
      declinedTotal += item.lineTotal;
    } else {
      pendingCount += 1;
    }
  }

  return {
    approvedCount,
    declinedCount,
    pendingCount,
    approvedTotal,
    declinedTotal,
  };
}