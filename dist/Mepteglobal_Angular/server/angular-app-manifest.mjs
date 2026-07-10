
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
    'index.csr.html': {size: 687, hash: 'fd90a6f1784502a609745b8e5043b8c8a609017ee3e8bd98aaa2b09780193d6b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 956, hash: '037331123e9d98efba4e921066ee09621e25a9a27c808f1fcaf960934e4942e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 65181, hash: 'e70716088ad4598ba69df00bc5c418cd8b8f5411ab3a7eafe30cc0956f57eaec', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 65181, hash: 'e70716088ad4598ba69df00bc5c418cd8b8f5411ab3a7eafe30cc0956f57eaec', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 65181, hash: 'e70716088ad4598ba69df00bc5c418cd8b8f5411ab3a7eafe30cc0956f57eaec', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'partners/index.html': {size: 65181, hash: 'e70716088ad4598ba69df00bc5c418cd8b8f5411ab3a7eafe30cc0956f57eaec', text: () => import('./assets-chunks/partners_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 65181, hash: 'e70716088ad4598ba69df00bc5c418cd8b8f5411ab3a7eafe30cc0956f57eaec', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-KVW3IL2D.css': {size: 152, hash: 'pONA9l1rXFM', text: () => import('./assets-chunks/styles-KVW3IL2D_css.mjs').then(m => m.default)}
  },
};
