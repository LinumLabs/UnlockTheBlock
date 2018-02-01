import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Start from '@/components/Start/Index'
import NewPool from '@/components/Start/NewPool'
import ConfirmPool from '@/components/Start/ConfirmPool'
import Explore from '@/components/Explore'
import Pool from '@/components/Pool'
import EditPool from '@/components/EditPool'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/start',
      component: Start,
      children: [
        {
          path: '',
          name: 'NewPool',
          component: NewPool,
          meta: {
            type: 'page',
            title: 'Start a Pool'
          }
        },
        {
          path: 'confirm',
          name: 'ConfirmPool',
          component: ConfirmPool,
          meta: {
            type: 'page',
            title: 'Start a Pool'
          }
        }
      ]
    },
    {
      path: '/pools',
      name: 'Explore',
      component: Explore,
      meta: {
        type: 'page',
        title: 'Explore'
      }
    },
    {
      path: '/pools/:address',
      name: 'Pool',
      component: Pool,
      props: true,
      meta: {
        type: 'page',
        title: 'Pool',
        back: '/pools'
      }
    },
    {
      path: '/edit/:address',
      name: 'Edit Pool',
      component: EditPool,
      props: true,
      meta: {
        type: 'page',
        title: 'Edit',
        back: '/pools'
      }
    }
  ]
})
