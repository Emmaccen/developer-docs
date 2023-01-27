(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{390:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cancel-all-orders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancel-all-orders"}},[t._v("#")]),t._v(" cancel_all_orders")]),t._v(" "),a("p",[a("strong",[t._v("cancel_all_orders cancel_by")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("cancel_all_orders")]),t._v(" cancels the active orders created by the AtomicDEX API node by specified condition.")]),t._v(" "),a("h4",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("cancel_by")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("orders matching this condition are cancelled")])]),t._v(" "),a("tr",[a("td",[t._v("cancel_by.type")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("All")]),t._v(" to cancel all orders; "),a("code",[t._v("Pair")]),t._v(" to cancel all orders for specific coin pairs; "),a("code",[t._v("Coin")]),t._v(" to cancel all orders for a specific coin")])]),t._v(" "),a("tr",[a("td",[t._v("cancel_by.data")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("additional data the cancel condition; present with "),a("code",[t._v("Pair")]),t._v(" and "),a("code",[t._v("Coin")]),t._v(" types")])]),t._v(" "),a("tr",[a("td",[t._v("cancel_by.data.base")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("base coin of the pair; "),a("code",[t._v("Pair")]),t._v(" type only")])]),t._v(" "),a("tr",[a("td",[t._v("cancel_by.data.rel")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("rel coin of the pair; "),a("code",[t._v("Pair")]),t._v(" type only")])]),t._v(" "),a("tr",[a("td",[t._v("cancel_by.data.ticker")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("order is cancelled if it uses "),a("code",[t._v("ticker")]),t._v(" as base or rel; "),a("code",[t._v("Coin")]),t._v(" type only")])])])]),t._v(" "),a("h4",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Structure")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("result")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("result.cancelled")]),t._v(" "),a("td",[t._v("array of strings (uuids)")]),t._v(" "),a("td",[t._v("uuids of cancelled orders")])]),t._v(" "),a("tr",[a("td",[t._v("result.currently_matching")]),t._v(" "),a("td",[t._v("array of strings (uuids)")]),t._v(" "),a("td",[t._v("uuids of the orders being matched with other orders; these are not cancelled even if they fit cancel condition")])])])]),t._v(" "),a("h4",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),a("h4",{attrs:{id:"command-all-orders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-all-orders"}},[t._v("#")]),t._v(" Command (All orders)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cancel_all_orders"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cancel_by"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("type"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("All"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}}"')]),t._v("\n")])])]),a("h4",{attrs:{id:"command-cancel-by-pair"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-cancel-by-pair"}},[t._v("#")]),t._v(" Command (Cancel by pair)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cancel_all_orders"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cancel_by"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("type"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Pair"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("data"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("RICK"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("MORTY"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}}}"')]),t._v("\n")])])]),a("h4",{attrs:{id:"command-cancel-by-coin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-cancel-by-coin"}},[t._v("#")]),t._v(" Command (Cancel by coin)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cancel_all_orders"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cancel_by"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("type"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Coin"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("data"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ticker"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("RICK"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}}}"')]),t._v("\n")])])]),a("div",{staticStyle:{"margin-top":"0.5rem"}},[a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("h4",{attrs:{id:"response-1-order-cancelled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-1-order-cancelled"}},[t._v("#")]),t._v(" Response (1 order cancelled)")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cancelled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2aae69d1-0167-493e-ad15-c6a8b43546d6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currently_matching"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"response-1-order-cancelled-and-1-is-currently-matching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-1-order-cancelled-and-1-is-currently-matching"}},[t._v("#")]),t._v(" Response (1 order cancelled and 1 is currently matching)")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cancelled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2aae69d1-0167-493e-ad15-c6a8b43546d6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currently_matching"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e9a6f422-e378-437f-bb74-ba4307a90e68"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);