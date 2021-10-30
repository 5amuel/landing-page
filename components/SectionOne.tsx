import Image from 'next/image'
const SectionOne: React.FunctionComponent = () =>{
    return (
        
        <section className="grid grid-cols-2 bg-verylightgray " >

            <div className=" pt-60 ml-32 pb-80 w-full">
                <h1 className="text-5xl text-darkblue">Next generation <br /> digital banking</h1>
                <p className="py-8 text-grayishblue ">Take your financial life online. Your Easybank account <br />
                    will be a one-stop-shop for spending saving, <br /> budgeting, investing, and much more</p>
                <button className="btn py-3 px-8 text-whitetext font-bold hover:opacity-60" >Request Invite</button>
            </div>

            <div className="relative ">
               
                <div className="absolute -mt-32 -mr-80 -ml-44 pl-24" >
                    <Image src="/bg-intro-desktop.svg" width={1200} height={930}/>
                </div>
                    
              
                <div className="absolute -mr-80 pl-20 -mt-16 ">
                    <Image  src="/image-mockups.png" width={770} height={900}/>
                </div>
            </div>
        
        </section>
        
    )
}
export default SectionOne;