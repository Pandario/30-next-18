import Image from "next/image";

function Hero() {
  return (
    <div className="bg-gray-100 pt-10">

        <div className="flex justify-center ">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 md:gap-8 ">

                <div className="flex flex-col  p-4  ml-4 my-1 shadow-lg rounded-lg">

                    <h1 className="text-3xl font-bold mb-4 text-center">Start your journey</h1>
                    <h3 className="text-xl mb-2">Enjoy differences with amazing mix-blend, bg-video and custom fonts! </h3>
                    <h5 className="text-xl mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam euismod, pretium orci eu, auctor sapien. Aenean eget vestibulum ex. Suspendisse et bibendum augue, nec pulvinar risus. Proin molestie, magna ut euismod sagittis, odio elit varius odio, ac molestie.</h5>
                </div>
                <div className="items-center order-first lg:order-none justify-center flex flex-col">
                <Image
                    src="/img/hero/img2.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="rounded-lg"
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero