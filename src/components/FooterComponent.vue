<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div
          class="col-12 d-flex align-items-center justify-content-center frist-box"
        >
          <img
            height="62"
            width="184"
            src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/logo/2.png"
            alt="Logo"
          />
        </div>
        <nav class="d-flex justify-content-center col-12">
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
        <div class="second-box">
          <hr class="col-12" />
          <div class="col-12 d-flex align-items-center justify-content-between">
            <span>&copy; 2021 YELLOWIPE</span>
            <img
              role="button"
              src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/Social%20Links.png"
              alt="Social Links"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style>
.footer {
  background: var(--yellow);
  bottom: 0%;
  width: 100%;
  min-height: 156px;
}

.frist-box {
  height: 130px;
}
.second-box {
  height: 80px;
}
.second-box > hr {
  width: 100%;
  height: 1px;
  color: var(--dark);
}
.second-box > div > span {
  color: white;
  font-size: 14px;
}
</style>
