import{r as c,R as s,p as a}from"./index-6acdf9cc.js";function p(){return p=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},p.apply(this,arguments)}function u(t,n){if(t==null)return{};var r=g(t,n),e,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],!(n.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}function g(t,n){if(t==null)return{};var r={},e=Object.keys(t),o,i;for(i=0;i<e.length;i++)o=e[i],!(n.indexOf(o)>=0)&&(r[o]=t[o]);return r}var l=c.forwardRef(function(t,n){var r=t.color,e=r===void 0?"currentColor":r,o=t.size,i=o===void 0?24:o,f=u(t,["color","size"]);return s.createElement("svg",p({ref:n,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},f),s.createElement("polyline",{points:"23 4 23 10 17 10"}),s.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))});l.propTypes={color:a.string,size:a.oneOfType([a.string,a.number])};l.displayName="RotateCw";const y=l;export{y as R};
