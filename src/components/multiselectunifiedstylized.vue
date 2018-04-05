<template>
    <MultiselectUnified :loading="loading" :userData="userData">
    </MultiselectUnified>
</template>

<script>
import MultiselectUnified from './multiselectunified'
export default {
    components: { MultiselectUnified },
    props: {
        userData : {
            required: true,
            type: Array
        },
        loading:{
            type: Boolean
        }
    }

}
</script>

<style>

</style>
