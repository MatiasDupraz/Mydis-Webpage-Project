//The categories
let categories = [
    {
        ID: "MYD123",
        name: "Teclados",
        parentCategoryID: "",
    },
    {
        ID: "MYD1231",
        name: "Mecánico",
        parentCategoryID: "MYD123",
    },
    {
        ID: "MYD1232",
        name: "Membrana",
        parentCategoryID: "MYD123",
    },
    {
        ID: "MYD12311",
        name: "Gamer",
        parentCategoryID: "MYD1231",
    },
    {
        ID: "MYD12312",
        name: "Auriculares",
        parentCategoryID: "",
    },
    {
        ID: "MYD123121",
        name: "Auriculares Gamer",
        parentCategoryID: "MYD12312",
    },
    {
        ID: "MYD1231211",
        name: "Bluetooth",
        parentCategoryID: "MYD123121",
    },
    {
        ID: "MYD12312112",
        name: "Redragon",
        parentCategoryID: "MYD1231211",
    },
]

export default categories