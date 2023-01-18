import { registerApplication, start } from "single-spa";

const applications = window.env.APPLICATIONS;
const importMap = window.env.IMPORT_MAP;

applications.forEach((application) => {
  registerApplication({
    name: application.name,
    app: () => System.import(importMap.imports[application.name]),
    activeWhen: application.activeWhen,
  });
});

start({
  urlRerouteOnly: true,
});

// registerApplication({
//   name: "@elysiannxt/shop",
//   app: () => System.import("http://localhost:8081/elysiannxt-shop.js"),
//   activeWhen: ["/"],
// });

// // registerApplication({
// //   name: "@elysiannxt/navbar",
// //   app: () => System.import("@elysiannxt/navbar"),
// //   activeWhen: ["/"]
// // });

// start({
//   urlRerouteOnly: true,
// });
