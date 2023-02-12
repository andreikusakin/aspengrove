import './mainWrapper.css'
import Navbar from '../navbar/Navbar'
import NavbarFullScreen from '../navbarFullScreen/NavbarFullScreen'
import { useInView } from "react-intersection-observer"
import { useWindowWidth } from '@react-hook/window-size'

const MainWrapper = () => {
    const onlyWidth = useWindowWidth()
    const [ref, inView] = useInView({
        rootMargin: '-20px'
      })

    return (
        
        <div id="home" ref={ref} className='main-wrapper'>
            { (!inView || onlyWidth < 600) && <NavbarFullScreen inView={inView} />}
            <div className='background-mw'></div>
            <span className='title-wrapper fade-in'><p>Aspen Grove</p></span>
            <Navbar />
        </div>
    )
}

export default MainWrapper