<template>
    <div class="row">
        <div class="col-8">
            <div>
                 Selecionados <span class="badge badge-light" style="font-size:0.93em">{{ quantity }}</span>
            </div>
             <div>
                Lista limitada em <span class="badge badge-light" style="font-size:0.93em">50</span> registros
            </div>
        </div>
        <div class="col-4 mx-auto" >
            <div class="p-2 text-right">
                <button v-if="btnLabel" class="btn btn-outline-secondary btn-sm" @click="doAction">{{btnLabel}}</button>
            </div>         
        </div>
    </div>
</template>

<script>
export default {
    props:{
        quantity:{
            type: Number,
            required: true
        },
        btnLabel:{
            type: String
        }
    },
    methods:{
        doAction(){
            this.$emit('btn-click')
        }
    }
}
</script>

<style>

</style>
