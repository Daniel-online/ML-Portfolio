import { FaWhatsapp } from "react-icons/fa";
import Button from "./Button"

const openChat = () => {
  window.location.replace("https://wa.me/5521999462860");
}
const contactMe = () => {
  return <>
    <div className="text-bold rounded-lg bg-blue-500 ">
      CONTACT ME
    </div>
  </>
}
const whatsappClass = " z-10 flex bottom-5 right-5 justify-center items-center fixed bg-green-500 text-white w-12 h-12 px-2 py-2 rounded-full";
const WhatsappButton = () => {
  return (
    <Button
      className={whatsappClass}
      onClick={openChat}
      disabled={false}
      icon={<FaWhatsapp style={{
        fontSize: '30px'
      }} />}
    >
    {contactMe}
    </Button>
  )
}

export default WhatsappButton
