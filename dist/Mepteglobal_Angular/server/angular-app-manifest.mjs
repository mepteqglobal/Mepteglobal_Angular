
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/partners"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 888, hash: '60523bb4867a9ef85eec420cc58b2b9796f60c5f929f5734de993f7d1a09236d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: 'fc9f1f4900b3f69f149f0402bc399a3a656fbf728936a85eab69ad9224043839', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'partners/index.html': {size: 113044, hash: '795f04321218da8ec72307321136894620d5e3728fcfff11465cc34c22155728', text: () => import('./assets-chunks/partners_index_html.mjs').then(m => m.default)},
    'index.html': {size: 113044, hash: '795f04321218da8ec72307321136894620d5e3728fcfff11465cc34c22155728', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 113044, hash: '795f04321218da8ec72307321136894620d5e3728fcfff11465cc34c22155728', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 113044, hash: '795f04321218da8ec72307321136894620d5e3728fcfff11465cc34c22155728', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 113044, hash: '795f04321218da8ec72307321136894620d5e3728fcfff11465cc34c22155728', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-MQT77YLQ.css': {size: 363, hash: '2qrJZgPT4rM', text: () => import('./assets-chunks/styles-MQT77YLQ_css.mjs').then(m => m.default)}
  },
};
