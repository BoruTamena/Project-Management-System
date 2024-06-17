
import InputField from "./InputField";

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div>


       <form  className=" container m-auto shadow p-2 bg-secondary-200" action="">
        <h5 className="text-2xl capitalize p-1 mb-3 font-bold"> create account</h5>

        <p className="p-1 mb-3 text-sm">if you already have an account you can <a href="/login" className="text-primary-500">login</a>  directly .</p>

        <div className="flex space-x-0 z-0">
  
          <InputField data={{label:"Frist name",fieldName:"fristname",placeholder:"placehoder"}}/>
          <InputField  data={{label:"last name",fieldName:"lastname",placeholder:"placehoder"}}/>

        </div>

        <div className="flex space-x-0 z-0 mt-3">
  
          <InputField data={{label:"Password",fieldName:"password",placeholder:"placehoder"}}/>
          <InputField  data={{label:"Confrim Password",fieldName:"lastname",placeholder:"placehoder"}}/>

        </div>

        <InputField  data={{label:"Email",fieldName:"email",placeholder:"placehoder"}}/>

        <div className="flex space-x-2 p-1 mt-1">
       <input type="checkbox" className=" p-3 m-2 "/>
       <p className="text-sm text-secondary-950"> By signing up, you are creating a Flowbite account, and you agree to Flowbite’s Terms of Use and Privacy Policy.</p>
       </div>

        <button className=" w-full bg-primary-500 rounded p-2 text-primary-100 mt-5 mb-5">Sign Up</button>
       
       </form>
       
    </div>
  )
};

export default SignUp;





