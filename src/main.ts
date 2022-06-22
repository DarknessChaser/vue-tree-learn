import { createApp } from 'vue';
import App from './App.vue';

// eslint-disable-next-line no-underscore-dangle,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  createApp(App).mount('#app');
}

export async function bootstrap() {
  console.log('[vue] vue app bootstrapped');
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function mount({ container }) {
  createApp(App).mount(container);
}
export async function unmount() {
  console.log('[vue] vue app unmounts');
}
