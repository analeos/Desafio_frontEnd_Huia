<template>
  <div class="container">
    <div class="container-limitador">
      <HeaderLogin/>
      <FormLogin/>
      <FooterLogin/>
    </div>
  </div>
</template>

<script>
import  FormLogin  from './../components/FormLogin';
import HeaderLogin from './../components/HeaderLogin';
import FooterLogin from './../components/FooterLogin';

export default {
  name: 'Login',

  components: { FormLogin, HeaderLogin, FooterLogin }, 
}
</script>

<style>
body,html{
  width: 100%;
  height: 100%;
  margin: 0%;
  padding: 0%;
}

.container{
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
  background: linear-gradient(45deg, #ebe5f3, #cbbcdb);;
}
</style>
