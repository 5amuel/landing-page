import Image from 'next/image'
const SectionThree:React.FunctionComponent = () => {
    return(
        <section className="bg-verylightgray py-24">
            <div className="w-full  pl-32">
                <h1 className="text-3xl text-darkblue">Latest Articles</h1>
            </div>
            <div className="grid grid-cols-4 px-32 gap-8 pt-12">
                <div className="bg-whitetext rounded-b-lg">
                    <div className=" rounded-t-lg overflow-hidden bg-red-400">
                        <Image src="/image-currency.jpg" layout="responsive" width={265} height={200} />
                    </div>
                    <div className="pt-8 px-5">
                        <h6 className="text-xs text-grayishblue">By Claire Robinson</h6>
                        <h4 className="text-darkblue py-2">Receive money in any currency with no fees</h4>
                        <p className="text-sm text-grayishblue pb-8 ">The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...</p>
                    </div>
                    
                </div>
                <div className="bg-whitetext rounded-b-lg">
                    <div className=" rounded-t-lg overflow-hidden bg-red-400">
                        <Image src="/image-restaurant.jpg" layout="responsive" width={265} height={200} />
                    </div>
                    <div className="pt-8 px-5">
                        <h6 className="text-xs text-grayishblue">By Wilson Hutton</h6>
                        <h4 className="text-darkblue py-2">Treate yourself without worring about money</h4>
                        <p className="text-sm text-grayishblue pb-8">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...</p>
                    </div>
                </div>
                <div className="bg-whitetext rounded-b-lg">
                    <div className=" rounded-t-lg overflow-hidden bg-red-400">
                        <Image src="/image-plane.jpg" layout="responsive" width={265} height={200} />
                    </div>
                    <div className="pt-8 px-5">
                        <h6 className="text-xs text-grayishblue">By Wilson Hutton</h6>
                        <h4 className="text-darkblue py-2">Take your Easybank card wherever you go</h4>
                        <p className="text-sm text-grayishblue pb-8">We want you to enjoy your travels. THis is why we don't change any fees on purchase while you're abroad. We'll even show you ...</p>
                    </div>
                </div>
                <div className="bg-whitetext rounded-b-lg">
                    <div className=" rounded-t-lg overflow-hidden bg-red-400">
                        <Image src="/image-confetti.jpg" layout="responsive" width={265} height={200} />
                    </div>
                    <div className="pt-8 px-5">
                        <h6 className="text-xs text-grayishblue">By Claire Robinson</h6>
                        <h4 className="text-darkblue py-2">Our invive-only Beta accounts are now live! </h4>
                        <p className="text-sm text-grayishblue pb-8">After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionThree;