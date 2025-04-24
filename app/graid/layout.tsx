import DashNav from "./_components/DashNav";


export default function GraidLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col items-center min-h-screen">
        <DashNav />
        {children}
    </div>
  );
}