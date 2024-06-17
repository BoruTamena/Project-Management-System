type Props = {}

const MemberTable = (props: Props) => {
  return (
    <div className=" ">
        <table className="table-auto w-full mt-5">
        <thead className=" text-left uppercase font-light border-t border-b ">
            <tr className="">
            <th className="px-6 py-3">acount</th>
            <th className="px-6 py-3">role</th>
            <th className="px-6 py-3">Time/Year/month</th>
            </tr>
        </thead>
        <tbody>
        
            <TableRow/>
            <TableRow/>
        </tbody>
        </table>
    </div>
  )
};

export default MemberTable;




const TableRow=()=>{
    return (
    <tr className="   border-b ">
        <td className="px-6 py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td  className="px-6 py-3">Malcolm Lockyer</td>
        <td  className="px-6 py-3">1961</td>
      </tr>
    )
}