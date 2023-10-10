import { SectionWrapper } from '@components/react/ui/molecules/HOC'
import { Navbar } from '../navbar/Navbar'

export const Hero = () => {
    return (
        <div className='relative '>
            <Navbar />


        </div>
    )
}

export const HeroMotion = SectionWrapper(Hero, 'home');
