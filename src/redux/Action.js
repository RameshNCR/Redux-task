import { ADDDATA } from "./Type"

const AddData = (data) => {
  return {
    type : ADDDATA,
    Payload : data
  }
}
export default AddData;