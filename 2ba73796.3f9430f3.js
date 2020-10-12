(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1315:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return s}));var r=t(0),b=t.n(r);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,b=function(e,a){if(null==e)return{};var t,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(b[t]=e[t]);return b}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(b[t]=e[t])}return b}var p=b.a.createContext({}),o=function(e){var a=b.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=o(e.components);return b.a.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return b.a.createElement(b.a.Fragment,{},a)}},u=b.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(t),u=r,s=d["".concat(l,".").concat(u)]||d[u]||m[u]||n;return t?b.a.createElement(s,c(c({ref:a},p),{},{components:t})):b.a.createElement(s,c({ref:a},p))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=u;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<n;p++)l[p]=t[p];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},274:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return o}));var r=t(2),b=t(6),n=(t(0),t(1315)),l={id:"_db_buildmodeltablemap_.modeltablemap",title:"ModelTableMap",sidebar_label:"ModelTableMap"},c={unversionedId:"api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap",id:"version-1.0/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap",isDocsHomePage:!1,title:"ModelTableMap",description:"Contains mapping information between GraphQL Model type and database table",source:"@site/versioned_docs/version-1.0/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap.md",slug:"/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap",permalink:"/docs/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap.md",version:"1.0",sidebar_label:"ModelTableMap"},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Optional</code> fieldMap",id:"optional-fieldmap",children:[]},{value:"idField",id:"idfield",children:[]},{value:"tableName",id:"tablename",children:[]},{value:"typeName",id:"typename",children:[]}]}],p={rightToc:i};function o(e){var a=e.components,t=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Contains mapping information between GraphQL Model type and database table"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"typeName: Original GraphQLObjectType name"),Object(n.b)("li",{parentName:"ul"},"tableName: Name of datase table"),Object(n.b)("li",{parentName:"ul"},"id: Indicates the primary key field"),Object(n.b)("li",{parentName:"ul"},"fieldMap: Object of key-value mapping between GraphQL fields and database columns.")),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"ModelTableMap"))),Object(n.b)("h2",{id:"index"},"Index"),Object(n.b)("h3",{id:"properties"},"Properties"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap#optional-fieldmap"}),"fieldMap")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap#idfield"}),"idField")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap#tablename"}),"tableName")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap#typename"}),"typeName"))),Object(n.b)("h2",{id:"properties-1"},"Properties"),Object(n.b)("h3",{id:"optional-fieldmap"},Object(n.b)("inlineCode",{parentName:"h3"},"Optional")," fieldMap"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"fieldMap"),"? : ",Object(n.b)("em",{parentName:"p"},"object")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/db/buildModelTableMap.ts#L18"}),"packages/graphback-core/src/db/buildModelTableMap.ts:18"))),Object(n.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"["," ",Object(n.b)("strong",{parentName:"li"},"key"),": ",Object(n.b)("em",{parentName:"li"},"string"),"]",": string")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"idfield"},"idField"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"idField"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/db/buildModelTableMap.ts#L17"}),"packages/graphback-core/src/db/buildModelTableMap.ts:17"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"tablename"},"tableName"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"tableName"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/db/buildModelTableMap.ts#L16"}),"packages/graphback-core/src/db/buildModelTableMap.ts:16"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"typename"},"typeName"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"typeName"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/db/buildModelTableMap.ts#L15"}),"packages/graphback-core/src/db/buildModelTableMap.ts:15"))))}o.isMDXComponent=!0}}]);