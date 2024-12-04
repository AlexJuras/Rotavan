<template>
  <v-container>
    <v-card>
      <v-alert type="success">Obrigado por se cadastrar! Por favor confirme o seu e-mail para finalizar o cadastro! <strong>{{ user.email }}</strong></v-alert>
      <div v-if="user">
        <v-card-title>BEM VINDO(A), {{ user.user_metadata.name }}</v-card-title>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
  import useAuthUser from '@/composables/UseAuthUser';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const { user } = useAuthUser();
</script>
