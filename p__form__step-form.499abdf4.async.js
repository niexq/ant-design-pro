(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8442],{31199:function(A,S,e){"use strict";var P=e(67294),C=e(55225),D=e(61834);function n(){return n=Object.assign||function(_){for(var v=1;v<arguments.length;v++){var l=arguments[v];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(_[i]=l[i])}return _},n.apply(this,arguments)}function F(_,v){var l=Object.keys(_);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(_);v&&(i=i.filter(function(b){return Object.getOwnPropertyDescriptor(_,b).enumerable})),l.push.apply(l,i)}return l}function B(_){for(var v=1;v<arguments.length;v++){var l=arguments[v]!=null?arguments[v]:{};v%2?F(Object(l),!0).forEach(function(i){L(_,i,l[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(l)):F(Object(l)).forEach(function(i){Object.defineProperty(_,i,Object.getOwnPropertyDescriptor(l,i))})}return _}function L(_,v,l){return v in _?Object.defineProperty(_,v,{value:l,enumerable:!0,configurable:!0,writable:!0}):_[v]=l,_}var j=function(v,l){var i=v.fieldProps,b=v.min,s=v.proFieldProps,r=v.max;return P.createElement(C.ZP,n({mode:"edit",valueType:"digit",fieldProps:B({min:b,max:r},i),ref:l},s))};S.Z=(0,D.Z)(P.forwardRef(j),{defaultProps:{width:"100%"}})},64317:function(A,S,e){"use strict";var P=e(67294),C=e(55225),D=e(22270),n=e(61834);function F(){return F=Object.assign||function(s){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(s[o]=a[o])}return s},F.apply(this,arguments)}function B(s,r){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(s);r&&(o=o.filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable})),a.push.apply(a,o)}return a}function L(s){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?B(Object(a),!0).forEach(function(o){j(s,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach(function(o){Object.defineProperty(s,o,Object.getOwnPropertyDescriptor(a,o))})}return s}function j(s,r,a){return r in s?Object.defineProperty(s,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[r]=a,s}var _=P.forwardRef(function(s,r){var a=s.fieldProps,o=s.children,m=s.params,O=s.proFieldProps,y=s.mode,M=s.valueEnum,U=s.request,w=s.showSearch,R=s.options;return P.createElement(C.ZP,F({mode:"edit",valueEnum:(0,D.h)(M),request:U,params:m,valueType:"select",fieldProps:L({options:R,mode:y,showSearch:w},a),ref:r},O),o)}),v=P.forwardRef(function(s,r){var a=s.fieldProps,o=s.children,m=s.params,O=s.proFieldProps,y=s.mode,M=s.valueEnum,U=s.request,w=s.options,R=L({options:w,mode:y||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label",filterOption:!1},a);return P.createElement(C.ZP,F({mode:"edit",valueEnum:(0,D.h)(M),request:U,params:m,valueType:"select",fieldProps:R,ref:r},O),o)}),l=(0,n.Z)(_,{customLightMode:!0}),i=(0,n.Z)(v,{customLightMode:!0}),b=l;b.SearchSelect=i,S.Z=b},5966:function(A,S,e){"use strict";var P=e(67294),C=e(55225),D=e(61834),n=["fieldProps","proFieldProps"];function F(){return F=Object.assign||function(r){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(r[m]=o[m])}return r},F.apply(this,arguments)}function B(r,a){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(r);a&&(m=m.filter(function(O){return Object.getOwnPropertyDescriptor(r,O).enumerable})),o.push.apply(o,m)}return o}function L(r){for(var a=1;a<arguments.length;a++){var o=arguments[a]!=null?arguments[a]:{};a%2?B(Object(o),!0).forEach(function(m){j(r,m,o[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach(function(m){Object.defineProperty(r,m,Object.getOwnPropertyDescriptor(o,m))})}return r}function j(r,a,o){return a in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r}function _(r,a){if(r==null)return{};var o=v(r,a),m,O;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(r);for(O=0;O<y.length;O++)m=y[O],!(a.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,m)||(o[m]=r[m]))}return o}function v(r,a){if(r==null)return{};var o={},m=Object.keys(r),O,y;for(y=0;y<m.length;y++)O=m[y],!(a.indexOf(O)>=0)&&(o[O]=r[O]);return o}var l="text",i=(0,D.Z)(function(r){var a=r.fieldProps,o=r.proFieldProps,m=_(r,n);return P.createElement(C.ZP,F({mode:"edit",valueType:l,fieldProps:L(L({},a),{},{onChange:function(){for(var y,M,U=arguments.length,w=new Array(U),R=0;R<U;R++)w[R]=arguments[R];a==null||(y=a.onChange)===null||y===void 0||y.call.apply(y,[a].concat(w)),m==null||(M=m.onChange)===null||M===void 0||M.call.apply(M,[m].concat(w))}})},o))},{valueType:l}),b=(0,D.Z)(function(r){var a=r.fieldProps,o=r.proFieldProps;return P.createElement(C.ZP,F({mode:"edit",valueType:"password",fieldProps:a},o))},{valueType:l}),s=i;s.Password=b,S.Z=s},96577:function(A){A.exports={card:"antd-pro-pages-form-step-form-style-card",result:"antd-pro-pages-form-step-form-style-result"}},7330:function(A){A.exports={"ant-alert":"ant-alert","ant-alert-content":"ant-alert-content","ant-alert-icon":"ant-alert-icon","ant-alert-description":"ant-alert-description","ant-alert-success":"ant-alert-success","ant-alert-info":"ant-alert-info","ant-alert-warning":"ant-alert-warning","ant-alert-error":"ant-alert-error","ant-alert-action":"ant-alert-action","ant-alert-close-icon":"ant-alert-close-icon","anticon-close":"anticon-close","ant-alert-close-text":"ant-alert-close-text","ant-alert-with-description":"ant-alert-with-description","ant-alert-no-icon":"ant-alert-no-icon","ant-alert-message":"ant-alert-message","ant-alert-motion-leave":"ant-alert-motion-leave","ant-alert-motion-leave-active":"ant-alert-motion-leave-active","ant-alert-banner":"ant-alert-banner","ant-alert-rtl":"ant-alert-rtl"}},19422:function(A){A.exports={"ant-descriptions-header":"ant-descriptions-header","ant-descriptions-title":"ant-descriptions-title","ant-descriptions-extra":"ant-descriptions-extra","ant-descriptions-view":"ant-descriptions-view","ant-descriptions-row":"ant-descriptions-row","ant-descriptions-item-label":"ant-descriptions-item-label","ant-descriptions-item-no-colon":"ant-descriptions-item-no-colon","ant-descriptions-item-no-label":"ant-descriptions-item-no-label","ant-descriptions-item-content":"ant-descriptions-item-content","ant-descriptions-item":"ant-descriptions-item","ant-descriptions-item-container":"ant-descriptions-item-container","ant-descriptions-middle":"ant-descriptions-middle","ant-descriptions-small":"ant-descriptions-small","ant-descriptions-bordered":"ant-descriptions-bordered","ant-descriptions-rtl":"ant-descriptions-rtl"}},24846:function(A){A.exports={"ant-divider":"ant-divider","ant-divider-vertical":"ant-divider-vertical","ant-divider-horizontal":"ant-divider-horizontal","ant-divider-with-text":"ant-divider-with-text","ant-divider-with-text-left":"ant-divider-with-text-left","ant-divider-with-text-right":"ant-divider-with-text-right","ant-divider-inner-text":"ant-divider-inner-text","ant-divider-dashed":"ant-divider-dashed","ant-divider-plain":"ant-divider-plain","ant-divider-rtl":"ant-divider-rtl"}},33208:function(A,S,e){"use strict";e.r(S);var P=e(72012),C=e(39144),D=e(48736),n=e(27049),F=e(17462),B=e(76772),L=e(3182),j=e(2824),_=e(57106),v=e(99683),l=e(57663),i=e(71577),b=e(95300),s=e(7277),r=e(98858),a=e(4914),o=e(94043),m=e.n(o),O=e(67294),y=e(15103),M=e(65554),U=e(64317),w=e(15196),R=e(5966),H=e(31199),Y=e(96577),X=e.n(Y),t=e(85893),c=function(u){var E=u.stepData,g=u.bordered,Z=E.payAccount,W=E.receiverAccount,x=E.receiverName,I=E.amount;return(0,t.jsxs)(a.Z,{column:1,bordered:g,children:[(0,t.jsxs)(a.Z.Item,{label:"\u4ED8\u6B3E\u8D26\u6237",children:[" ",Z]}),(0,t.jsxs)(a.Z.Item,{label:"\u6536\u6B3E\u8D26\u6237",children:[" ",W]}),(0,t.jsxs)(a.Z.Item,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",children:[" ",x]}),(0,t.jsx)(a.Z.Item,{label:"\u8F6C\u8D26\u91D1\u989D",children:(0,t.jsx)(s.Z,{value:I,suffix:(0,t.jsx)("span",{style:{fontSize:14},children:"\u5143"}),precision:2})})]})},p=function(u){return(0,t.jsx)(v.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26",extra:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{type:"primary",onClick:u.onFinish,children:"\u518D\u8F6C\u4E00\u7B14"}),(0,t.jsx)(i.Z,{children:"\u67E5\u770B\u8D26\u5355"})]}),className:X().result,children:u.children})},d=function(){var u=(0,O.useState)({payAccount:"ant-design@alipay.com",receiverAccount:"test@example.com",receiverName:"Alex",amount:"500",receiverMode:"alipay"}),E=(0,j.Z)(u,2),g=E[0],Z=E[1],W=(0,O.useState)(0),x=(0,j.Z)(W,2),I=x[0],$=x[1],z=(0,O.useRef)();return(0,t.jsx)(y.ZP,{content:"\u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",children:(0,t.jsxs)(C.Z,{bordered:!1,children:[(0,t.jsxs)(M.Z,{current:I,onCurrentChange:$,submitter:{render:function(K,J){return K.step===2?null:J}},children:[(0,t.jsxs)(M.Z.StepForm,{formRef:z,title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F",initialValues:g,onFinish:function(){var h=(0,L.Z)(m().mark(function K(J){return m().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return Z(J),V.abrupt("return",!0);case 2:case"end":return V.stop()}},K)}));return function(K){return h.apply(this,arguments)}}(),children:[(0,t.jsx)(U.Z,{label:"\u4ED8\u6B3E\u8D26\u6237",width:"md",name:"payAccount",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{"ant-design@alipay.com":"ant-design@alipay.com"}}),(0,t.jsxs)(w.ZP.Group,{title:"\u6536\u6B3E\u8D26\u6237",size:8,children:[(0,t.jsx)(U.Z,{name:"receiverMode",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{alipay:"\u652F\u4ED8\u5B9D",bank:"\u94F6\u884C\u8D26\u6237"}}),(0,t.jsx)(R.Z,{name:"receiverAccount",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u8D26\u6237"},{type:"email",message:"\u8D26\u6237\u540D\u5E94\u4E3A\u90AE\u7BB1\u683C\u5F0F"}],placeholder:"test@example.com"})]}),(0,t.jsx)(R.Z,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",width:"md",name:"receiverName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}),(0,t.jsx)(H.Z,{label:"\u8F6C\u8D26\u91D1\u989D",name:"amount",width:"md",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8BF7\u8F93\u5165\u5408\u6CD5\u91D1\u989D\u6570\u5B57"}],placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D",fieldProps:{prefix:"\uFFE5"}})]}),(0,t.jsx)(M.Z.StepForm,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F",children:(0,t.jsxs)("div",{className:X().result,children:[(0,t.jsx)(B.Z,{closable:!0,showIcon:!0,message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002",style:{marginBottom:24}}),(0,t.jsx)(c,{stepData:g,bordered:!0}),(0,t.jsx)(n.Z,{style:{margin:"24px 0"}}),(0,t.jsx)(R.Z.Password,{label:"\u652F\u4ED8\u5BC6\u7801",width:"md",name:"password",required:!1,rules:[{required:!0,message:"\u9700\u8981\u652F\u4ED8\u5BC6\u7801\u624D\u80FD\u8FDB\u884C\u652F\u4ED8"}]})]})}),(0,t.jsx)(M.Z.StepForm,{title:"\u5B8C\u6210",children:(0,t.jsx)(p,{onFinish:(0,L.Z)(m().mark(function h(){var K;return m().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:$(0),(K=z.current)===null||K===void 0||K.resetFields();case 2:case"end":return Q.stop()}},h)})),children:(0,t.jsx)(c,{stepData:g})})})]}),(0,t.jsx)(n.Z,{style:{margin:"40px 0 24px"}}),(0,t.jsxs)("div",{className:X().desc,children:[(0,t.jsx)("h3",{children:"\u8BF4\u660E"}),(0,t.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u652F\u4ED8\u5B9D\u8D26\u6237"}),(0,t.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"}),(0,t.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u94F6\u884C\u5361"}),(0,t.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"})]})]})})};S.default=d},76772:function(A,S,e){"use strict";e.d(S,{Z:function(){return c}});var P=e(22122),C=e(96156),D=e(28481),n=e(67294),F=e(54549),B=e(15873),L=e(57119),j=e(68628),_=e(73218),v=e(38819),l=e(68855),i=e(40847),b=e(43061),s=e(60444),r=e(94184),a=e.n(r),o=e(65632),m=e(5467),O=e(6610),y=e(5991),M=e(10379),U=e(60446),w=function(p){(0,M.Z)(f,p);var d=(0,U.Z)(f);function f(){var u;return(0,O.Z)(this,f),u=d.apply(this,arguments),u.state={error:void 0,info:{componentStack:""}},u}return(0,y.Z)(f,[{key:"componentDidCatch",value:function(E,g){this.setState({error:E,info:g})}},{key:"render",value:function(){var E=this.props,g=E.message,Z=E.description,W=E.children,x=this.state,I=x.error,$=x.info,z=$&&$.componentStack?$.componentStack:null,h=typeof g=="undefined"?(I||"").toString():g,K=typeof Z=="undefined"?z:Z;return I?n.createElement(c,{type:"error",message:h,description:n.createElement("pre",null,K)}):W}}]),f}(n.Component),R=e(96159),H=function(p,d){var f={};for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&d.indexOf(u)<0&&(f[u]=p[u]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,u=Object.getOwnPropertySymbols(p);E<u.length;E++)d.indexOf(u[E])<0&&Object.prototype.propertyIsEnumerable.call(p,u[E])&&(f[u[E]]=p[u[E]]);return f},Y={success:v.Z,info:i.Z,error:b.Z,warning:l.Z},X={success:B.Z,info:j.Z,error:_.Z,warning:L.Z},t=function(d){var f,u=d.description,E=d.prefixCls,g=d.message,Z=d.banner,W=d.className,x=W===void 0?"":W,I=d.style,$=d.onMouseEnter,z=d.onMouseLeave,h=d.onClick,K=d.afterClose,J=d.showIcon,Q=d.closable,V=d.closeText,k=d.action,T=H(d,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),ae=n.useState(!1),q=(0,D.Z)(ae,2),ee=q[0],oe=q[1],te=n.useRef(),ie=n.useContext(o.E_),le=ie.getPrefixCls,se=ie.direction,N=le("alert",E),de=function(G){var re;oe(!0),(re=T.onClose)===null||re===void 0||re.call(T,G)},me=function(){var G=T.type;return G!==void 0?G:Z?"warning":"info"},pe=V?!0:Q,ue=me(),Ee=function(){var G=T.icon,re=(u?X:Y)[ue]||null;return G?(0,R.wm)(G,n.createElement("span",{className:"".concat(N,"-icon")},G),function(){return{className:a()("".concat(N,"-icon"),(0,C.Z)({},G.props.className,G.props.className))}}):n.createElement(re,{className:"".concat(N,"-icon")})},ve=function(){return pe?n.createElement("button",{type:"button",onClick:de,className:"".concat(N,"-close-icon"),tabIndex:0},V?n.createElement("span",{className:"".concat(N,"-close-text")},V):n.createElement(F.Z,null)):null},ce=Z&&J===void 0?!0:J,fe=a()(N,"".concat(N,"-").concat(ue),(f={},(0,C.Z)(f,"".concat(N,"-with-description"),!!u),(0,C.Z)(f,"".concat(N,"-no-icon"),!ce),(0,C.Z)(f,"".concat(N,"-banner"),!!Z),(0,C.Z)(f,"".concat(N,"-rtl"),se==="rtl"),f),x),_e=(0,m.Z)(T);return n.createElement(s.Z,{visible:!ee,motionName:"".concat(N,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(G){return{maxHeight:G.offsetHeight}},onLeaveEnd:K},function(ne){var G=ne.className,re=ne.style;return n.createElement("div",(0,P.Z)({ref:te,"data-show":!ee,className:a()(fe,G),style:(0,P.Z)((0,P.Z)({},I),re),onMouseEnter:$,onMouseLeave:z,onClick:h,role:"alert"},_e),ce?Ee():null,n.createElement("div",{className:"".concat(N,"-content")},n.createElement("div",{className:"".concat(N,"-message")},g),n.createElement("div",{className:"".concat(N,"-description")},u)),k?n.createElement("div",{className:"".concat(N,"-action")},k):null,ve())})};t.ErrorBoundary=w;var c=t},17462:function(A,S,e){"use strict";var P=e(43673),C=e.n(P),D=e(7330),n=e.n(D)},4914:function(A,S,e){"use strict";e.d(S,{K:function(){return M},Z:function(){return X}});var P=e(96156),C=e(28481),D=e(90484),n=e(67294),F=e(94184),B=e.n(F),L=e(50344),j=e(24308),_=e(21687),v=e(65632),l=e(22122);function i(t){return t!=null}var b=function(c){var p=c.itemPrefixCls,d=c.component,f=c.span,u=c.className,E=c.style,g=c.labelStyle,Z=c.contentStyle,W=c.bordered,x=c.label,I=c.content,$=c.colon,z=d;if(W){var h;return n.createElement(z,{className:B()((h={},(0,P.Z)(h,"".concat(p,"-item-label"),i(x)),(0,P.Z)(h,"".concat(p,"-item-content"),i(I)),h),u),style:E,colSpan:f},i(x)&&n.createElement("span",{style:g},x),i(I)&&n.createElement("span",{style:Z},I))}return n.createElement(z,{className:B()("".concat(p,"-item"),u),style:E,colSpan:f},n.createElement("div",{className:"".concat(p,"-item-container")},x&&n.createElement("span",{className:B()("".concat(p,"-item-label"),(0,P.Z)({},"".concat(p,"-item-no-colon"),!$)),style:g},x),I&&n.createElement("span",{className:B()("".concat(p,"-item-content")),style:Z},I)))},s=b;function r(t,c,p){var d=c.colon,f=c.prefixCls,u=c.bordered,E=p.component,g=p.type,Z=p.showLabel,W=p.showContent,x=p.labelStyle,I=p.contentStyle;return t.map(function($,z){var h=$.props,K=h.label,J=h.children,Q=h.prefixCls,V=Q===void 0?f:Q,k=h.className,T=h.style,ae=h.labelStyle,q=h.contentStyle,ee=h.span,oe=ee===void 0?1:ee,te=$.key;return typeof E=="string"?n.createElement(s,{key:"".concat(g,"-").concat(te||z),className:k,style:T,labelStyle:(0,l.Z)((0,l.Z)({},x),ae),contentStyle:(0,l.Z)((0,l.Z)({},I),q),span:oe,colon:d,component:E,itemPrefixCls:V,bordered:u,label:Z?K:null,content:W?J:null}):[n.createElement(s,{key:"label-".concat(te||z),className:k,style:(0,l.Z)((0,l.Z)((0,l.Z)({},x),T),ae),span:1,colon:d,component:E[0],itemPrefixCls:V,bordered:u,label:K}),n.createElement(s,{key:"content-".concat(te||z),className:k,style:(0,l.Z)((0,l.Z)((0,l.Z)({},I),T),q),span:oe*2-1,component:E[1],itemPrefixCls:V,bordered:u,content:J})]})}var a=function(c){var p=n.useContext(M),d=c.prefixCls,f=c.vertical,u=c.row,E=c.index,g=c.bordered;return f?n.createElement(n.Fragment,null,n.createElement("tr",{key:"label-".concat(E),className:"".concat(d,"-row")},r(u,c,(0,l.Z)({component:"th",type:"label",showLabel:!0},p))),n.createElement("tr",{key:"content-".concat(E),className:"".concat(d,"-row")},r(u,c,(0,l.Z)({component:"td",type:"content",showContent:!0},p)))):n.createElement("tr",{key:E,className:"".concat(d,"-row")},r(u,c,(0,l.Z)({component:g?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},p)))},o=a,m=function(c){var p=c.children;return p},O=m,y=e(96159),M=n.createContext({}),U={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function w(t,c){if(typeof t=="number")return t;if((0,D.Z)(t)==="object")for(var p=0;p<j.c4.length;p++){var d=j.c4[p];if(c[d]&&t[d]!==void 0)return t[d]||U[d]}return 3}function R(t,c,p){var d=t;return(c===void 0||c>p)&&(d=(0,y.Tm)(t,{span:p}),(0,_.Z)(c===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),d}function H(t,c){var p=(0,L.Z)(t).filter(function(E){return E}),d=[],f=[],u=c;return p.forEach(function(E,g){var Z,W=(Z=E.props)===null||Z===void 0?void 0:Z.span,x=W||1;if(g===p.length-1){f.push(R(E,W,u)),d.push(f);return}x<u?(u-=x,f.push(E)):(f.push(R(E,x,u)),d.push(f),u=c,f=[])}),d}function Y(t){var c,p=t.prefixCls,d=t.title,f=t.extra,u=t.column,E=u===void 0?U:u,g=t.colon,Z=g===void 0?!0:g,W=t.bordered,x=t.layout,I=t.children,$=t.className,z=t.style,h=t.size,K=t.labelStyle,J=t.contentStyle,Q=n.useContext(v.E_),V=Q.getPrefixCls,k=Q.direction,T=V("descriptions",p),ae=n.useState({}),q=(0,C.Z)(ae,2),ee=q[0],oe=q[1],te=w(E,ee);n.useEffect(function(){var le=j.ZP.subscribe(function(se){(0,D.Z)(E)==="object"&&oe(se)});return function(){j.ZP.unsubscribe(le)}},[]);var ie=H(I,te);return n.createElement(M.Provider,{value:{labelStyle:K,contentStyle:J}},n.createElement("div",{className:B()(T,(c={},(0,P.Z)(c,"".concat(T,"-").concat(h),h&&h!=="default"),(0,P.Z)(c,"".concat(T,"-bordered"),!!W),(0,P.Z)(c,"".concat(T,"-rtl"),k==="rtl"),c),$),style:z},(d||f)&&n.createElement("div",{className:"".concat(T,"-header")},d&&n.createElement("div",{className:"".concat(T,"-title")},d),f&&n.createElement("div",{className:"".concat(T,"-extra")},f)),n.createElement("div",{className:"".concat(T,"-view")},n.createElement("table",null,n.createElement("tbody",null,ie.map(function(le,se){return n.createElement(o,{key:se,index:se,colon:Z,prefixCls:T,vertical:x==="vertical",bordered:W,row:le})}))))))}Y.Item=O;var X=Y},98858:function(A,S,e){"use strict";var P=e(43673),C=e.n(P),D=e(19422),n=e.n(D)},27049:function(A,S,e){"use strict";var P=e(22122),C=e(96156),D=e(67294),n=e(94184),F=e.n(n),B=e(65632),L=function(_,v){var l={};for(var i in _)Object.prototype.hasOwnProperty.call(_,i)&&v.indexOf(i)<0&&(l[i]=_[i]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,i=Object.getOwnPropertySymbols(_);b<i.length;b++)v.indexOf(i[b])<0&&Object.prototype.propertyIsEnumerable.call(_,i[b])&&(l[i[b]]=_[i[b]]);return l},j=function(v){return D.createElement(B.C,null,function(l){var i,b=l.getPrefixCls,s=l.direction,r=v.prefixCls,a=v.type,o=a===void 0?"horizontal":a,m=v.orientation,O=m===void 0?"center":m,y=v.className,M=v.children,U=v.dashed,w=v.plain,R=L(v,["prefixCls","type","orientation","className","children","dashed","plain"]),H=b("divider",r),Y=O.length>0?"-".concat(O):O,X=!!M,t=F()(H,"".concat(H,"-").concat(o),(i={},(0,C.Z)(i,"".concat(H,"-with-text"),X),(0,C.Z)(i,"".concat(H,"-with-text").concat(Y),X),(0,C.Z)(i,"".concat(H,"-dashed"),!!U),(0,C.Z)(i,"".concat(H,"-plain"),!!w),(0,C.Z)(i,"".concat(H,"-rtl"),s==="rtl"),i),y);return D.createElement("div",(0,P.Z)({className:t},R,{role:"separator"}),M&&D.createElement("span",{className:"".concat(H,"-inner-text")},M))})};S.Z=j},48736:function(A,S,e){"use strict";var P=e(43673),C=e.n(P),D=e(24846),n=e.n(D)},62689:function(A){var S="\\ud800-\\udfff",e="\\u0300-\\u036f",P="\\ufe20-\\ufe2f",C="\\u20d0-\\u20ff",D=e+P+C,n="\\ufe0e\\ufe0f",F="\\u200d",B=RegExp("["+F+S+D+n+"]");function L(j){return B.test(j)}A.exports=L}}]);
