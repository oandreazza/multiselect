<template>
    <div style="margin-top:60px">
        <div class="row">
            <div class="col-4 mx-auto">
                <div class="w-100 p-3 text-center">
                    <i class="fa fa-exclamation-triangle" style="font-size: 64px;color: whitesmoke;"></i>     
                </div>
                
            </div>
        </div>
        <div class="row">
            <div class="col-8 mx-auto text-center">
                <span>{{ text }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
		    text: {
		      type: String,
		      default: ""
		    }
  		}	
};
</script>

<style>

</style>
