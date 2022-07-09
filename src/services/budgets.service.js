import axios from 'axios'

const endpoint = "https://glou-back.herokuapp.com/budgets"

export const postBudget = async function (newBudget, token) {
    const { data } = await axios.post(endpoint, newBudget, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const getBudget = async function (id, token) {
    const { data } = await axios.get(`${endpoint}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}