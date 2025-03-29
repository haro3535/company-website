

export default function AboutLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col items-center">
      {children}
    </div>
  );
}