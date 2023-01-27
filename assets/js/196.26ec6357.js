(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{484:function(a,e,t){"use strict";t.r(e);var s=t(10),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"interacting-with-komodo-chains"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-komodo-chains"}},[a._v("#")]),a._v(" Interacting with Komodo Chains")]),a._v(" "),e("h2",{attrs:{id:"using-komodo-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-komodo-cli"}},[a._v("#")]),a._v(" Using komodo-cli")]),a._v(" "),e("p",[a._v("Initiate the "),e("code",[a._v("komodod")]),a._v(" daemon by calling it from the command line and including any desired runtime parameters.")]),a._v(" "),e("p",[a._v("When initiating any Smart Chain other than the main KMD chain, the user should always include all parameters that were used to create the Smart Chain.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Note to Windows Users: Replace ./komodod and ./komodo-cli with komodod.exe and komodo-cli.exe for each step.")])]),a._v(" "),e("p",[a._v("To launch the main KMD chain, execute the following command in the directory where "),e("code",[a._v("komodod")]),a._v(" is installed.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodod "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),e("p",[a._v("After the daemon launches, you may interact with it using the "),e("code",[a._v("komodo-cli")]),a._v(" software.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodo-cli API_COMMAND\n")])])]),e("p",[a._v("To launch another Smart Chain, include the necessary parameters.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("IMPORTANT")]),a._v(" "),e("p",[a._v("Always execute the launch command EXACTLY as indicated, and as the Smart Chain's developers instruct. If you make a mistake, you must "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/smart-chain-maintenance.html#manually-deleting-blockchain-data"}},[e("b",[a._v("delete the Smart Chain data")])]),a._v(" and re-launch to regain access to the Smart Chain's network.")],1)]),a._v(" "),e("p",[a._v("For example, to launch the DEX Smart Chain, execute:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodod "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ac_name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("DEX "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ac_supply")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("999999")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-addnode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.47")]),a._v(".196.146 "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),e("p",[a._v("To interact with the DEX daemon, use "),e("code",[a._v("komodo-cli")]),a._v(" like so:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodo-cli "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ac_name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("DEX API_COMMAND\n")])])]),e("p",[a._v("In the terminal you can call the Komodo documentation by executing:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodo-cli "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("\n")])])]),e("p",[a._v("To learn more via the terminal about a specific API command, execute:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodo-cli "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" API_COMMAND\n")])])]),e("h2",{attrs:{id:"using-curl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-curl"}},[a._v("#")]),a._v(" Using curl")]),a._v(" "),e("p",[a._v("To access a coin daemon remotely -- for example, via a "),e("code",[a._v("curl")]),a._v(" command in the shell -- the user will need to obtain the "),e("code",[a._v("rpcuser")]),a._v(", "),e("code",[a._v("rpcpassword")]),a._v(", and "),e("code",[a._v("rpcport")]),a._v(" from the "),e("code",[a._v(".conf")]),a._v(" file of the relevant coin daemon.")]),a._v(" "),e("h4",{attrs:{id:"location-of-conf-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#location-of-conf-file"}},[a._v("#")]),a._v(" Location of .conf File")]),a._v(" "),e("p",[a._v("Assuming the default installation location, the "),e("code",[a._v(".conf")]),a._v(" file can be found by exploring the following directories:")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Operating System")]),a._v(" "),e("th",[a._v("Directory")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("MacOS")]),a._v(" "),e("td",[e("code",[a._v("~/Library/Application Support/Komodo")])])]),a._v(" "),e("tr",[e("td",[a._v("Windows")]),a._v(" "),e("td",[e("code",[a._v("C:\\Users\\myusername\\AppData\\Roaming\\Komodo\\")])])]),a._v(" "),e("tr",[e("td",[a._v("GNU/Linux")]),a._v(" "),e("td",[e("code",[a._v("~/.komodo")])])])])]),a._v(" "),e("p",[a._v("Within this directory there are also subdirectories containing all KMD-compatible "),e("code",[a._v(".conf")]),a._v(" files used on this node.")]),a._v(" "),e("p",[a._v("Contents of a KMD "),e("code",[a._v(".conf")]),a._v(" file:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("rpcuser")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("myusername\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("rpcpassword")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("myrpcpassword\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("server")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("rpcport")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("7771")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("addnode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.47")]),a._v(".196.146\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("addnode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.9")]),a._v(".102.210\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("addnode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("178.63")]),a._v(".69.164\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("addnode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("88.198")]),a._v(".65.74\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("addnode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.9")]),a._v(".122.241\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("addnode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("144.76")]),a._v(".94.3\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("addnode")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("148.251")]),a._v(".44.16\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);