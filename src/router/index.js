import Vue from 'vue';
import Router from 'vue-router';
import appView from '../components/views/appView';
import mainView from '../components/views/mainView';
import buttonsView from '../components/views/elementsView/buttonsView';
import floatingButtonsView from '../components/views/elementsView/floatingButtonsView';
import loadersView from '../components/views/elementsView/loadersView';
import arrows from '../components/images/arrows';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'appView',
    component: appView,
    children: [{
        path: 'button',
        name: 'button',
        component: buttonsView,
      },
      {
        path: 'floating-button',
        name: 'floating-button',
        component: floatingButtonsView,
      },
      {
        path: 'loader',
        name: 'loader',
        component: loadersView,
      },
      {
        path: 'projects',
        name: 'projects',
        component: arrows,
      },
    ]
  }]
});