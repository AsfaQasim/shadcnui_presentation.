
import Link from "next/link"
export default function Header(){
return(
<div className="bg-slate-500 text-yellow-50">
<header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">

<span className="mr-3 text-xl text-white">Shadcn UI</span>
</a>
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link href={'./'} className="mr-5 hover:text-gray-900">Home</Link>
      <Link href = {'./About'}className="mr-5 hover:text-gray-900">About</Link>
      <Link  href ={'/Article'}className="mr-5 hover:text-gray-900">Article</Link>
    
    </nav>

 
    </div>
  
</header>
</div>
)
}