(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,n){e.exports={message:"Message_message__2yFU1",ava_container:"Message_ava_container__qrhsp",ava_image:"Message_ava_image__3huCS",angle_and_message_window:"Message_angle_and_message_window__1rp39",angle:"Message_angle__3W96C",message_container:"Message_message_container__g3zRq",message_body:"Message_message_body__3_Kgj",message_time:"Message_message_time__1-hKL"}},,function(e,a,n){e.exports={header_navigation_container:"Header_header_navigation_container__2kmLF",nav_link:"Header_nav_link__1Dbj4",navigation_icon:"Header_navigation_icon__1wd1O",navigation_icon_img:"Header_navigation_icon_img__kuxyK"}},,,function(e,a,n){e.exports={container:"Greeting_container__33CDl",btn:"Greeting_btn__3dX_F",error:"Greeting_error__3x-A9",errorText:"Greeting_errorText__1DsLd"}},function(e,a,n){e.exports={affairs_withBtn_container:"Affairs_affairs_withBtn_container__7bKuM",affairs_container:"Affairs_affairs_container__3vA82",filter_buttons_container:"Affairs_filter_buttons_container__Zi4c-"}},function(e,a,n){e.exports={blue:"HW4_blue__3KxS7",column:"HW4_column__1OV4J",testSpanError:"HW4_testSpanError__2Bw9s"}},function(e,a,n){e.exports={default:"SuperButton_default__TBDXn",red:"SuperButton_red__1bhpo"}},function(e,a,n){e.exports={superInput:"SuperInputText_superInput__1wum9",errorInput:"SuperInputText_errorInput__1UlzC",error:"SuperInputText_error__3CAKb"}},function(e,a,n){e.exports={checkbox:"SuperCheckbox_checkbox__1tFP4",spanClassName:"SuperCheckbox_spanClassName__380ZW"}},function(e,a,n){e.exports={users_list_container:"HW8_users_list_container__MLF4I",users_container:"HW8_users_container__2ltXv"}},,,,,function(e,a,n){e.exports={App:"App_App__1jvNp"}},function(e,a,n){e.exports=n.p+"static/media/avatar.756cc49a.jpg"},function(e,a,n){e.exports={hw1_container:"HW1_hw1_container__2H_y1"}},function(e,a,n){e.exports={affair_container:"Affair_affair_container__1U9a7"}},,function(e,a,n){e.exports={error_title:"Error404_error_title__2tWUF"}},function(e,a,n){e.exports=n.p+"static/media/b.b9053f81.svg"},,function(e,a,n){e.exports=n(37)},,,,,function(e,a,n){},,,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(20),c=n.n(l),o=(n(34),n(21)),i=n.n(o),s=n(6),u=n(1),m=n(5),_=n.n(m),d=n(22),E=n.n(d);var v=function(e){return r.a.createElement("div",{className:_.a.message},r.a.createElement("div",{className:_.a.ava_container},r.a.createElement("img",{className:_.a.ava_image,src:E.a,alt:"avatar"})),r.a.createElement("div",{className:_.a.angle_and_message_window},r.a.createElement("div",{className:_.a.angle}),r.a.createElement("div",{className:_.a.message_container},r.a.createElement("div",{className:_.a.message_name},e.name),r.a.createElement("div",{className:_.a.message_body},e.message),r.a.createElement("div",{className:_.a.message_time},e.time))))},p=n(23),f=n.n(p),g={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Toki",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis maxime molestias nam necessitatibus porro repudiandae ut voluptatem!",time:"9:45"};var h=function(){return r.a.createElement("div",{className:f.a.hw1_container},r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:g.avatar,name:g.name,message:g.message,time:g.time}))},b=n(2),k=n(24),C=n.n(k),N=n(4),j=n(13),O=n.n(j),w=["red","className"],x=function(e){var a=e.red,n=e.className,t=Object(N.a)(e,w),l="".concat(a?O.a.red:O.a.default," ").concat(n);return r.a.createElement("button",Object.assign({className:l},t))};var y=function(e){return r.a.createElement("div",{className:C.a.affair_container},r.a.createElement("span",null,e.affair.name),r.a.createElement("span",null,e.affair.priority),r.a.createElement(x,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},S=n(11),T=n.n(S);var A=function(e){var a=e.data.map((function(a){return r.a.createElement(y,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:T.a.affairs_withBtn_container},r.a.createElement("div",{className:T.a.affairs_container},a),r.a.createElement("div",{className:T.a.filter_buttons_container},r.a.createElement(x,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(x,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(x,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(x,{onClick:function(){e.setFilter("low")}},"Low")))},F=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var B=function(){var e=Object(t.useState)(F),a=Object(b.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)("all"),o=Object(b.a)(c,2),i=o[0],s=o[1],u=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(n,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(A,{data:u,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(n,e))}}))},H=n(28),M=n(10),W=n.n(M),I=function(e){var a=e.name,n=e.setNameCallback,t=e.addUser,l=e.error,c=e.totalUsers,o=l?W.a.error:"";return r.a.createElement("div",{className:W.a.container},r.a.createElement("input",{value:a,onChange:n,className:o}),r.a.createElement(x,{onClick:t,className:W.a.btn},"add"),r.a.createElement("span",{style:{color:"red"}},c),r.a.createElement("div",{className:W.a.errorText},r.a.createElement("span",null,l)))},U=function(e){var a=e.users,n=e.addUserCallback,l=Object(t.useState)(""),c=Object(b.a)(l,2),o=c[0],i=c[1],s=Object(t.useState)(""),u=Object(b.a)(s,2),m=u[0],_=u[1],d=a.length;return r.a.createElement(I,{name:o,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){""!==o?(n(o),i("")):_("empty name value")},error:m,totalUsers:d})},K=n(25);var D=function(){var e=Object(t.useState)([]),a=Object(b.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(U,{users:n,addUserCallback:function(e){var a={_id:Object(K.v1)(),name:e};l([a].concat(Object(H.a)(n))),alert("Hello, ".concat(e))}}))},P=n(12),L=n.n(P),J=n(14),G=n.n(J),X=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],q=function(e){e.type;var a=e.onChange,n=e.onChangeText,t=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),i=Object(N.a)(e,X),s="".concat(G.a.error," ").concat(o||""),u="".concat(G.a.error," ").concat(o||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){t&&t(e),l&&"Enter"===e.key&&l()},className:u},i)),c&&r.a.createElement("span",{className:s},c))},z=n(15),Z=n.n(z),R=["type","onChange","onChangeChecked","className","spanClassName","children"],V=function(e){e.type;var a=e.onChange,n=e.onChangeChecked,t=e.className,l=(e.spanClassName,e.children),c=Object(N.a)(e,R),o="".concat(Z.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){var t=e.currentTarget.checked;n&&n(t),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:Z.a.spanClassName},l))};var Y=function(){var e=Object(t.useState)(""),a=Object(b.a)(e,2),n=a[0],l=a[1],c=n?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(t.useState)(!1),s=Object(b.a)(i,2),u=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:L.a.column},r.a.createElement(q,{value:n,onChangeText:l,onEnter:o,error:c,spanClassName:L.a.testSpanError}),r.a.createElement(q,{className:L.a.blue}),r.a.createElement(x,null,"default"),r.a.createElement(x,{red:!0,onClick:o},"delete "),r.a.createElement(x,{disabled:!0},"disabled"),r.a.createElement(V,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(V,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})))},$=["autoFocus","onBlur","onEnter","spanProps"],Q=["children","onDoubleClick","className"],ee=function(e){e.autoFocus;var a=e.onBlur,n=e.onEnter,l=e.spanProps,c=Object(N.a)(e,$),o=Object(t.useState)(!1),i=Object(b.a)(o,2),s=i[0],u=i[1],m=l||{},_=m.children,d=m.onDoubleClick,E=m.className,v=Object(N.a)(m,Q),p="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",E);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(q,Object.assign({autoFocus:!0,onBlur:function(e){u(!1),a&&a(e)},onEnter:function(){u(!1),n&&n()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){u(!0),d&&d(e)},className:p},v),_||c.value))};function ae(e,a){var n=JSON.stringify(a);localStorage.setItem(e,n)}ae("test",{x:"A",y:1});var ne=function(){var e=Object(t.useState)(""),a=Object(b.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(ee,{value:n,onChangeText:l,spanProps:{children:n?void 0:"enter text..."}})),r.a.createElement(x,{onClick:function(){ae("editable-span-value",n)}},"save"),r.a.createElement(x,{onClick:function(){l(function(e,a){var n=a,t=localStorage.getItem(e);return null!==t&&(n=JSON.parse(t)),n}("editable-span-value",""))}},"restore"))};var te=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(B,null),r.a.createElement(D,null),r.a.createElement(Y,null),r.a.createElement(ne,null))},re=n(26),le=n.n(re);var ce=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:le.a.error_title},"error 404",r.a.createElement("br",null),"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},oe=["options","onChange","onChangeOption"],ie=function(e){var a=e.options,n=e.onChange,t=e.onChangeOption,l=Object(N.a)(e,oe),c=a?a.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)}},l),c)},se=["type","name","options","value","onChange","onChangeOption"],ue=function(e){e.type;var a=e.name,n=e.options,t=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(N.a)(e,se),function(e){l&&l(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return r.a.createElement("label",{key:a+"-"+n},r.a.createElement("input",{checked:t===e,name:a,value:e,type:"radio",onChange:o}),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},me=["x","y","z"];var _e=function(){var e=Object(t.useState)(me[1]),a=Object(b.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ie,{options:me,value:n,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ue,{name:"radio",options:me,value:n,onChangeOption:l})))},de=n(16),Ee=n.n(de),ve=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var pe=function(){var e=Object(t.useState)(ve),a=Object(b.a)(e,2),n=a[0],l=a[1],c=n.map((function(e){return r.a.createElement("div",{key:e._id,className:Ee.a.users_container},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.age))})),o=function(){return l(function(e,a){switch(a.type){case"sort":case"check":default:return e}}(ve,{type:"sort",payload:"up"}))};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",r.a.createElement("div",{className:Ee.a.users_list_container},c),r.a.createElement("div",null,r.a.createElement(x,{onClick:o},"sort up")),r.a.createElement("div",null,r.a.createElement(x,{onClick:o},"sort down")),r.a.createElement("div",null,r.a.createElement(x,{onClick:o},"check 20")),r.a.createElement("div",null,"sort down"),"check 18")};var fe=function(){var e=Object(t.useState)(0),a=Object(b.a)(e,2),n=(a[0],a[1]),l=Object(t.useState)(),c=Object(b.a)(l,2),o=(c[0],c[1],Object(t.useState)(!1)),i=Object(b.a)(o,2),s=i[0],u=(i[1],function(){});return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){},onMouseLeave:function(){}},"Time"),s&&r.a.createElement("div",null,"Date"),r.a.createElement(x,{onClick:function(){var e=window.setInterval((function(){}),1e3);n(e)}},"start"),r.a.createElement(x,{onClick:u},"stop"))};var ge=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(fe,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var he=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var be=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"junior"),r.a.createElement(_e,null),r.a.createElement(pe,null),r.a.createElement(ge,null),r.a.createElement(he,null))};var ke=function(){return r.a.createElement("div",null)},Ce="/pre-junior",Ne="/junior",je="/junior-plus";var Oe=function(){return r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",element:r.a.createElement(u.a,{to:Ce})}),r.a.createElement(u.b,{path:Ce,element:r.a.createElement(te,null)}),r.a.createElement(u.b,{path:Ne,element:r.a.createElement(be,null)}),r.a.createElement(u.b,{path:je,element:r.a.createElement(ke,null)}),"// add routes",r.a.createElement(u.b,{path:"/*",element:r.a.createElement(ce,null)})))},we=n(7),xe=n.n(we),ye=n(27),Se=n.n(ye);var Te=function(){return r.a.createElement("div",{className:xe.a.header_navigation_container},r.a.createElement(s.b,{className:xe.a.nav_link,to:Ce},"pre-junior "),r.a.createElement(s.b,{className:xe.a.nav_link,to:Ne},"junior "),r.a.createElement(s.b,{className:xe.a.nav_link,to:je},"junior-plus "),r.a.createElement("div",{className:xe.a.navigation_icon},r.a.createElement("img",{className:xe.a.navigation_icon_img,src:Se.a,alt:"bullet"})))};var Ae=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(Te,null),r.a.createElement(Oe,null)))};var Fe=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement(Ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.de878853.chunk.js.map