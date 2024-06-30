import Image from "next/image";
import Hero from "../components/About";
import Introduction from "../components/Introduction";
import Technology from "../components/Technology";
import Project from "../components/Project";
import Connect from "../components/Connect";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" min-h-screen w-screen bg-black-100 overflow-x-hidden">
    <div className="w-full overflow-x-hidden">
<Navbar></Navbar>
<Introduction></Introduction>
      <Hero></Hero>
      
      <Technology></Technology>
      

<Project></Project>
<Connect></Connect>
    </div>
    </main>
  );
}
