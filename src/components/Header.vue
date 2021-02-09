<template>
    <header class="header">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link to="/" class="header__logo">
                    Квартира <span>&nbsp;.com &nbsp;</span>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <router-link class="nav-link" to="/favorites">Избранное</router-link>
                        </li>
                    </ul>
                    Admin/user
                </div>
            </div>
        </nav>
      </div>
    </header>
</template>

<style scoped>
.header {
  background: #3BC875;
}
.header__logo{
  color: #fff;
  margin-right: 32px;
  text-decoration: none;
  height: 20px;
  display: flex;
}
.header__logo span{
  color: #000
}
</style>