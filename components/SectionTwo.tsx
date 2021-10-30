import Image from 'next/image'

const SectionTwo:React.FunctionComponent = () => {
    return (
        <section className="bg-lightgraysh -mt-44 ">

            <div className="w-full pt-24 pl-32">
                <h2 className="text-3xl text-darkblue">Why choose Easybank?</h2>
                <p className="text-grayishblue pt-8 ">We leverage Open Banking to turn your bank account into your financial hub. <br />
                   Control your finances like never before
                </p>
            </div>

            <div className="grid grid-cols-4 py-28 px-32 gap-8">
                <div>
                    <Image src="/icon-online.svg" width={72} height={72} />
                    <h5 className="text-xl py-7 text-darkblue">Online Banking</h5> 
                    <p className="text-justify text-grayishblue">Our modern and mobile applications allow you to keep track of your finances wherver you are in the world.</p>
                </div>
                <div>
                    <Image src="/icon-budgeting.svg" width={72} height={72} />
                    <h5 className="text-xl py-7 text-darkblue">Simple Budgeting</h5> 
                    <p className="text-justify text-grayishblue">See exactly where your money goes each month. Receive notifications when you're close to hitting your limmits.</p>
                </div>
                <div>
                    <Image src="/icon-onboarding.svg" width={72} height={72} />
                    <h5 className="text-xl py-7 text-darkblue">Fast Onboarding</h5> 
                    <p className="text-justify text-grayishblue">We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div>
                    <Image src="/icon-api.svg" width={72} height={72} />
                    <h5 className="text-xl py-7 text-darkblue">Open API</h5> 
                    <p className="text-justify text-grayishblue">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>

        </section>
    )
}

export default SectionTwo;