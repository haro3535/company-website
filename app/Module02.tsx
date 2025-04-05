import Link from "next/link";


export default function Module02() {
    return (
        <div className="w-full h-[50vh] flex flex-col items-center justify-center ">
            <div className="w-3/4 flex flex-col items-center justify-center bg-[var(--surface)] rounded-3xl p-8 space-y-10">
                <p>
                    "Don't wait to experience the best we have to offer. Reach out to us today and let us help you achieve your goals!"
                </p>
                <Link href="/contact" className="border-[1px] border-white px-4 rounded-full py-2 text-sm text-center">Contuct Us</Link>
            </div>
        </div>
    );
}