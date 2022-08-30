<template>
  <div class="col-3 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
    <i
      role="button"
      id="bar"
      class="fa-solid fa-bars fa-xl d-md-none d-lg-none d-xl-none d-xxl-none"
    ></i>
    <nav
      class="d-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center"
    >
      <ul class="row">
        <li class="col">
          <router-link class="link" id="home" to="/">Sobre nós</router-link>
        </li>
        <li class="col">
          <router-link class="link" to="#">Soluções</router-link>
        </li>
        <li class="col">
          <router-link class="link" to="#">Vagas</router-link>
        </li>
        <li class="col">
          <router-link class="link" to="#">Fale Conosco</router-link>
        </li>
        <li class="col">
          <router-link id="lang" class="link" to="#">
            <img
              src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/Explore.png"
              alt="Explore"
            />
            Idioma
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
#bar {
  position: absolute;
  top: 92px;
  right: 20px;
}
#home {
  border-bottom: solid 2px var(--yellow) ;
}
</style>
