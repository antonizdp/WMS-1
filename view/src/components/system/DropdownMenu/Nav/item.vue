<template>
    <!-- Nav Item template -->
    <!-- 建议不多于十八个汉子，超出部分会被隐藏 -->
    <li class="list-group-item bg-light p-0 border-0">
        <div @click="toggle">
            <router-link v-if="!model.Modules" :to="model.path" class="list-group-item bg-light border-top-0 text-dark text-decoration-none" style="cursor: default;">
                <font class="text-truncate w-100 d-inline-block">{{ model.name }}</font>
            </router-link>
            <router-link v-else to="" class="list-group-item bg-light border-top-0 text-dark text-decoration-none d-flex justify-content-between" style="cursor: default;">
                <font class="text-truncate">{{ model.SubsystemName }}</font>
                <i class="fas fa-chevron-down" v-if="!open"></i>
                <i class="fas fa-chevron-up" v-else></i>
            </router-link>
        </div>
        <ul class="list-group bg-light p-0 pl-3 border-0 w-100" v-show="open" v-if="model.Modules" >
            <item
                class="NavItem"
                v-for="(Module, key) in model.Modules"
                :key="key"
                :model="Module" />
        </ul>
    </li>
</template>

<script>
export default {
    name: 'dropdown-menu-nav-item',
    components: {
        item: () => import('./item.vue')
    },
    data () {
        return {
            open: false,
        }
    },
    props: {
      model: Object
    },
    created() {
        this.open = false
    },
    methods: {
        toggle: function () {
            this.open = !this.open
        }
    },
    watch: {
        model: function (newValue, oldValue) {
            if (newValue != oldValue) {
                this.model = newValue
                this.open = false
            }
        }
    }
}
</script>
