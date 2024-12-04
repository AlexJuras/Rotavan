/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import vuetify from './plugins/vuetify';

// Supabase
import supabase from './plugins/supabase';

const app = createApp(App)

registerPlugins(app)

app.config.globalProperties.$supabase = supabase; // Torna o Supabase acessível globalmente
app.use(vuetify);
app.mount('#app')
