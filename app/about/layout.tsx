import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Overfit Soft | About',
  description: 'About page for Overfit Soft',
};

export default function AboutLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col items-center">
      {children}
    </div>
  );
}