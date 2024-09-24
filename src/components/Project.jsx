import Image from "next/image";
import { Tabs } from "./ui/tabs.jsx";
import hero1 from '../../public/hero1.jpg'
import indian from '../../public/indian.jpg'
import edwardian from '../../public/edwardian.jpeg'
import victorian from '../../public/victorian.jpg'
import random from '../../public/random.jpg'
function Project() {
  const tabs = [
    {
      title: "Indian",
      value: "Indian",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-[1rem] pl-[2rem] md:text-4xl font-bold text-white bg-[#563232]  ">
          <p>Antique Indian furniture </p>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Edwardian",
      value: "edwardian",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-[1rem] pl-[2rem] md:text-4xl font-bold text-white bg-[#563232]  ">
          <p>Antique Edwardian furniture</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Victorian",
      value: "victorian",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-[1rem] pl-[2rem] md:text-4xl font-bold text-white bg-[#563232]  ">
          <p>Antique Victorian furniture</p>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "French",
      value: "french",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-[1rem] pl-[2rem] md:text-4xl font-bold text-white bg-[#563232]  ">
          <p>Antique French furniture</p>
          <DummyContent4 />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  text-[1rem] pl-[2rem] md:text-4xl font-bold text-white bg-[#563232]  ">
          <p>Random tab</p>
          <DummyContent5 />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] perspective:1000px relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-4 mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent1 = () => {
  return (
    <Image
     src={indian}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[40vh] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent2 = () => {
  return (
    <Image
     src={edwardian}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[40vh] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent3 = () => {
  return (
    <Image
     src={victorian}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[40vh] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent4 = () => {
  return (
    <Image
     src={hero1}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[40vh] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent5 = () => {
  return (
    <Image
     src={random}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[40vh] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export default Project;
