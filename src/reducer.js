export const initialState = {
    Cart: [],
    user: null,
  };
  export const getCartTotal = (Cart) =>
  Cart?.reduce((amount, item) => item.price + amount, 0);
  const reducer = (state, action) => {
      // console.log(action);
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          Cart: [...state.Cart, action.item],
        };
        case 'EMPTY_CART':
      return {
        ...state,
        Cart: [],
      };
        case "REMOVE_FROM_CART":
          const index = state.Cart.findIndex(
            (CartItem) => CartItem.id === action.id
          );
          let newCart = [...state.Cart];
    
          if (index >= 0) {
            newCart.splice(index, 1);
          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in Cart!`
            );
          }
          return {
            ...state,
            Cart: newCart,
          };
          
          case "SET_USER":
            return {
              ...state,
              user: action.user,
            };
default:
   return state;

    }
};
export default reducer;