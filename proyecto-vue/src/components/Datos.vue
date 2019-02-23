<template>
  <div class="container">
    <div class="text-center">
      <img v-bind:src="imagenUsuario" rounded="circle" alt="Circle image">
      <!-- <b-list-group v-if="listaDatosUsuario.length > 0" class="borderless" >
        <b-list-group-item>
            <img v-bind:src="imagenUsuario" rounded="circle" alt="Circle image">
        </b-list-group-item>
        <b-list-group-item>
          <font-awesome-icon icon="user"/>
          {{listaDatosUsuario[0].texto}}
        </b-list-group-item>
        <b-list-group-item>
          <font-awesome-icon icon="envelope"/>
          {{listaDatosUsuario[1].texto}}
        </b-list-group-item>
        <b-list-group-item>
          <font-awesome-icon icon="calendar-alt"/>
          {{listaDatosUsuario[2].texto}}
        </b-list-group-item>
        <b-list-group-item>
          <font-awesome-icon icon="map-marked-alt"/>
          {{listaDatosUsuario[3].texto}}
        </b-list-group-item>
        <b-list-group-item>
          <font-awesome-icon icon="phone"/>
          {{listaDatosUsuario[4].texto}}
        </b-list-group-item>
        <b-list-group-item>
          <font-awesome-icon icon="lock"/>
          {{listaDatosUsuario[5].texto}}
        </b-list-group-item>
<b-list-group-item>

      <b-button @click="resetUsuario">Button</b-button>
</b-list-group-item>

      </b-list-group>-->
      <!-- <ul class="list-group " style="vertical-align: middle">
        <li
          v-for="item of listaDatosUsuario"
          :key="item.id"
          class="list-group-item"
        >
          <i class="material-icons">{{item.icono}}</i>
          {{item.texto}}
        </li>
      </ul>-->
      <b-list-group>
        <b-list-group-item v-for="item of listaDatosUsuario" :key="item.id">
          <div class="  ">
            <i class="material-icons">{{item.icono}}</i>
            {{item.texto}}
          </div>
        </b-list-group-item>
      </b-list-group>

      <b-button @click="resetUsuario">Button</b-button>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Datos",

  data() {
    return {
      dataUsuario: {},
      imagenUsuario: [],
      nombreCompletoUsuario: [],
      listaDatosUsuario: [],
      android: "android"
    };
  },

  mounted() {
    var self = this;
    self.resetUsuario();
  },
  methods: {
    resetUsuario: function() {
      var self = this;
      axios
        .get("https://randomuser.me/api/")
        .then(function(res) {
          self.listaDatosUsuario = [];
          self.dataUsuario = res.data.results[0];
          self.imagenUsuario = self.dataUsuario.picture.large;
          self.listaDatosUsuario.push({
            icono: "person",
            texto:
              self.dataUsuario.name.title +
              " " +
              self.dataUsuario.name.first +
              " " +
              self.dataUsuario.name.last
          });
          self.listaDatosUsuario.push({
            icono: "email",
            texto: self.dataUsuario.email
          });
          self.listaDatosUsuario.push({
            icono: "event",
            texto: self.dataUsuario.dob.date
          });
          self.listaDatosUsuario.push({
            icono: "place",
            texto: self.dataUsuario.location.street
          });
          self.listaDatosUsuario.push({
            icono: "local_phone",
            texto: self.dataUsuario.phone
          });
          self.listaDatosUsuario.push({
            icono: "lock",
            texto: self.dataUsuario.login.password
          });
          console.log("Data: ", self.dataUsuario);
        })
        .catch(function(error) {
          console.log("Error: ", error);
        });
    },
    andres: function() {
      console.log("variable");
      return "user";
    }
  }
};
</script>


