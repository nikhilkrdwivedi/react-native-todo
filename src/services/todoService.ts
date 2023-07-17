import axios from "axios";
import { useAuth } from "../contexts/Auth";


function getConfig (){
    const { authData, signOut }: any = useAuth();
    const config = {
        headers: { Authorization: `Bearer ${authData.token}` }
    };
    return config
}
export const getTodoList = async ()=>{
    try {
        // console.log({ authData })
        console.log( " getConfig() ",getConfig())
        const { data } = await axios.get('http://3.111.226.44:3020/api/v1/todos', getConfig());
        console.log(data)
        // setTodoData(data?.data);
        // setTodoPagination(data?.pagination)
        return data
    } catch (error) {
        console.log({ error })
    }
}

