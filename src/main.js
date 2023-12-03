import { createApp } from 'vue';
import './style.css';
import 'primeicons/primeicons.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import AccordionPreset from './accordionpreset';

const app = createApp(App);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.use(PrimeVue, { unstyled: true, pt: AccordionPreset });
app.mount('#app');
