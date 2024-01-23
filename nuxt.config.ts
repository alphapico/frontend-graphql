// import { defineNuxtConfig } from "nuxt/config";

// // https://nuxt.com/docs/api/configuration/nuxt-config

// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   modules: ["@nuxtjs/apollo"],

//   apollo: {
//     clients: {
//       default: {
//         httpEndpoint: "http://localhost:3333/graphql",
//         // tokenStorage: "cookie",
//         // authType: "Bearer",
//         // authHeader: "Authorization",
//         httpLinkOptions: {
//           credentials: "include",
//         },
//       },
//     },
//   },
// });

export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ["~/plugins/apollo-client-plugin.ts"],
});
