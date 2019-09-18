import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex)

let defaultCity = '南京'
try{
	// 防止有的浏览器关闭localStorage
	if(localStorage.city){
		defaultCity = localStorage.city
	}
}catch(e) {}


export default new Vuex.Store({
	state: {
		city: defaultCity||'北京'
	},
	actions: {
		changeCity(ctx ,city){
			ctx.commit('changeCity',city);
		}
	},
	mutations: {
		changeCity(state,city){
			state.city = city;
			try{
				localStorage.city = city;
			}catch(e) {}
			
		}
	}
})