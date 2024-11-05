import { BsFacebook,BsTwitter,BsInstagram,BsPrinter } from "react-icons/bs";
import HeroPic from '../assets/girl.jpg';

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit">
      <p className="text-4xl mb-5 text-slate-300">I'm</p>
      <h1 className="text-6x1">Class 12</h1>
      <hr/>
      <p className="mt-10 text-slate-300 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolores aliquam id voluptas corporis blanditiis sint excepturi expedita! Repellendus eveniet suscipit modi tempora repellat ad laboriosam sed excepturi deleniti et.</p>
      </div>
      <div className="w-1/3 items-center ssm:w-fit">
        <img src={HeroPic} alt="" width={300} height={300} className="rounded-full w-full border-8 border-white"/>
      </div>
      <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">About Me</p>
        <p className="text-slate-300">
          Let's build quality in programming design  with our services 
        </p>
        <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">
          Show More.....
        </button>
        <div className="flex mt-5 space-x-4 cursor-pointer ">
          <BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
          <BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
          <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
          <BsPrinter size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
