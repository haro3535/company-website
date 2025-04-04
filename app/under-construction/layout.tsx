import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Overfit Soft | Under Construction',
    description: 'Under construction page for Overfit Soft',
};


export default function ConstructionLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full flex flex-col items-center">
        {children}
        </div>
    );
}