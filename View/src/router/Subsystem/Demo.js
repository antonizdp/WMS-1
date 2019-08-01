// a router

export default {
    SubsystemName: 'Demo',
    Modules: [
        {
            SubsystemName: 'Form',
            Modules: [
                { path: 'b-text', name: 'b-text', component: async () => await import(/* webpackChunkName: "form" */'@/Pages/Demo/Form/b-text-demo.vue'), },
                { path: 'b-textarea', name: 'b-textarea', component: async () => await import(/* webpackChunkName: "form" */'@/Pages/Demo/Form/b-textarea-demo.vue'), },
                { path: 'b-number', name: 'b-number', component: async () => await import(/* webpackChunkName: "form" */'@/Pages/Demo/Form/b-number-demo.vue'), },
                { path: 'b-radio', name: 'b-radio', component: async () => await import(/* webpackChunkName: "form" */'@/Pages/Demo/Form/b-radio-demo.vue'), },
                { path: 'b-checkbox', name: 'b-checkbox', component: async () => await import(/* webpackChunkName: "form" */'@/Pages/Demo/Form/b-checkbox-demo.vue'), },
                { path: 'b-checkbox-tree', name: 'b-checkbox-tree', component: async () => await import(/* webpackChunkName: "form" */'@/Pages/Demo/Form/b-checkbox-tree-demo.vue'), },
                { path: 'b-switch', name: 'b-switch', component: async () => await import(/* webpackChunkName: "form" */'@/Pages/Demo/Form/b-switch-demo.vue'), },
                { path: 'b-range', name: 'b-range', component: async () => await import(/* webpackChunkName: "form" */'@/Pages/Demo/Form/b-range-demo.vue'), },
            ]
        }
    ],
}