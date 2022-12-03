const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            products: [
                { id: 1, name: 'Pantalon', price: 1, category: 'A' },
                { id: 2, name: 'Camisa', price: 5, category: 'C' },
                { id: 3, name: 'Blusa', price: 3, category: 'D' },
                { id: 4, name: 'Polera', price: 4, category: 'B' },
                { id: 5, name: 'Poleron', price: 2, category: 'E' },
            ],
        },
        actions: {

        }
    }
}

export default getState;