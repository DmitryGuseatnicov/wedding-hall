import { RouteRecordRaw } from 'vue-router';
import AboutView from '@/views/AboutView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/calculate-price',
    name: 'Расчёт стоимости',
    component: NotFoundView,
  },
  {
    path: '/',
    name: 'О Нас',
    component: AboutView,
  },
  {
    path: '/registration',
    name: 'Выездная регистрация',
    component: NotFoundView,
  },
  {
    path: '/layout-of-halls',
    name: 'Схемы залов',
    component: NotFoundView,
  },
  {
    path: '/menu',
    name: 'Меню',
    component: NotFoundView,
  },
  {
    path: '/gallery',
    name: 'Галерея',
    component: NotFoundView,
  },
  {
    path: '/reviews',
    name: 'Отзывы',
    component: NotFoundView,
  },
  {
    path: '/contacts',
    name: 'Контакты',
    component: NotFoundView,
  },
];
