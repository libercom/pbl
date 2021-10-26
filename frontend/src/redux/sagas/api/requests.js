import axios from "axios";

export const getSearch = async (search) => {
    const result = await axios.get(`/api/products/search/${search}`)
    return result.data
}

export const getDevices = async (category) => {
    const result = await axios.get(`/api/${category}`)
    return result.data
}

export const getDetails = async (device) => {
    const result = await axios.get(`/api/products/${device.replaceAll('-', ' ').replaceAll('_', '-')}`)
    return result.data
}

export const getPopularDevices = async () => {
    const result = await axios.get('/api/products/popular')
    return result.data
}

