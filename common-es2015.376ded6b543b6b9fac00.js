"use strict";(self.webpackChunk_passeriform_portfolio=self.webpackChunk_passeriform_portfolio||[]).push([[592],{784:function(t,e,n){n.d(e,{R:function(){return i}});var o=n(5040);let i=(()=>{class t{constructor(t,e){this.elementReference=t,this.renderer=e,this.targetElement=this.elementReference}ngAfterViewInit(){const t=this.deepTargets?this.deepTargets.map(t=>this.targetElement.nativeElement.querySelector(t)).filter(t=>null!==t):[this.targetElement.nativeElement];s(t,this.renderer)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.Qsj))},t.\u0275dir=o.lG2({type:t,selectors:[["","appHeaderOffset",""]],inputs:{deepTargets:"deepTargets"}}),t})();const s=(t,e)=>{const n=getComputedStyle(document.body).getPropertyValue("--shrink-header-size-em");t.forEach(t=>{e.setStyle(t,"top",n),e.setStyle(t,"height",`calc(100% - ${n})`)})}},7292:function(t,e,n){n.d(e,{g:function(){return c}});var o=n(2440),i=n(5040),s=n(8583);function r(t,e){1&t&&i.GkF(0)}function l(t,e){if(1&t&&(i.ynx(0),i.TgZ(1,"div"),i.TgZ(2,"div",1),i.TgZ(3,"h2"),i._uU(4),i.qZA(),i.qZA(),i.TgZ(5,"div",2),i.YNc(6,r,1,0,"ng-container",3),i.qZA(),i.qZA(),i.BQk()),2&t){const t=e.$implicit;i.xp6(4),i.Oqu(t.title),i.xp6(2),i.Q6J("ngTemplateOutlet",t.cageTemplate)}}let c=(()=>{class t{ngAfterContentInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-cage-grid"]],contentQueries:function(t,e,n){if(1&t&&i.Suo(n,o.E,5),2&t){let t;i.iGM(t=i.CRH())&&(e.cagedList=t)}},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"title"],[1,"content"],[4,"ngTemplateOutlet"]],template:function(t,e){1&t&&i.YNc(0,l,7,2,"ng-container",0),2&t&&i.Q6J("ngForOf",e.cagedList)},directives:[s.sg,s.tP],styles:["[_ngcontent-%COMP%]:root{--shrink-header-size-em: 4em}[_nghost-%COMP%]{display:flex;flex-flow:row wrap;padding:2em;width:100%}@media screen and (orientation: landscape) and (max-height: 400px){[_nghost-%COMP%]{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%]::-webkit-scrollbar{width:0;background:transparent}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{flex-shrink:0}}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{flex-grow:1;margin:1em;background-color:transparent}[_nghost-%COMP%] > *[_ngcontent-%COMP%] > .title[_ngcontent-%COMP%]{position:relative;z-index:1;margin-bottom:-3em;overflow:hidden;text-transform:capitalize;white-space:nowrap}[_nghost-%COMP%] > *[_ngcontent-%COMP%] > .title[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:.25em 2em .25em .5em;background-color:#eee;color:#191919;font-size:1.75em;-webkit-clip-path:polygon(0 0,100% 0,calc(100% - 1.75em) 100%,0 100%);clip-path:polygon(0 0,100% 0,calc(100% - 1.75em) 100%,0 100%)}[_nghost-%COMP%] > *[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{position:relative;top:.2em;left:.2em;padding:2em;border:3em solid #3D3D3D99;background-color:transparent;-webkit-clip-path:polygon(0 0,calc(30% + 2.8em) 0,30% 2.8em,calc(100% - 2.8em) 2.8em,calc(100% - 2.8em) calc(100% - 2.8em),2.8em calc(100% - 2.8em),2.8em 6em,0 3.2em);clip-path:polygon(0 0,calc(30% + 2.8em) 0,30% 2.8em,calc(100% - 2.8em) 2.8em,calc(100% - 2.8em) calc(100% - 2.8em),2.8em calc(100% - 2.8em),2.8em 6em,0 3.2em)}"]}),t})()},2440:function(t,e,n){n.d(e,{E:function(){return i}});var o=n(5040);let i=(()=>{class t{constructor(t){this.templateReference=t,this.cageTemplate=this.templateReference}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["","appCaged",""]],inputs:{title:["appCaged","title"]}}),t})()},6938:function(t,e,n){n.d(e,{i:function(){return a}});var o=n(5040),i=n(5094),s=n(8583);function r(t,e){1&t&&o.GkF(0)}const l=function(t){return{dark:t}};let c=(()=>{class t{get isTop(){return"top"===this.positionType}get isBottom(){return"bottom"===this.positionType}get topFix(){return this.callerInstance.getBoundingClientRect().top+this.callerInstance.getBoundingClientRect().height/2}get leftFix(){return this.callerInstance.getBoundingClientRect().left+this.callerInstance.getBoundingClientRect().width/2}ngOnInit(){this.showObs$.subscribe(t=>{this.showToggle=t})}ngAfterViewInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-tooltip"]],hostVars:10,hostBindings:function(t,e){2&t&&(o.Udp("top",e.topFix,"px")("left",e.leftFix,"px"),o.ekj("show",e.showToggle)("top",e.isTop)("bottom",e.isBottom))},inputs:{positionType:"positionType",callerInstance:"callerInstance",showObs$:"showObs$",darkMode:"darkMode",tooltipTemplate:"tooltipTemplate"},decls:2,vars:4,consts:[[1,"tooltip-internal",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.YNc(1,r,1,0,"ng-container",1),o.qZA()),2&t&&(o.Q6J("ngClass",o.VKq(2,l,e.darkMode)),o.xp6(1),o.Q6J("ngTemplateOutlet",e.tooltipTemplate))},directives:[s.mk,s.tP],styles:['[_ngcontent-%COMP%]:root{--shrink-header-size-em: 4em}[_nghost-%COMP%]{position:absolute;z-index:10;display:inline-block;width:0;height:0;visibility:hidden;opacity:0;transition:visibility .5s ease,opacity .5s ease}[_nghost-%COMP%] > .tooltip-internal[_ngcontent-%COMP%]{position:absolute;box-sizing:border-box;padding:1em 2em;width:20em;box-shadow:0 0 5px -3px #000;transform:translate(-50%);border:1px solid #111111;background-color:#e6e6e6;color:#111}[_nghost-%COMP%] > .tooltip-internal[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;margin-top:-.5em;margin-left:-.5em;width:1em;height:1em;box-shadow:0 0 5px -3px #000;transform:rotate(45deg);border:1px solid #111111;background-color:#e6e6e6;color:#111}[_nghost-%COMP%] > .tooltip-internal.dark[_ngcontent-%COMP%]{border:1px solid #EEEEEE;background-color:#191919;color:#eee}[_nghost-%COMP%] > .tooltip-internal.dark[_ngcontent-%COMP%]:after{border:1px solid #EEEEEE;background-color:#191919;color:#eee}.top[_nghost-%COMP%] > .tooltip-internal[_ngcontent-%COMP%]{bottom:3.5em}.top[_nghost-%COMP%] > .tooltip-internal[_ngcontent-%COMP%]:after{top:100%}.bottom[_nghost-%COMP%] > .tooltip-internal[_ngcontent-%COMP%]{top:3.5em}.bottom[_nghost-%COMP%] > .tooltip-internal[_ngcontent-%COMP%]:after{top:0%}.show[_nghost-%COMP%]{visibility:visible;opacity:1}']}),t})(),a=(()=>{class t{constructor(t,e,n,o){this.elementReference=t,this.appReference=e,this.injector=n,this.componentFactoryResolver=o,this.position="bottom",this.showTooltip$=new i.X(!1)}showTooltip(){this.showTooltip$.next(!0)}hideTooltip(){this.showTooltip$.next(!1)}ngAfterViewInit(){this.componentRef=this.componentFactoryResolver.resolveComponentFactory(c).create(this.injector);const t=this.componentRef.instance;t.tooltipTemplate=this.template,t.positionType=this.position,t.darkMode=this.darkMode,t.callerInstance=this.elementReference.nativeElement,t.showObs$=this.showTooltip$.asObservable(),this.appReference.attachView(this.componentRef.hostView),document.body.append(this.componentRef.hostView.rootNodes[0])}ngOnDestroy(){this.componentRef.destroy()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.z2F),o.Y36(o.zs3),o.Y36(o._Vd))},t.\u0275dir=o.lG2({type:t,selectors:[["","appTooltip",""]],viewQuery:function(t,e){if(1&t&&o.Gf(o.Rgc,5,o.s_b),2&t){let t;o.iGM(t=o.CRH())&&(e.viewContainer=t.first)}},hostBindings:function(t,e){1&t&&o.NdJ("focusin",function(){return e.showTooltip()})("mouseover",function(){return e.showTooltip()})("focusout",function(){return e.hideTooltip()})("mouseout",function(){return e.hideTooltip()})},inputs:{position:"position",template:"template",darkMode:"darkMode"}}),t})()}}]);