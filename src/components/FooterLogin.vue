<template>
  <div class="container-footer">
      <div class="linha-container">
        <div class="container-icone">
          <img class="imagem-icone" src="./../assets/Carrinho.png" alt="">
          <p class="texto-imagem">FACILIDADE<br>DE COMPRA</p>
        </div>

        <div class="container-icone">
          <img class="imagem-icone" src="./../assets/Caixas.png" alt="">
          <p class="texto-imagem">QUANTIDADE<br>NÃO LIMITADA</p>
        </div>
      </div>
    
      <div class="linha-container">
        <div class="container-icone">
          <img class="imagem-icone" src="./../assets/Caminhao.png" alt="">
          <p class="texto-imagem">FRETE GRÁTIS</p>
        </div>

        <div class="container-icone">
          <img class="imagem-icone" src="./../assets/Moto.png" alt="">
          <p class="texto-imagem">AGILIDADE</p>
        </div>

        <div class="container-icone">
          <img class="imagem-icone" src="./../assets/Sofa.png" alt="">
          <p class="texto-imagem">COMODIDADE</p>
        </div>
      </div>      
  </div>
</template>

<script>
export default { name: 'FooterLogin' }
</script>

<style>
.container-footer {
  text-align: center;
  color: #522c56;
  display: flex;
  flex-direction: column;
}

.linha-container{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.imagem-icone{
    width: 80px;
    height: 70px;
}

.texto-imagem{
  font-size: 10px;
}

h1, h2 {
  font-weight: normal;
}
</style>
