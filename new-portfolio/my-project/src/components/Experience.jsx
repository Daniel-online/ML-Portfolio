import { EXPERIENCES } from "../constants";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2>
                Experiences
            </h2>
            <div >
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="">
                        <div className="flex-wrap rounded-lg border-b border-neutral-900 bg-white ml-2 mr-2 my-2 mx-2">
                            <section className="w-full lg:w-1/4 ml-4 mr-4 items-center flex flex-row">
                                <p className="text-green-600 ">{experience.year} </p>
                                <h4 className="justify-center">{experience.role} </h4>
                            </section>
                            
                            <p className="">{experience.company} </p>
                            <p className="">{experience.description} </p>
                            <p className="">{experience.technologies} </p>
                        </div>
                    </div>
                )
                )
                }
            </div>
        </div>
    );
};
export default Experience;
