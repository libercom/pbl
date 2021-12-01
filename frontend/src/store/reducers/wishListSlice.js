import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishList: [
        // {
        //     "id": 1,
        //     "name": "Lenovo IdeaPad 3",
        //     "brand": "Lenovo",
        //     "category": "Laptops",
        //     "starting_price": 9490,
        //     "img": "/media/uploads/lenovo_ideapad_3.png",
        //     "views": 42,
        //     "ram_amount": 12,
        //     "processor_manufacturer": "AMD",
        //     "processor_frequence": "2.7 - 3.2",
        //     "processor_cores_number": 4,
        //     "display_resolution": "1920 x 1080",
        //     "display_diagonal_size": "15",
        //     "storage_capacity": "SSD: 512 GB",
        //     "graphics_card_type": "Integrated",
        //     "graphics_card_model": "Radeon Vega 8",
        //     "operating_system": "FreeDOS"
        // },
        // {
        //     "id": 2,
        //     "name": "Apple MacBook Air 13",
        //     "brand": "Apple",
        //     "category": "Laptops",
        //     "starting_price": 22990,
        //     "img": "/media/uploads/macbook_air_13.png",
        //     "views": 12,
        //     "ram_amount": 8,
        //     "processor_manufacturer": "Intel",
        //     "processor_frequence": "2.7 - 3.4",
        //     "processor_cores_number": 4,
        //     "display_resolution": "1920 x 1080",
        //     "display_diagonal_size": "13",
        //     "storage_capacity": "SSD: 256 GB",
        //     "graphics_card_type": "Integrated",
        //     "graphics_card_model": "Intel Graphics",
        //     "operating_system": "MacOS"
        // },
        // {
        //     "id": 3,
        //     "name": "Lenovo IdeaPad 5",
        //     "brand": "Lenovo",
        //     "category": "Laptops",
        //     "starting_price": 14899,
        //     "img": "/media/uploads/lenovo_ideapad_5.png",
        //     "views": 11,
        //     "ram_amount": 16,
        //     "processor_manufacturer": "Intel",
        //     "processor_frequence": "3.1 - 4.1",
        //     "processor_cores_number": 8,
        //     "display_resolution": "1920 x 1080",
        //     "display_diagonal_size": "15",
        //     "storage_capacity": "SSD: 1 TB",
        //     "graphics_card_type": "Dedicated",
        //     "graphics_card_model": "GTX 1650 TI",
        //     "operating_system": "Windows 10"
        // },
        // {
        //     "id": 4,
        //     "name": "Apple MacBook Pro 13",
        //     "brand": "Apple",
        //     "category": "Laptops",
        //     "starting_price": 29990,
        //     "img": "/media/uploads/macbook_pro_13.png",
        //     "views": 28,
        //     "ram_amount": 8,
        //     "processor_manufacturer": "Intel",
        //     "processor_frequence": "3.1 - 4.0",
        //     "processor_cores_number": 8,
        //     "display_resolution": "2560 x 1600",
        //     "display_diagonal_size": "13.3",
        //     "storage_capacity": "SSD: 256 GB",
        //     "graphics_card_type": "Integrated",
        //     "graphics_card_model": "M1",
        //     "operating_system": "MacOS"
        // },
        // {
        //     "id": 5,
        //     "name": "Huawei Matebook D 15",
        //     "brand": "Huawei",
        //     "category": "Laptops",
        //     "starting_price": 9990,
        //     "img": "/media/uploads/matebook_d15.png",
        //     "views": 3,
        //     "ram_amount": 8,
        //     "processor_manufacturer": "Intel",
        //     "processor_frequence": "2.7 - 3.2",
        //     "processor_cores_number": 4,
        //     "display_resolution": "1920 x 1080",
        //     "display_diagonal_size": "13.3",
        //     "storage_capacity": "SSD: 256 GB",
        //     "graphics_card_type": "Integrated",
        //     "graphics_card_model": "Intel Graphics",
        //     "operating_system": "Windows 10"
        // },
        // {
        //     "id": 6,
        //     "name": "Acer Nitro AN515-44",
        //     "brand": "Acer",
        //     "category": "Laptops",
        //     "starting_price": 17899,
        //     "img": "/media/uploads/nitro_acer_an515_44.png",
        //     "views": 2,
        //     "ram_amount": 16,
        //     "processor_manufacturer": "AMD",
        //     "processor_frequence": "3.1 - 4.0",
        //     "processor_cores_number": 8,
        //     "display_resolution": "2560 x 1600",
        //     "display_diagonal_size": "15.6",
        //     "storage_capacity": "SSD: 512 GB",
        //     "graphics_card_type": "Dedicated",
        //     "graphics_card_model": "GTX 1650 TI",
        //     "operating_system": "Windows 10"
        // }
    ]
}

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addItemToWishList: (state, action) => {
            state.wishList.push(action.payload)
        },
        removeItemFromWishList: (state, action) => {
            state.wishList = state.wishList.filter(item => item.id != action.payload)
        }
    }
})

export const { addItemToWishList, removeItemFromWishList } = wishListSlice.actions

export default wishListSlice.reducer