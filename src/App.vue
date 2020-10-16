<template>
    <div id="app" sticky-container>
        <div class="preloader" :class="[{'show' : loading}]">
            <div class="container-fluid">
                <div class="spinner">
                    <span class="ball-1"></span>
                    <span class="ball-2"></span>
                    <span class="ball-3"></span>
                    <span class="ball-4"></span>
                </div>
            </div>
        </div>
        <BaseHeader v-sticky />
        <router-view />
        <BaseFooter />
        <modal name="application" :width="(windowWidth < 992 ) ? '310' : '480'" height="auto" scrollable class="modal modal-application">
            <div class="modal__close" @click="$modal.hide('application');">
                X
            </div>
            <h2 class="modal__title">Заявка на бесплатную консультацию</h2>
            <div class="modal__wrap">
                <form action="" class="modal__form">
                    <div class="modal__form-item">
                        <div class="input">
                            <input type="text" placeholder="ФИО">
                        </div>
                    </div>
                    <div class="modal__form-item">
                        <div class="input">
                            <input type="text" placeholder="Номер телефона">
                        </div>
                    </div>
                    <div class="modal__form-item">
                        <div class="input">
                            <input type="text" placeholder="Электронная почта">
                        </div>
                    </div>
                    <div class="modal__form-item">
                        <div class="input">
                            <textarea placeholder="Коротко опишите ситуацию с которой Вам нужна помощь" />
                            </div>
                    </div>
                    <div class="modal__form-item">

                   <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes">
<label for="happy">даю согласие на обработку <br/> персональных данных</label>
                    </div>
                    <div class="modal__form-button">
                        <Button variation="primary" width="full" type="a">Отправить</Button>
                    </div>
                </form>
            </div>
        </modal>
    </div>
</template>

<script>
  import Button from '@/components/Button.vue'

    import BaseHeader from './components/BaseHeader.vue'
    import BaseFooter from './components/BaseFooter.vue'
    export default {
        name: 'App',
        data() {
            return {
                loading: false
            }
        },
        components: {
            BaseHeader,
            BaseFooter,
      Button,

        },

        methods: {
            get() {
                setTimeout(() => this.loading = false, 1000);
            }
        },
        mounted() {
            this.get();
        }
    }
</script>

<style lang="scss">
    @import "~assets/scss/config";
    @import "~assets/scss/mixins";
    @import "~assets/scss/reset";
    @import "~assets/libs/bootstrap/bootstrap-grid";
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap');

    html {
        min-height: 100%;
    }

    body {
        font-family: 'Rubik', sans-serif;

        font-size: 16px;
        line-height: 24px;
        color: #000;
    }


    .preloader {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.9);
        opacity: 0;
        transition: all .2s;
        z-index: -1;
        visibility: hidden;

        &.show {
            opacity: 1;
            z-index: +2000;
            visibility: visible;
        }
    }

    .preloader .container-fluid {
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 1450px;
        max-height: 700px;
    }

    .spinner {
        top: 50%;
        left: 50%;
        z-index: 1;
        height: 30px;
        width: 30px;
        margin-left: -15px;
        margin-top: -40px;

        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        position: relative;
    }

    .spinner span {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        display: block;
        position: absolute;
        opacity: 0.7;
    }

    .spinner .ball-1 {
        z-index: 4;
        background-color: #845363;
        left: -20px;
        -webkit-transform: translate(50%, 50%) scale(0.5);
        -webkit-animation: animateSway 2s infinite ease-in-out, animateScale 2s infinite ease-in-out;
        animation: animateSway 2s infinite ease-in-out, animateScale 2s infinite ease-in-out;
    }

    .spinner .ball-2 {
        z-index: 3;
        background-color: #7d485b;
        left: -20px;
        -webkit-transform: translate(50%, 50%) scale(0.5);
        -webkit-animation: animateSway 2s infinite ease-in-out 500ms, animateScale 2s infinite ease-in-out 500ms;
        animation: animateSway 2s infinite ease-in-out 500ms, animateScale 2s infinite ease-in-out 500ms;
    }

    .spinner .ball-3 {
        z-index: 2;
        background-color: #6b2743;
        left: -20px;
        -webkit-transform: translate(50%, 50%) scale(0.5);
        -webkit-animation: animateSway 2s infinite ease-in-out 1s, animateScale 2s infinite ease-in-out 1s;
        animation: animateSway 2s infinite ease-in-out 1s, animateScale 2s infinite ease-in-out 1s;
    }

    .spinner .ball-4 {
        z-index: 1;
        background-color: #5d1030;
        left: -20px;
        -webkit-transform: translate(50%, 50%) scale(0.5);
        -webkit-animation: animateSway 2s infinite ease-in-out 1.5s, animateScale 2s infinite ease-in-out 1.5s;
        animation: animateSway 2s infinite ease-in-out 1.5s, animateScale 2s infinite ease-in-out 1.5s;
    }

    @-webkit-keyframes animateSway {
        0% {
            left: -20px
        }

        50% {
            left: 20px
        }

        100% {
            left: -20px
        }
    }

    @keyframes animateSway {
        0% {
            left: -20px
        }

        50% {
            left: 20px
        }

        100% {
            left: -20px
        }
    }

    @-webkit-keyframes animateScale {
        0% {
            -webkit-transform: translate(50%, 50%) scale(0.5);
            z-index: -1
        }

        25% {
            -webkit-transform: translate(50%, 50%) scale(1);
            z-index: +1
        }

        50% {
            -webkit-transform: translate(50%, 50%) scale(0.5);
            z-index: -1
        }

        75% {
            -webkit-transform: translate(50%, 50%) scale(0.25);
            z-index: -2
        }

        100% {
            -webkit-transform: translate(50%, 50%) scale(0.5);
            z-index: -1
        }
    }

    @keyframes animateScale {
        0% {
            transform: translate(50%, 50%) scale(0.5);
            z-index: -1
        }

        25% {
            transform: translate(50%, 50%) scale(1);
            z-index: +1
        }

        50% {
            transform: translate(50%, 50%) scale(0.5);
            z-index: -1
        }

        75% {
            transform: translate(50%, 50%) scale(0.25);
            z-index: -2
        }

        100% {
            transform: translate(50%, 50%) scale(0.5);
            z-index: -1
        }
    }

    .modal.v--modal-overlay {
        background: hsla(0, 81%, 25%, 0.3) 0% 0% no-repeat padding-box;

    }

    .v--modal{
        overflow: visible !important;
        padding: 46px 0 !important;
    @include respond-to(sm) {
        padding: 24px 0 !important;
    }

    }
    .modal{
        &__wrap{
            padding: 0 72px;
    @include respond-to(sm) {
        padding: 0 10px;
    }

        }
        &__title{
            text-align: center;
            font-size: 16px;
            line-height: 26px;
            font-weight: 500;
            color: #720C0C;
            opacity: 1;
            margin-bottom: 28px;
        }
        &__form{
            &-item{
                margin-bottom: 24px;
            }
        }
        &__close{
            background: #720C0C 0% 0% no-repeat padding-box;
            opacity: 1;
            width: 48px;
            cursor: pointer;
            height: 48px;
                border-radius: 50%;
                position: absolute;
                right: -24px;
                top: -24px;
                color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
        }

    }

    .input{
        input , textarea    {
            background: #F5F5F5 0% 0% no-repeat padding-box;
            border-radius: 10px;
            opacity: 1;
            height: 48px;
            border: none;
            width: 100%;
            padding-right: 24px;
            padding-left: 24px;
                resize: none;
                outline: none;
                border: 1px solid transparent;
                &:hover{
                    border: 1px solid #720C0C;
                }
        }
        textarea{
            height: auto;
            padding: 24px;
        }
    }
    .custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  text-align: left;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
    letter-spacing: 0px;
    color: #969696;
    opacity: 1;
}
.custom-checkbox+label::before {
  content: '';
  display: inline-block;
 width: 24px;
height: 24px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  margin-right: 10px;
}
.custom-checkbox:checked+label::before {
  border-color: #720C0C;
  background-color: #720C0C;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
/* стили при наведении курсора на checkbox */
.custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
  border-color: #b3d7ff;
}
/* стили для активного состояния чекбокса (при нажатии на него) */
.custom-checkbox:not(:disabled):active+label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}
/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox:focus+label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked)+label::before {
  border-color: #80bdff;
}
/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled+label::before {
  background-color: #e9ecef;
}
</style>