type Props = {}

const InputField = ({data}: {data:{label:string,fieldName:string,placeholder:string, type?:string}}) => {
  return (
    <div className="w-full p-1">
    <label htmlFor="fristname" className=" block uppercase text-xs tracking-wide mb-2">{data.label} </label>
    <input type={data.type || "text"} id="fristname" name={data.fieldName} className=" appearance-none p-3 border w-full  bg-secondary-300 border-secondary-300 rounded-md  focus:outline-none focus: before:bg-primary-50  text-primary-50"/>

   </div>
  )
};

export default InputField;