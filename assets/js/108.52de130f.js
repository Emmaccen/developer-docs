(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{396:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"convertaddress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convertaddress"}},[t._v("#")]),t._v(" convertaddress")]),t._v(" "),s("p",[s("strong",[t._v("convertaddress coin from to_address_format")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("convertaddress")]),t._v(" method converts an input address to a specified address format.")]),t._v(" "),s("p",[t._v("For example, this method can be used to convert a BCH address from legacy to cash address format and vice versa.")]),t._v(" "),s("p",[t._v("Or this can be used to convert an ETH address from single to mixed case checksum format.")]),t._v(" "),s("h4",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("coin")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("the name of the coin address context")])]),t._v(" "),s("tr",[s("td",[t._v("from")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("input address")])]),t._v(" "),s("tr",[s("td",[t._v("to_address_format")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("address format to which the input address should be converted")])]),t._v(" "),s("tr",[s("td",[t._v("to_address_format.format")]),t._v(" "),s("td",[t._v("string (enum)")]),t._v(" "),s("td",[t._v("address format to which the input address should be converted, possible values: "),s("code",[t._v("mixedcase")]),t._v(" for ETH/ERC20 coins; "),s("code",[t._v("cashaddress")]),t._v(" or "),s("code",[t._v("standard")]),t._v(" for UTXO coins")])]),t._v(" "),s("tr",[s("td",[t._v("to_address_format.network")]),t._v(" "),s("td",[t._v("string (enum)")]),t._v(" "),s("td",[t._v("network prefix for "),s("code",[t._v("cashaddress")]),t._v(" format. Possible values: "),s("code",[t._v("bitcoincash")]),t._v(" for BCH mainnet; "),s("code",[t._v("bchtest")]),t._v(" for BCH testnet; "),s("code",[t._v("bchreg")]),t._v(" for BCH regtest")])])])]),t._v(" "),s("h4",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("result.address")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("the result of address conversion")])])])]),t._v(" "),s("div",{staticStyle:{"margin-top":"0.5rem"}},[s("collapse-text",{attrs:{hidden:"",title:"Examples"}},[s("h4",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),s("h4",{attrs:{id:"command-eth-single-case-address-to-mixed-checksum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-eth-single-case-address-to-mixed-checksum"}},[t._v("#")]),t._v(" Command (ETH single case address to mixed checksum)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("convertaddress"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ETH"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("from"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("to_address_format"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("format"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("mixedcase"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n  }\n}"')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"command-bch-legacy-to-cash-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-bch-legacy-to-cash-address"}},[t._v("#")]),t._v(" Command (BCH legacy to cash address)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("convertaddress"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("BCH"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("from"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1DmFp16U73RrVZtYUbo2Ectt8mAnYScpqM"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("to_address_format"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("format"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cashaddress"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("network"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("bitcoincash"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n  }\n}"')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bitcoincash:qzxqqt9lh4feptf0mplnk58gnajfepzwcq9f2rxk55"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"command-bch-cash-address-to-legacy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-bch-cash-address-to-legacy"}},[t._v("#")]),t._v(" Command (BCH cash address to legacy)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("convertaddress"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("BCH"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("from"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("bitcoincash:qzxqqt9lh4feptf0mplnk58gnajfepzwcq9f2rxk55"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("to_address_format"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("format"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("standard"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n  }\n}"')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1DmFp16U73RrVZtYUbo2Ectt8mAnYScpqM"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"command-qtum-wallet-address-to-qrc20-contract-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-qtum-wallet-address-to-qrc20-contract-address"}},[t._v("#")]),t._v(" Command (Qtum wallet address to QRC20 contract address)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("convertaddress"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("QRC20"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("from"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("qKVvtDqpnFGDxsDzck5jmLwdnD2jRH6aM8"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("to_address_format"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("format"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("contract"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n  }\n}"')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-5"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x1549128bbfb33b997949b4105b6a6371c998e212"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"command-qrc20-contract-address-to-qtum-wallet-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-qrc20-contract-address-to-qtum-wallet-address"}},[t._v("#")]),t._v(" Command (QRC20 contract address to Qtum wallet address)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("convertaddress"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("QRC20"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("from"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("0x1549128bbfb33b997949b4105b6a6371c998e212"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("to_address_format"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("format"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("wallet"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n  }\n}"')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-6"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qKVvtDqpnFGDxsDzck5jmLwdnD2jRH6aM8"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)])}),[],!1,null,null,null);s.default=n.exports}}]);