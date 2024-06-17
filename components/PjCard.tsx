type Props = {}

const PjCard = (props: Props) => {
  return (
   
    <div className=" rounded-3xl relative top-10  shadow-md outline  outline-primary-300 hover:bg-primary-400 ">

        <img className=" w-full h-40" src="/vercel.svg"/>

        <div className="bg-gradient-to-t from-primary-200 via-primary-500  rounded-b-3xl rounded-t-none">
        <p className="text-md capitalize font-bold p-2 text-center "> Next js  projects</p>
        <p className=" text-justify p-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dicta libero distinctio magni vel, quidem amet dolore sed eos alias in quibusdam dolorum iure similique. Magni, ad laudantium. Adipisci, sapiente!</p>
        </div>
    
  </div>
  )
};

export default PjCard;