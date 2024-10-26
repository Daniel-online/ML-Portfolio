import { DiJava } from "react-icons/di"
import { RiJavascriptLine,  RiNodejsLine, RiReactjsLine } from "react-icons/ri"
import { SiPython } from "react-icons/si"


const Languages = () => {
  return (
    <div>
       <div className=" flex flex-row flex-wrap tems-center jusitfy-center gap-4">
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-600" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsLine className="text-7xl text-lime-600" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptLine className="text-7xl text-yellow-600" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJava className="text-7xl text-red-600"/>
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-7xl "/>
                </div>

            </div>
    </div>
  )
}

export default Languages
