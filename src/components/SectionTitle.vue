<template>
  <div class="continer my-4">
    <div class="d-flex justify-content-center">
      <h1 class="fw-bold text-center" id="you-will-find">
        O que você vai encontrar
      </h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#you-will-find {
  font-size: 48px;
  background-image: linear-gradient(to right, var(--yellow), var(--yellow));
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 115px 5px;
}

@media screen and (max-width: 770px) {
  #you-will-find {
    background-image: none;
  }
}
</style>
