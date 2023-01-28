import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' });

const environment = z.object({
  TOKEN: z.string(),
  CLIENT_ID: z.string(),
});

environment.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof environment> {}
  }
}
