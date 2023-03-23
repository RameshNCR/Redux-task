import { ADDDATA } from "./Type";
const initialState ={
  IsLogin : false,
  UserData : [{
    UserName : "Ramesh",
    Email : "someone@gmail.com",
    Password : "Ramesh1234@"
  }]
}

const Reducer = (State=initialState,Action) => {
  switch(Action.type){
    case ADDDATA :
      return {
        ...State,
        IsLogin : true,
        UserData :[...State.UserData, ...Action.Payload]
      }
    default :
      return State
  }
}
export default Reducer;