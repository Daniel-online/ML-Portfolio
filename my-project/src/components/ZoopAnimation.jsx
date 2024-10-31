import { motion } from "framer-motion"
// import Typing from "./Typing"
import PropTypes from "prop-types"

const ZoopAnimation = () => {

    return (
        <div>
            <section className="">
                <ZoopMotion href="#">Linkedisney</ZoopMotion>
            </section>
        </div>
    )
}


const ZoopMotion = ({ children, href }) => {
    return <>
        <motion.a
            initial="initial"
            animate="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-4xl font-white uppercase "
        >
            <div className="inline-block">
                {children.split("").map((letter, index) => {
                    return <motion.span
                        transition={{
                            delay: 0.2 * index,
                            repeat: Infinity, // Adds looping
                            repeatType: "mirror" // Animates back and forth
                        }}
                        variants={{
                            initial: {
                                y: 0
                            },
                            hovered: {
                                y: "-100%"
                            }
                        }}
                        key={index}>
                        {letter}
                    </motion.span>
                }, [])}
            </div>
            <div className="inline-block absolute inset-0">
                {children.split("").map((letter, index) => {
                    return <motion.span
                        transition={{
                            delay: 0.2 * index,
                            repeat: Infinity, // Adds looping
                            repeatType: "mirror" // Animates back and forth
                        }}
                        variants={{
                            initial: {
                                y: "100%"
                            },
                            hovered: {
                                y: 0
                            }
                        }}
                        key={index}>
                        {letter}
                    </motion.span>
                }, [])}
            </div>
        </motion.a>
    </>
}

ZoopMotion.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string

}


export default ZoopAnimation
