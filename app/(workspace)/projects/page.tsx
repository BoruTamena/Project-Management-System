import PjCard from "@/components/PjCard";

type Props = {}

const page = (props: Props) => {

    const data=[0,0,0,0]
  return (
    <div className="container m-auto w-full h-screen">

        <div className="grid grid-cols-4 gap-4">
            {
                data.map((item,index)=> <div className="col-span-1 ">
                    <PjCard/>
                </div>
                )
            }
        </div>

    </div>
  )
};

export default page;