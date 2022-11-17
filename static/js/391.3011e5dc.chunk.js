"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[391],{4391:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r,i,a,o=t(168),l=t(1413),u=t(9439),s=t(2791),c=t(5485),d=t(3122),h=t(4994),f=t(7309),g=t(8686),x=t(9603),p=t(4632),m=t(1087),v=t(6444),b=t(184),j=c.Z.Title,Z=function(){var e=(0,s.useState)((function(){return JSON.parse(localStorage.getItem("favorites")||"[]")})),n=(0,u.Z)(e,2),t=n[0],r=n[1],i=[{title:"avatar",dataIndex:"avatar",key:"avatar",render:function(e){return(0,b.jsx)(d.Z,{src:e,alt:"user avatar",width:44})}},{title:"User",dataIndex:"userLogin",key:"userLogin",render:function(e){return(0,b.jsx)(m.rU,{to:"/users/".concat(e),children:(0,b.jsx)(c.Z.Text,{copyable:!0,children:e})})},sorter:function(e,n){return e.login.length-n.login.length}},{title:"Repo url",dataIndex:"reposUrl",key:"reposUrl",responsive:["md"],render:function(e){return(0,b.jsx)(c.Z.Link,{href:e,target:"_blank",rel:"noreferrer",children:e})}},{title:"operation",dataIndex:"operation",render:function(e,n){return t.length>=1?(0,b.jsx)(h.Z,{title:"Sure to delete?",onConfirm:function(){return a(n.userLogin)},children:(0,b.jsx)(f.Z,{type:"link",children:"Delete"})}):null}}],a=function(e){var n=t.filter((function(n){return n.userLogin!==e}));r(n),localStorage.setItem("favorites",JSON.stringify(n))};return(0,b.jsx)(b.Fragment,{children:t.length>0&&(0,b.jsxs)(k,{children:[(0,b.jsx)(j,{level:2,children:"Favorite Github users"}),(0,b.jsx)(g.Z,{children:(0,b.jsx)(x.Z,{xs:24,children:(0,b.jsx)(p.Z,{dataSource:null===t||void 0===t?void 0:t.map((function(e){return(0,l.Z)((0,l.Z)({},e),{},{key:e.userLogin})})),columns:i,pagination:{defaultPageSize:"10",showSizeChanger:!0,pageSizeOptions:[5,10,15,30],position:["topLeft","bottomRight"]}})})})]})})},k=v.ZP.div(r||(r=(0,o.Z)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.space[5]})),y=t(5048),S=function(e){return e.search.value},L=t(4590),w=t(3628),I=function(){var e=(0,y.v9)(S),n=(0,y.I0)();return(0,b.jsx)(U,{minLength:2,debounceTimeout:300,name:"search",value:e,onChange:function(e){return n((0,L.r)(e.target.value.trim()))},placeholder:"input to search Github users"})},U=(0,v.ZP)(w.DebounceInput)(i||(i=(0,o.Z)(["\n  width: 338px;\n  border-radius: ",";\n  margin-bottom: ","px;\n  outline: none;\n  font-feature-settings: 'tnum', 'tnum';\n  background-color: ",";\n  border: "," ",";\n  color: ",";\n  font-size: ",";\n  font-variant: tabular-nums;\n  line-height: ",";\n  padding: ","px ","px;\n  transition: all 0.3s;\n  &:hover,\n  &:focus,\n  &:active {\n    border-color: ",";\n    border-right-width: 1px;\n    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);\n    outline: 0;\n  }\n"])),(function(e){return e.theme.radii.normal}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.borders.normal}),(function(e){return e.theme.colors.shade}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.fontSizes.s}),(function(e){return e.theme.lineHeights.body}),(function(e){return e.theme.space[0]}),(function(e){return e.theme.space[2]}),(function(e){return e.theme.colors.hover})),z=t(409),F=t(7689),_=t(3099),C=t(9421),P=t(7440),O=t(6067),T=t(3515),R=function(){var e=(0,s.useState)(!0),n=(0,u.Z)(e,2),t=n[0],r=n[1],i=(0,y.v9)(S),a=(0,s.useState)(1),o=(0,u.Z)(a,2),h=o[0],p=o[1],v=(0,F.TH)();(0,s.useEffect)((function(){i.length>0&&r(!1)}),[i]);var j=(0,z.Qe)("q=".concat(i,"&page=").concat(h),{skip:t,selectFromResult:function(e){var n=e.data,t=e.isLoading,r=e.isFetching,i=e.isError;return{partialUsers:null===n||void 0===n?void 0:n.partialUsers,totalPages:null===n||void 0===n?void 0:n.totalPages,isLoading:t,isFetching:r,error:i}}}),Z=j.isLoading,k=j.isFetching,L=j.error,w=j.partialUsers,I=j.totalPages,U=[{title:"avatar",dataIndex:"avatar_url",key:"avatar_url",render:function(e){return(0,b.jsx)(d.Z,{src:e,alt:"user avatar",width:44})}},{title:"User",dataIndex:"login",key:"login",render:function(e){return(0,b.jsx)(m.rU,{to:"/users/".concat(e),state:{from:v},children:(0,b.jsx)(c.Z.Text,{copyable:!0,children:e})})},sorter:function(e,n){return e.login.length-n.login.length}},{title:"Type",dataIndex:"type",key:"type",filters:[{text:"User",value:"User"},{text:"Organization",value:"Organization"}],onFilter:function(e,n){return n.type.includes(e)},responsive:["md"]},{title:"Repo url",dataIndex:"html_url",key:"html_url",responsive:["md"],render:function(e){return(0,b.jsx)(c.Z.Link,{href:e,target:"_blank",rel:"noreferrer",children:e})}}];return(0,b.jsx)(b.Fragment,{children:Z||k?(0,b.jsx)(T.xu,{children:(0,b.jsx)(T.$j,{})}):(null===w||void 0===w?void 0:w.length)>0?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g.Z,{children:(0,b.jsx)(x.Z,{xs:24,children:(0,b.jsx)(D,{dataSource:null===w||void 0===w?void 0:w.map((function(e){return(0,l.Z)((0,l.Z)({},e),{},{key:e.id})})),columns:U,pagination:{defaultPageSize:"10",showSizeChanger:!0,pageSizeOptions:[5,10,15,30],position:["topLeft","bottomRight"]}})})}),(null===w||void 0===w?void 0:w.length)>10&&(0,b.jsxs)(_.Z,{children:[(0,b.jsx)(f.Z,{onClick:function(){return p((function(e){return e-1}))},disabled:1===h,icon:(0,b.jsx)(P.Z,{})}),(0,b.jsx)(f.Z,{onClick:function(){return p((function(e){return e+1}))},disabled:h===I,icon:(0,b.jsx)(O.Z,{})})]})]}):i.length>0&&0===(null===w||void 0===w?void 0:w.length)||L?(0,b.jsx)(C.Z,{}):null})},D=(0,v.ZP)(p.Z)(a||(a=(0,o.Z)(["\n  .ant-table {\n    border-radius: 30px;\n  }\n  .ant-table .ant-table-container {\n    border-radius: 30px;\n  }\n  .ant-table table{\n    border-radius: 30px;\n  }\n  thead.ant-table-thead  tr th{\n  background: lightsalmon;\n\n  }\n  .ant-table-container, .ant-table-container table>thead>tr:first-child th:first-child {\n    border-radius: 30px 0 0 30px;\n}\n.ant-table-container, .ant-table-container table>thead>tr:first-child th:last-child {\n    border-radius: 0 30px 30px 0;\n}\n  "]))),E=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(I,{}),(0,b.jsx)(R,{}),(0,b.jsx)(Z,{})]})}}}]);
//# sourceMappingURL=391.3011e5dc.chunk.js.map