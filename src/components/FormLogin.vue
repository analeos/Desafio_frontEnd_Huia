<template>
  <div class="container-login">
    
    <div class="linha-input">
      <label for="CRM">CRM</label>
      <input id="CRM" type="number" placeholder="00000" v-model="dadosFormulario.crm">
    </div>
    
    <p class="alertaInput" v-if="alertasInput.obrigatorioCrm">Campo obrigatório!</p>
    <p class="alertaInput" v-if="alertasInput.quantidadeCrm">O CRM possui no minimo 5 caracteres</p>
    <p class="alertaInput sucesso" v-if="alertasInput.validado">Sucesso!</p>


    <div class="linha-input">
      <label for="Seletor">UF</label>
      <select name="" id="Seletor" v-model="dadosFormulario.uf">
        <option value="">Selecionar</option>
        <option v-for="uf in ufs" :key="uf.id" >{{ uf.sigla }} - {{ uf.nome }}</option>
      </select>
    </div>

    <p class="alertaInput" v-if="alertasInput.obrigatorioUf">Campo obrigatório!</p>
    <p class="alertaInput sucesso" v-if="alertasInput.validado">Sucesso!</p>

    <button class="continue" @click="verificar()">Continue</button>

    <p>CANAL DE COMPRA EXCLUSIVO<br>PRAR CLASSE MÉDICA</p>
  </div>
</template>

<script>
export default {
  name: 'FormLogin',
  
  data () {
    return {
      ufs: [],
      dadosFormulario: { crm: "", uf: "" },
      alertasInput: { obrigatorioCrm: false, obrigatorioUf: false, quantidadeCrm: false, validado: false },
    }
  },

  methods:{ 
    buscarDados: function (){
      axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then(response => {this.ufs = response.data; console.log(response)})
    },

    verificar: function (){
      if(this.dadosFormulario.crm && this.dadosFormulario.uf){
         this.alertasInput.obrigatorioCrm = false; this.alertasInput.obrigatorioUf = false;

         if(this.dadosFormulario.crm.split('').length < 5){
           this.alertasInput.validado = false;
           
           this.alertasInput.quantidadeCrm = true;
         }else{
           this.alertasInput.validado = true;
           
           this.alertasInput.quantidadeCrm = false;
         }
      }else{
        this.alertasInput.validado = false;
        
        if(!this.dadosFormulario.crm){
          this.alertasInput.obrigatorioCrm = true;
        }else{ 
          if(this.dadosFormulario.crm.split('').length < 5){
            this.alertasInput.obrigatorioCrm = false;
            
            this.alertasInput.quantidadeCrm = true;
          }else{
            this.alertasInput.quantidadeCrm = false;
            
            this.alertasInput.obrigatorioCrm = false;
          } 
        } 

        if (!this.dadosFormulario.uf){
          this.alertasInput.obrigatorioUf = true;
        }else{ this.alertasInput.obrigatorioUf = false; }
      }
    }
  },

   beforeMount(){
       this.buscarDados();
   }
}
</script>

<style>
.container-login {
  padding: 10px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.container-login p {
  color: #75417d
}

.linha-input{
  width: 100%;
    display: flex;
    border-bottom: solid 1px #ac91b1;
    margin-bottom: 5px;
    padding-bottom: 3px;
}

.linha-input label{
  width: 40px;
    font-size: 11px;
    color: #505050;
    text-align: start;
}

.linha-input input, select{
 background-color: transparent;
    color: gray;
    border: none;
    font-family: sans-serif;
    width: 100%;
    outline: none;
}

h1, h2 {
  font-weight: normal;
}

.continue{
  font-size: 20px;
  padding: 6px;
  border: none;
  background-color: #af7fb7;
  color: white;
  border-radius: 3px;
}

.alertaInput{
text-align: start;
    margin: 0px 0px 9px 0px;
    font-size: 9px;
    color: #de0505 !important;
}

.sucesso{
  color: green !important;
}

</style>
