export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary vh-100">
      {children}
    </div>
  );
}
