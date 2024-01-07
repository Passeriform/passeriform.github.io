"use strict";(self.webpackChunkpasseriform=self.webpackChunkpasseriform||[]).push([[557],{9557:(ct,p,c)=>{c.r(p),c.d(p,{default:()=>at});var g=c(6814),m=c(9865),l=c(7157),_=c(4273),C=c(7398),h=c(4514),t=c(8926);let O=(()=>{class n{transform(e,o){return e.split(o)}static \u0275fac=function(o){return new(o||n)};static \u0275pipe=t.Yjl({name:"splitBy",type:n,pure:!0,standalone:!0})}return n})();var P=c(6593);let M=(()=>{class n{sanitizer;constructor(e){this.sanitizer=e}transform(e,o){const i="string"==typeof o?new RegExp(o,"gi"):o,s=e.replace(i,"<b>$1</b>");return this.sanitizer.sanitize(t.q3G.HTML,s)}static \u0275fac=function(o){return new(o||n)(t.Y36(P.H7,16))};static \u0275pipe=t.Yjl({name:"boldSpan",type:n,pure:!0,standalone:!0})}return n})();var u=c(2403);const f=n=>!(!n.payload||!("action"in n.payload)),x=n=>!(!n.payload||!("commits"in n.payload)),b={opened:"New Issue",started:"Now Watching"},v=/^((?:(?:\[[\w\s\|\,]+\])|(?:[\w\s\|\,]+))\s*\:?)/;var w=c(8350),y=c(2566);let Z=(()=>{class n{name;static \u0275fac=function(o){return new(o||n)};static \u0275cmp=t.Xpm({type:n,selectors:[["app-badge"]],inputs:{name:"name"},standalone:!0,features:[t.jDz],decls:3,vars:4,consts:[[1,"badge-box"],[3,"alt","src"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.ALo(2,"iconUri"),t.qZA()),2&o&&(t.xp6(1),t.MGl("alt","badge-",i.name,""),t.s9C("src",t.lcZ(2,2,i.name),t.LSH))},dependencies:[y.y],styles:["[_nghost-%COMP%] > .badge-box[_ngcontent-%COMP%]{padding:1em;display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}[_nghost-%COMP%] > .badge-box[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:1.5em;filter:invert(1)}"]})}return n})();function T(n,a){if(1&n&&(t.TgZ(0,"code",17),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.type)}}function A(n,a){if(1&n&&(t.TgZ(0,"p",18),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit,o=t.oxw();t.xp6(1),t.hij(" ",o.actionPresentation[e.payload.action]," ")}}function S(n,a){if(1&n&&(t.TgZ(0,"li",21),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.message," ")}}function U(n,a){if(1&n&&(t.TgZ(0,"ul",19),t.YNc(1,S,2,1,"li",20),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.payload.commits)}}function E(n,a){if(1&n&&(t._UZ(0,"p",34),t.ALo(1,"boldSpan")),2&n){const e=t.oxw().$implicit,o=t.oxw(3);t.Q6J("innerHtml",t.xi3(1,1,e.message,o.commitCategoryPattern),t.oJD)}}function k(n,a){if(1&n&&(t.TgZ(0,"a",35),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit,o=t.oxw(2).$implicit;t.hYB("href","https://github.com/",o.repo.name,"/commit/",e.sha,"",t.LSH),t.xp6(1),t.Oqu(e.sha)}}function I(n,a){if(1&n&&(t.TgZ(0,"span",39),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.author.name," ")}}function L(n,a){if(1&n&&(t.TgZ(0,"span",40),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ","<"+e.author.email+">"," ")}}function R(n,a){if(1&n&&(t.TgZ(0,"a",36),t.YNc(1,I,2,1,"span",37),t.YNc(2,L,2,1,"span",38),t.qZA()),2&n){const e=t.oxw().$implicit;t.MGl("href","https://github.com/",e.author.name,"",t.LSH),t.xp6(1),t.Q6J("ngIf",e.author.name),t.xp6(1),t.Q6J("ngIf",e.author.email)}}function q(n,a){if(1&n&&(t.TgZ(0,"div",27)(1,"div",28),t.YNc(2,E,2,4,"p",29),t.qZA(),t.TgZ(3,"div",30),t.YNc(4,k,2,3,"a",31),t.qZA(),t.TgZ(5,"div",32),t.YNc(6,R,3,3,"a",33),t.qZA()()),2&n){const e=a.$implicit;t.xp6(2),t.Q6J("ngIf",e.message),t.xp6(2),t.Q6J("ngIf",e.sha),t.xp6(2),t.Q6J("ngIf",e.author.email&&e.author.name)}}function j(n,a){if(1&n&&(t.ynx(0),t.YNc(1,q,7,3,"div",22),t.TgZ(2,"a",23),t.ALo(3,"splitBy"),t.TgZ(4,"p")(5,"span",24),t._UZ(6,"img",25),t.qZA(),t._uU(7),t.ALo(8,"splitBy"),t.qZA(),t.TgZ(9,"p")(10,"span",24),t._UZ(11,"img",26),t.qZA(),t._uU(12),t.qZA()(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.payload.commits),t.xp6(1),t.hYB("href","https://github.com/",e.repo.name,"/tree/",t.xi3(3,5,e.payload.ref,"/")[2],"",t.LSH),t.xp6(5),t.hij(" ",t.xi3(8,8,e.payload.ref,"/")[2]," "),t.xp6(5),t.hij(" ",e.payload.head," ")}}function N(n,a){1&n&&(t.TgZ(0,"div",41)(1,"p",42),t._uU(2," No Additional Details... "),t.qZA()())}const Y=function(n){return{expanded:n}};function F(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2),t.NdJ("mousedown",function(){const s=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.toggleDetails(s))})("keydown",function(){const s=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.toggleDetails(s))}),t.YNc(2,T,2,1,"ng-template",null,3,t.W1O),t.TgZ(4,"div",4),t._UZ(5,"app-badge",5),t.qZA(),t.TgZ(6,"div",6)(7,"a",7)(8,"span",8),t._uU(9),t.ALo(10,"splitBy"),t.qZA(),t._UZ(11,"span",9),t.TgZ(12,"span",10),t._uU(13),t.ALo(14,"splitBy"),t.qZA()()(),t.TgZ(15,"div",11),t.YNc(16,A,2,1,"p",12),t.YNc(17,U,2,1,"ul",13),t.qZA()(),t.TgZ(18,"div",14),t.YNc(19,j,13,11,"ng-container",15),t.YNc(20,N,3,0,"ng-template",null,16,t.W1O),t.qZA()()}if(2&n){const e=a.$implicit,o=t.MAs(3),i=t.MAs(21),s=t.oxw();t.Q6J("ngClass",t.VKq(17,Y,e.expand)),t.xp6(4),t.Q6J("position",s.Position.TOP)("template",o),t.xp6(1),t.Q6J("name",e.type),t.xp6(2),t.MGl("href","https://github.com/",e.repo.name,"",t.LSH),t.xp6(2),t.Oqu(t.xi3(10,11,e.repo.name,"/")[0]),t.xp6(4),t.Oqu(t.xi3(14,14,e.repo.name,"/")[1]),t.xp6(3),t.Q6J("ngIf",s.isActionEvent(e)),t.xp6(1),t.Q6J("ngIf",s.isPushEvent(e)),t.xp6(2),t.Q6J("ngIf",s.isPushEvent(e))("ngIfElse",i)}}let z=(()=>{class n{githubService;actionPresentation=b;commitCategoryPattern=v;isActionEvent=f;isPushEvent=x;Position=h.L;updates$;constructor(e){this.githubService=e,this.updates$=this.githubService.githubFeedState$.pipe((0,C.U)(o=>o.map(i=>({...i,expand:!1}))))}ngOnInit(){this.githubService.refreshFeed()}toggleDetails(e){e.expand=!e.expand}refresh(){}loadMore(e){this.githubService.refreshFeed(e)}static \u0275fac=function(o){return new(o||n)(t.Y36(w.K))};static \u0275cmp=t.Xpm({type:n,selectors:[["app-update-roll"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[["class","update-roll-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"update-roll-item",3,"ngClass"],[1,"brief",3,"mousedown","keydown"],["tooltipTemplate",""],["appTooltip","",1,"type-badge",3,"position","template"],[3,"name"],[1,"repo"],[3,"href"],[1,"repo-org"],[1,"slash-separator"],[1,"repo-project"],[1,"message"],["class","action-message message-text",4,"ngIf"],["class","commit-container",4,"ngIf"],[1,"details"],[4,"ngIf","ngIfElse"],["defaultEvent",""],[1,"type-desc"],[1,"action-message","message-text"],[1,"commit-container"],["class","commit-message message-text",4,"ngFor","ngForOf"],[1,"commit-message","message-text"],["class","commit-history",4,"ngFor","ngForOf"],[1,"event-summary",3,"href"],[1,"title"],["alt","\u16c5","src","/assets/images/icons/gh-branch.webp"],["alt","\u2713","src","/assets/images/icons/gh-check.svg"],[1,"commit-history"],[1,"message-container"],["class","message",3,"innerHtml",4,"ngIf"],[1,"checksum-container"],["class","checksum",3,"href",4,"ngIf"],[1,"author-container"],["class","author",3,"href",4,"ngIf"],[1,"message",3,"innerHtml"],[1,"checksum",3,"href"],[1,"author",3,"href"],["class","author-name",4,"ngIf"],["class","author-email",4,"ngIf"],[1,"author-name"],[1,"author-email"],[1,"no-details"],[1,"no-details-text"]],template:function(o,i){1&o&&(t.YNc(0,F,22,19,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngForOf",t.lcZ(1,1,i.updates$))},dependencies:[g.Ov,g.mk,g.O5,g.ax,u.i,Z,M,O],styles:['@charset "UTF-8";@media (max-width: 54em){[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%]{grid-template-rows:1fr 1fr 1fr}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > .message-container[_ngcontent-%COMP%]{background-color:#191919;color:#eee}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > .checksum-container[_ngcontent-%COMP%] > a.checksum[_ngcontent-%COMP%], [_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history.author-container[_ngcontent-%COMP%] > a.author[_ngcontent-%COMP%]{word-wrap:anywhere}}@media (min-width: 54.01em){[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%]{grid-template-columns:5fr clamp(5rem,25vw,28rem) 4fr}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > .message-container[_ngcontent-%COMP%]{background-color:#97a797;color:#111}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > .checksum-container[_ngcontent-%COMP%] > a.checksum[_ngcontent-%COMP%], [_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history.author-container[_ngcontent-%COMP%] > a.author[_ngcontent-%COMP%]{word-wrap:break-word}}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%]{display:grid;grid-template-rows:min-content 0fr;transition:grid-template-rows .2s}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%]{display:grid;width:100%;grid-gap:1px;grid-template-columns:minmax(4em,8em) minmax(9em,20em) minmax(10em,100%);border:1px solid #EEEEEE;transition:all .2s;cursor:pointer;z-index:22}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding:1em}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n){background-color:#97a797}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(odd){background-color:#191919}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > div.type-badge[_ngcontent-%COMP%]{grid-column:1/1;display:flex;flex-flow:column nowrap;align-items:center;justify-content:center}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%]{grid-column:2/2;display:flex;flex-flow:column nowrap;align-items:center;justify-content:center}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#111;text-decoration:none;width:100%;height:100%}@media (min-width: 78em){[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span.repo-org[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span.slash-separator[_ngcontent-%COMP%]:before{content:"/"}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span.repo-project[_ngcontent-%COMP%]{text-align:left}}@media (max-width: 77.99em){[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;justify-content:center}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span.repo-org[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span.slash-separator[_ngcontent-%COMP%]:before{content:"\\2015"}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span.repo-project[_ngcontent-%COMP%]{text-align:center}}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, [_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus-visible{color:#eee}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{word-wrap:anywhere}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span.repo-org[_ngcontent-%COMP%]{width:100%;font-weight:800}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span.slash-separator[_ngcontent-%COMP%]{margin:0 .5em}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span.slash-separator[_ngcontent-%COMP%]:before{font-size:2em;font-weight:500;text-align:center}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span.repo-project[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > div.message[_ngcontent-%COMP%]{grid-column:3/3;display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;text-align:left}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > div.message[_ngcontent-%COMP%]   p.message-text[_ngcontent-%COMP%]{margin:0;width:100%;white-space:pre-line}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > div.message[_ngcontent-%COMP%] > p.action-message[_ngcontent-%COMP%]{color:#2196f3;font-weight:800;text-align:center;text-transform:capitalize}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > div.message[_ngcontent-%COMP%] > ul.commit-container[_ngcontent-%COMP%]{margin:0;padding-left:1em;list-style:disclosure-closed}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%] > div.message[_ngcontent-%COMP%] > ul.commit-container[_ngcontent-%COMP%] > li.commit-message[_ngcontent-%COMP%]{padding:.5em .25em;white-space:pre-line}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%]{display:grid;margin:0 1rem;grid-gap:2px;background-color:#ffc5c5;overflow:hidden;z-index:21}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%]{display:grid;grid-gap:2px}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#97a797;color:#111;display:flex;flex-flow:column nowrap;align-items:center;justify-content:center}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div.message-container[_ngcontent-%COMP%]{justify-content:center}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div.message-container[_ngcontent-%COMP%] > p.message[_ngcontent-%COMP%]{text-align:left;white-space:pre-line}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%], [_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin:0;padding:1em;width:100%}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div.checksum-container[_ngcontent-%COMP%] > a.checksum[_ngcontent-%COMP%], [_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div.author-container[_ngcontent-%COMP%] > a.author[_ngcontent-%COMP%]{color:#111;text-align:center;text-decoration:none}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > a.checksum[_ngcontent-%COMP%]:hover, [_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > a.author[_ngcontent-%COMP%]:hover, [_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > a.checksum[_ngcontent-%COMP%]:focus-visible, [_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > a.author[_ngcontent-%COMP%]:focus-visible{color:#eee}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > .commit-history[_ngcontent-%COMP%] > div.author-container[_ngcontent-%COMP%] > a.author[_ngcontent-%COMP%] > span.author-name[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > a.event-summary[_ngcontent-%COMP%]{padding:1em;border:1px solid #EEEEEE;background-color:#191919;color:#eee;text-decoration:none;display:flex;flex-flow:row wrap;align-items:center;justify-content:space-evenly}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > a.event-summary[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:.5em;word-wrap:anywhere;display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > a.event-summary[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > .title[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:1em;filter:invert(1);margin-inline:.5em}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > div.no-details[_ngcontent-%COMP%]{background-color:#191919;display:flex;flex-flow:column nowrap;align-items:center;justify-content:center}[_nghost-%COMP%] > .update-roll-item[_ngcontent-%COMP%] > .details[_ngcontent-%COMP%] > div.no-details[_ngcontent-%COMP%] > p.no-details-text[_ngcontent-%COMP%]{margin:1em;color:#2196f3;font-weight:800;text-align:center;text-transform:capitalize}[_nghost-%COMP%] > .update-roll-item.expanded[_ngcontent-%COMP%]{grid-template-rows:min-content 1fr}[_nghost-%COMP%] > .update-roll-item.expanded[_ngcontent-%COMP%] > .brief[_ngcontent-%COMP%]{box-shadow:0 4px 4px -2px #3d3d3d99}code.type-desc[_ngcontent-%COMP%]{color:#1b0007;font-size:2em}']})}return n})();var H=c(3795),J=c(2603),Q=c(6321),B=c(4825),D=c(2181);const G=["sweepable"],W=["leadingText"],V=["sweepContainer"],X=["*"];let K=(()=>{class n{hostElement;renderer;inViewIndex=0;auto;delay=5e3;leading;leadingSpan;sweepContainer;swipeList;onResize(){this.recalculateAccentWidth()}constructor(e,o){this.hostElement=e,this.renderer=o}cycleNext(){this.renderer.setStyle(this.sweepContainer.nativeElement,"transform",`translateY(-${this.inViewIndex/this.swipeList.length*100}%)`)}recalculateAccentWidth(){const e=this.swipeList.get(this.inViewIndex)?.nativeElement.getBoundingClientRect().width,o=this.leadingSpan.nativeElement.getBoundingClientRect().width;e&&this.renderer.setStyle(this.hostElement.nativeElement,"--sweeper-highlight-text-scaling",1.33*(e+o)/100,t.JOm.DashCase)}ngAfterContentInit(){this.recalculateAccentWidth(),function $(n=0,a=Q.z){return n<0&&(n=0),(0,B.H)(n,n,a)}(this.delay).pipe((0,D.h)(()=>this.auto)).subscribe(()=>{this.inViewIndex=(this.inViewIndex+1)%this.swipeList.length,this.cycleNext(),this.recalculateAccentWidth()})}static \u0275fac=function(o){return new(o||n)(t.Y36(t.SBq),t.Y36(t.Qsj))};static \u0275cmp=t.Xpm({type:n,selectors:[["app-sweeper"]],contentQueries:function(o,i,s){if(1&o&&t.Suo(s,G,4,t.SBq),2&o){let r;t.iGM(r=t.CRH())&&(i.swipeList=r)}},viewQuery:function(o,i){if(1&o&&(t.Gf(W,7,t.SBq),t.Gf(V,7,t.SBq)),2&o){let s;t.iGM(s=t.CRH())&&(i.leadingSpan=s.first),t.iGM(s=t.CRH())&&(i.sweepContainer=s.first)}},hostBindings:function(o,i){1&o&&t.NdJ("resize",function(){return i.onResize()},!1,t.Jf7)},inputs:{auto:"auto",delay:"delay",leading:"leading"},standalone:!0,features:[t.jDz],ngContentSelectors:X,decls:7,vars:1,consts:[["leadingText",""],["id","sweep-window"],["id","sweep-container"],["sweepContainer",""]],template:function(o,i){1&o&&(t.F$t(),t.TgZ(0,"span",null,0),t._uU(2),t.qZA(),t.TgZ(3,"div",1)(4,"div",2,3),t.Hsn(6),t.qZA()()),2&o&&(t.xp6(2),t.Oqu(i.leading))},styles:['[_nghost-%COMP%]{height:2em;font-family:Fira Code,monospace;font-size:clamp(1em,3vw,3em);text-transform:none;display:inline-flex;display:flex;flex-flow:row nowrap;align-items:flex-start;justify-content:flex-start}[_nghost-%COMP%]:before{background-color:#3a3a3a;-webkit-clip-path:polygon(0 30%,10% 0,70% 0,100% 20%,95% 80%,80% 100%,20% 100%);clip-path:polygon(0 30%,10% 0,70% 0,100% 20%,95% 80%,80% 100%,20% 100%);content:"";position:absolute;width:100px;height:2em;transform:scaleX(var(--sweeper-highlight-text-scaling, 7));transform-origin:left;transition:transform ease .2s,background-color ease .5s,-webkit-clip-path ease .2s;transition:transform ease .2s,clip-path ease .2s,background-color ease .5s;transition:transform ease .2s,clip-path ease .2s,background-color ease .5s,-webkit-clip-path ease .2s;mix-blend-mode:overlay}[_nghost-%COMP%]:hover:before, [_nghost-%COMP%]:focus-visible:before{background-color:#3a3a3a;-webkit-clip-path:polygon(calc(1em / var(--sweeper-highlight-text-scaling, 7)) 50%,0 0,70% 0,100% 30%,90% 100%,50% 100%,0 100%);clip-path:polygon(calc(1em / var(--sweeper-highlight-text-scaling, 7)) 50%,0 0,70% 0,100% 30%,90% 100%,50% 100%,0 100%)}[_nghost-%COMP%]:after{background-color:#373737;-webkit-clip-path:polygon(0 70%,20% 0,90% 0,100% 30%,98% 75%,93% 100%,12% 100%);clip-path:polygon(0 70%,20% 0,90% 0,100% 30%,98% 75%,93% 100%,12% 100%);content:"";position:absolute;width:100px;height:2em;transform:scaleX(var(--sweeper-highlight-text-scaling, 7));transform-origin:left;transition:transform ease .2s,background-color ease .5s,-webkit-clip-path ease .2s;transition:transform ease .2s,clip-path ease .2s,background-color ease .5s;transition:transform ease .2s,clip-path ease .2s,background-color ease .5s,-webkit-clip-path ease .2s;mix-blend-mode:difference}[_nghost-%COMP%]:hover:after, [_nghost-%COMP%]:focus-visible:after{background-color:#c8c8c8;-webkit-clip-path:polygon(0 50%,20% 0,50% 0,90% 10%,100% 60%,93% 100%,20% 100%);clip-path:polygon(0 50%,20% 0,50% 0,90% 10%,100% 60%,93% 100%,20% 100%)}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{display:inline;margin:auto .5em;float:left}[_nghost-%COMP%] > span[_ngcontent-%COMP%]{color:#eee;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}[_nghost-%COMP%]   #sweep-window[_ngcontent-%COMP%]{height:inherit;overflow:hidden}[_nghost-%COMP%]   #sweep-container[_ngcontent-%COMP%]{transition:transform ease .5s;width:-moz-fit-content;width:fit-content;margin:0;padding:0}[_nghost-%COMP%]   #sweep-container[_ngcontent-%COMP%] >*{width:-moz-fit-content;width:fit-content;color:#eee;white-space:nowrap;margin:0;padding:.25em 0}']})}return n})();var tt=c(5424);function nt(n,a){1&n&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"<Announcement list>"),t.qZA()())}function et(n,a){1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-update-roll"),t.qZA())}function ot(n,a){1&n&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"<Synced github todolist>"),t.qZA()())}const it=function(n){return{nativeElement:n}},at=[{component:(()=>{class n{document;loaderService;splashStateService;constructor(e,o,i){this.document=e,this.loaderService=o,this.splashStateService=i,this.loaderService.beginLoading("[page] load")}handlePageChange(e){this.splashStateService.changeSplashState(0===e?l.E.FOCUSSED:l.E.BLURRED)}ngOnInit(){this.splashStateService.changeSplashState(l.E.FOCUSSED)}ngAfterViewInit(){this.loaderService.endLoading("[page] load")}static \u0275fac=function(o){return new(o||n)(t.Y36(g.K0),t.Y36(m.D),t.Y36(_.$))};static \u0275cmp=t.Xpm({type:n,selectors:[["app-landing"]],standalone:!0,features:[t.jDz],decls:39,vars:14,consts:[[3,"allowEndReveal","fullpage","nestedScroll","showPageNav","throttle","customScrollElement","pageChangeEvent"],["id","splash",1,"page","splash"],["page",""],[1,"bg-img-wrapper"],[1,"bg-img"],[1,"content"],[3,"auto","leading"],["sweepable",""],["id","overview",1,"page"],["id","stats-view",1,"page"],[4,"appCaged"],[4,"appCaged","appCagedAnimateContent"],["id","map-view",1,"page"]],template:function(o,i){1&o&&(t.TgZ(0,"app-scrollable",0),t.NdJ("pageChangeEvent",function(r){return i.handlePageChange(r)}),t.TgZ(1,"div",1,2)(3,"div",3),t._UZ(4,"div",4),t.qZA(),t.TgZ(5,"div",5)(6,"h1"),t._uU(7,"PASSERIFORM"),t.qZA(),t.TgZ(8,"app-sweeper",6)(9,"p",null,7),t._uU(11,"A pseudonym for quality."),t.qZA(),t.TgZ(12,"p",null,7),t._uU(14,"Status: Online"),t.qZA(),t.TgZ(15,"p",null,7),t._uU(17,"Working on "),t.TgZ(18,"q"),t._uU(19,"GodWit"),t.qZA()()()()(),t.TgZ(20,"div",8,2)(22,"div",3),t._UZ(23,"div",4),t.qZA(),t._UZ(24,"div",5),t.qZA(),t.TgZ(25,"div",9,2)(27,"div",3),t._UZ(28,"div",4),t.qZA(),t.TgZ(29,"div",5)(30,"app-cage-grid"),t.YNc(31,nt,3,0,"div",10),t.YNc(32,et,2,0,"div",11),t.YNc(33,ot,3,0,"div",10),t.qZA()()(),t.TgZ(34,"div",12,2)(36,"div",3),t._UZ(37,"div",4),t.qZA(),t._UZ(38,"div",5),t.qZA()()),2&o&&(t.Q6J("allowEndReveal",!0)("fullpage",!0)("nestedScroll",!0)("showPageNav",!0)("throttle",500)("customScrollElement",t.VKq(12,it,i.document)),t.xp6(8),t.Q6J("auto",!0)("leading","\u276f"),t.xp6(23),t.Q6J("appCaged","Announcements"),t.xp6(1),t.Q6J("appCaged","Tracker")("appCagedAnimateContent",!0),t.xp6(1),t.Q6J("appCaged","Todolist"))},dependencies:[J.g,H.E,tt.a,K,z],styles:["[_nghost-%COMP%]{position:relative;z-index:20}[_nghost-%COMP%]   .page[_ngcontent-%COMP%]{position:relative;top:0;left:0;overflow:auto;background-color:#000;width:100vw;height:var(--apparent-viewport-height, 100vh)}[_nghost-%COMP%]   .page[_ngcontent-%COMP%]:not(.splash){padding-top:var(--current-header-shift-offset, 0)}[_nghost-%COMP%]   .page[_ngcontent-%COMP%] > .bg-img-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;overflow:hidden}[_nghost-%COMP%]   .page[_ngcontent-%COMP%] > .bg-img-wrapper[_ngcontent-%COMP%] > .bg-img[_ngcontent-%COMP%]{position:fixed;width:100vw;height:var(--apparent-viewport-height, 100vh)}[_nghost-%COMP%]   .page[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}[_nghost-%COMP%]   #splash[_ngcontent-%COMP%] > .bg-img-wrapper[_ngcontent-%COMP%] > .bg-img[_ngcontent-%COMP%]{background-image:url(/assets/images//landingbg.jpg);background-repeat:no-repeat;background-size:cover;filter:brightness(50%)}@supports (filter: brightness(50%) blur(.2em)){[_nghost-%COMP%]   #splash[_ngcontent-%COMP%] > .bg-img-wrapper[_ngcontent-%COMP%] > .bg-img[_ngcontent-%COMP%]{filter:brightness(50%) blur(.2em);transform:scale(1.02)}}[_nghost-%COMP%]   #splash[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;justify-content:center}[_nghost-%COMP%]   #splash[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{color:#f2eceb;font-family:Share Tech Mono,monospace;font-size:clamp(3em,10vw,10em);font-weight:500;transition:color .2s ease;margin:0;padding:0;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}[_nghost-%COMP%]   #splash[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   #splash[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]:focus-visible{color:#0d1314;animation:_ngcontent-%COMP%_chromatic-aberration 10s ease infinite}@keyframes _ngcontent-%COMP%_chromatic-aberration{2%{text-shadow:0 0 0 rgb(242,0,0),0 0 0 rgb(0,236,0),0 0 0 rgb(0,0,235)}3%{text-shadow:-1px 0 1px rgb(242,0,0),2px 1px 0 rgb(0,236,0),0 0 0 rgb(0,0,235)}4%{text-shadow:0 2px 2px rgb(242,0,0),-1px 1px 1px rgb(0,236,0),0 0 0 rgb(0,0,235)}5%{text-shadow:0 0 0 rgb(242,0,0),-1px 1px 1px rgb(0,236,0),0 0 0 rgb(0,0,235)}8%{text-shadow:0 0 0 rgb(242,0,0),-1px 1px 0 rgb(0,236,0),0 0 0 rgb(0,0,235)}9%{text-shadow:1px 0 -1px rgb(242,0,0),2px 0 -2px rgb(0,236,0),0 0 0 rgb(0,0,235)}10%{text-shadow:1px 2px 1px rgb(242,0,0),1px 0 1px rgb(0,236,0),0 0 2px rgb(0,0,235)}11%{text-shadow:1px 0 0 rgb(242,0,0),2px 0 1px rgb(0,236,0),0 2px 0 rgb(0,0,235)}12%{text-shadow:0 0 0 rgb(242,0,0),0 0 0 rgb(0,236,0),0 0 2px rgb(0,0,235)}24%{text-shadow:0 0 0 rgb(242,0,0),0 0 0 rgb(0,236,0),0 0 2px rgb(0,0,235)}25%{text-shadow:3px 2px -2px rgb(242,0,0),2px 1px 0 rgb(0,236,0),1px 1px 0 rgb(0,0,235)}26%{text-shadow:3px 0 0 rgb(242,0,0),2px 1px 0 rgb(0,236,0),0 1px 0 rgb(0,0,235)}28%{text-shadow:-2px -2px 2px rgb(242,0,0),-4px 0 0 rgb(0,236,0),1px -2px 0 rgb(0,0,235)}30%{text-shadow:0 -2px 0 rgb(242,0,0),-4px 0 0 rgb(0,236,0),1px -2px 0 rgb(0,0,235)}32%{text-shadow:-1px -2px 0 rgb(242,0,0),-2px 0 0 rgb(0,236,0),1px -2px 0 rgb(0,0,235)}36%{text-shadow:-1px 0 0 rgb(242,0,0),-1px 0 0 rgb(0,236,0),0 0 3px rgb(0,0,235)}62%{text-shadow:-1px 0 0 rgb(242,0,0),-1px 0 1px rgb(0,236,0),0 2px 0 rgb(0,0,235)}63%{text-shadow:-2px -2px 0 rgb(242,0,0),-2px 0 2px rgb(0,236,0),1px 1px 0 rgb(0,0,235)}64%{text-shadow:0 0 0 rgb(242,0,0),0 0 0 rgb(0,236,0),0 1px 0 rgb(0,0,235)}to{text-shadow:0 0 0 rgb(242,0,0),0 0 0 rgb(0,236,0),0 0 0 rgb(0,0,235)}}[_nghost-%COMP%]   #overview[_ngcontent-%COMP%] > .bg-img-wrapper[_ngcontent-%COMP%] > .bg-img[_ngcontent-%COMP%]{background-color:#1b0007}[_nghost-%COMP%]   #stats-view[_ngcontent-%COMP%] > .bg-img-wrapper[_ngcontent-%COMP%] > .bg-img[_ngcontent-%COMP%]{background-image:url(/assets/images/patterns/carbonpattern@2X.png);background-repeat:repeat;background-size:auto}[_nghost-%COMP%]   #map-view[_ngcontent-%COMP%] > .bg-img-wrapper[_ngcontent-%COMP%] > .bg-img[_ngcontent-%COMP%]{background-color:#1b0007}"]})}return n})(),path:""}]}}]);