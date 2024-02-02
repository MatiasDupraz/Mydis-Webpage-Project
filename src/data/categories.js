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
    {
        ID: "MYD1243",
        name: 'Notebooks',
        parentCategoryID: "",
    },
    {
        ID: "MYD12356",
        name: 'Parlantes',
        parentCategoryID: "",
    },
    {
        ID: 'MYD123561',
        name: 'Portátiles',
        parentCategoryID: "MYD12356",
    },
    {
        ID: 'MYD123562',
        name: 'Torre',
        parentCategoryID: "MYD12356",
    },
    {
        ID: 'MYD1756',
        name: "Accesorios",
        parentCategoryID: ''
    },
    {
        ID: 'MYD175612',
        name: "Relojes",
        parentCategoryID: 'MYD1756'
    }
]

export default categories