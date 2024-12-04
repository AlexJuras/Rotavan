<template>
  <v-row>
    <v-col align="center">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-card class="w-50" color="secondary">
              <v-container>
                <v-img src="@/assets/Rotavan.png" max-width="200" rounded="pill"></v-img>
                <v-alert closable v-if="alertConfirmacao" @input="alertConfirmacao = false" type="warning" class="mt-5">
                  Por favor confirme o seu e-mail para finalizar o cadastro! <strong>{{ form.email }}</strong>
                </v-alert>
                <v-alert closable v-if="alertErro" @input="alertErro = false" type="error" class="mt-5">
                  Erro ao finalizar o cadastro! {{ erro }}
                </v-alert>
                <v-card-title justify="center" align="center" class="text-h4">CADASTRO</v-card-title>
                <v-form @submit.prevent="handleRegister">
                  <v-row class="mx-15">
                    <v-col cols="12">
                      <v-text-field type="text" label="Nome" v-model="form.name" required></v-text-field>
                    </v-col>  
                  </v-row>
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
                      <v-btn color="primary" rounded class="w-100" type="submit">Cadastrar</v-btn>
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
import useAuthUser from '@/composables/UseAuthUser';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { register } = useAuthUser();
const router = useRouter();

const form = ref({
  name: '',
  email: '',
  password: '',
});

const alertConfirmacao = ref(false);
const alertErro = ref(false);
const erro = ref('');

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const isFormValid = () => {
  if (!form.value.name || !form.value.email || !form.value.password) {
    erro.value = 'Por favor, preencha todos os campos.';
    alertErro.value = true;
    return false;
  }
  if (!isValidEmail(form.value.email)) {
    erro.value = 'Por favor, insira um e-mail válido.';
    alertErro.value = true;
    return false;
  }
  return true;
};

const handleRegister = async () => {
  if (!isFormValid()) return;

  try {
    await register(form.value);
    //router.push({ path: '/Conta' });
    alertConfirmacao.value = true;
  } catch (error) {
    erro.value = error?.message || 'Erro Desconhecido';
    alertErro.value = true;
  }
};
</script>
