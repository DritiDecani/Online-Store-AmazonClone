export const state=()=>({
    //state
    cart:[],
    cartLength:0

})

//state actions
export const actions={
    addProductToCart({state,commit},product){
        const cartProduct=state.cart.find(prod=>prod._id==product._id);

        if(!cartProduct){
            commit("pushProductToCart",product);

        }else{
            commit("incrementProductQty",product)
        }
         commit("incrementCartLength");
    }
}