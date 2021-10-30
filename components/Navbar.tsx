import Link from 'next/link'
import Image from 'next/image'


const Navbar: React.FunctionComponent = () => {
  
    return(
        <header className="header items-center fixed w-full z-50">
            <Image src="/logo.svg" width={139} height={20} />
            <nav className="text-grayishblue " >
                <ul className='navbaritems gap-7'>
                    <li className="item focus:border-limegreen"><Link href="/"><a>Home</a></Link></li>
                    <li className="item "><Link href="/about"><a>About</a></Link></li>
                    <li className="item "><Link href="/contact"><a>Contact</a></Link></li>
                    <li className="item "><Link href="/blog"><a>Blog</a></Link></li>
                    <li className="item "><Link href="/careers"><a>Careers</a></Link></li>
                </ul>
            </nav>
            
            <div>
                <button className="btn py-3 px-8 text-whitetext font-bold hover:opacity-60" >Request Invite</button>
            </div>
            
        </header>
       
    )
}

export default Navbar;