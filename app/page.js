import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-0 m-0">
      <div className="relative overflow-hidden rounded-b-[50px]">
        {/* background*/}
        <span
        className="absolute block w-screen h-[100vh] z-10 bg-gradient-to-b from-transparent to-[#000]"
        ></span>
        {/* content */}
        <div
        className="absolute z-[11] w-screen h-screen flex flex-col justify-center items-center m-auto"
        >
          <div className="m-auto flex items-center flex-col">
            <p className="text-white  capitalize w-full text-center text-4xl font-bold">
              delicious food is waiting for you
            </p>
            <a scroll={false} className="text-white cursor-pointer font-semibold rounded-md text-xl m-4 mt-6 px-4 py-2 bg-rose-900 animate-bounce" href="/#menu">
              View Menu 
            </a>
          </div>
        </div>
        <main className="relative w-screen h-[100vh]">
          <Image src={"/headre.jpg"} objectFit="cover" alt="svg" fill={true} />
        </main>
      </div>
      <div id="menu" className="m-auto my-5">
        <Menu />
      </div>
    </div>
  );
}
