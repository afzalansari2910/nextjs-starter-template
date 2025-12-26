import { Inngest } from 'inngest';
import { APP_NAME } from '../constants';

export const inngest = new Inngest({
  id: 'nextjs-template',
  name: `${APP_NAME} Inngest Client`,
  eventKey: process.env.INNGEST_EVENT_KEY!,
});
