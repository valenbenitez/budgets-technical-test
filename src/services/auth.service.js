import axios from "axios";

const endpoint = "https://glou-back.herokuapp.com/auth"

export const postAuth = async function (input) {
    console.log("AUTH", input);
    try {
        const { data } = await axios.post(endpoint, input)
        console.log("data", data);
        return data
    } catch (error) {
        console.log("AUTH ER", error)
        return error
    }
}