import { ABOUT_TEXT_FIRST, ABOUT_TEXT_FOURTH, ABOUT_TEXT_THIRD, ABOUT_TEXT_SECOND } from '../constants';
import perfil from './../assets/images/chatbot-dev.jpeg';

const About = () => {
    return (
        <div className=" border-neutral-900 pb-4 lg:mb-35">
            <h1 className="my-20 font-medium text-center text-4xl">
                About
                <span className="mx-2  bg-gradient-to-r from-green-600 via-green-400 to-lime-600 bg-clip-text text-transparent tracking-tight pb-10 text-3xl font-thin-extra" >
                    ME
                </span>
            </h1>

            <div className='flex flex-shrink-0 justify-between py-4 items-center py-2 px-2 '>
                <div className='rounded-xl  bg-gradient-to-tl from-black to-green-700 ml-6 to-50% w-1/3 h-1/4'>
                    <img src={perfil} alt="Developing a chatbot" className='rounded-xl' />
                    <h6 className=' text-center text-white clip-text justify-between'>
                        My first office
                    </h6>
                </div>
                {/* preciso separar isso em um componente */}

                <div className='border-neutral-900 justify-center lg:justify-start ml-12 font-normal mr-6 w-3/4 h-1/4 px-2'>
                    <ul className='list-disc'>
                        <li>{ABOUT_TEXT_FIRST}</li><br></br>
                        <li>{ABOUT_TEXT_SECOND}</li><br></br>
                        <li>{ABOUT_TEXT_THIRD}</li><br></br>
                        <li>{ABOUT_TEXT_FOURTH}</li><br></br>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
