import Image from "next/image";
import Link from 'next/link';
const Newsletter = () => {
    return (
        <>
            {/* <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl testimonialbg"> */}
            <div className="mx-auto max-w-3xl md:max-w-7xl rounded-3xl px-6 pt-10 mt-5">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">

                    <div className="col-span-12 bg-imagee">
                        <div className="mb-10 mt-24 lg:mx-64 lg:mt-24 lg:mb-10">
                            <h3 className="text-4xl md:text-55xl text-center font-semibold text-white mb-3">Interested in Our Courses?</h3>
                            <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                                Register now to get enrollment.
                            </h3>
                             <Link href="/contact-us">
                               <button className="bg-white text-lg font-medium py-4 px-6 transition duration-150 ease-in-out rounded-full  hover:bg-paleblue text-center flex justify-center max-w-xl mx-auto">
                        Register
                    </button>
                    </Link>
                          
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Newsletter;