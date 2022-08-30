<template>
  <div class="container my-5">
    <h1 class="opportunite fw-bold text-wrap">
      <div class="image-out position-relative">
        <img
          class="position-absolute"
          src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/Vector%2012.png"
          alt="leaf"
        />
      </div>
      Gostaria de considerar uma oportunidade profissional conosco
    </h1>
    <div class="d-flex justify-content-center mt-5">
      <div class="col-12 col-lg-4 col-xl-4 col-xxl-4">
        <form
          action="/#"
          method="post"
          class="row d-flex justify-content-center"
        >
          <h3 class="fw-bold row mb-5 form-theme">Deixe uma mensagem</h3>
          <div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Seu e-mail"
              />
              <button class="btn submit" type="submit">Enviar</button>
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                placeholder="Escreva sua mensagem"
                rows="5"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div
        class="col-5 d-none d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center"
      >
        <img
          width="209"
          height="190"
          src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/email.png"
          alt="email"
        />
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    FooterComponent,
  },
};
</script>

<style>
.opportunite {
  font-size: 48px;
  background-image: linear-gradient(to right, var(--yellow), var(--yellow));
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 130px 5px;
}

.form-theme {
  color: #252b42;
  font-size: 24px;
}

.submit {
  color: #fff;
  background-color: var(--yellow);
  font-size: 14px;
}

.image-out {
  right: 102px;
  bottom: 13px;
}

.image-out > img {
  z-index: -1;
}
</style>
