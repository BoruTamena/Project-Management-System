type Props = {}

const page = (props: Props) => {

  const boards=["todo","inprogress","completed"]
  return (
    <div className="h-screen  container m-auto">

        <div className="grid  grid-cols-12 gap-3">

        <div className="mt-9 col-span-3">

            <div className="flex space-x-1 p-1 items-center">
                <div className=" px-3 w-7 h-7  bg-secondary-600 rounded-md"/>
                <p className="capitalize text-xl">Project title</p>
            </div>

            <ul className=" mt-3">
                <li className="p-2 hover:bg-primary-400"> Boards </li>
                <li className="p-2 hover:bg-primary-400"> Members </li>
            </ul>

            <ul className="dividery-1 capitalize mt-2">
                <li className="font-bold p-2"> your boards </li>

                <li className="p-2 hover:bg-primary-400 "> Boards </li>
            </ul>


        </div>

        <div className=" flex justify-start items-start space-x-2 mt-5 col-span-9 overflow-x-auto">

           {
            boards.map((item,index)=> <TasksCard/>)
           }

            <div className="w-96 grow shrink-0 ">
              <button className="p-2  bg-primary-400 rounded-md text-center capitalize  w-full mt-9">add list</button>

            </div>
        </div>

        </div>
    </div>
  )
};

export default page;



const TasksCard=()=>{
    return (
    <div className="  w-96 grow shrink-0 shadow-sm bg-primary-50 rounded-lg p-2 mt-5">
                
        <div className="flex justify-between items-center border-t-2 border-primary-400 ">
            <p className="capitalize pt-1"> title </p>

            <div>
                |
            </div>

        </div>


        <button className="capitalize mt-5 hover:bg-primary-600 w-full p-2 rounded-md"> add  a card </button>

    </div>
    )
}