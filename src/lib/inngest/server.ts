import { serve } from 'inngest/next';
import { inngest } from './client';

export const { GET, POST, PUT } = serve({
  client: inngest,
  signingKey: process.env.INNGEST_SIGNING_KEY!,
  functions: [],
});
