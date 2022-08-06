interface INavItem {
  id: number;
  title: string;
  href: string;
}

export const navItems: INavItem[] = [
  {
    id: 1,
    title: 'Home',
    href: 'home',
  },
  {
    id: 2,
    title: 'About Me',
    href: 'resume'
  },
  {
    id: 3,
    title: 'My Projects',
    href: 'projects'
  }
];
