import InputField from "@/components/InputField";

type Props = {}

const page = (props: Props) => {
  return (
    <div className=" w-full h-screen">

        <form action=" " className=" flex  flex-col container m-auto w-1/2 shadow p-2 relative top-10">

            <p className="text-2xl capitalize mt-1 mb-1">log in</p>
            <div className="w-full mt-5">
            <InputField data={{label:"email",fieldName:"email",placeholder:"email@gmail.com",type:"email"}}/>

            </div>

            <div className="w-full" >
             <InputField data={{label:"password",fieldName:"password",placeholder:"password",type:"password"}}/>
            </div>

            <div className="w-full p-1">
                <button className=" capitalize bg-primary-500 rounded-md p-2 w-full mt-3  ">
                    log in
                </button>
            </div>

            <div>
                <p className="text-sm font-thin p-2 capitalize"> don't have account ? <a href="/signup" className=" text-primary-500">create account </a></p>
            </div>

              
        </form>

       
       
    </div>
  )
};

export default page;