<template>
        <div class="list-loading">
            <div class="animated-background">
                <div class="list-loading-item"></div>
                <div class="list-loading-item separator"></div>
                <div class="list-loading-item separator line-separator"></div>


                <div class="list-loading-item description-large"></div>
                <div class="list-loading-item separator"></div>
                <div class="list-loading-item separator line-separator"></div>




                <div class="list-loading-item description-medium"></div>
                <div class="list-loading-item separator"></div>
                <div class="list-loading-item separator line-separator"></div>


                <div class="list-loading-item description-short"></div>
                <div class="list-loading-item separator"></div>
                <div class="list-loading-item separator line-separator"></div>

            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>
 @-webkit-keyframes placeHolderShimmer {
            0% {
                background-position: -468px 0
            }
            100% {
                background-position: 468px 0
            }
        }

        @keyframes placeHolderShimmer {
            0% {
                background-position: -468px 0
            }
            100% {
                background-position: 468px 0
            }
        }

        .animated-background {
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            -webkit-animation-name: placeHolderShimmer;
            animation-name: placeHolderShimmer;
            -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
            background: #f6f7f8;
            background: #eeeeee;
            background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
            background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
            background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
            -webkit-background-size: 800px 300px;
            background-size: 800px 300px;
            height: 223px;
            position: relative;
        }



        .list-loading {
            background: #fff;
            padding: 12px;
            margin: 0 auto;
            max-width: 472px;
            min-height: 200px;
        }



        .list-loading-item {
            background-color: #fff;
            float: right;
            height: 18px;
            display: block;
            clear: both;
        }

        .description-short {
            width: 60%;

        }

        .description-medium {
            width: 40%;

        }

        .description-large {
            width: 20%;

        }

        .separator {
            width: 100%;
        }

        .line-separator {
            margin-top: 2px
        }
</style>
