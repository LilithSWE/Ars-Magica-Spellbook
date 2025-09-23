import postgres from "postgres";

const connectionString = process.env.VITE_SUPABASE_URL as string;
const sql = postgres(connectionString);

export default sql;
