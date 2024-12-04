<template>
  <v-row>
    <v-col align="center">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-card class="w-50" color="secondary">
              <v-container>
                <v-img src="@/assets/Rotavan.png" max-width="200" rounded="pill"></v-img>
                <v-card-title justify="center" align="center" class="text-h4">LOGIN</v-card-title>
                <v-alert v-if="loginError" type="error" closable>{{ loginError }}</v-alert>
                <v-form @submit.prevent="handleLogin">
                  <v-row class="mx-15">
                    <v-col cols="12">
                      <v-text-field type="email" label="E-mail" v-model="form.email" required></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="mx-15">
                    <v-col cols="12">
                      <v-text-field type="password" label="Senha" v-model="form.password" required></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="mx-15">
                    <v-col cols="12">
                      <v-btn color="primary" rounded class="w-100" type="submit">Entrar</v-btn>
                    </v-col>
                  </v-row>
                  <v-row class="mx-15">
                    <v-col cols="12">
                      <v-btn color="secondary" rounded flat class="w-25" to="/Cadastro">Cadastrar</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>  
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthUser from '@/composables/UseAuthUser';

const { login } = useAuthUser();
const router = useRouter();

const form = ref({
  email: '',
  password: '',
});

const loginError = ref(null);

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const handleLogin = async () => {
  loginError.value = null;

  if (!form.value.email || !form.value.password) {
    loginError.value = "Por favor, preencha todos os campos.";
    return;
  }

  if (!isValidEmail(form.value.email)) {
    loginError.value = "Por favor, insira um e-mail válido.";
    return;
  }

  try {
    await login(form.value);
    router.push({ path: '/Conta' });
  } catch (error) {
    loginError.value = error.message;
  }
};
</script>
