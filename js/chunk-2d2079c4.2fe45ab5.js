(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2079c4"],{a0ed:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"d-table-row",on:{click:function(t){t.stopPropagation(),e.open=!e.open}}},[i("div",{staticClass:"d-table-cell",staticStyle:{width:"15px"}},[e.isFolder?i("i",{staticClass:"fas",class:e.open?"fa-caret-down":"fa-caret-right"}):e._e()]),i("b-checkbox",{ref:"checkbox",staticClass:"d-table-cell",attrs:{value:e.item.value,label:e.item.label,disabled:e.disabledCheckbox,indeterminate:e.indeterminate,defaultState:e.defaultState},on:{input:function(t){e.changed=!0}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e.isFolder?i("b-info",{staticClass:"d-table-cell pl-1",attrs:{info:"("+e.item.children.length+")"}}):e._e()],1),e.isFolder&&(e.open||e.changed)?i("b-checkbox-tree",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"mx-4",attrs:{list:e.item.children,checked:e.checked,disabled:e.disabledCheckboxTree},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}}):e._e()],1)},l=[],a=(i("4de4"),i("caad"),i("c975"),i("d81d"),i("a434"),i("d3b7"),i("2532"),i("ddb0"),i("65fa")),n=i("43ef"),c=i("459c"),d={name:"b-checkbox-tree-item",components:{BCheckbox:n["a"],BCheckboxTree:function(){return Promise.resolve().then(i.bind(null,"a02f"))},BInfo:c["a"]},model:{prop:"values",event:"input"},data:function(){return{open:this.item.open,checked:!1,changed:!1,defaultState:!1,selectedValues:this.values}},props:{item:a["a"].props.item,disabled:a["a"].props.disabled,isChecked:Boolean,values:{type:Array,default:function(){return[]}}},computed:{isFolder:function(){return this.item.children&&this.item.children.length&&this.item.children.length>0},disabledCheckbox:function(){return this.disabled||this.item.disabled||this.item.children&&!(this.item.children.length||this.item.children.length>0)},disabledCheckboxTree:function(){return this.disabled||this.item.disabled},indeterminate:function(){if(this.isFolder&&this.selectedValues){if(this.checked)return 2;var e=this.item.children.map((function(e){return e.value})),t=this.valuesMap.filter((function(t){return e.includes(t)})).length;return 0==t?0:t==this.item.children.length?2:1}},valuesMap:function(){return this.selectedValues&&this.selectedValues.map&&this.selectedValues.map((function(e){return e.value}))||[]}},mounted:function(){this.selectedValues&&this.selectedValues.map&&!this.isFolder&&(this.defaultState=this.selectedValues.map((function(e){return e.value})).includes(this.item.value)),this.checked=this.defaultState||2==this.indeterminate},methods:{push:function(e,t){this.valuesMap.includes(t.value)||e.push(t)},splice:function(e,t){this.valuesMap.includes(t)&&e.splice(this.valuesMap.indexOf(t),1)}},watch:{isChecked:function(e){this.checked=e},checked:function(e){this.disabledCheckboxTree||(e?this.isFolder||this.push(this.selectedValues,{value:this.item.value,label:this.item.label}):this.splice(this.selectedValues,this.item.value),this.$emit("input",this.selectedValues))}}},h=d,u=i("2877"),o=Object(u["a"])(h,s,l,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d2079c4.2fe45ab5.js.map