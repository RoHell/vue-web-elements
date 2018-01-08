import Vue from 'vue'
import Router from 'vue-router'
import componentsView from '../components/views/componentsView'
// import buttonComponent from '../components/elements/button'
// import tooltipComponent from '../components/elements/tooltip'
// import alertComponent from '../components/elements/alert'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    	{
	        path: '/',
	        name: 'componentsView',
	        component: componentsView,
	        // children: [
	        // 	{
	        // 		path: 'button',
	        // 		name: 'button',
	        // 		component: buttonComponent,
	        // 	},
	        // 	{
	        // 		path: 'tooltip',
	        // 		name: 'tooltip',
	        // 		component: tooltipComponent,
	        // 	},
	        // 	{
	        // 		path: 'alert',
	        // 		name: 'alert',
	        // 		component: alertComponent,
	        // 	},

	        // ]
    	}
    ]
})