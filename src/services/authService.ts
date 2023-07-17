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
    try {
        const { data } = await axios.post('http://3.111.226.44:3020/api/v1/authentications/login', { email, password });
        console.log({ data })
        return new Promise((resolve) => {
            resolve(data.data);
        });
    } catch (error) {
        console.log(error)
    }
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       token: JWTTokenMock,
    //       email: email,
    //       name: 'Lucas Garcez',
    //     });
    //   }, 1000);
    // });
};

export const authService = {
    signIn,
}; 