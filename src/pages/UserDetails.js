import { useSelector } from "react-redux";
import _ from "lodash";
import "./UserDetail.css"
import UserDetailItem from "./UserDetailComponents/UserDetailItem";
import { NavLink } from "react-router-dom";

function UserDetail() {
  const Userdata = useSelector((state) => { return state.UserData});
  const IsLogin = useSelector ((state) => {return state.IsLogin});
  const Userkeys = _.keys(Userdata[0]);
  const Uservalues = _.map(Userdata, _.values);
  if(IsLogin){
  return (
    <div className="UserDetail">
      <h1>UserDetail</h1>
      <div>
        <table>
          <thead>
            <tr>
              {_.map(Userkeys,(UserKeyItem,index) => (
              <th key={index}>{UserKeyItem}</th>
              ))}
            </tr>
          </thead>
          <UserDetailItem UserValues = {Uservalues}/>
        </table>
      </div>
    </div>
  )
  }else{
    return(
      <div>
        <h1>Please Login to see the UserDetail</h1>
        <NavLink to='/'>Home</NavLink>
      </div>
    )
  }
}
export default UserDetail;