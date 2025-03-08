import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { env } from "../env"
import { subscriptions } from "./schema/subscriptions"

export const drizzleClient = postgres(env.POSTGRES_URL)
export const db = drizzle(drizzleClient, {
  schema: {
    subscriptions
  }
})