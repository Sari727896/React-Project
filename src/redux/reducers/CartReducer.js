
const products=[];
const CartReducer=(state=products,action)=>{
    switch(action.type){
        
            case 'ADD_TO_CART':
                {debugger
               
                    const newProducts=[...state, action.product]
                    return newProducts     
                }
                
            case 'REMOVE_FROM_CART':
                {
                   
                    return  state.filter((item, id) => id!== action.product.id)
                }
          
            default:
                return state
        }
}
export default CartReducer
