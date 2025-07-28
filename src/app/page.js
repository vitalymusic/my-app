import Image from "next/image";
import MySlider from "./components/Slider.js";
import Accordion from "./components/Accordion.js";
export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
       <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">Galvenā lapa</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
           
            <div className="w-full max-w-screen-lg mx-auto px-4">
              <MySlider />
            </div>
            <div className="w-full max-w-screen-lg mx-auto px-4">
              <Accordion />
            </div>


      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
