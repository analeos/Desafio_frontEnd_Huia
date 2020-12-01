<template>
  <div id="home">
    <h1>Avaliação de Ana Leticia</h1>
    
    <button @click="irTelaLogin()">Acessar MaxDoctor</button>
  </div>
</template>

<script>
export default {
  name: 'home',

  methods:{ 
    irTelaLogin: function (){
      window.location.href = '/maxdoctor';
    }
  }
}
</script>

<style>
body,html{
  width: 100%;
  height: 100%;
  margin: 0%;
  padding: 0%;
}

#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

h1, h2 {
  font-weight: normal;
}

button{
  font-size: 20px;
    padding: 6px;
    border: none;
    background-color: #af7fb7;
    color: white;
    border-radius: 3px;
    width: 300px;
}
</style>
