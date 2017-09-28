import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/page/Login.vue'
import Home from '@/components/common/Home.vue'
import Readme from '@/components/page/Readme.vue'
import BaseTable from '@/components/page/BaseTable.vue'
import VueTable from '@/components/page/VueTable.vue'
import Baseform from '@/components/page/Baseform.vue'
import VueEditor from '@/components/page/VueEditor.vue'
import Markdown from '@/components/page/Markdown.vue'
import Upload from '@/components/page/Upload.vue'
import BaseCharts from '@/components/page/BaseCharts.vue'
import MixCharts from '@/components/page/MixCharts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/readme',
      component: Home,
      children: [
        {
          path: '/',
          component: Readme
        },
        {
          path: '/basetable',
          component: BaseTable
        },
        {
          path: '/vuetable',
          component: VueTable
        },
        {
          path: '/baseform',
          component: Baseform
        },
        {
          path: '/vueeditor',
          component: VueEditor
        },
        {
          path: '/markdown',
          component: Markdown
        },
        {
          path: '/upload',
          component: Upload
        },
        {
          path: '/basecharts',
          component: BaseCharts
        },
        {
          path: '/mixcharts',
          component: MixCharts
        }
      ]
    },

  ]
})
