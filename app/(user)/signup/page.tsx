import SignUp from "@/components/signup";

type Props = {}

const page = (props: Props) => {
  return (
    <div className=" w-full h-screen relative top-2 p-4">

      <div className="grid grid-cols-2 container m-auto">


       <div>
          <h1 className="text-4xl capitalize font-extrabold text-primary-400">wel come !! </h1>

          <p className="p-2 m-2 font-light text-xl relative top-3 mb-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis ut vero eaque, aspernatur corporis dignissimos mollitia officiis voluptates labore numquam rerum officia assumenda, ratione repellat odio doloribus possimus fugit?</p>


          <ul className=" p-5">
              <ListItem data={{content:"Mark your project success with pms"}}/>
              <ListItem data={{content:"successfully task management on fly"}}/>
              <ListItem data={{content:"Collaborate with your group "}}/>
             
          </ul>

        </div>

         <div>
           <SignUp/>
         </div>

      </div>
    </div>
  )
};

export default page;



const ListItem =({data}:{data:{content:string}})=>{
  return(
    <li className="flex items-center mb-3">
          <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
              <p className="ml-4 text-2xl capitalize">{data.content} </p>
     </li>
  )

}