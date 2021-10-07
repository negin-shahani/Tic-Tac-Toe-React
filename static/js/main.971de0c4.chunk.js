(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],{26:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),a=r(19),i=r.n(a),c=(r(57),r(58),r(44)),l=r(12),o=r(13),u=r(16),h=r(15),j=(r(26),r(87)),b=r(2),d=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(b.jsx)(j.a,{className:"square"+(this.props.isWinner?" winner":""),onClick:this.props.onClick,children:this.props.value})}}]),r}(n.Component),p=r(88),O=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"renderSquare",value:function(e,t){var r=this;return Object(b.jsx)(d,{value:this.props.squares[e],onClick:function(){return r.props.onClick(e)},isWinner:t},"square-"+e)}},{key:"createBoard",value:function(){for(var e=[],t=1;t<4;t++){for(var r=[],n=1;n<4;n++){var s=3*t+n-4,a=!1;Array.isArray(this.props.line)&&this.props.line.includes(s)&&(a=!0),r.push(this.renderSquare(s,a))}e.push(Object(b.jsx)("div",{className:"board-row",children:r},"row-"+t))}return e}},{key:"render",value:function(){return Object(b.jsx)("div",{className:this.props.className,children:Object(b.jsx)(p.a,{container:!0,children:Object(b.jsx)(p.a,{item:!0,xs:12,children:this.createBoard()})})})}}]),r}(n.Component);function x(){return Object(b.jsx)("svg",{viewBox:"0 0 384 512",children:Object(b.jsxs)("g",{children:[Object(b.jsx)("path",{fill:"currentColor",d:"M379.29 132.69l-80-96a16 16 0 00-22.62 0l-80 96C186.65 142.74 193.78 160 208 160h48v304a16 16 0 0016 16h32a16 16 0 0016-16V160h48c14.19 0 21.36-17.24 11.29-27.31z",className:"secondary"}),Object(b.jsx)("path",{fill:"currentColor",d:"M176 352h-48V48a16 16 0 00-16-16H80a16 16 0 00-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0022.62 0l80-96C197.35 369.26 190.22 352 176 352z",className:"primary"})]})})}var v=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(b.jsx)("button",{className:"sort-button"+(this.props.position?" desc":""),onClick:this.props.onClick,children:Object(b.jsx)(x,{})})}}]),r}(n.Component),f=r(93),m=r(90),y=r(89),g=r(39),N=r.n(g),k=r(40),C=r.n(k),w=r(43),S=r.n(w),q=r(46),T=r(92),D=r(91),I=r(41),M=r.n(I),z=r(42),E=r.n(z);function A(e){return[Math.floor(e/3)+1,e%3+1]}function B(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(c.a)(t[r],3),s=n[0],a=n[1],i=n[2];if(e[s]&&e[s]===e[a]&&e[a]===e[i])return{winner:e[s],line:t[r]}}return null}function F(){return Object(b.jsxs)(q.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 "," ",(new Date).getFullYear(),".",Object(b.jsxs)(D.a,{color:"inherit",href:"https://github.com/negin-shahani/Tic-Tac-Toe-React",children:["You can find my code in github  ",Object(b.jsx)(S.a,{fontSize:"inherit"})]})]})}var H=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null),lastMove:Array(2).fill(null)}],stepNumber:0,xIsNext:!0,sortDesc:!1,showError:!1},n}return Object(o.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice(),n=Boolean(B(r)),s=Boolean(r[e]);n||s?this.setState({showError:!0}):(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r,lastMove:A(e)}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"restart",value:function(){this.setState({history:[{squares:[null,null,null,null,null,null,null,null,null],lastMove:[null,null]}],stepNumber:0,xIsNext:!0,sortDesc:!1,showError:!1})}},{key:"jumpTo",value:function(e){var t=e%2===0;this.setState({stepNumber:e,xIsNext:t})}},{key:"handleClickOnSorting",value:function(e){this.setState({sortDesc:!e})}},{key:"hideShowError",value:function(){this.setState({showError:!1})}},{key:"DescriptionAlerts",value:function(){var e=this;return Object(b.jsx)(f.a,{severity:"error",action:Object(b.jsx)(y.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){e.hideShowError()},children:Object(b.jsx)(N.a,{fontSize:"inherit"})}),children:Object(b.jsx)(m.a,{children:"Error: you should pick the empty squares!"})})}},{key:"render",value:function(){var e,t,r=this,n=this.state.history,s=n[this.state.stepNumber],a=B(s.squares),i=0===s.squares.filter((function(e){return null===e})).length;a?(e="Winner: "+a.winner,t=a.line,i=!1):e=i?"Draw!":"Next player: "+(this.state.xIsNext?"X":"O");var c=n.map((function(e,t){var n=t?"Go to move #".concat(t):"Go to game start",s=e.lastMove[0]?"col:".concat(e.lastMove[0],", row:").concat(e.lastMove[1]):null;return Object(b.jsx)("li",{className:t===r.state.stepNumber?"active":null,children:Object(b.jsxs)("button",{onClick:function(){return r.jumpTo(t)},children:[n,s?Object(b.jsx)("span",{children:s}):null]})},t)}));return this.state.sortDesc&&c.reverse(),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"game",children:[Object(b.jsxs)(q.a,{variant:"headline",className:"Header",align:"center",children:["Tic Tac Toe",Object(b.jsx)(C.a,{fontSize:"inherit"})]}),Object(b.jsx)(q.a,{variant:"headline",className:"Help",align:"center",children:Object(b.jsxs)(D.a,{style:{fontSize:20,color:"white"},href:"https://en.wikipedia.org/wiki/Tic-tac-toe",children:["How to play ",Object(b.jsx)(M.a,{fontSize:"inherit"})]})}),Object(b.jsx)(q.a,{variant:"headline",align:"center",children:Object(b.jsx)(j.a,{style:{marginTop:20,color:"purple",backgroundColor:"white"},variant:"contained",size:"large",endIcon:Object(b.jsx)(E.a,{}),onClick:function(){return r.restart()},children:"Restart"})}),Object(b.jsx)("input",{id:"sidebar-toggle",type:"checkbox"}),Object(b.jsx)("div",{className:"game-control",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"game-control-info",children:e}),Object(b.jsxs)("label",{htmlFor:"sidebar-toggle",className:"more-button",children:[Object(b.jsx)("span",{children:"moves"}),Object(b.jsx)("span",{children:"close"})]})]})}),Object(b.jsx)("div",{className:"game-board-wrapper",children:Object(b.jsx)(O,{className:"game-board"+(i?" draw":""),squares:s.squares,line:t,onClick:function(e){return r.handleClick(e)}})}),Object(b.jsxs)("div",{className:"game-sidebar",children:[Object(b.jsxs)("div",{className:"game-sidebar-status",children:[e,Object(b.jsx)(v,{position:this.state.sortDesc,onClick:function(){return r.handleClickOnSorting(r.state.sortDesc)}})]}),Object(b.jsx)("ul",{children:c})]}),this.state.showError?Object(b.jsx)("div",{children:this.DescriptionAlerts()}):null]}),Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)(T.a,{maxWidth:"sm",children:[Object(b.jsx)(q.a,{variant:"body1",children:"All Rights Reserved"}),Object(b.jsx)(F,{})]})})]})}}]),r}(n.Component);var R=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(H,{})})},W=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,94)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),W()}},[[65,1,2]]]);
//# sourceMappingURL=main.971de0c4.chunk.js.map