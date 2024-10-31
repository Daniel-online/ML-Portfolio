import { CONCLUSION1, CONCLUSION2, HERO_CONTENT, HERO_CONTENT2 } from "../constants"
// import Hello from "./Hello"
import Developer from "./Threejs/Developer"
// import Typing from "./Typing"
import { TypeAnimation } from 'react-type-animation';
// import ZoopAnimation from "./ZoopAnimation";
// import Cube from "./Threejs/Cube";
import MultiObjects from "./Threejs/MultiObjects";
// import MotionFrameExplanation from "./MotionFrameExplanation";
const Hero = () => {


    return (<>
        <div className=" border-neutral-900 pb-4 lg:mb-35 ">
            <div className="flex flex-wrap lg:flex-nowrap">
                {/* left side */}
                <div className="w-full lg:w-1/2 ">

                    <div className="ml-8 flex flex-col items-center lg:items-start">
                        <span className=" pb-10 text-6xl font-thin-extra tracking tight lg:mt-16 lg:text-6xl">
                            <TypeAnimation sequence={["Hello, i am Daniel", 4000, "Olá, eu sou Daniel", 4000, "Bonjour, je suis Daniel", 4000, "Hola soy Daniel", 4000, "こんにちは、私はダニエルです", 4000, "שלום, אני דניאל", 4000, "你好，我是丹尼尔", 4000, "مرحبا، أنا دانيال", 4000, "Привет, я Дэниел", 4000]}
                                speed={25}
                                deletionSpeed={20}
                                repeat={Infinity}
                                style={{ fontSize: '1em' }}>
                            </TypeAnimation>
                        </span>
                        <br></br>
                        <span className="flex-row flex bg-gradient-to-r from-green-600 via-green-400 to-lime-600 bg-clip-text text-transparent tracking-tight pb-10 text-3xl font-thin-extra  ">
                            {/* <ZoopAnimation/>  */}
                            Node.js, Javascript & React Developer
                        </span>

                        <p className="max-w-xl tracking-tight">
                            {HERO_CONTENT}
                            <ul className="ml-6 list-disc">

                                <li>{CONCLUSION1}</li>

                                <li>{CONCLUSION2}</li>
                            </ul>
                            {HERO_CONTENT2}
                        </p>


                    </div>

                </div>

                    <div className="style={{ width: '100%', height: '100%' }} mr-2 w-2/3 ">
                        <MultiObjects ></MultiObjects>
                       
                    </div>

            </div>

        </div>
        <div className="mr-2" >
            <Developer />
        </div>
    </>
    )
}

export default Hero
