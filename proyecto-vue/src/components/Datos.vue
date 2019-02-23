<template>
    <div class="text-center">
       
        <img v-bind:src="imagenUsuario" rounded="circle" alt="Circle image"/>
        <!-- <b-img v-bind="imagenUsuario" rounded="circle" alt="Circle image" /> -->

<b-list-group v-if="listaDatosUsuario.length > 0">
    <b-list-group-item >  <font-awesome-icon icon="user" />  {{listaDatosUsuario[0].texto}} </b-list-group-item>
    <b-list-group-item>  <font-awesome-icon icon="envelope" />  {{listaDatosUsuario[1].texto}} </b-list-group-item>
    <b-list-group-item>  <font-awesome-icon icon="calendar-alt" />  {{listaDatosUsuario[2].texto}} </b-list-group-item>
    <b-list-group-item>  <font-awesome-icon icon="map-marked-alt" />  {{listaDatosUsuario[3].texto}} </b-list-group-item>
    <b-list-group-item>  <font-awesome-icon icon="phone" />  {{listaDatosUsuario[4].texto}} </b-list-group-item>
    <b-list-group-item>  <font-awesome-icon icon="lock" />  {{listaDatosUsuario[5].texto}} </b-list-group-item>
</b-list-group>
<b-button @click="resetUsuario" >Button</b-button>

    </div>
</template>


<script>

import axios from 'axios'

export default {
    name: 'Datos',

    data(){
        return{
            dataUsuario:{},
            imagenUsuario:[],
            nombreCompletoUsuario:[],
            listaDatosUsuario:[]
        }
    },

    mounted(){
        var self = this;
        self.resetUsuario();
        // var self = this;
        // axios.get('https://randomuser.me/api/')
        // .then(function(res){
        //     self.dataUsuario = res.data.results[0];
        //     self.imagenUsuario = self.dataUsuario.picture.large;
        //     self.listaDatosUsuario.push({"icono":"user", "texto":self.dataUsuario.name.title + " " + self.dataUsuario.name.first + " " + self.dataUsuario.name.last});
        //     self.listaDatosUsuario.push({"icono":"bb", "texto":self.dataUsuario.email});
        //     self.listaDatosUsuario.push({"icono":"bb", "texto":self.dataUsuario.dob.date});
        //     self.listaDatosUsuario.push({"icono":"bb", "texto":self.dataUsuario.location.street});
        //     self.listaDatosUsuario.push({"icono":"bb", "texto":self.dataUsuario.phone});
        //     self.listaDatosUsuario.push({"icono":"bb", "texto":self.dataUsuario.login.password});

        //     console.log('Data: ',res.data.results[0]);
        // })
        // .catch (function(error){
        //     console.log('Error: ', error);
        // })
    },
    methods: {
        resetUsuario: function () {
            var self = this;
            axios.get('https://randomuser.me/api/')
            .then(function(res){
                self.listaDatosUsuario = [];
                self.dataUsuario = res.data.results[0];
                self.imagenUsuario = self.dataUsuario.picture.large;
                self.listaDatosUsuario.push({"icono":"user", "texto":self.dataUsuario.name.title + " " + self.dataUsuario.name.first + " " + self.dataUsuario.name.last});
                self.listaDatosUsuario.push({"icono":"envelope", "texto":self.dataUsuario.email});
                self.listaDatosUsuario.push({"icono":"calendar-alt", "texto":self.dataUsuario.dob.date});
                self.listaDatosUsuario.push({"icono":"map-marked-alt", "texto":self.dataUsuario.location.street});
                self.listaDatosUsuario.push({"icono":"phone", "texto":self.dataUsuario.phone});
                self.listaDatosUsuario.push({"icono":"lock", "texto":self.dataUsuario.login.password});

                console.log('Data: ',self.dataUsuario);
            })
            .catch (function(error){
                console.log('Error: ', error);
            })
    }
  }
}
</script>
