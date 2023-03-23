import _ from "lodash";
const UserDetailItem = (props) => {
  const Uservalues = props.UserValues
  return (
    <tbody className="UserDetailItem">
      {_.map(Uservalues, (VauleItems,index) =>(
        <tr key={index}>
          {_.map(VauleItems, (Value, index) => (
            <td key={index}>{Value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
export default UserDetailItem;