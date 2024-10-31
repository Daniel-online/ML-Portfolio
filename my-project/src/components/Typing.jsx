import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    "Node.js",
                    1000,
                    "Javascript",
                    1000,
                    "Typescript",
                    1000,
                    "Express",
                    1000,
                    "React",
                    1000,
                    "Angular",
                    1000,
                ]}
                speed={25}
                deletionSpeed={20}
                repeat={Infinity}
                style={{ fontSize: '1em' }}
            />
        </div>

  )
}

export default Typing
