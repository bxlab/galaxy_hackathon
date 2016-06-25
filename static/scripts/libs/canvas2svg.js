!function(){"use strict";function a(a,b){var c,d=Object.keys(b);for(c=0;c<d.length;c++)a=a.replace(new RegExp("\\{"+d[c]+"\\}","gi"),b[d[c]]);return a}function b(a){var b,c,d;if(!a)throw new Error("cannot create a random attribute name for an undefined object");b="ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",c="";do for(c="",d=0;12>d;d++)c+=b[Math.floor(Math.random()*b.length)];while(a[c]);return c}function c(a,b){var c,d,e,f={};for(a=a.split(","),b=b||10,c=0;c<a.length;c+=2)d="&"+a[c+1]+";",e=parseInt(a[c],b),f[d]="&#"+e+";";return f["\\xa0"]="&#160;",f}function d(a){var b={left:"start",right:"end",center:"middle",start:"start",end:"end"};return b[a]||b.start}function e(a){var b={alphabetic:"alphabetic",hanging:"hanging",top:"text-before-edge",bottom:"text-after-edge",middle:"central"};return b[a]||b.alphabetic}var f,g,h,i,j;j=c("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),f={strokeStyle:{svgAttr:"stroke",canvas:"#000000",svg:"none",apply:"stroke"},fillStyle:{svgAttr:"fill",canvas:"#000000",svg:null,apply:"fill"},lineCap:{svgAttr:"stroke-linecap",canvas:"butt",svg:"butt",apply:"stroke"},lineJoin:{svgAttr:"stroke-linejoin",canvas:"miter",svg:"miter",apply:"stroke"},miterLimit:{svgAttr:"stroke-miterlimit",canvas:10,svg:4,apply:"stroke"},lineWidth:{svgAttr:"stroke-width",canvas:1,svg:1,apply:"stroke"},globalAlpha:{svgAttr:"opacity",canvas:1,svg:1,apply:"fill stroke"},font:{canvas:"10px sans-serif"},shadowColor:{canvas:"#000000"},shadowOffsetX:{canvas:0},shadowOffsetY:{canvas:0},shadowBlur:{canvas:0},textAlign:{canvas:"start"},textBaseline:{canvas:"alphabetic"},lineDash:{svgAttr:"stroke-dasharray",canvas:[],svg:null,apply:"stroke"}},h=function(a,b){this.__root=a,this.__ctx=b},h.prototype.addColorStop=function(b,c){var d,e,f=this.__ctx.__createElement("stop");f.setAttribute("offset",b),-1!==c.indexOf("rgba")?(d=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi,e=d.exec(c),f.setAttribute("stop-color",a("rgb({r},{g},{b})",{r:e[1],g:e[2],b:e[3]})),f.setAttribute("stop-opacity",e[4])):f.setAttribute("stop-color",c),this.__root.appendChild(f)},i=function(a,b){this.__root=a,this.__ctx=b},g=function(a){var b,c={width:500,height:500,enableMirroring:!1};return arguments.length>1?(b=c,b.width=arguments[0],b.height=arguments[1]):b=a?a:c,this instanceof g?(this.width=b.width||c.width,this.height=b.height||c.height,this.enableMirroring=void 0!==b.enableMirroring?b.enableMirroring:c.enableMirroring,this.canvas=this,this.__document=b.document||document,this.__canvas=this.__document.createElement("canvas"),this.__ctx=this.__canvas.getContext("2d"),this.__setDefaultStyles(),this.__stack=[this.__getStyleState()],this.__groupStack=[],this.__root=this.__document.createElementNS("http://www.w3.org/2000/svg","svg"),this.__root.setAttribute("version",1.1),this.__root.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.__root.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),this.__root.setAttribute("width",this.width),this.__root.setAttribute("height",this.height),this.__ids={},this.__defs=this.__document.createElementNS("http://www.w3.org/2000/svg","defs"),this.__root.appendChild(this.__defs),this.__currentElement=this.__document.createElementNS("http://www.w3.org/2000/svg","g"),void this.__root.appendChild(this.__currentElement)):new g(b)},g.prototype.__createElement=function(a,b,c){"undefined"==typeof b&&(b={});var d,e,f=this.__document.createElementNS("http://www.w3.org/2000/svg",a),g=Object.keys(b);for(c&&(f.setAttribute("fill","none"),f.setAttribute("stroke","none")),d=0;d<g.length;d++)e=g[d],f.setAttribute(e,b[e]);return f},g.prototype.__setDefaultStyles=function(){var a,b,c=Object.keys(f);for(a=0;a<c.length;a++)b=c[a],this[b]=f[b].canvas},g.prototype.__applyStyleState=function(a){var b,c,d=Object.keys(a);for(b=0;b<d.length;b++)c=d[b],this[c]=a[c]},g.prototype.__getStyleState=function(){var a,b,c={},d=Object.keys(f);for(a=0;a<d.length;a++)b=d[a],c[b]=this[b];return c},g.prototype.__applyStyleToCurrentElement=function(b){var c,d,e,g,j,k,l=Object.keys(f);for(c=0;c<l.length;c++)if(d=f[l[c]],e=this[l[c]],d.apply)if(-1!==d.apply.indexOf("fill")&&e instanceof i){if(e.__ctx)for(;e.__ctx.__defs.childNodes.length;)g=e.__ctx.__defs.childNodes[0].getAttribute("id"),this.__ids[g]=g,this.__defs.appendChild(e.__ctx.__defs.childNodes[0]);this.__currentElement.setAttribute("fill",a("url(#{id})",{id:e.__root.getAttribute("id")}))}else if(-1!==d.apply.indexOf("fill")&&e instanceof h)this.__currentElement.setAttribute("fill",a("url(#{id})",{id:e.__root.getAttribute("id")}));else if(-1!==d.apply.indexOf(b)&&d.svg!==e)if("stroke"!==d.svgAttr&&"fill"!==d.svgAttr||-1===e.indexOf("rgba")){var m=d.svgAttr;if("globalAlpha"===l[c]&&(m=b+"-"+d.svgAttr,this.__currentElement.getAttribute(m)))continue;this.__currentElement.setAttribute(m,e)}else{j=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi,k=j.exec(e),this.__currentElement.setAttribute(d.svgAttr,a("rgb({r},{g},{b})",{r:k[1],g:k[2],b:k[3]}));var n=k[4],o=this.globalAlpha;null!=o&&(n*=o),this.__currentElement.setAttribute(d.svgAttr+"-opacity",n)}},g.prototype.__closestGroupOrSvg=function(a){return a=a||this.__currentElement,"g"===a.nodeName||"svg"===a.nodeName?a:this.__closestGroupOrSvg(a.parentNode)},g.prototype.getSerializedSvg=function(a){var b,c,d,e,f,g,h=(new XMLSerializer).serializeToString(this.__root);if(g=/xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi,g.test(h)&&(h=h.replace('xmlns="http://www.w3.org/2000/svg','xmlns:xlink="http://www.w3.org/1999/xlink')),a)for(b=Object.keys(j),c=0;c<b.length;c++)d=b[c],e=j[d],f=new RegExp(d,"gi"),f.test(h)&&(h=h.replace(f,e));return h},g.prototype.getSvg=function(){return this.__root},g.prototype.save=function(){var a=this.__createElement("g"),b=this.__closestGroupOrSvg();this.__groupStack.push(b),b.appendChild(a),this.__currentElement=a,this.__stack.push(this.__getStyleState())},g.prototype.restore=function(){this.__currentElement=this.__groupStack.pop(),this.__currentElement||(this.__currentElement=this.__root.childNodes[1]);var a=this.__stack.pop();this.__applyStyleState(a)},g.prototype.__addTransform=function(a){var b=this.__closestGroupOrSvg();if(b.childNodes.length>0){var c=this.__createElement("g");b.appendChild(c),this.__currentElement=c}var d=this.__currentElement.getAttribute("transform");d?d+=" ":d="",d+=a,this.__currentElement.setAttribute("transform",d)},g.prototype.scale=function(b,c){void 0===c&&(c=b),this.__addTransform(a("scale({x},{y})",{x:b,y:c}))},g.prototype.rotate=function(b){var c=180*b/Math.PI;this.__addTransform(a("rotate({angle},{cx},{cy})",{angle:c,cx:0,cy:0}))},g.prototype.translate=function(b,c){this.__addTransform(a("translate({x},{y})",{x:b,y:c}))},g.prototype.transform=function(b,c,d,e,f,g){this.__addTransform(a("matrix({a},{b},{c},{d},{e},{f})",{a:b,b:c,c:d,d:e,e:f,f:g}))},g.prototype.beginPath=function(){var a,b;this.__currentDefaultPath="",this.__currentPosition={},a=this.__createElement("path",{},!0),b=this.__closestGroupOrSvg(),b.appendChild(a),this.__currentElement=a},g.prototype.__applyCurrentDefaultPath=function(){if("path"!==this.__currentElement.nodeName)throw new Error("Attempted to apply path command to node "+this.__currentElement.nodeName);var a=this.__currentDefaultPath;this.__currentElement.setAttribute("d",a)},g.prototype.__addPathCommand=function(a){this.__currentDefaultPath+=" ",this.__currentDefaultPath+=a},g.prototype.moveTo=function(b,c){"path"!==this.__currentElement.nodeName&&this.beginPath(),this.__currentPosition={x:b,y:c},this.__addPathCommand(a("M {x} {y}",{x:b,y:c}))},g.prototype.closePath=function(){this.__addPathCommand("Z")},g.prototype.lineTo=function(b,c){this.__currentPosition={x:b,y:c},this.__addPathCommand(this.__currentDefaultPath.indexOf("M")>-1?a("L {x} {y}",{x:b,y:c}):a("M {x} {y}",{x:b,y:c}))},g.prototype.bezierCurveTo=function(b,c,d,e,f,g){this.__currentPosition={x:f,y:g},this.__addPathCommand(a("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}",{cp1x:b,cp1y:c,cp2x:d,cp2y:e,x:f,y:g}))},g.prototype.quadraticCurveTo=function(b,c,d,e){this.__currentPosition={x:d,y:e},this.__addPathCommand(a("Q {cpx} {cpy} {x} {y}",{cpx:b,cpy:c,x:d,y:e}))};var k=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]);return[a[0]/b,a[1]/b]};g.prototype.arcTo=function(a,b,c,d,e){var f=this.__currentPosition&&this.__currentPosition.x,g=this.__currentPosition&&this.__currentPosition.y;if("undefined"!=typeof f&&"undefined"!=typeof g){if(0>e)throw new Error("IndexSizeError: The radius provided ("+e+") is negative.");if(f===a&&g===b||a===c&&b===d||0===e)return void this.lineTo(a,b);var h=k([f-a,g-b]),i=k([c-a,d-b]);if(h[0]*i[1]===h[1]*i[0])return void this.lineTo(a,b);var j=h[0]*i[0]+h[1]*i[1],l=Math.acos(Math.abs(j)),m=k([h[0]+i[0],h[1]+i[1]]),n=e/Math.sin(l/2),o=a+n*m[0],p=b+n*m[1],q=[-h[1],h[0]],r=[i[1],-i[0]],s=function(a){var b=a[0],c=a[1];return c>=0?Math.acos(b):-Math.acos(b)},t=s(q),u=s(r);this.lineTo(o+q[0]*e,p+q[1]*e),this.arc(o,p,e,t,u)}},g.prototype.stroke=function(){"path"===this.__currentElement.nodeName&&this.__currentElement.setAttribute("paint-order","fill stroke markers"),this.__applyCurrentDefaultPath(),this.__applyStyleToCurrentElement("stroke")},g.prototype.fill=function(){"path"===this.__currentElement.nodeName&&this.__currentElement.setAttribute("paint-order","stroke fill markers"),this.__applyCurrentDefaultPath(),this.__applyStyleToCurrentElement("fill")},g.prototype.rect=function(a,b,c,d){"path"!==this.__currentElement.nodeName&&this.beginPath(),this.moveTo(a,b),this.lineTo(a+c,b),this.lineTo(a+c,b+d),this.lineTo(a,b+d),this.lineTo(a,b),this.closePath()},g.prototype.fillRect=function(a,b,c,d){var e,f;e=this.__createElement("rect",{x:a,y:b,width:c,height:d},!0),f=this.__closestGroupOrSvg(),f.appendChild(e),this.__currentElement=e,this.__applyStyleToCurrentElement("fill")},g.prototype.strokeRect=function(a,b,c,d){var e,f;e=this.__createElement("rect",{x:a,y:b,width:c,height:d},!0),f=this.__closestGroupOrSvg(),f.appendChild(e),this.__currentElement=e,this.__applyStyleToCurrentElement("stroke")},g.prototype.__clearCanvas=function(){for(var a=this.__closestGroupOrSvg(),b=a.getAttribute("transform"),c=this.__root.childNodes[1],d=c.childNodes,e=d.length-1;e>=0;e--)d[e]&&c.removeChild(d[e]);this.__currentElement=c,this.__groupStack=[],b&&this.__addTransform(b)},g.prototype.clearRect=function(a,b,c,d){if(0===a&&0===b&&c===this.width&&d===this.height)return void this.__clearCanvas();var e,f=this.__closestGroupOrSvg();e=this.__createElement("rect",{x:a,y:b,width:c,height:d,fill:"#FFFFFF"},!0),f.appendChild(e)},g.prototype.createLinearGradient=function(a,c,d,e){var f=this.__createElement("linearGradient",{id:b(this.__ids),x1:a+"px",x2:d+"px",y1:c+"px",y2:e+"px",gradientUnits:"userSpaceOnUse"},!1);return this.__defs.appendChild(f),new h(f,this)},g.prototype.createRadialGradient=function(a,c,d,e,f,g){var i=this.__createElement("radialGradient",{id:b(this.__ids),cx:e+"px",cy:f+"px",r:g+"px",fx:a+"px",fy:c+"px",gradientUnits:"userSpaceOnUse"},!1);return this.__defs.appendChild(i),new h(i,this)},g.prototype.__parseFont=function(){var a=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\'\"\sa-z]+?)\s*$/i,b=a.exec(this.font),c={style:b[1]||"normal",size:b[4]||"10px",family:b[6]||"sans-serif",weight:b[3]||"normal",decoration:b[2]||"normal",href:null};return"underline"===this.__fontUnderline&&(c.decoration="underline"),this.__fontHref&&(c.href=this.__fontHref),c},g.prototype.__wrapTextLink=function(a,b){if(a.href){var c=this.__createElement("a");return c.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a.href),c.appendChild(b),c}return b},g.prototype.__applyText=function(a,b,c,f){var g=this.__parseFont(),h=this.__closestGroupOrSvg(),i=this.__createElement("text",{"font-family":g.family,"font-size":g.size,"font-style":g.style,"font-weight":g.weight,"text-decoration":g.decoration,x:b,y:c,"text-anchor":d(this.textAlign),"dominant-baseline":e(this.textBaseline)},!0);i.appendChild(this.__document.createTextNode(a)),this.__currentElement=i,this.__applyStyleToCurrentElement(f),h.appendChild(this.__wrapTextLink(g,i))},g.prototype.fillText=function(a,b,c){this.__applyText(a,b,c,"fill")},g.prototype.strokeText=function(a,b,c){this.__applyText(a,b,c,"stroke")},g.prototype.measureText=function(a){return this.__ctx.font=this.font,this.__ctx.measureText(a)},g.prototype.arc=function(b,c,d,e,f,g){if(e!==f){e%=2*Math.PI,f%=2*Math.PI,e===f&&(f=(f+2*Math.PI-.001*(g?-1:1))%(2*Math.PI));var h=b+d*Math.cos(f),i=c+d*Math.sin(f),j=b+d*Math.cos(e),k=c+d*Math.sin(e),l=g?0:1,m=0,n=f-e;0>n&&(n+=2*Math.PI),m=g?n>Math.PI?0:1:n>Math.PI?1:0,this.lineTo(j,k),this.__addPathCommand(a("A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}",{rx:d,ry:d,xAxisRotation:0,largeArcFlag:m,sweepFlag:l,endX:h,endY:i})),this.__currentPosition={x:h,y:i}}},g.prototype.clip=function(){var c=this.__closestGroupOrSvg(),d=this.__createElement("clipPath"),e=b(this.__ids),f=this.__createElement("g");this.__applyCurrentDefaultPath(),c.removeChild(this.__currentElement),d.setAttribute("id",e),d.appendChild(this.__currentElement),this.__defs.appendChild(d),c.setAttribute("clip-path",a("url(#{id})",{id:e})),c.appendChild(f),this.__currentElement=f},g.prototype.drawImage=function(){var a,b,c,d,e,f,h,i,j,k,l,m,n,o,p,q=Array.prototype.slice.call(arguments),r=q[0],s=0,t=0;if(3===q.length)a=q[1],b=q[2],e=r.width,f=r.height,c=e,d=f;else if(5===q.length)a=q[1],b=q[2],c=q[3],d=q[4],e=r.width,f=r.height;else{if(9!==q.length)throw new Error("Inavlid number of arguments passed to drawImage: "+arguments.length);s=q[1],t=q[2],e=q[3],f=q[4],a=q[5],b=q[6],c=q[7],d=q[8]}h=this.__closestGroupOrSvg(),l=this.__currentElement;var u="translate("+a+", "+b+")";if(r instanceof g){if(i=r.getSvg().cloneNode(!0),i.childNodes&&i.childNodes.length>1){for(j=i.childNodes[0];j.childNodes.length;)p=j.childNodes[0].getAttribute("id"),this.__ids[p]=p,this.__defs.appendChild(j.childNodes[0]);if(k=i.childNodes[1]){var v,w=k.getAttribute("transform");v=w?w+" "+u:u,k.setAttribute("transform",v),h.appendChild(k)}}}else("CANVAS"===r.nodeName||"IMG"===r.nodeName)&&(m=this.__createElement("image"),m.setAttribute("width",c),m.setAttribute("height",d),m.setAttribute("preserveAspectRatio","none"),(s||t||e!==r.width||f!==r.height)&&(n=this.__document.createElement("canvas"),n.width=c,n.height=d,o=n.getContext("2d"),o.drawImage(r,s,t,e,f,0,0,c,d),r=n),m.setAttribute("transform",u),m.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","CANVAS"===r.nodeName?r.toDataURL():r.getAttribute("src")),h.appendChild(m))},g.prototype.createPattern=function(a){var c,d=this.__document.createElementNS("http://www.w3.org/2000/svg","pattern"),e=b(this.__ids);return d.setAttribute("id",e),d.setAttribute("width",a.width),d.setAttribute("height",a.height),"CANVAS"===a.nodeName||"IMG"===a.nodeName?(c=this.__document.createElementNS("http://www.w3.org/2000/svg","image"),c.setAttribute("width",a.width),c.setAttribute("height",a.height),c.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","CANVAS"===a.nodeName?a.toDataURL():a.getAttribute("src")),d.appendChild(c),this.__defs.appendChild(d)):a instanceof g&&(d.appendChild(a.__root.childNodes[1]),this.__defs.appendChild(d)),new i(d,this)},g.prototype.setLineDash=function(a){this.lineDash=a&&a.length>0?a.join(","):null},g.prototype.drawFocusRing=function(){},g.prototype.createImageData=function(){},g.prototype.getImageData=function(){},g.prototype.putImageData=function(){},g.prototype.globalCompositeOperation=function(){},g.prototype.setTransform=function(){},"object"==typeof window&&(window.C2S=g),"object"==typeof module&&"object"==typeof module.exports&&(module.exports=g)}();
//# sourceMappingURL=../../maps/libs/canvas2svg.js.map