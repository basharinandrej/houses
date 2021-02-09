<template>
    <footer class="footer">
        <div class="footer__container container">
            <a href="https://vuejs.org/" target="_blanck" class="footer__logo-link">
                <img 
                    alt="Vue logo" 
                    src="../assets/logo.png"
                    class="footer__img-logo"
                >
                <p class="footer__paragraph">
                    Сделано на Vue.js
                </p>
            </a>
            <p class="footer__author">
                Автор: Башарин Андрей <br>
                <a href="mailto:basharin_andrej@mail.ru">
                    basharin_andrej@mail.ru
                </a>
            </p>    
        </div>        
    </footer>
</template>

<style scoped>
.footer{
    display: flex;
    background: #353535;
    padding: 64px 0 32px 0;
    margin-top: auto;
}
.footer__paragraph {
    color: #fff; 
    margin: 0;
}
.footer__logo-link {
    height: 64px;
    display: flex;
    align-items: center;
    text-decoration: none;
}
.footer__img-logo {
    width: 64px;
    height: 100%;
}
.footer__author {
    color: #fff;
    margin: 0;
}
.footer__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>