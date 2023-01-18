// define import mappings
var importMap = {
  imports: {
    "@elysiannxt/root-config": "//localhost:8005/elysiannxt-root-config.js",
    "@elysiannxt/layout": "http://localhost:8180/elysiannxt-layout.js",
    "@elysiannxt/shop": "http://localhost:8181/elysiannxt-shop.js",
    "@elysiannxt/cart": "http://localhost:8182/elysiannxt-cart.js",
    "@elysiannxt/utils": "http://localhost:8183/elysiannxt-utility.js",
    "@elysiannxt/list": "http://localhost:8184/elysiannxt-list.js",
    "@elysiannxt/about": "http://localhost:8185/elysiannxt-about.js",
    react:
      "https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js",
    "react-dom":
      "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js",
  },
};
System.addImportMap(importMap);

// define window environment
window.env = {
  IMPORT_MAP: importMap,
  APPLICATIONS: [
    {
      name: "@elysiannxt/shop",
      activeWhen: ["/shop"],
    },
    {
      name: "@elysiannxt/about",
      activeWhen: ["/about"],
    },
  ],
};
