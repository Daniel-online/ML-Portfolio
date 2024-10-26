import Languages from "./Languages"
// import Databases from "./Databases"
import Tools from "./Tools"
const Mystack = () => {
    return (
        <div className="justify-between flex border-b border-radius-800 pb-12">
        
            <h2 className="my-20 text-center text-4xl">
                Languages
            </h2>
           <Languages/>

           <h2 className="my-20 text-center text-4xl">
                Tools  and Frameworks
           </h2>
           <Tools/>

           {/* <h2 className="my-20 text-center text-4xl">
                Databases
           </h2>
           <Databases/> */}


        </div>
    )
}

export default Mystack
