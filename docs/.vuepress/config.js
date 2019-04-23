var redirectAliases = require("./public/_redirects.js");
var sidebarImport = require("./sidebar.js");
module.exports = {
  plugins: {
    redirect: {
      alias: redirectAliases
    }
  },
  title: " ",
  base: "/",
  description: "Documentation for developers building on Komodo",
  themeConfig: {
    repo: "komodoplatform/developer-docs",
    repoLabel: "Github",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Suggest an improvement for this page",
    lastUpdated: "Last Updated",
    logo: "/site-name-logo.png",
    nav: [{
        text: "Start Here",
        link: "/basic-docs/start-here/outline-for-new-developers.md"
      },
      {
        text: "KomodoPlatform.com",
        link: "https://komodoplatform.com"
      }
    ],
    sidebar: {
      "/basic-docs/": sidebarImport,

      // Repeat everything from above
      "/": sidebarImport
    }
  }
};