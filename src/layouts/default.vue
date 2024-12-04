<template>
  <v-app>
    <v-navigation-drawer :width="180" color="#eef5ed" expand-on-hover rail class="position-fixed">
        <v-list-item link to="/">
          <v-img src="@/assets/logo.png"></v-img>
        </v-list-item>
        <v-divider class="my-2"></v-divider>
        <v-list-item link to="/Pesquisar">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-magnify</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Pesquisar</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/Vans/Lista-de-Vans">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-multiple</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Lista de Vans</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/Pontos-de-Van">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-stop</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Pontos de Van</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/Mapa-de-Vans">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-marker</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Mapa de Vans</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/Configuracoes">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-bus-wrench</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Configurações</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/Conta">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-account-cog</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Conta</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/login">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-account</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Login</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/Cadastro">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-account-box-plus-outline</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title class="font-weight-medium">Cadastrar</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/Sobre-nos">
          <template v-slot:prepend>
            <v-list-item-icon>
              <v-icon color="#147b64" class="mr-3">mdi-information</v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item-title color="#0a2438" class="font-weight-medium">Sobre Nós</v-list-item-title>
        </v-list-item>
      </v-navigation-drawer>
        
      <v-main>
        <router-view />
      
    </v-main>

    
  </v-app>
</template>

<script setup>
  //
</script>
