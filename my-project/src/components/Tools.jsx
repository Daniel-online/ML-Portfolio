import { SiSpringboot, SiDocker, SiPostman, SiSqlite, SiMongodb } from "react-icons/si"
import { RiNextjsLine } from "react-icons/ri"

const Tools = () => {
    return (
        <div className="ml-4">
            <h2 className="mr-3 my-20 text-center text-4xl">
                Tools  and Frameworks
            </h2>
            <div className="mr-3 flex flex-row flex-wrap tems-center jusitfy-between gap-4">
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostman className="text-5xl text-orange-600" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSqlite className="text-5xl text-blue-600" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-5xl text-green-600" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDocker className="text-5xl text-blue-500" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNextjsLine className="text-5xl text-white" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-5xl text-lime-600" />
                </div>
            </div>
        </div>
    )
}

export default Tools
