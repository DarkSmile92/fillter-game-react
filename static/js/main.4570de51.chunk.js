(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,n){e.exports=n(280)},142:function(e,t,n){},144:function(e,t,n){},280:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(25),l=n.n(o),c=(n(142),n(22)),i=n(29),s=n(31),u=n(30),h=n(32),d=(n(144),n(288)),p=n(285),m=n(291),f=n(287),y=n(119),x=n(289),C=n(286),g=n(77),w=1.5,v=[{name:"red",hex:"#C70039"},{name:"yellow",hex:"#FFC300"},{name:"white",hex:"#DEECEE"},{name:"green",hex:"#0BB02C"},{name:"cyan",hex:"#10ECF3"},{name:"blue",hex:"#103DF3"},{name:"purple",hex:"#F310D4"}],E="p1",b="p2",P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).isStartingCell=function(){return n.state.cell.isCurrentCell(0,0)},n.calcBorderSize=function(){return n.state.cell.isCurrentCell(0,0)||n.state.cell.isCurrentCell(n.state.xmax,n.state.ymax)?"3px":"1px"},n.calcBorderColor=function(){return n.state.cell.isCurrentCell(0,0)?"#C0A3B5":n.state.cell.isCurrentCell(n.state.xmax,n.state.ymax)?"#A3C0AE":"grey"},n.state={cell:e.cell,xmax:e.XMax,ymax:e.YMax},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.calcBorderSize(),t=this.calcBorderColor(),n=a.a.createElement("span",null),r={fontSize:"50%"};if(this.state.cell)switch(this.state.cell.owner){case E:n=a.a.createElement(y.a,{name:"fly",style:r});break;case b:n=a.a.createElement(y.a,{name:"sun",style:r})}return a.a.createElement("div",{className:"cell",style:{backgroundColor:this.state.cell.color.hex,height:"".concat(w,"rem"),width:"".concat(w,"rem"),border:"".concat(e," groove ").concat(t),textAlign:"center",display:"flex"}},this.props.ownerDisplay&&n)}}]),t}(a.a.Component),O=function e(t,n,r,a){var o=this;Object(c.a)(this,e),this.isCurrentCell=function(e,t){return o.X===e&&o.Y===t},this.changeColor=function(e){o.color.hex!==e.hex&&(o.color=e)},this.displayName=function(){return"{X:".concat(o.X,", Y:").concat(o.Y,", Owner: ").concat(o.owner,", Color: ").concat(o.color.name,"}")},this.isOwnedBy=function(e){return o.owner&&o.owner===e},this.color=t,this.X=n,this.Y=r,this.owner=a},N=function(e){return a.a.createElement(d.a,{horizontal:!0,inverted:!0,size:"mini"},a.a.createElement(d.a.Value,null,e.toFixed(2)),a.a.createElement(d.a.Label,null,"%"))},B=function(e,t){return 100*e/t},k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).randomColor=function(){return v[Math.floor(Math.random()*v.length)]},n.reset=function(){var e={name:"empty",hex:"0"};n.setState({currentColorP1:e,currentColorP2:e,currentPlayer:E,completeP1:0,completeP2:0,nextMove:{hex:"0",cnt:0},won:!1,wonName:""})},n.startGame=function(e,t){n.cells=[],n.reset(),n.generateGrid(e,t)},n.generateGrid=function(e,t){for(var r=0;r<=t;r++)for(var a=0;a<=e;a++){"undefined"===typeof n.cells[r]&&(n.cells[r]=[]);var o=n.randomColor();if(0===r&&0===a&&n.setState({currentColor:o,currentColorP1:o}),r===t&&a===e){for(;o.hex===n.state.currentColorP1;)o=n.randomColor();n.setState({currentColorP2:o})}var l=new O(o,a,r,0===r&&0===a?E:r===t&&a===e?b:"");n.cells[r][a]=l}},n.findBestMoveHex=function(e,t){var r=[];v.filter(function(t){return e.findIndex(function(e){return e.hex===t.hex})<0}).forEach(function(e){for(var a=[],o=[],l=0;l<=n.props.height;l++)for(var c=0;c<=n.props.width;c++)n.cells[l][c].isOwnedBy(t)&&o.push({x:c,y:l});if(t===E)for(var i=0;i<=n.props.height;i++)for(var s=0;s<=n.props.width;s++)n.cellIsConnectedNeighbor(s,i,e,o.concat(a),t)&&a.push({x:s,y:i});else for(var u=n.props.height;u>=0;u--)for(var h=n.props.width;h>=0;h--)n.cellIsConnectedNeighbor(h,u,e,o.concat(a),t)&&a.push({x:h,y:u});r.push({color:e.hex,changes:a.length})});var a=r.reduce(function(e,t){return e.changes>t.changes?e:t});return a?{hex:a.color,cnt:a.changes}:{hex:"0",cnt:0}},n.updateStatsForPlayer=function(e){for(var t=0,r=0;r<=n.props.height;r++)for(var a=0;a<=n.props.width;a++)n.cells[r][a].isOwnedBy(e)&&t++;var o=B(t,n.props.height*n.props.width);n.setState({completeP1:e===E?o:n.state.completeP1,completeP2:e===b?o:n.state.completeP2,won:o>=50,wonName:o>=50?e:""})},n.changeColor=function(e){var t=n.state.currentPlayer,r=n.findNewCells(e,t,[]),a=0,o=!0,l=!1,c=void 0;try{for(var i,s=r[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value,h=n.cells[u.y][u.x];h.isOwnedBy(t)||a++,h.color=e,h.owner=t}}catch(m){l=!0,c=m}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}n.updateStatsForPlayer(t),n.notifyChangedCells(a);var d=[e,t===E?n.state.currentColorP2:n.state.currentColorP1],p=n.findBestMoveHex(d,t===E?b:E);n.setState({currentColorP1:t===E?e:n.state.currentColorP1,currentColorP2:t===b?e:n.state.currentColorP2,nextMove:p,currentPlayer:t===E?b:E})},n.findNewCells=function(e,t,r){var a=0,o=t===E?n.state.currentColorP1:n.state.currentColorP2;if(!o||o.hex!==e.hex)if(t===E)for(var l=function(o){for(var l=function(l){var c=n.cells[o][l];return 0===o&&0===l?(r.push({x:l,y:o}),"continue"):c.owner&&c.isOwnedBy(t)?(r.push({x:l,y:o}),"continue"):n.cellIsConnectedNeighbor(l,o,e,r,t)?(r.findIndex(function(e){return e.x===l&&e.y===o})<0&&(a++,r.push({x:l,y:o})),"continue"):void 0},c=0;c<=n.props.width;c++)l(c)},c=0;c<=n.props.height;c++)l(c);else{var i=function(o){for(var l=function(l){var c=n.cells[o][l];return o===n.props.height&&l===n.props.width?(r.push({x:l,y:o}),"continue"):c.owner&&c.isOwnedBy(t)?(r.push({x:l,y:o}),"continue"):n.cellIsConnectedNeighbor(l,o,e,r,t)?(r.findIndex(function(e){return e.x===l&&e.y===o})<0&&(a++,r.push({x:l,y:o})),"continue"):void 0},c=n.props.width;c>=0;c--)l(c)};for(c=n.props.height;c>=0;c--)i(c)}return a>0&&n.findNewCells(e,t,r),r},n.cellIsConnectedNeighbor=function(e,t,r,a,o){var l=n.cells[t][e];if(l.color.hex!==r.hex)return!1;if(e-1>=0){var c=t,i=e-1;if(n.cells[c][i].isOwnedBy(o)||a.findIndex(function(e){return e.x===i&&e.y===c})>=0)return n.state.debug&&console.log("N-LEFT: ".concat(l.displayName())),!0}if(e+1<=n.props.width){var s=t,u=e+1;if(n.cells[s][u].isOwnedBy(o)||a.findIndex(function(e){return e.x===u&&e.y===s})>=0)return n.state.debug&&console.log("N-RIGHT: ".concat(l.displayName())),!0}if(t-1>=0){var h=t-1,d=e;if(n.cells[h][d].isOwnedBy(o)||a.findIndex(function(e){return e.x===d&&e.y===h})>=0)return n.state.debug&&console.log("N-TOP: ".concat(l.displayName())),!0}if(t+1<=n.props.height){var p=t+1,m=e;if(n.cells[p][m].isOwnedBy(o)||a.findIndex(function(e){return e.x===m&&e.y===p})>=0)return n.state.debug&&console.log("N-BOTTOM: ".concat(l.displayName())),!0}return!1},n.notifyChangedCells=function(e){return g.toast.info("".concat(e," !"),{position:"bottom-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},n.renderWinnerGrid=function(){return a.a.createElement("div",{style:{width:"".concat(w*n.props.width,"rem"),height:"".concat(w*n.props.height,"rem"),backgroundColor:"#729CEE",color:"#EEC472",display:"flex",alignItems:"center",justifyContent:"center"}},a.a.createElement("span",{style:{fontSize:"3rem"}},"Winner: ",n.state.wonName))},n.renderGrid=function(){var e=[];if(!n.cells||0===n.cells.length)return e;for(var t=0;t<=n.props.height;t++){for(var r=[],o=0;o<=n.props.width;o++){var l=n.cells[t][o];r.push(a.a.createElement("td",{key:"x_".concat(o)},a.a.createElement(P,Object.assign({},n.props,{cell:l,YMax:n.props.height,XMax:n.props.width,ownerDisplay:n.state.displayOwner}))))}e.push(a.a.createElement("tr",{key:"y_".concat(t)},r))}return e},n.toggleDisplayOwner=function(){return n.setState({displayOwner:!n.state.displayOwner})},n.toggleDisplayPoss=function(){return n.setState({displayPoss:!n.state.displayPoss})},n.state={height:e.height*w,width:e.width*w,currentColorP1:{name:"empty",hex:"0"},currentColorP2:{name:"empty",hex:"0"},currentPlayer:E,completeP1:0,completeP2:0,nextMove:{hex:"0",cnt:0},won:!1,wonName:"",displayOwner:!1,displayPoss:!1,debug:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.startGame(this.props.width,this.props.height)}},{key:"render",value:function(){var e=this;return a.a.createElement(p.a,{centered:!0},a.a.createElement(m.a,{centered:!0,columns:3,verticalAlign:"middle"},a.a.createElement(m.a.Row,{verticalAlign:"middle"},a.a.createElement(m.a.Column,null,a.a.createElement(m.a,{centered:!0,verticalAlign:"middle"},!this.state.won&&a.a.createElement("div",{className:"board"},a.a.createElement("table",null,a.a.createElement("tbody",null,this.renderGrid()))),this.state.won&&this.renderWinnerGrid()))),a.a.createElement(m.a.Row,{centered:!0,columns:v.length+8},v.map(function(t){return a.a.createElement(m.a.Column,{key:t.name},a.a.createElement(f.a,{style:{backgroundColor:e.state.currentColorP1.hex===t.hex||e.state.currentColorP2.hex===t.hex?"#23272E":t.hex,border:e.state.nextMove&&e.state.nextMove.hex===t.hex?"3px solid #785807":"none"},onClick:function(){return e.changeColor(t)},diabled:e.state.currentColorP1.hex===t.hex||e.state.currentColorP2.hex===t.hex||e.state.won},e.state.displayPoss&&e.state.nextMove.hex===t.hex?e.state.nextMove.cnt:"","\xa0"))})),a.a.createElement(m.a.Row,{verticalAlign:"middle"},a.a.createElement(m.a.Column,null,a.a.createElement(m.a,{relaxed:!0},a.a.createElement(m.a.Row,null,a.a.createElement(m.a.Column,null,this.state.currentPlayer===E&&a.a.createElement(y.a,{name:"chevron circle right"})),a.a.createElement(m.a.Column,null,E),a.a.createElement(m.a.Column,null,N(this.state.completeP1))),a.a.createElement(m.a.Row,null,a.a.createElement(m.a.Column,null,this.state.currentPlayer===b&&a.a.createElement(y.a,{name:"chevron circle right"})),a.a.createElement(m.a.Column,null,b),a.a.createElement(m.a.Column,null,N(this.state.completeP2))))),a.a.createElement(m.a.Column,null,a.a.createElement(x.a,null,a.a.createElement(C.a,{label:"Display owner",toggle:!0,onChange:this.toggleDisplayOwner}),a.a.createElement(C.a,{label:"Display possibilities",toggle:!0,onChange:this.toggleDisplayPoss}))),a.a.createElement(m.a.Column,null,a.a.createElement(f.a,{onClick:function(){return e.startGame(e.props.width,e.props.height)}},"New Game")))),a.a.createElement(g.ToastContainer,{position:"bottom-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}))}}]),t}(a.a.Component),j=n(290),M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App-header",style:{minHeight:"100vh"}},a.a.createElement(j.a,{as:"h2",inverted:!0},"Filler by Robin"),a.a.createElement(k,{height:20,width:20}))}}]),t}(r.Component);n(274),n(277),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,2,1]]]);
//# sourceMappingURL=main.4570de51.chunk.js.map