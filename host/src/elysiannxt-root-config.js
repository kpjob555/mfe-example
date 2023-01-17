import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@elysiannxt/shop",
  app: () => System.import("http://localhost:8081/elysiannxt-shop.js"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@elysiannxt/navbar",
//   app: () => System.import("@elysiannxt/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
