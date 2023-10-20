import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <pre>{JSON.stringify(session, undefined, 2)}</pre>;
    </>
  );
}
