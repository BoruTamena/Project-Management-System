import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
      <div className="container mx-auto ">
        
        <div className="  grid  grid-cols-5 gap-4">

            <div className=" relative top-10 col-span-1  ">

              <div className="mt-3 p-2"> 


                <hr />
                <p> work spaces </p>
                
               </div>

            </div>

            <div className="relative top-10 col-span-4 ">
               <p className="font-sans font-bold text-2xl text-primary-400 capitalize"> Hello there </p>
               <p className=" py-2" > Create and manage your Project Here with us 
                  <span className=" font-bold text-primary-600"> we will handle the rest for you </span>
               </p>

               <div className="grid grid-cols-2 gap-4">

               
                <div className=" bg-primary-400 p-2 rounded-md pointer transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-50 duration-300 ">
                   <p className=" font-extrabold text-2xl ">New project </p>  
                   <p className=" pt-2 capitalize"> creating a new project for the frist time and manage with a pms tool</p>
                </div>
                 

                <div className=" bg-primary-400 p-2 rounded-md transition ease-in-out delay-150  hover:-translate-y-1  hover:scale-50 duration-300">
                   <p className=" font-extrabold text-2xl text-secondary-200 ">My projects </p>  
                   <p className=" pt-2 capitalize"> view all your  existing project </p>

                  
                </div>


               </div>



            <section>
              <p className="pt-5 capitalize"> recent projects </p>

               <div className="grid grid-cols-4">

                <div className="relative top-4 shadow-sm rounded-md ">

                  <img className=" w-full h-40" src="/vercel.svg"/>

                  <div className="bg-gradient-to-t from-primary-200 via-primary-500 ">
                  <p className="text-md capitalize font-bold p-2 text-center "> Next js  projects</p>
                  <p className=" text-justify p-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dicta libero distinctio magni vel, quidem amet dolore sed eos alias in quibusdam dolorum iure similique. Magni, ad laudantium. Adipisci, sapiente!</p>
                  </div>
                  
                </div>
               </div>
            </section>

            </div>



            
        </div>
        
      </div>
    </main>
  );
}
