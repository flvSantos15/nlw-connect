import { Config } from 'drizzle-kit'
import { env } from './src/env'

// Parei em 23:07

export default {
  schema: './src/drizzle/schema/*',
  out: './src/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL
  }
} satisfies Config