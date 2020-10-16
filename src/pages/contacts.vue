<template>
  <div class="page contacts"></div>
</template>

<script>
export default {
    created(){
        let body = document.querySelector('body');
        body.classList.toggle('contacts');
    }
}
</script>

<style lang="scss">
.contacts{
.footer__button-top{
        display: none;
    }
}

</style>