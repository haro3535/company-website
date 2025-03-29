
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div>
            <div className="min-h-[80vh] flex justify-between ">
                <div className="w-1/2 flex flex-col items-start justify-center px-10">
                    <h1 className="text-3xl font-bold text-gray-300">About Us</h1>
                    <p className="text-[13px] mt-2">
                        We are a software development company that specializes in creating innovative solutions for businesses of all sizes. Our team of experienced developers, designers, and project managers work together to deliver high-quality software that meets the unique needs of our clients.
                    </p>
                </div>
                <div className=" w-1/2 flex flex-col items-start justify-center px-10">
                    <div className='relative'>
                        <Image 
                            src="https://picsum.photos/600/400"
                            alt="About Us"
                            width={600}
                            height={400}
                            className="rounded-lg "
                        />
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white rounded-tl-lg"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white rounded-tr-lg"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white rounded-bl-lg"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white rounded-br-lg"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* Add more content here as needed */}
            </div>
        </div>
    );
}