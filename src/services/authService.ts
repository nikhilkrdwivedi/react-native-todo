import axios from "axios";

export type AuthData = {
    token: string;
    email: string;
    name: string;
};

// const signIn = async () => {
//     try {
//         console.log({ form })
//         const {data} = await axios.post('http://3.111.226.44:3020/api/v1/authentications/login', form);
//         console.log({ data })
//     } catch (error) {
//         console.log( error )
//     }
// }
const signIn = async (email: string, password: string) => {
    // this is a mock of an API call, in a real app
    // will be need connect with some real API,
    // send email and password, and if credential is corret
    //the API will resolve with some token and another datas as the below
    return new Promise(async(resolve, reject) => {
    try {
        const { data } = await axios.post('http://3.111.226.44:3020/api/v1/authentications/login', { email, password });
        // console.log({ data })
        
            resolve(data);
    } catch (error:any) {
        // console.log(error)
        // console.log({"error.response":error.response.status})
        reject(error.response)
    }})
};

const register = async (name: string, email: string, password: string) => {
    // this is a mock of an API call, in a real app
    // will be need connect with some real API,
    // send email and password, and if credential is corret
    //the API will resolve with some token and another datas as the below
    return new Promise(async(resolve, reject) => {
    try {
        const { data } = await axios.post('http://3.111.226.44:3020/api/v1/authentications/register', { email, password, name });
        // console.log({ data })
        resolve(data);
    } catch (error:any) {
        console.log({"error.response":error.response.status})
        reject(error.response)
    }
});
};

export const authService = {
    signIn,
    register
}; 