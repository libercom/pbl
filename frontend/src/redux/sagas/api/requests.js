import axios from "axios";

export const getSearch = async (search) => {
    const result = await axios.get(`/api/products/search/${search}`)
    return result.data
}

export const getDevices = async () => {
    const result = await axios.get('/api/products')
    return result.data
}

export const getDetails = async (device) => {
    const result = await axios.get(`/api/products/${device}`)
    return result.data
}