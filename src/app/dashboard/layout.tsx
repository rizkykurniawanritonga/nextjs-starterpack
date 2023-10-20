import HeaderDash from "@/components/dash/header";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderDash />
      {children}
    </>
  );
}
