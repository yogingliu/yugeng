<template>
    <div class="service-plan-card">
        <div class="service-plan-border-bottom-block text-left mx-4 px-3 height-30">
            <div class="font-size-2 font-size-little-1-point-8 py-3">NT${{planPrice}}</div>
            <div :style="{ color: `${planRepresentColor}` }" class="font-size-1-point-4 my-2">{{planTitle}}</div>
            <p class="white-space-pre-line my-3 text-description-service-plan-card">{{planDescription}}</p>
        </div>
        <div class="service-plan-border-bottom-block p-5  mx-4  text-left height-50 font-size-little-point-9">
            <div
                v-for="feature in featuresOfProject"
                :key="`feature-${feature.featureId}`"
                class="d-flex"
            >
                <!-- 沒有打勾也要保留外框位置 -->
                <div class="feature-tick-icon-block mr-2">
                    <SvgIconTick class="feature-tick-icon" v-if="feature.isHavingFeature" />
                </div>
                <div>
                    <span :style="{ fontWeight: `${feature.isHavingFeature? 'bold' : 'normal'}`}">{{feature.featureText}}</span>
                </div>
            </div>
        </div>
        <div class="height-20">
            <div class="mx-4 px-4 py-4">
                <div class="d-flex justify-content-around my-2">
                    <div v-for="extraPriceCondition in extraPriceConditions"
                        :key="extraPriceCondition.id"
                        
                    >
                        <span>{{extraPriceCondition.isPlus? '+':'-'}}</span><span>NT$</span><span>{{extraPriceCondition.price}}</span>
                        <p :style="{ color: `${planRepresentColor}` }" class="my-2">{{extraPriceCondition.conditionText}}</p>
                    </div>
                </div>
                <div :style="{ backgroundColor: `${planRepresentColor}` }" class="plan-suitable-for-customer-block">
                    <p>{{suitableText}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SvgIconTick from './svgTemplate/icon/SvgIconTick.vue'
export default {
    components: {
        SvgIconTick
    },
    props: {
        planRepresentColor: String,
        planPrice: Number,
        planTitle: String,
        planDescription: String,
        featuresOfProject: Array,
        extraPriceConditions: Array,
        suitableText: String
    }
}
</script>
<style scoped>
    .service-plan-card {
        width: 345px;
        /* height: 625px; */
        height: 790px;
        border-radius: 42px;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
    }

    @media screen and (max-width: 576px) {
        .service-plan-card {
            margin: 30px auto;
        }
    }

    @media screen and (max-width: 420px) {
        .service-plan-card {
            width: 300PX;
            height: 850px;
        }
    }

    .service-plan-border-bottom-block {
        /* margin: 0 35px 0 35px; */
        border-bottom: 1px solid rgba(230, 230, 230, 1);
    }

    .font-size-2 {
        font-size: 2rem;
    }

    @media screen and (max-width: 420px) {
        .font-size-little-1-point-8 {
            font-size: 1.8rem;
        }
    }

    .font-size-1-point-4 {
        font-size: 1.4rem;
    }

    @media screen and (max-width: 420px) {
        .font-size-little-1-point-2 {
            font-size: 1.2rem;
        }
    }

    .text-description-service-plan-card {
        font-size: .8rem;
        line-height: 1.8rem;
    }

    @media screen and (max-width: 420px) {
        .text-description-service-plan-card {
            font-size: .7rem;
        }
    }

    

    @media screen and (max-width: 420px) {
        .font-size-little-point-9 {
            font-size: .9rem;
        }
    }

    .white-space-pre-line {
        white-space: pre-line;
    }

    .feature-tick-icon {
        width: 24px;
        height: 17px;
        fill: #F3B007;
    }

    .feature-tick-icon-block {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .plan-suitable-for-customer-block {
        color: #ffffff;
        /* width: 225px; */
        width: 100%;
        height: 42px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .height-30 {
        height: 40%;
    }

    .height-50 {
        height: 35%;
    }

    .height-20 {
        height: 25%;
    }
</style>