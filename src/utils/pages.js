
const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('projects', { name: 'Projects', path: '/projects', anchorable: true });
pages.set('initiatives', { name: 'Initiatives', path: '/initiatives', anchorable: true });
pages.set('mentoring', { name: 'Mentoring', path: '/mentoring', anchorable: true });
pages.set('contactme', { 
  name: 'Contact Me', 
  path: '/contactme', 
  anchorable: true 
});


export default pages;
