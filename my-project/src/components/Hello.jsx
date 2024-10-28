import Typewriter from "./Typewriter"
const Hello = () => {
    const presentation="Hi, my name is Daniel";
  return (
    <div>
      <Typewriter text={presentation} delay={100}/>
    </div>
  )
}

export default Hello
