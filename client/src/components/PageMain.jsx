import { Header } from './header'
import { Section } from './section'
import { Main } from './main'
import { Special } from './special'
import { About } from './about'
import { Footer } from './Footer'

export function PageMain() {
    return(
        <>
            <div className="absolute -z-10 h-screen w-screen">
            <img className='w-full h-full object-cover rounded-bl-3xl rounded-br-3xl absolute top-0 left-0 bottom-0' src="https://img.freepik.com/fotos-premium/ropa-moda-estante-fondo-claro-interior-generado-ia_201606-12324.jpg?w=2000" alt="" />
            </div>
            <Header/>
            <Section/>
            <Main/>
            <Special/>
            <About/>
            <Footer/>
        </>
    )
}