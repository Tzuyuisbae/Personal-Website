const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Joe Liu',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Joe Liu',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Joe Liu',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Joe Liu',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Joe Liu',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
