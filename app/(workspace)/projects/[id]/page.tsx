

import MemberTable from "@/components/MemberTable";
import { useRouter } from "next/navigation";

type Props = {}

const page = ({params}: {params:{id:string}}) => {
  
  return (
    <div className=" container m-auto  relative top-5  h-screen" >

      <p className="text-xl capitalize font-bold">Project Title </p>


      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">

          <p  className="text-justify py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, provident amet vitae distinctio mollitia eligendi eveniet blanditiis architecto alias nesciunt repellendus temporibus iste deserunt atque. Quidem adipisci at commodi fugit.</p>


          <div className="mt-7">
            <div className="flex  items-center justify-between">
              <div>
              <p className="text-xl capitalize font-bold"> Project Members </p>

              </div>
               <div>
                <button className="p-2 rounded-sm bg-primary-500 text-primary-200">Invite member</button>

               </div>
      


            </div>

            <p>You can invite a new member to <span className="font-bold capitalize text-primary-500">project title</span> via email.</p>
         
            <MemberTable/>
         
          </div>


          <div className=" mt-5">

            <p className="text-xl capitalize font-bold">Boards</p>

            <p className=" mt-4">A boardrepresents a place to keep track of information — often for projects, teams, or workflows.</p>

            <div className="grid grid-cols-4 gap-4 mt-5">

               <div className=" shadow-md p-5 bg-primary-400 capitalize text-center  rounded-md hover:bg-primary-500"> 
               + create new board
               </div>


               <div className=" shadow-md p-5  bg-gradient-to-b from-secondary-300 via-primary-400 capitalize text-center  rounded-md hover:bg-primary-500"> 
                Machin learning 
               </div>



            </div>

           

          </div>
       
        </div>




{/* side menu of the project detail  */}
         <div className="col-span-1 relative top-0">

          <ul className="sticky top-0">
            <li className="font-bold ">Project info</li>
            <hr className="p-1 mt-3 text-primary-300" />
            <li className="p-2 hover:bg-primary-400 capitalize text-md rounded-md">
              <div className="flex justify-between ">
                <p>member</p>
                 <p>2</p>
              </div>
              </li>

            <li className="p-2 hover:bg-primary-400 capitalize text-md rounded-md">
            <div className="flex justify-between ">
                <p>tasks</p>
                 <p>4</p>
              </div>
            </li>

            <li className=" font-medium p-2">Docs</li>

            <li className=" mt-6 capitalize">created on</li>

             <li className="text-sm text-primary-200"> Jun-9</li>
          </ul>

         </div>
      </div>
    </div>
  )
};

export default page;