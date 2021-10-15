(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{128:function(e,t,c){},139:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(32),i=c.n(s),r=c(18),o=c(75),l=c.n(o),j=(c(128),c(2));function d(){return Object(j.jsx)("div",{className:"app-header",children:"React Weather Application"})}var u=c(58),h=c.n(u),b=c(24),O=c(25),m={getWeatherIcon:function(e){return{Haze:Object(j.jsx)(b.a,{icon:O.d,size:"lg",color:"white"}),Thunderstorm:Object(j.jsx)(b.a,{icon:O.a,size:"lg",color:"white"}),Drizzle:Object(j.jsx)(b.a,{icon:O.c,size:"lg",color:"white"}),Rain:Object(j.jsx)(b.a,{icon:O.c,size:"lg",color:"white"}),Snow:Object(j.jsx)(b.a,{icon:O.e,size:"lg",color:"white"}),Mist:Object(j.jsx)(b.a,{icon:O.d,size:"lg",color:"white"}),Clear:Object(j.jsx)(b.a,{icon:O.f,size:"lg",color:"white"}),Clouds:Object(j.jsx)(b.a,{icon:O.b,size:"lg",color:"white"})}[e]}};function x(e){var t=e.temperature,c=e.city,a=e.sunrise,n=e.sunset,s=e.humidity,i=e.icon;return Object(j.jsxs)("div",{className:"weather-card-main",children:[Object(j.jsxs)("div",{className:"weather-info",children:[Object(j.jsx)("div",{className:"weather-city",children:c}),Object(j.jsx)("h5",{className:"weather-date",children:h()().format("MMMM Do YYYY, h:mm a")}),Object(j.jsx)("div",{className:"icon-container",children:m.getWeatherIcon(i)})]}),Object(j.jsxs)("div",{className:"weather-detail",children:[Object(j.jsxs)("div",{className:"weather-temperature",children:[Object(j.jsx)("p",{children:"Temperature"}),Math.floor(t)," \u2103"]}),Object(j.jsxs)("div",{className:"weather-humidity",children:[Object(j.jsx)("p",{children:"Humidity"}),s," %"]}),Object(j.jsxs)("div",{className:"weather-sunrise",children:[Object(j.jsx)("p",{children:"Sunrise"}),new Date(1e3*a).toLocaleTimeString("en-IN")]}),Object(j.jsxs)("div",{className:"weather-sunset",children:[Object(j.jsx)("p",{children:"Sunset"}),new Date(1e3*n).toLocaleTimeString("en-IN")]})]})]})}var f=c(156);function p(e){var t=e.forecast;return Object(j.jsx)("div",{class:"forecast",children:Object(j.jsx)(f.a.Group,{itemsPerRow:8,className:"forecast",children:t.map((function(e){return Object(j.jsx)(f.a,{className:"forecast-card",children:Object(j.jsxs)(f.a.Content,{children:[Object(j.jsx)(f.a.Header,{className:"forecast-content",children:h.a.unix(e.dt).format("DD.MM")}),Object(j.jsxs)(f.a.Header,{className:"forecast-content",children:[Math.round((e.temp.max+e.temp.min)/2)," \u2103"]}),Object(j.jsxs)(f.a.Meta,{className:"forecast-content",children:[e.humidity," %"]}),Object(j.jsx)(f.a.Description,{className:"forecast-content",children:m.getWeatherIcon(e.weather[0].main)})]})})}))})})}var w=c(155),v=c(157),g=c(49),y="https://api.openweathermap.org/data/2.5",N="96d7fcaf9604a8ea7307013e96b2affe";var S=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),i=Object(r.a)(s,2),o=i[0],u=i[1],h=Object(a.useState)(""),b=Object(r.a)(h,2),O=b[0],m=b[1],f=Object(a.useState)(null),S=Object(r.a)(f,2),z=S[0],M=S[1],C=Object(a.useState)(null),D=Object(r.a)(C,2),k=D[0],I=D[1],H=Object(a.useState)(null),T=Object(r.a)(H,2),W=T[0],Y=T[1],E=Object(a.useState)(null),L=Object(r.a)(E,2),P=L[0],R=L[1],J=Object(a.useState)(""),q=Object(r.a)(J,2),A=q[0],B=q[1],G=Object(a.useState)([]),K=Object(r.a)(G,2),F=K[0],Q=K[1],U=Object(a.useState)(!0),V=Object(r.a)(U,2),X=V[0],Z=V[1],$=Object(a.useState)(""),_=Object(r.a)($,2),ee=_[0],te=_[1],ce=function(e){Z(!1),M(e.data.main.temp),R(e.data.sys.sunset),Y(e.data.sys.sunrise),I(e.data.main.humidity),m(e.data.name),B(e.data.weather[0].main),n(e.data.coord.lat),u(e.data.coord.lon)},ae=function(e){e?l.a.get("".concat(y,"/weather?q=").concat(e,"&units=metric&exclude=hourly,minutely&appid=").concat(N)).then((function(e){ce(e)})).catch((function(e){alert(e)})):null!==c&&null!==o||(navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),u(e.coords.longitude)})),l.a.get("".concat(y,"/weather?lat=").concat(c,"&lon=").concat(o,"&units=metric&exclude=hourly,minutely&appid=").concat(N)).then((function(e){ce(e)})).catch((function(e){alert(e)}))),l.a.get("".concat(y,"/onecall?lat=").concat(c,"&lon=").concat(o,"&units=metric&exclude=hourly,minutely&appid=").concat(N)).then((function(e){Q(e.data.daily)})).catch((function(e){alert(e)}))};Object(a.useEffect)((function(){ae()}),[c,o]);var ne=function(e){"Enter"!==e.key&&"click"!==e.type||ae(ee)};return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(d,{}),Object(j.jsxs)("div",{children:[Object(j.jsx)(v.a,{icon:Object(j.jsx)(g.a,{name:"search",link:!0,onClick:ne}),placeholder:"City...",onChange:function(e){return te(e.target.value)},value:ee,onKeyPress:ne}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),X?Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Loading..."}),Object(j.jsx)(w.a,{active:!0,inline:"centered"})]}):Object(j.jsx)(x,{temperature:z,sunset:P,sunrise:W,humidity:k,city:O,icon:A}),Object(j.jsx)(p,{forecast:F})]})};c(138);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.fc19443e.chunk.js.map