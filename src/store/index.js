import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList:[]
  },
  actions:{
    cartClick(context,payload){
      let product = context.state.cartList.find(item =>item.iid===payload.iid)
      if(product){
        context.commit('addCounter',product)
      } else{
        payload.count=1
        context.commit('addToCart',payload)
      }
     }
  },
  mutations: {
    // 因为mutations里面尽量完成单一的事情
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    }
  },
  getters:{
    
  },
  modules: {
  }
})
