import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// **DO NOT MODIFY**. Mock API server to simulate a real server.
import { makeServer } from './api/server'
makeServer()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
