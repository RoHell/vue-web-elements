import Vue from 'vue'
import Router from 'vue-router'
import mainView from '../components/views/mainView'
import RhViewButtons from '../components/RhViewButtons'
// import tooltipComponent from '../components/elements/tooltip'
// import alertComponent from '../components/elements/alert'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'mainView',
        component: mainView,
        children: [{
                path: 'buttons',
                name: 'buttons',
                component: RhViewButtons,
            },
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

        ]
    }]
})