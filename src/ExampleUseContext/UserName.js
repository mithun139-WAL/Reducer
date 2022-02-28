import { useContext } from "react";
import UserObContext from "../UserObContext";
const UserName = () => {
    const UserOb = useContext(UserObContext);
    return(
        <div>
            <div>Name: {UserOb.personal.name}</div>
        </div>
    )
}
export default UserName;