//The categories
let categories = [
    {
        ID: "MYD123",
        name: "Teclados",
        parentCategoryID: "",
        depth: 0,
        link: "",
    },
    {
        ID: "MYD1231",
        name: "Mecánico",
        parentCategoryID: "MYD123",
        depth: 1,
        link: "",
    },
    {
        ID: "MYD1232",
        name: "Membrana",
        parentCategoryID: "MYD123",
        depth: 1,
        link: "",
    },
    {
        ID: "MYD12311",
        name: "Gamer",
        parentCategoryID: "MYD1231",
        depth: 2,
        link: "",
    },
    {
        ID: "MYD12312",
        name: "Auriculares",
        parentCategoryID: "",
        depth: 0,
        link: "",
    },
    {
        ID: "MYD123121",
        name: "Auriculares Gamer",
        parentCategoryID: "MYD12312",
        depth: 1,
        link: "",
    },
    {
        ID: "MYD1231211",
        name: "Bluetooth",
        parentCategoryID: "MYD123121",
        depth: 2,
        link: "",
    },
    {
        ID: "MYD12312112",
        name: "Redragon",
        parentCategoryID: "MYD1231211",
        depth: 3,
        link: "",
    },
]

export default categories