import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from '@/router/router'
import VCalendar from 'v-calendar';

const app = createApp(App);

components.forEach(component => {
	app.component(component.name, component)
})

app
	.use(VCalendar, {})
	.use(router)
	.mount('#app')
