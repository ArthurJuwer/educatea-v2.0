import Image from "next/image";
import MainLogo from "../public/images/logos/MainLogo.png";
import IconYoutube from "../public/images/icons/Youtube.png";

export default function MainContent() {
  return (
    <div className="h-[85dvh] flex items-center justify-between flex-col pt-10 pb-15 bg-[#595959]">
        <Image src={MainLogo} width={220} height={220} alt="" />
        <div className="w-[680px] h-[380px] bg-white flex items-center justify-center">
            <Image src={IconYoutube} width={90} height={90} alt="" />
        </div>
        <h1 className="text-center text-white text-2xl font-bold">CONHEÇA O PROJETO <br /> EDUCATEA!</h1>
    </div>
  )
}
