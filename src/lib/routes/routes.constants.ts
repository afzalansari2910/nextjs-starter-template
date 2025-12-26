import type { Route } from 'next';
import type { RouteObject } from './routes.types';

export const PRIVATE_ROUTES: Record<Route<string> | string, RouteObject> = {
  dashboard: {
    path: '/dashboard',
    label: 'Dashboard',
    permissions: [],
  },
  usuarios: {
    path: '/usuarios',
    label: 'Usuários',
    permissions: ['users.read', 'users.write'],
  },
  'minha-conta': {
    path: '/minha-conta',
    label: 'Minha Conta',
    permissions: ['profile.read', 'profile.write'],
  },
};

export const AUTH_ROUTES: Record<string, RouteObject> = {
  login: {
    path: '/login',
    label: 'Login',
  },
  'cadastre-se': {
    path: '/cadastre-se',
    label: 'Cadastre-se',
  },
  'esqueci-minha-senha': {
    path: '/esqueci-minha-senha',
    label: 'Esqueci minha senha',
  },
  'alterar-senha': {
    path: '/alterar-senha',
    label: 'Alterar senha',
  },
};

export const PUBLIC_ROUTES: Record<string, RouteObject> = {
  home: {
    path: '/',
    label: 'Home',
  },
  precos: {
    path: '/precos',
    label: 'Preços',
  },
  'politica-de-privacidade': {
    path: '/politica-de-privacidade',
    label: 'Política de Privacidade',
  },
};
