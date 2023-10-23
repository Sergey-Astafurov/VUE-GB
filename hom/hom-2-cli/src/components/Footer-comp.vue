<template>
    <footer class="footer">
        <div class="footer__container center">
            <div class="footer__left">
                <div class="footer__log">
                    <img src="@/assets/img/logo.png" alt="">
                </div>
                <div class="footer__left-desc">
                    It is a long established fact that a reader <br> will be distracted lookings.
                </div>
                <div class="footer__social">
                </div>
            </div>
            <div class="footer__mid">
                <div class="footer__mid-title">Pages</div>
                <div class="footer__link">Home</div>
                <div class="footer__link">Blog</div>
                <div class="footer__link">Project</div>
            </div>
            <div class="footer__right">
                <div class="footer__contact">Contact</div>
                <div class="footer__adress">
                    <div>55 East Birchwood Ave. Brooklyn, <br> New York 11201</div>
                    <b class="mail">contact@interno.com</b>
                    <b class="tel"> (123) 456 - 7890</b>
               </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import  "@/assets/scss/abstracts/vars";

.footer {
    margin-bottom: 134px;
    &__container {
        display: flex;
        justify-content: space-between;
        color: $colorText;
    }

    &__left {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    &__log {
        max-width: 177px;
    }

    &__left-desc {
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
    }
    &__mid {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    &__mid-title {
        font-family: $fontTitle;
        color: $colorTitle;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
    }

    &__link {
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 300%;
    }

    &__right {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__contact {
        font-family: $fontTitle;
        color: $colorTitle;
        font-size: 25px;
        margin-bottom: 20px;
    }

    &__adress {
        display: flex;
        flex-direction: column;
        gap: 50px;
        color: #4d5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;

    }
}

.mail {
    font-weight: normal;
}
.tel {
    font-weight: normal;
}

</style>