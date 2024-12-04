<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container>
            <v-card-title justify="center" align="center" class="text-h3">CADASTRO DE PONTOS</v-card-title>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field type="text" label="Nome" :rules="nomeRules" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>  
</template>

<script setup>
  //
</script>
