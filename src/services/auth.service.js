import axios from "axios";

const endpoint = "https://glou-back.herokuapp.com/auth"

export const postAuth = async function (input) {

    try {
        const { data } = await axios.post(endpoint, input)
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}