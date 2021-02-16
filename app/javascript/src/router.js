import Vue from 'vue';
import VueRouter from 'vue-router';

import Contacts from './views/Contacts';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(error => { if (error.name !== 'NavigationDuplicated') throw error });
};

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch(error => { if (error.name !== 'NavigationDuplicated') throw error });
};

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Contacts
    },
    {
      path: '/search/:search',
      name: 'search',
      component: Contacts
    }
  ],
  mode: 'history'
});
