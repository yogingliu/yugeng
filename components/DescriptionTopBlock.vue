<template>
    <div class="description-top-block d-flex">
        <div class="description-top-main-block">
            <h1 class="description-top-main-title">最頂尖的備審資料代製專家</h1>
            <p class="decription-text-block">
                即將進行大學申請或是研究所推甄的你 <br>
                具備了很好的成績以及輝煌的經歷 <br>
                但是卻對於製作備審資料感到困惑嗎？ <br>
            </p>
            <p class="decription-text-block">
                雨耕書堂完全理解你的難處 <br>
                我們具備專業的團隊以及完整的服務 <br>
                用最專業的方式協助你的升學計畫 <br>
            </p>
            <!-- 前往蝦皮賣場按鈕 -->
            <a href="https://shopee.tw/concisewriter?categoryId=68&itemId=8423664475" class="description-top-shop-link">
                <div>
                    <span class="top-shop-link-text">前往</span>
                    <SvgLogoShopee class="top-shop-logo-default d-inline-block" />
                    <span class="top-shop-link-text text-color-shopp">蝦皮購物</span>
                </div>
                <div>
                    <span class="top-shop-link-text">與專員進行詳細洽談</span>
                </div>

            </a>
        </div>
        <div class="description-top-right-decoration d-none d-sm-block">
            <div>
                <img class="description-top-right-image" src="index-description-top.png" alt="image for decoration">
            </div>
            <SvgTopRightBackgroud class="description-top-right-background" />
        </div>
    </div>
</template>
<script>
import SvgLogoShopee from '../components/svgTemplate/SvgLogoShopee'
import SvgTopRightBackgroud  from '../components/svgTemplate/SvgTopRightBackgroud'
export default {
    components: {
        SvgLogoShopee,
        SvgTopRightBackgroud
    }
}
</script>

<style scoped>
    .description-top-right-decoration {
        overflow: hidden;
        flex: 1;
        height: 100%;
        position: relative;
    }

    .description-top-right-background {
        position: absolute;
        bottom: 105px;
        right: 0;
        z-index: -1;
    }

    .description-top-right-image {
        position: relative;
        margin: 130px 0 0 155px;
        width: 484px;
        height: 330px;
    }

    .description-top-block {
        height: 761px;
        width: 100%;
    }

    @media screen and (max-width: 576px) {
        .description-top-block {
            height: auto;
        }
    }

    .description-top-main-block {
        /* margin: 165px 0 150px 0; */
        margin: 185px 0 150px 150px;
        width: 570px;
        height: 350px;
        text-align: left;
    }

    @media screen and (max-width: 576px) {
        .description-top-main-block {
            margin: 90px 60px 50px 60px;
        }
    }

    @media screen and (max-width: 420px) {
        .description-top-main-block {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 90px auto;
            width: auto;
        }
    }

    .decription-text-block {
        margin: 40px 0 0 5px;
    }

    @media screen and (max-width: 420px) {
        .decription-text-block {
            font-size: 0.8rem;
        }
    }

    .description-top-shop-link {
        margin-top: 20px;
        width: 227.22px;
        height: 75.74px;

        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 500px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 576px) {
        .description-top-shop-link {
            /* margin: 40px auto; */
            display: none;
        }

    }

    .top-shop-link-text {
        font-size: 18px;
        font-weight: bold;
    }

    .top-shop-logo-default {
        width: 15px;
        height: 20.8px;
        margin: 1.5px 1.5px 0 1.5px;

    }
    @media screen and (max-width: 576px) {
        .description-top-main-title {
            font-size: 1.6rem;
        }
    }

    @media screen and (max-width: 420px) {
        .description-top-main-title {
            font-size: 1.2rem;
        }
    }
</style>
