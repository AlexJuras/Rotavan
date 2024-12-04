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
  import useAuthUser from '@/composables/UseAuthUser';

  const { login } = useAuthUser()

  const form = ref ({
    email: '',
    password: '',
  })

  const handleLogin = async () => {
    try {
      await login(form.value)
      router.push({ name: 'me'})
    } catch (error) {
      alert(error.message)
    }
  }
  // definePageMeta({
  //   layout: 'layout_login', // Tentando fazer funcionar um layout diferente  
  // });

</script>
