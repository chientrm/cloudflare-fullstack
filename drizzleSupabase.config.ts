import type { Config } from "drizzle-kit";
import { config } from 'dotenv';

config();

export default {
    schema: "src/db/schemas/schemaSupabase/*",
    out: "migrationsSupabase",
    driver: 'pg',
    breakpoints: true,

    dbCredentials: {
        connectionString: String(process.env.COCKROACH_PG_URL)
    },

} satisfies Config;
