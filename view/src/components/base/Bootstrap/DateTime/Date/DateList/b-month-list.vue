<template>
    <dropdown-list v-model="selectValue" :list="list" @change="change" hide-null></dropdown-list>
</template>

<script>
import dropdownList from '@/components/base/Bootstrap/DropdownList/b-dropdownlist.vue'

export default {
    name: 'b-month-list',
    components: { dropdownList },
    model: {
        prop: 'value',
        event: 'change',
    },
    data () {
        return {
            selectValue: this.value,
        }
    },
    props: {
        value: {
            type: Number,
            default: () => new Date().getMonth() + 1,
            validator: value => !isNaN(value) && value > 0 && value < 13,
        },
        start: {
            type: Number,
            validator: value => !isNaN(value) && value > 0 && value < 13,
        },
        end: {
            type: Number,
            validator: value => !isNaN(value) && value > 0 && value < 13,
        },
    },
    computed: {
        list: function () {
            let list = []
            for (let n = 0; n < 12; n++) {
                let month = n + 1
                list.push(
                    (month < this.start || month > this.end) 
                        ? {text: month, value: month, disabled: true } 
                        : {text: month, value: month, }
                )
            }
            return list
        },
    },
    methods: {
        change: function () {
            // 配合 v-model
            this.$emit('change', this.selectValue)
        },
    },
}
</script>
