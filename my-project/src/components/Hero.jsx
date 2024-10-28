import { HERO_CONTENT } from "../constants"
import Hello from "./Hello"
import Developer from "./Threejs/Developer"
// import Cube from "./Cube";

const Hero = () => {


    return (<>
        <div className=" border-neutral-900 pb-4 lg:mb-35 ">
            <div className="flex flex-wrap lg:flex-nowrap ">
                {/* left side */}
                <div className="w-full lg:w-1/2  ">

                    <div className="ml-8 flex flex-col items-center lg:items-start">
                        <h1 className=" pb-10 text-6xl font-thin-extra tracking tight lg:mt-16 lg:text-7xl">
                            <Hello/>
                        </h1>
                        <span className="bg-gradient-to-r from-green-600 via-green-400 to-lime-600 bg-clip-text text-transparent tracking-tight pb-10 text-3xl font-thin-extra ">
                            Node.js, Javascript & TypeScript <span className="text-green-600 tracking-tight">Developer</span>
                        </span>

                        <p className="max-w-xl tracking-tight">
                            {HERO_CONTENT}
                        </p>

                    </div>

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
