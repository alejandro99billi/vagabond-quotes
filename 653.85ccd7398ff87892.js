"use strict";(self.webpackChunkMusayiMiyamatoQuotes=self.webpackChunkMusayiMiyamatoQuotes||[]).push([[653],{7982:(v,m,a)=>{a.r(m),a.d(m,{HomeModule:()=>I});var c=a(6814),u=a(6743),l=a(553),t=a(4946),p=a(9862),g=a(9630);function _(e,d){if(1&e){const n=t.EpF();t.TgZ(0,"app-custom-buttom",9),t.NdJ("action",function(){t.CHM(n);const i=t.oxw(3);return t.KtG(i.goToQuote())}),t.qZA()}}function f(e,d){if(1&e){const n=t.EpF();t.TgZ(0,"app-custom-buttom",10),t.NdJ("action",function(){t.CHM(n);const i=t.oxw(3);return t.KtG(i.goToQuote())}),t.qZA()}}function h(e,d){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"p",4),t._uU(4),t.qZA()(),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6),t.YNc(7,_,1,0,"app-custom-buttom",7),t.YNc(8,f,1,0,"app-custom-buttom",8),t.qZA(),t.BQk()),2&e){const n=t.oxw(),o=n.index,i=n.$implicit,s=t.oxw();t.xp6(3),t.Q6J("id","textQuote"+o),t.xp6(1),t.hij(" ",i.text," "),t.xp6(1),t.Q6J("src",s.deployUrl+i.imageSrc,t.LSH)("alt",i.imageAlt)("id","imageQuote"+o),t.xp6(2),t.Q6J("ngIf",i.isFinalQuote),t.xp6(1),t.Q6J("ngIf",!i.isFinalQuote)}}function x(e,d){if(1&e&&(t.ynx(0),t.YNc(1,h,9,7,"ng-container",1),t.BQk()),2&e){const n=d.$implicit;t.xp6(1),t.Q6J("ngIf",n.isVisible)}}let y=(()=>{class e{constructor(n){this.http=n,this.deployUrl=l.N.deployUrl,this.currentIndex=0,this.containers=[],this.isFirstContainerVisible=!0}loadContainersFromJson(){this.http.get("/../assets/descriptions.json").subscribe(n=>{this.containers=n})}playMusic(){document.getElementById("myAudio").play()}ngOnInit(){this.loadContainersFromJson()}goToQuote(){this.addFadeOutAnimation(`imageQuote${this.currentIndex}`,`textQuote${this.currentIndex}`,0),this.containers[this.currentIndex].isVisible=!1,this.currentIndex=(this.currentIndex+1)%this.containers.length,this.containers[this.currentIndex].isVisible=!0}addFadeOutAnimation(n,o,i){setTimeout(()=>{const s=document.getElementById(n),r=document.getElementById(o);s&&r&&(s.classList.add("animate__fadeOutLeft"),r.classList.add("animate__fadeOutRight"))},i)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p.eN))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-quotes-container"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"conter-quotes"],[1,"text-continer","quote-text"],[1,"animate__animated","animate__fadeInLeft","animate__slower","quote-text","animate__delay-2s","custom-text",3,"id"],[1,"animate__animated","animate__fadeInRight","animate__slower","quote-images",3,"src","alt","id"],[1,"custom-button","animate__animated","animate__fadeInRight","animate__slower"],["description","Read Again",3,"action",4,"ngIf"],["description","Next Quote",3,"action",4,"ngIf"],["description","Read Again",3,"action"],["description","Next Quote",3,"action"]],template:function(o,i){1&o&&t.YNc(0,x,2,1,"ng-container",0),2&o&&t.Q6J("ngForOf",i.containers)},dependencies:[c.sg,c.O5,g.X],styles:[".quote-images[_ngcontent-%COMP%]{margin:10px;width:60vh;height:50vh;padding:10px;margin-left:5vh}.conter-quotes[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.quote-text[_ngcontent-%COMP%]{font-size:15px;text-align:center;-webkit-text-decoration:dotted;text-decoration:dotted;color:#39434b;font-style:italic;max-width:70%;word-wrap:break-word}.custom-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:20px;margin-bottom:20px}.text-continer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;width:50%;padding-left:20px}"]})}return e})();const C=[{path:"",component:(()=>{class e{constructor(n){this.router=n,this.deployUrl=l.N.deployUrl,this.title="MusayiMiyamatoQuotes",this.audioFiles=[{title:"Ladyfingers",link:"/assets/music/Ladyfingers.mp3"}],this.autoplay=!0}ngOnInit(){this.initAudio()}playMusic(){document.getElementById("myAudio").play(),this.router.navigate(["/landing"])}addFadeOutAnimation(n,o,i){setTimeout(()=>{const s=document.getElementById(n),r=document.getElementById(o);s&&r&&(s.classList.add("animate__fadeOutLeft"),r.classList.add("animate__fadeOutRight"))},i)}initAudio(){document.getElementById("myAudio").play()}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(u.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:7,vars:1,consts:[[1,"back-ground"],[1,"head"],[1,"body-text"],["id","myAudio","controls","","autoplay","","loop","","hidden","",3,"src"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-quotes-container"),t.TgZ(3,"div",2)(4,"audio",3)(5,"p"),t._uU(6," If you are reading this, it is because your browser does not support the audio element. "),t.qZA()()()()()),2&o&&(t.xp6(4),t.Q6J("src",i.deployUrl+"/../assets/music/AruarianDance.mp3",t.LSH))},dependencies:[y],styles:[".head[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;font-family:Times New Roman,Times,serif}.head[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:20px;text-align:center;-webkit-text-decoration:dotted;text-decoration:dotted;color:#4f5a65}.head[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:10px;color:#7c8896}.head[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{color:#7c8896;font-size:40px}.body-text[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:15px;text-align:center;-webkit-text-decoration:dotted;text-decoration:dotted;color:#39434b;font-style:italic}.quote-images[_ngcontent-%COMP%]{margin:10px;width:400px;height:400px;background-color:#7c8896;width:600px;padding:10px}.conter-quotes[_ngcontent-%COMP%]{display:flex;justify-content:center}.quote-text[_ngcontent-%COMP%]{font-size:15px;text-align:center;-webkit-text-decoration:dotted;text-decoration:dotted;color:#39434b;font-style:italic;--animate-duration: .7s}.back-ground[_ngcontent-%COMP%]{background-size:20% 100%!important;background-image:url(/../assets/images/montains.jpg);background-position:left;background-size:cover;background-repeat:no-repeat;margin-bottom:5vh;margin-top:5vh}"]})}return e})()}];let b=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.ez,u.Bz.forChild(C),u.Bz]})}return e})();var M=a(5293),Q=a(2340);let O=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.ez,Q.Z]})}return e})(),I=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.ez,b,M.C,O]})}return e})()}}]);