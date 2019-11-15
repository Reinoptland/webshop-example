// state = 'hallo' (is state is undefined, state becomes hallo -> default argument)

const initialState = [
  {
    id: 1,
    categoryId: 4,
    name: "Product 1",
    imageUrl: "https://picsum.photos/400?image=696",
    inStock: true,
    price: "3432"
  },
  {
    id: 2,
    categoryId: 1,
    name: "Product 2",
    imageUrl: "https://picsum.photos/400?image=230",
    inStock: false,
    price: "2374"
  },
  {
    id: 3,
    categoryId: 4,
    name: "Product 3",
    imageUrl: "https://picsum.photos/400?image=277",
    inStock: false,
    price: "1942"
  }
];

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
      // return state.concat(action.payload)
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default reducer;
