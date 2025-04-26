import dotenv from "dotenv";
import { defineConfig } from 'drizzle-kit';

dotenv.config({ path: ".env" }); // If you need to use .env.local

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
