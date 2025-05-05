import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen mx-auto flex flex-col items-center bg-white">
      <div className="w-full max-w-[1280px] min-h-[50px] flex flex-row items-center justify-between p-5">
        <Image
          src="/images/banner.png"
          alt="Logo"
          width={150}
          height={100}
          className="object-contain"
        />
        <div className="w-fit">
          <nav className="Linkst-none flex flex-row items-center space-x-6 text-black font-black">
            <Link className="rounded-3xl py-2 px-5 bg-[#A0C878] text-white" href={"/"}>Home</Link>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/packages"}>Package</Link>
            <Link href={"/gallery"}>Gallery</Link>
            <Link href={"/gallery"}>About Us</Link>
            <Link className="rounded-3xl py-2 px-5 bg-[#F3274C] text-white" href={"/reserve"}>Reserve Now</Link>
          </nav>
        </div>
      </div>
      <div className="w-full min-h-[85vh] bg-black p-0">
        <div className="w-full h-full overflow-hidden absolute">
          <Image
            src="/images/carousel/1.jpg"
            alt="Logo"
            width={1920}
            height={1920}
            className="object-fill opacity-35"
          />
        </div>
        <div className="w-full max-w-[1280px] flex flex-col items-center">
          <div className="w-[50%] h-full py-5 absolute">
            <p className="text-6xl text-white font-bold mt-[180px]">
              FOOD YUMMY OLALA
            </p>
            <p className="text-xl text-white/70 font-medium mt-5">
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
            </p>

            <button className="rounded-4xl py-4 px-8 bg-[#F3274C] text-white font-bold mt-15">Reserve with us, Now</button>
          </div>
        </div>

      </div>
      <div className="w-full min-h-[60vh] max-h-[500px] bg-white flex flex-row justify-around space-x-5 p-5 z-10">

      </div>
      <div className="w-full max-w-[1280px] min-h-[60vh] max-h-[500px] bg-white flex flex-row justify-around space-x-5 p-5 z-10">
        <div className="w-full h-full m-5 bg-[#D9D9D9] rounded-2xl p-10">
          <p className="w-full text-lg font-4xl text-black font-bold">Know more about us</p>
          <div className="w-full mt-5 bg-white rounded-xl p-5">

          </div>
        </div>
      </div>
    </main>
  );
}
