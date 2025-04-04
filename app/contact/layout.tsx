import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Overfit Soft | Contact',
    description: 'Contact page for Overfit Soft',
};

export default function ContactLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full flex flex-col items-center">
        {children}
        </div>
    );
}