import { atom } from 'recoil';

export const navItemsState = atom({
  key: 'nav-items-state',
  default: false,
});

export const heroViewState = atom({
  key: 'hero-view-state',
  default: true,
});

export const projectsViewState = atom({
  key: 'projects-view-state',
  default: false,
});
