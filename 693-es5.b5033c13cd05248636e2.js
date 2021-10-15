!function(){"use strict";var e,n;function t(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}(self.webpackChunk_passeriform_portfolio=self.webpackChunk_passeriform_portfolio||[]).push([[693],{5693:function(o,r,c){c.r(r),c.d(r,{LandingModule:function(){return I}});var s,g=c(4466),p=c(677),u=c(5094),l=c(5040),d=c(1841),f=((s=function(){function e(n){i(this,e),this.http=n,this.githubFeedSource$=new u.X([]),this.githubFeedState$=this.githubFeedSource$.asObservable()}return a(e,[{key:"fetchUpdate$",value:function(e){var n=this;return this.http.get("https://api.github.com/users/Passeriform/events").subscribe(function(e){n.githubFeedSource$.next(e)}),this.githubFeedState$}}]),e}()).\u0275fac=function(e){return new(e||s)(l.LFG(d.eN))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac}),s),h=c(3645),m=c(9044),v=c(184),C=c(5829),_=c(9774),O=c(400),b=c(8468),M=c(9075),P=["sweepable"],Z=["*"],w=function(){var e=function(){function e(n){var t=this;i(this,e),this.sanitizer=n,this.delay=5e3,this.inViewIndex=0,function(e,n){return void 0===e&&(e=0),void 0===n&&(n=O.z),e<0&&(e=0),(0,b.H)(e,e,n)}(this.delay).subscribe(function(){t.auto&&(t.inViewIndex=(t.inViewIndex+1)%t.swipeList.length)})}return a(e,[{key:"ngAfterContentInit",value:function(){}},{key:"swipeTranform",get:function(){return this.sanitizer.bypassSecurityTrustStyle("translateY(-".concat(100/this.swipeList.length*this.inViewIndex,"%) translateY(-0.5em)"))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(l.Y36(M.H7))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-sweeper"]],contentQueries:function(e,n,t){var i;(1&e&&l.Suo(t,P,4),2&e)&&(l.iGM(i=l.CRH())&&(n.swipeList=i))},inputs:{leading:"leading",auto:"auto",delay:"delay"},ngContentSelectors:Z,decls:5,vars:3,consts:[["id","sweep-window"],["id","sweep-container"]],template:function(e,n){1&e&&(l.F$t(),l.TgZ(0,"span"),l._uU(1),l.qZA(),l.TgZ(2,"div",0),l.TgZ(3,"div",1),l.Hsn(4),l.qZA(),l.qZA()),2&e&&(l.xp6(1),l.Oqu(n.leading),l.xp6(2),l.Udp("transform",n.swipeTranform))},styles:['[_ngcontent-%COMP%]:root{--shrink-header-size-em: 4em}[_nghost-%COMP%]{font-family:"Fira Code",monospace;font-size:max(3vw,1.25em);text-transform:none}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{display:inline-block;float:left}[_nghost-%COMP%] > span[_ngcontent-%COMP%]{margin:.5em}[_nghost-%COMP%] > span[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}#sweep-window[_ngcontent-%COMP%]{padding:.5em;height:calc(22px + (2 * .5em));overflow-y:hidden}#sweep-container[_ngcontent-%COMP%]{transition:all ease-in-out .5s}#sweep-container[_ngcontent-%COMP%] >*{margin:0;padding:.5em}']}),e}(),y=c(784),S=c(7292),x=c(2440),A=c(8583),T=c(6938),k=c(8120),q=function(){var e=function(){function e(){i(this,e)}return a(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-badge"]],inputs:{name:"name"},decls:3,vars:4,consts:[[1,"badge-box"],[3,"alt","src"]],template:function(e,n){1&e&&(l.TgZ(0,"div",0),l._UZ(1,"img",1),l.ALo(2,"iconUri"),l.qZA()),2&e&&(l.xp6(1),l.MGl("alt","badge-",n.name,""),l.s9C("src",l.lcZ(2,2,n.name),l.LSH))},pipes:[k.y],styles:["[_nghost-%COMP%] > .badge-box[_ngcontent-%COMP%]{padding:1em}[_nghost-%COMP%] > .badge-box[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:2em;filter:invert(1)}"]}),e}();function U(e,n){if(1&e&&(l.TgZ(0,"code",7),l._uU(1),l.qZA()),2&e){var t=l.oxw().$implicit;l.xp6(1),l.Oqu(t.type)}}function E(e,n){if(1&e){var t=l.EpF();l.ynx(0),l.TgZ(1,"div",1),l.NdJ("click",function(){var e=l.CHM(t).$implicit;return l.oxw().toggleDetails(e)}),l.YNc(2,U,2,1,"ng-template",null,2,l.W1O),l.TgZ(4,"div",3),l._UZ(5,"app-badge",4),l.qZA(),l.TgZ(6,"div",5),l.TgZ(7,"a",6),l._uU(8),l.qZA(),l.qZA(),l.qZA(),l.BQk()}if(2&e){var i=n.$implicit,o=l.MAs(3);l.xp6(4),l.Q6J("template",o),l.xp6(1),l.Q6J("name",i.type),l.xp6(2),l.s9C("href",i.repo.url,l.LSH),l.xp6(1),l.Oqu(i.repo.name)}}var z=function(){var n=function(){function e(n){var t=this;i(this,e),this.githubService=n,this.githubService.githubFeedState$.subscribe(function(e){t.updates=e,t.updates.forEach(function(e){e.expand=!1})})}return a(e,[{key:"ngOnInit",value:function(){this.githubService.fetchUpdate$()}},{key:"toggleDetails",value:function(e){var n;e.expand=null===(n=!e.expand)||void 0===n||n}},{key:"refresh",value:function(){}},{key:"loadMore",value:function(e){this.githubService.fetchUpdate$(e)}}]),e}();return n.\u0275fac=function(e){return new(e||n)(l.Y36(f))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-update-roll"]],decls:1,vars:1,consts:function(){return[[4,"ngFor","ngForOf"],[1,"brief",3,"click"],["tooltipTemplate",""],["appTooltip","","position",$localize(e||(e=t([":\u241f6eea330a9a89ae4328e5c7b75a98baa1cc65d5b5\u241f8444323300278462770:top"]))),1,"badge",3,"template"],[3,"name"],[1,"repo"],[3,"href"],[1,"type-desc"]]},template:function(e,n){1&e&&l.YNc(0,E,9,4,"ng-container",0),2&e&&l.Q6J("ngForOf",n.updates)},directives:[A.sg,T.i,q],styles:["[_ngcontent-%COMP%]:root{--shrink-header-size-em: 4em}[_nghost-%COMP%]{display:grid;grid-gap:0;max-height:60vh;overflow:hidden auto}[_nghost-%COMP%] > .brief[_ngcontent-%COMP%]{display:grid;grid-gap:2px;grid-template-columns:max(4em,10%) auto max(10em,50%) auto auto;cursor:pointer}[_nghost-%COMP%] > .brief[_ngcontent-%COMP%]:not(:first-child){margin-top:-1px}[_nghost-%COMP%] > .brief[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{border:1px solid #EEEEEE;background-color:#3d3d3d99}[_nghost-%COMP%] > .brief[_ngcontent-%COMP%] > .badge[_ngcontent-%COMP%]{border-radius:0;grid-column:1/1}[_nghost-%COMP%] > .brief[_ngcontent-%COMP%] > .type[_ngcontent-%COMP%]{grid-column:2/2}[_nghost-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%]{grid-column:3/3;display:flex;flex-direction:column;justify-content:center}[_nghost-%COMP%] > .brief[_ngcontent-%COMP%] > .repo[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{padding:0 1em}[_nghost-%COMP%] > .brief[_ngcontent-%COMP%] > .org[_ngcontent-%COMP%]{grid-column:4/4}[_nghost-%COMP%] > .brief[_ngcontent-%COMP%] > .message[_ngcontent-%COMP%]{grid-column:5/5}[_nghost-%COMP%] > .details[_ngcontent-%COMP%]{display:grid;grid-gap:0;grid-template-columns:auto auto auto}code.type-desc[_ngcontent-%COMP%]{color:#191919;font-size:2em}"]}),n}();function F(e,n){1&e&&(l.TgZ(0,"div"),l.TgZ(1,"p"),l._uU(2,"<Announcement list>"),l.qZA(),l.qZA())}function $(e,n){1&e&&(l.TgZ(0,"div"),l._UZ(1,"app-update-roll"),l.qZA())}function J(e,n){1&e&&(l.TgZ(0,"div"),l.TgZ(1,"p"),l._uU(2,"<Synced github todolist>"),l.qZA(),l.qZA())}var Y=[{component:function(){var e=function(){function e(n,t){i(this,e),this.loaderService=n,this.splashStateService=t,this.loaderService.beginLoading("[page] load")}return a(e,[{key:"ngOnInit",value:function(){this.splashStateService.changeSplashState(m.E.FOCUSSED)}},{key:"ngAfterViewInit",value:function(){this.loaderService.endLoading("[page] load")}},{key:"handlePageChange",value:function(e){this.splashStateService.changeSplashState(0===e?m.E.FOCUSSED:m.E.BLURRED)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(l.Y36(v.D),l.Y36(C.$))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-landing"]],decls:34,vars:7,consts:function(){return[[3,"fullpage","nestedScroll","allowEndReveal","pageChangeEvent"],["id","splash",1,"page"],["page",""],[1,"bg-img-wrapper"],[1,"bg-img"],[1,"content"],["leading",$localize(n||(n=t([":\u241fd959799113f4f7adfafce96100d5adc471bcaae7\u241f1363846019807593378:\u276f"]))),3,"auto"],["sweepable",""],["id","overview",1,"page"],["appHeaderOffset","",1,"content"],[4,"appCaged"],["id","dir-view",1,"page"]]},template:function(e,n){1&e&&(l.TgZ(0,"app-scrollable",0),l.NdJ("pageChangeEvent",function(e){return n.handlePageChange(e)}),l.TgZ(1,"div",1,2),l.TgZ(3,"div",3),l._UZ(4,"div",4),l.qZA(),l.TgZ(5,"div",5),l.TgZ(6,"h1"),l._uU(7,"PASSERIFORM"),l.qZA(),l.TgZ(8,"app-sweeper",6),l.TgZ(9,"p",null,7),l._uU(11,"A pseudonym for quality."),l.qZA(),l.TgZ(12,"p",null,7),l._uU(14,"Status: Online"),l.qZA(),l.TgZ(15,"p",null,7),l._uU(17,"Working on "),l.TgZ(18,"code"),l._uU(19,"GodWit"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(20,"div",8,2),l.TgZ(22,"div",3),l._UZ(23,"div",4),l.qZA(),l.TgZ(24,"div",9),l.TgZ(25,"app-cage-grid"),l.YNc(26,F,3,0,"div",10),l.YNc(27,$,2,0,"div",10),l.YNc(28,J,3,0,"div",10),l.qZA(),l.qZA(),l.qZA(),l.TgZ(29,"div",11,2),l.TgZ(31,"div",3),l._UZ(32,"div",4),l.qZA(),l._UZ(33,"div",9),l.qZA(),l.qZA()),2&e&&(l.Q6J("fullpage",!0)("nestedScroll",!0)("allowEndReveal",!0),l.xp6(8),l.Q6J("auto",!0),l.xp6(18),l.Q6J("appCaged","Announcements"),l.xp6(1),l.Q6J("appCaged","Tracker"),l.xp6(1),l.Q6J("appCaged","Todolist"))},directives:[_.a,w,y.R,S.g,x.E,z],styles:['[_ngcontent-%COMP%]:root{--shrink-header-size-em: 4em}[_nghost-%COMP%]   .bg-img-wrapper[_ngcontent-%COMP%] > .bg-img[_ngcontent-%COMP%]{position:absolute;z-index:-1;width:100vw;height:100vh}[_nghost-%COMP%]   #splash[_ngcontent-%COMP%] > .bg-img-wrapper[_ngcontent-%COMP%] > .bg-img[_ngcontent-%COMP%]{background-image:url(/assets/images/landingbg.jpg);background-repeat:no-repeat;background-size:cover;filter:brightness(50%)}@supports (filter: blur(2em)){[_nghost-%COMP%]   #splash[_ngcontent-%COMP%] > .bg-img-wrapper[_ngcontent-%COMP%] > .bg-img[_ngcontent-%COMP%]{filter:brightness(50%) blur(2px);transform:scale(1.02)}}[_nghost-%COMP%]   #splash[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{position:relative;top:50%;left:50%;display:inline-block;transform:translate(-50%,-50%)}[_nghost-%COMP%]   #splash[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin-bottom:-.25em;padding:0;font-family:"Share Tech Mono",monospace;font-size:max(4em,min(10vw,10em));font-weight:500}[_nghost-%COMP%]   #overview[_ngcontent-%COMP%] > .bg-img-wrapper[_ngcontent-%COMP%] > .bg-img[_ngcontent-%COMP%]{background-image:url(/assets/images/patterns/carbonpattern@2X.png);background-repeat:repeat;background-size:auto}[_nghost-%COMP%]   #overview[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   #dir-view[_ngcontent-%COMP%] > .bg-img-wrapper[_ngcontent-%COMP%] > .bg-img[_ngcontent-%COMP%]{background-color:#191919}']}),e}(),path:""}],L=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[h.Bz.forChild(Y)],h.Bz]}),e}(),I=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({providers:[f],imports:[[p.O,L,g.m]]}),e}()}}])}();