import { SiSpringboot, SiDocker, SiPostman, SiSqlite } from "react-icons/si"
import { RiNextjsLine } from "react-icons/ri"

const Tools = () => {
    return (
        <div>
            <div className=" flex flex-row flex-wrap tems-center jusitfy-between gap-4">
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostman className="text-7xl text-orange-600" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSqlite className="text-7xl text-blue-600" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDocker className="text-7xl text-blue-500" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNextjsLine className="text-7xl text-white" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-7xl text-lime-600" />
                </div>
            </div>
        </div>
    )
}

export default Tools
