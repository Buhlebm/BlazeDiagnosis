import {z} from 'zod';

export const approvalDecisionSchema = z.object({
  lineItemId: z.string().min(1),
  decision: z.enum(['approved', 'declined']),
});

export const quoteApprovalRequestSchema = z.object({
  decisions: z.array(approvalDecisionSchema).min(1).max(200),
});

export type QuoteApprovalRequest = z.infer<typeof quoteApprovalRequestSchema>;