import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
      <div className="container mx-auto ">
        
        <div className="bg-gradient-radial from-secondary-500 to-primary-600 h-auto p-5 mt-5">

            <div className="relative top-10 col-span-4 ">
               <p className="font-sans font-bold text-9xl text-primary-400 capitalize text-center"> Hello there </p>
               <p className=" py-3 text-4xl m-5 text-center capitalize" > Create and manage your Project Here with us 
                we will handle the rest for you
               </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10 p-10">
               
               <div className=" bg-primary-500 rounded-3xl hover:bg-primary-800">
                 <p className=" text-primary-200 text-center p-5 font-bold capitalize">New Project  </p>
               </div>
   

               <div className="  rounded-3xl outline-dashed hover:outline-none hover:bg-secondary-500">
                 <p className=" text-primary-200 text-center p-5 font-bold capitalize">My  Project  </p>
               </div>
              </div>


        </div>



        <section>

            <div className="grid grid-cols-4 mt-10 mb-7 gap-5" >

              <div className=" border-l-8 border-l-primary-400 rounded-md  shadow-2xl shadow-primary-400 -rotate-6">
                 <p className=" text-2xl font-bold p-4 capitalize"> Project management </p>
                 <p className=" text-primary-100 p-4 ">Keep Tasks in order ,deadline on track , and team member aligned</p>
              </div>


              <div className=" border-l-8 border-l-primary-400 rounded-md  shadow-2xl shadow-primary-400 -rotate-6">
                 <p className=" text-2xl font-bold p-4 capitalize"> Collaboration</p>
                 <p className=" text-primary-100 p-4 ">Collaborating with your team to work on the project is essential for the project success</p>
              </div>

              <div className=" border-l-8 border-l-primary-400 rounded-md  shadow-2xl shadow-primary-400 -rotate-6">
                 <p className=" text-2xl font-bold p-4 capitalize"> Task management </p>
                 <p className=" text-primary-100 p-4 ">Managing project in a task wise is the most .</p>
              </div>

              <div className=" border-l-8 border-l-primary-400 rounded-md  shadow-2xl shadow-primary-400 -rotate-6">
                 <p className=" text-2xl font-bold p-4 capitalize"> Project management </p>
                 <p className=" text-primary-100 p-4 ">Keep Tasks in order ,deadline on track , and team member aligned</p>
              </div>


            </div>


        </section>


        <section className="mt-10">
          <p className="text-xl uppercase  font-bold">How it work</p>


          <div className=" grid grid-cols-4 relative top-0">

            <div className=" col-span-2 m-5 ">
              <p className="capitalize  mt-5 font-semibold">Sign Up with Us </p>
              <p className="text-wrap text-primary-950 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam eos soluta inventore sunt? Saepe perspiciatis, est mollitia nemo animi eaque iusto dolor unde in sapiente autem dolorum nihil itaque.</p>
             </div>
          </div>
        </section>

        <section></section>
        
      </div>
    </main>
  );
}
