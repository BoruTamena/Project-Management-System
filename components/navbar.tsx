type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="container mx-auto sticky top-0 z-50">
        <nav className="p-4 bg-secondary-200 relative top-3" >
            <ul className="flex justify-start  items-center space-x-5">

                <li className="  text-secondary-950 ">
                   <p className=" capitalize">workspace</p>
                </li>

                <li className="text-secondary-950 flex-1">
                    <p className="capitalize">create project </p>
                </li>

                <li className="text-secondary-950 ">
                    <button className=" bg-primary-400 rounded-md capitalize p-2  text-secondary-100"> create New Project</button>
                </li>
                <li className="text-secondary-950 px-4 py-2 rounded-sm bg-secondary-500 ">
                    B
                </li>
                
            </ul>
        </nav>
    </div>
  )
};

export default Navbar;