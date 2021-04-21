(this["webpackJsonp2048-clone"]=this["webpackJsonp2048-clone"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),r=n(10),i=n.n(r),a=(n(24),n(25),n(3)),c=n(4),l=n(6),h=n(5),u=n(7),d=n(8),b=n.n(d),j=n(19),m=n(0),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("details",{id:"aboutDetails",onToggle:function(e){e.target.attributes.open?e.target.scrollIntoView():document.getElementById("boardDiv").scrollIntoView()},children:[Object(m.jsx)("summary",{children:"About This Project"}),Object(m.jsxs)("main",{children:[Object(m.jsx)("h4",{children:"Front-End"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"React"}),Object(m.jsx)("li",{children:"JSX"}),Object(m.jsx)("li",{children:"SASS"}),"Node.js, MongoDB, Heroku, and Atlas."]}),Object(m.jsx)("h4",{children:"Back-End/API"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Node.js"}),Object(m.jsx)("li",{children:"MongoDB"}),Object(m.jsx)("li",{children:"Heroku"}),Object(m.jsx)("li",{children:"Atlas"})]}),Object(m.jsx)("h4",{children:"Inspiration"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"http://gabrielecirulli.github.io/2048/",children:"2048 by Gabriele Cirulli"})}),Object(m.jsx)("li",{children:"I was sick of all the ads while trying to play 2048"}),Object(m.jsx)("li",{children:"I wanted to learn more about creating, hosting, and maintaing my own API's"})]})]})]})}}]),n}(s.a.Component);function f(e){var t=new Date(e).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});return t=t.replace(",","").replace("PM","p.m.").replace("AM","a.m."),console.log(t),t}function v(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("details",{id:"highscoreDetails",onToggle:function(e){e.target.attributes.open?e.target.scrollIntoView():document.getElementById("boardDiv").scrollIntoView()},children:[Object(m.jsx)("summary",{children:" High Scores "}),Object(m.jsx)("main",{children:function(e){var t=e.highScore;return t.length>0?t.sort((function(e,t){return parseInt(e.score)<parseInt(t.score)?1:-1})).slice(0,20).map((function(e,t){return Object(m.jsxs)("div",{className:"high-score",children:[Object(m.jsx)("span",{className:"userName ".concat(e.id),children:e.name}),":\xa0",Object(m.jsx)("span",{className:"userScore",children:Object(m.jsx)("strong",{children:e.score})}),"\xa0 points\xa0on\xa0",Object(m.jsx)("span",{children:f(e.createdAt)})]},e.id)})):Object(m.jsx)("p",{children:" No Highscores Found "})}(e)})]}),Object(m.jsx)(p,{})]})}function g(){var e=Object(o.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],r={method:"get",url:"https://highscore-api.herokuapp.com/scores"};Object(o.useEffect)((function(){i()}),[]);var i=function(){b()(r).then((function(e){console.log(e);var t=e.data;s(t)})).catch((function(e){return console.error(e)}))};return Object(m.jsx)(v,{highScore:n})}var O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={value:"",score:o.props.score},o.handleChange=o.handleChange.bind(Object(u.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(u.a)(o)),o}return Object(c.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=document.getElementById("postMessage"),o=this.state.score.toString();if(""===this.state.value)alert("Please enter your name");else{console.log(this.state.value),console.log(this.state.score.toString());var s={name:this.state.value,score:o},r=Object.keys(s).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(s[e]))})).join("&");console.log(r);var i={method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},data:r,url:"https://highscore-api.herokuapp.com/scores"};b()(i).then((function(e){n.classList.add("alert-success"),n.innerHTML="Successfully posted a score of "+t.state.score.toString()+" for "+t.state.value,document.getElementById("postScoreForm").style.display="none"})).catch((function(e){console.log(e),n.classList.add("alert-danger"),n.innerHTML="Oops! There was an error posting a score of "+t.state.score.toString()+" for "+t.state.value+". Please try again."}))}}},{key:"render",value:function(){var e=this.state.score.toString();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{id:"postScoreForm",onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{children:[" Enter your name to submit your high score:",Object(m.jsx)("input",{type:"text",name:"name",value:this.state.value,onChange:this.handleChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"hidden",id:"score",name:"score",value:e}),Object(m.jsx)("input",{type:"submit",value:"Submit"})]})})}}]),n}(s.a.Component),y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={board:new w},o}return Object(c.a)(n,[{key:"restartGame",value:function(){this.setState({board:new w}),window.location.reload(!1)}},{key:"handleKeyDown",value:function(e){if(!this.state.board.hasWon())if(e.keyCode>=37&&e.keyCode<=40){e.preventDefault();var t=e.keyCode-37;this.setState({board:this.state.board.move(t)})}else switch(!0){case 87===e.keyCode:t=1,this.setState({board:this.state.board.move(t)});break;case 65===e.keyCode:t=0,this.setState({board:this.state.board.move(t)});break;case 83===e.keyCode:t=3,this.setState({board:this.state.board.move(t)});break;case 68===e.keyCode:t=2,this.setState({board:this.state.board.move(t)})}}},{key:"handleTouchStart",value:function(e){this.state.board.hasWon()||1===e.touches.length&&(this.startX=e.touches[0].screenX,this.startY=e.touches[0].screenY,e.preventDefault())}},{key:"handleTouchEnd",value:function(e){if(!this.state.board.hasWon()&&1===e.changedTouches.length){var t=e.changedTouches[0].screenX-this.startX,n=e.changedTouches[0].screenY-this.startY,o=-1;Math.abs(t)>3*Math.abs(n)&&Math.abs(t)>30?o=t>0?2:0:Math.abs(n)>3*Math.abs(t)&&Math.abs(n)>30&&(o=n>0?3:1),-1!==o&&this.setState({board:this.state.board.move(o)})}}},{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown.bind(this))}},{key:"render",value:function(){var e=this.state.board.cells.map((function(e,t){return Object(m.jsx)("div",{children:e.map((function(e,n){return Object(m.jsx)(S,{},t*w.size+n)}))},t)})),t=this.state.board.tiles.filter((function(e){return 0!==e.value})).map((function(e){return Object(m.jsx)(k,{tile:e},e.id)})),n=this.state.board.score;return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)("div",{className:"scoreboard row",children:Object(m.jsxs)("h2",{id:"score",children:["Score: ",n]})}),Object(m.jsxs)("div",{className:"board",onTouchStart:this.handleTouchStart.bind(this),onTouchEnd:this.handleTouchEnd.bind(this),tabIndex:"1",children:[e,t,Object(m.jsx)(x,{board:this.state.board,onRestart:this.restartGame.bind(this)})]})]})}}]),n}(s.a.Component),x=function(e){var t=e.board,n=e.onRestart,o="";return t.hasLost()&&(o=Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O,{score:t.score})})),o?Object(m.jsxs)("div",{className:"overlay",children:[Object(m.jsx)("div",{id:"postMessage"}),o,Object(m.jsx)("button",{className:"tryAgain",onClick:n,onTouchEnd:n,children:"Play again"})]}):null},w=function e(){this.tiles=[],this.cells=[];for(var t=0;t<e.size;++t)this.cells[t]=[this.addTile(),this.addTile(),this.addTile(),this.addTile()];this.addRandomTile(),this.setPositions(),this.won=!1,this.score=0};w.prototype.addScore=function(e){this.score+=e},w.prototype.moveLeft=function(){for(var e=!1,t=0;t<w.size;++t){for(var n=this.cells[t].filter((function(e){return 0!==e.value})),o=[],s=0;s<w.size;++s){var r=n.length?n.shift():this.addTile();if(n.length>0&&n[0].value===r.value){var i=r;r=this.addTile(r.value),i.mergedInto=r;var a=n.shift();a.mergedInto=r,r.value+=a.value,this.addScore(r.value)}o[s]=r,this.won|=r.value===1/0,e|=r.value!==this.cells[t][s].value}this.cells[t]=o}return e};var S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return Object(m.jsx)("span",{className:"cell",children:""})}}]),n}(s.a.Component),k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(e){return this.props.tile!==e.tile||!(!e.tile.hasMoved()&&!e.tile.isNew())}},{key:"render",value:function(){var e=this.props.tile,t=["tile"];t.push("tile"+this.props.tile.value),e.mergedInto||t.push("position_"+e.row+"_"+e.column),e.mergedInto&&t.push("merged"),e.isNew()&&t.push("new"),e.hasMoved()&&(t.push("row_from_"+e.fromRow()+"_to_"+e.toRow()),t.push("column_from_"+e.fromColumn()+"_to_"+e.toColumn()),t.push("isMoving"));var n=t.join(" ");return Object(m.jsx)("span",{className:n,children:e.value})}}]),n}(s.a.Component),C=function(e){for(var t=e.length,n=e[0].length,o=[],s=0;s<t;++s){o.push([]);for(var r=0;r<n;++r)o[s][r]=e[r][n-s-1]}return o},I=function e(t,n,o){this.value=t||0,this.row=n||-1,this.column=o||-1,this.oldRow=-1,this.oldColumn=-1,this.markForDeletion=!1,this.mergedInto=null,this.id=e.id++};I.id=0,I.prototype.moveTo=function(e,t){this.oldRow=this.row,this.oldColumn=this.column,this.row=e,this.column=t},I.prototype.isNew=function(){return-1===this.oldRow&&!this.mergedInto},I.prototype.hasMoved=function(){return-1!==this.fromRow()&&(this.fromRow()!==this.toRow()||this.fromColumn()!==this.toColumn())||this.mergedInto},I.prototype.fromRow=function(){return this.mergedInto?this.row:this.oldRow},I.prototype.fromColumn=function(){return this.mergedInto?this.column:this.oldColumn},I.prototype.toRow=function(){return this.mergedInto?this.mergedInto.row:this.row},I.prototype.toColumn=function(){return this.mergedInto?this.mergedInto.column:this.column},w.prototype.addTile=function(){var e=new I;return I.apply(e,arguments),this.tiles.push(e),e},w.size=4,w.prototype.setPositions=function(){this.cells.forEach((function(e,t){e.forEach((function(e,n){e.oldRow=e.row,e.oldColumn=e.column,e.row=t,e.column=n,e.markForDeletion=!1}))}))},w.fourProbability=.1,w.prototype.addRandomTile=function(){for(var e=[],t=0;t<w.size;++t)for(var n=0;n<w.size;++n)0===this.cells[t][n].value&&e.push({r:t,c:n});var o=e[~~(Math.random()*e.length)],s=Math.random()<w.fourProbability?4:2;this.cells[o.r][o.c]=this.addTile(s)},w.prototype.move=function(e){this.clearOldTiles();for(var t=0;t<e;++t)this.cells=C(this.cells);for(var n=this.moveLeft(),o=e;o<4;++o)this.cells=C(this.cells);return n&&this.addRandomTile(),this.setPositions(),this},w.prototype.clearOldTiles=function(){this.tiles=this.tiles.filter((function(e){return!1===e.markForDeletion})),this.tiles.forEach((function(e){e.markForDeletion=!0}))},w.prototype.hasWon=function(){return this.won},w.deltaX=[-1,0,1,0],w.deltaY=[0,-1,0,1],w.prototype.hasLost=function(){for(var e=!1,t=0;t<w.size;++t)for(var n=0;n<w.size;++n){e|=0===this.cells[t][n].value;for(var o=0;o<4;++o){var s=t+w.deltaX[o],r=n+w.deltaY[o];s<0||s>=w.size||r<0||r>=w.size||(e|=this.cells[t][n].value===this.cells[s][r].value)}}return!e},i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("highscoreDiv")),i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("boardDiv"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3b3cf69b.chunk.js.map