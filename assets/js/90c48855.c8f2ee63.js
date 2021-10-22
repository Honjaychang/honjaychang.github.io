"use strict";(self.webpackChunkmy_test=self.webpackChunkmy_test||[]).push([[7894],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=o(n),c=i,d=s["".concat(m,".").concat(c)]||s[c]||u[c]||r;return n?a.createElement(d,l(l({ref:t},k),{},{components:n})):a.createElement(d,l({ref:t},k))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2863:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return k},default:function(){return s}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],p={sidebar_position:1},m="GIT",o={unversionedId:"dev/git",id:"dev/git",isDocsHomePage:!1,title:"GIT",description:"- git - \u7b80\u6613\u6307\u5357",source:"@site/docs/dev/git.md",sourceDirName:"dev",slug:"/dev/git",permalink:"/docs/dev/git",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"basic",permalink:"/docs/dev/basic"},next:{title:"Node",permalink:"/docs/dev/node"}},k=[{value:"\u5de5\u4f5c\u6d41",id:"\u5de5\u4f5c\u6d41",children:[]},{value:"\u57fa\u7840\u547d\u4ee4",id:"\u57fa\u7840\u547d\u4ee4",children:[]},{value:"\u65e5\u5e38\u4f7f\u7528",id:"\u65e5\u5e38\u4f7f\u7528",children:[{value:"<code>git merge</code>",id:"git-merge",children:[]},{value:"<code>git rebase</code>",id:"git-rebase",children:[]}]},{value:"\u4ee3\u7801\u56de\u9000",id:"\u4ee3\u7801\u56de\u9000",children:[]}],u={toc:k};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git"},"GIT"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Ref")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bootcss.com/p/git-guide/"},"git - \u7b80\u6613\u6307\u5357")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2015/12/git-workflow.html"},"Git \u5de5\u4f5c\u6d41\u7a0b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html"},"git cherry-pick \u6559\u7a0b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/yang450712123/article/details/89504563?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-16.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-16.control"},"vsCode git \u64cd\u4f5c\u63d0\u793a Permission denied, please try again")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6986868722136776718"},"\u9762\u8bd5\u5b98\uff1a\u4f60\u77e5\u9053git xx \u548cgit xx\u7684\u533a\u522b\u5417\uff1f\u770b\u5b8c\u8fd9\u7bc7Git\u6307\u5357\u540e\u76f4\u547c\uff1a\u5185\u884c\uff01"))))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/honjaychang/bp/fe/20211019222255.png",alt:"git\u6d41\u7a0b\u56fe"})),(0,r.kt)("h2",{id:"\u5de5\u4f5c\u6d41"},"\u5de5\u4f5c\u6d41"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"workspace")," \u5de5\u4f5c\u76ee\u5f55 \u4fdd\u5b58\u5b9e\u9645\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Index")," \u7f13\u5b58\u533a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Repository")," \u672c\u5730\u4ed3\u5e93"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Remote")," \u8fdc\u7a0b\u4ed3\u5e93")),(0,r.kt)("h2",{id:"\u57fa\u7840\u547d\u4ee4"},(0,r.kt)("a",{parentName:"h2",href:"https://juejin.cn/post/6986868722136776718"},"\u57fa\u7840\u547d\u4ee4")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git fetch")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u83b7\u53d6\u8fdc\u7a0b\u4ed3\u5e93\u7279\u5b9a\u5206\u652f\u7684\u66f4\u65b0\ngit fetch origin <\u5206\u652f\u540d>\n\n# \u83b7\u53d6\u8fdc\u7a0b\u4ed3\u5e93\u6240\u6709\u5206\u652f\u7684\u66f4\u65b0\ngit fetch --all\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git pull")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ece\u8fdc\u7a0b\u4ed3\u5e93\u62c9\u53d6\u4ee3\u7801\uff0c\u5e76\u5408\u5e76\u5230\u672c\u5730\uff0c\u76f8\u5f53\u4e8e git fetch && git merge \ngit pull origin <\u8fdc\u7a0b\u5206\u652f\u540d>:<\u672c\u5730\u5206\u652f\u540d>\n\n# \u62c9\u53d6\u540e\uff0c\u4f7f\u7528rebase\u7684\u6a21\u5f0f\u8fdb\u884c\u5408\u5e76\ngit pull --rebase origin <\u8fdc\u7a0b\u5206\u652f\u540d>:<\u672c\u5730\u5206\u652f\u540d>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git branch")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u57fa\u4e8e\u5f53\u524d\u5206\u652f\uff0c\u65b0\u5efa\u4e00\u4e2a\u672c\u5730\u5206\u652f\uff0c\u4f46\u4e0d\u5207\u6362\ngit branch <branch-name> \n\n# \u67e5\u770b\u672c\u5730\u5206\u652f\ngit branch\n\n# \u67e5\u770b\u672c\u5730\u548c\u8fdc\u7a0b\u5206\u652f\ngit branch -a\n\n# \u5220\u9664\u672c\u5730\u5206\u652f\ngit branch -D/-d <branch-name>\n\n# \u57fa\u4e8e\u65e7\u5206\u652f\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f\ngit branch <new-branch-name> <old-branch-name> \n\n# \u57fa\u4e8e\u67d0\u63d0\u4ea4\u70b9\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f\ngit branch <new-branch-name> <commit-id> \n\n# \u91cd\u65b0\u547d\u540d\u5206\u652f\ngit branch -m <old-branch-name> <new-branch-name>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git checkout")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5207\u6362\u5230\u67d0\u4e2a\u5206\u652f\u4e0a\ngit checkout <branch-name>\n\n# \u57fa\u4e8e\u5f53\u524d\u5206\u652f\uff0c\u521b\u5efa\u4e00\u4e2a\u5206\u652f\u5e76\u5207\u6362\u5230\u65b0\u5206\u652f\u4e0a\ngit checkout -b <branch-name>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git add")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6dfb\u628a\u5f53\u524d\u5de5\u4f5c\u533a\u4fee\u6539\u7684\u6587\u4ef6\u6dfb\u52a0\u5230\u6682\u5b58\u533a\uff0c\u591a\u4e2a\u6587\u4ef6\u53ef\u4ee5\u7528\u7a7a\u683c\u9694\u5f00\ngit add xxx\n\n# \u6dfb\u52a0\u5f53\u524d\u5de5\u4f5c\u533a\u4fee\u6539\u7684\u6240\u6709\u6587\u4ef6\u5230\u6682\u5b58\u533a\ngit add .\n\ngit restore --staged <file>... // to unstagexs\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git init")," \u521b\u5efa\u65b0\u4ed3\u5e93"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git push origin --delete <name>")," \u5220\u9664\u8fdc\u7a0b\u5206\u652f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git remote add origin <server>")," \u5c06\u4f60\u7684\u6539\u52a8\u63a8\u9001\u5230\u6240\u6dfb\u52a0\u7684\u670d\u52a1\u5668")),(0,r.kt)("h2",{id:"\u65e5\u5e38\u4f7f\u7528"},"\u65e5\u5e38\u4f7f\u7528"),(0,r.kt)("h4",{id:"\u8bb0\u5f55\u65e5\u5e38\u534f\u540c\u5f00\u53d1\u6240\u7528\u7684git\u6307\u4ee4"},"\u8bb0\u5f55\u65e5\u5e38\u534f\u540c\u5f00\u53d1\u6240\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"h4"},"git"),"\u6307\u4ee4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git checkout -b \u672c\u5730\u5206\u652f\u540d origin/\u8fdc\u7a0b\u5206\u652f\u540d"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git add <fileName> / .")," \u63d0\u4ea4\u4ee3\u7801\u5230\u7f13\u5b58\u533a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'git commit -m "xxx"')," \u63d0\u4ea4\u4ee3\u7801\u5230\u672c\u5730\u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git push origin <master>")," \u5c06\u672c\u5730\u4ee3\u7801\u63a8\u9001\u5230\u8fdc\u7a0b",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git push origin \u672c\u5730\u5206\u652f:\u8fdc\u7aef\u5e0c\u671b\u521b\u5efa\u7684\u5206\u652f"))))),(0,r.kt)("h4",{id:"\u5173\u4e8egit-stash"},"\u5173\u4e8e",(0,r.kt)("inlineCode",{parentName:"h4"},"git stash")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git stash")," \u80fd\u6b63\u786e\u5b58\u50a8\u7684\u524d\u63d0\u662f\u6587\u4ef6\u5fc5\u987b\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," \u7248\u672c\u63a7\u5236\u4e2d\u624d\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git stash")," \u5148\u5c06\u672c\u5730\u4fee\u6539\u5b58\u50a8\u8d77\u6765")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git stash save")," \u529f\u80fd\u540c\u4e0a\uff0c\u4f46\u53ef\u4ee5\u52a0\u4e00\u4e9b\u6ce8\u91ca")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git stash list")," \u53ef\u4ee5\u67e5\u770b\u672c\u5730\u4fdd\u5b58\u7684\u4fe1\u606f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stash@{0}:xxxx")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git stash show")," \uff1a\u663e\u793a\u505a\u4e86\u54ea\u4e9b\u6539\u52a8\uff0c\u9ed8\u8ba4",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"\u7b2c\u4e00\u4e2a\u5b58\u50a8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git stash pop [stash@{0}]")," \u8fd8\u539f\u6682\u5b58\u7684\u5185\u5bb9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git stash drop <stash@{id}>")," \u5220\u9664 stash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git stash clear")," \u6e05\u9664\u6240\u6709\u7684 stash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git stash branch <name>")," \u6839\u636e\u6700\u8fd1\u7684 stash \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5206\u652f\uff0c\u7136\u540e\u5220\u9664\u6700\u8fd1\u7684 stash"))),(0,r.kt)("h5",{id:"git-stash-pop-git-stash-apply\u5bf9\u6bd4"},(0,r.kt)("inlineCode",{parentName:"h5"},"git stash pop")," ",(0,r.kt)("inlineCode",{parentName:"h5"},"git stash apply"),"\u5bf9\u6bd4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u524d\u8005\u4f1a\u8fd8\u539f\u540e\u4f1a",(0,r.kt)("inlineCode",{parentName:"li"},"stash list"),"\u4e2d\u5220\u9664\u5bf9\u5e94\u7684\u7f16\u53f7"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u8005\u8fd8\u539f\u540e\u8fd8\u4f1a\u4fdd\u5b58")),(0,r.kt)("h3",{id:"git-merge"},(0,r.kt)("inlineCode",{parentName:"h3"},"git merge")),(0,r.kt)("p",null,"\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5408\u5e76\u63d0\u4ea4\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"merge-commit"),"\uff0c\u4e14\u5305\u542b\u4e24\u4e2a\u5206\u652f\u8bb0\u5f55\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git merge --ff"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 \u88ab ",(0,r.kt)("inlineCode",{parentName:"li"},"merge")," \u7684\u5206\u652f\u548c\u5f53\u524d\u5206\u652f\u5728\u56fe\u5f62\u4e0a\u5e76\u4e3a\u4e00\u6761\u7ebf\uff0c\u88ab ",(0,r.kt)("inlineCode",{parentName:"li"},"merge")," \u7684\u63d0\u4ea4\u70b9 ",(0,r.kt)("inlineCode",{parentName:"li"},"commit")," \u5408\u5e76\u5230\u5f53\u524d\u5206\u652f\uff0c\u6ca1\u6709\u65b0\u7684\u63d0\u4ea4\u70b9",(0,r.kt)("inlineCode",{parentName:"li"},"merge")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git merge --no--ff"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63a8\u8350 \u88ab ",(0,r.kt)("inlineCode",{parentName:"li"},"merge")," \u7684\u5206\u652f\u548c\u5f53\u524d\u5206\u652f\u4e0d\u5728\u4e00\u6761\u7ebf\u4e0a\uff0c\u88ab ",(0,r.kt)("inlineCode",{parentName:"li"},"merge")," \u7684\u63d0\u4ea4\u70b9 ",(0,r.kt)("inlineCode",{parentName:"li"},"commit")," \u8fd8\u5728\u539f\u6765\u7684\u5206\u652f\u4e0a\uff0c\u5e76\u5728\u5f53\u524d\u5206\u652f\u4ea7\u751f\u4e00\u4e2a\u65b0\u63d0\u4ea4\u70b9 ",(0,r.kt)("inlineCode",{parentName:"li"},"merge")),(0,r.kt)("li",{parentName:"ul"},"\u5229\u4e8e\u56de\u6eda\u7248\u672c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git merge --squash"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u628a\u591a\u6b21\u5206\u652fcommit\u5386\u53f2\u538b\u7f29\u4e3a\u4e00\u6b21")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/honjaychang/bp/fe/GitMerge.image",alt:"image.png"})),(0,r.kt)("h3",{id:"git-rebase"},(0,r.kt)("inlineCode",{parentName:"h3"},"git rebase")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u4ea7\u751f",(0,r.kt)("inlineCode",{parentName:"li"},"merge commit"),"\uff0c\u53d8\u6362\u8d77\u59cb\u70b9\u4f4d\u7f6e \u4e3a\u4e00\u6761\u76f4\u7ebf\uff0c\u4e14\u80fd\u4f7f\u7528\u547d\u4ee4\u5408\u5e76\u591a\u6b21commit\u3002")),(0,r.kt)("h4",{id:"\u533a\u522b"},"\u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"merge")," \u4f1a\u4fdd\u7559\u4e24\u4e2a\u5206\u652f\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"commit")," \u4fe1\u606f\uff0c\u800c\u4e14\u662f\u4ea4\u53c9\u7740\u7684\uff0c\u591a\u7528\u4e8e\u81ea\u5df1 ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," \u5408\u5e76\u8fdb ",(0,r.kt)("inlineCode",{parentName:"li"},"master"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rebase"),"\u610f\u601d\u662f\u53d8\u57fa\uff0c\u6539\u53d8\u5206\u652f\u7684\u8d77\u59cb\u4f4d\u7f6e\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," \u4e0a",(0,r.kt)("inlineCode",{parentName:"li"},"git rebase master"),"\uff0c\u5c06dev\u7684\u591a\u6b21 ",(0,r.kt)("inlineCode",{parentName:"li"},"commit")," \u4e00\u8d77\u62c9\u5230\u8981 ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," \u6700\u65b0\u63d0\u4ea4\u7684\u540e\u9762(\u65f6\u95f4\u6700\u65b0)\uff0c\u53d8\u6210\u4e00\u6761\u7ebf\uff0c\u591a\u7528\u4e8e\u6574\u7406\u81ea\u5df1\u7684dev\u63d0\u4ea4\u5386\u53f2\uff0c\u7136\u540e\u628a ",(0,r.kt)("inlineCode",{parentName:"li"},"master"),"\u6700\u65b0\u4ee3\u7801\u5408\u8fdb\u6765\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"merge")," ",(0,r.kt)("inlineCode",{parentName:"p"},"rebase"),"\u5bf9\u6bd4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git pull --rebase"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git pull => git fetch + git merge FETCH_HEAD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git pull --rebase => git fetch + git rebase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"merge")," \u5408\u5e76\u64cd\u4f5c \u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u8282\u70b9\uff0c\u4e4b\u524d\u7684\u63d0\u4ea4\u5206\u5f00\u663e\u793a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rebase")," \u590d\u4f4d\u57fa\u5e95 \u4e0d\u4f1a\u751f\u6210\u65b0\u7684\u8282\u70b9\uff0c\u662f\u5c06\u4e24\u4e2a\u5206\u652f\u878d\u5408\u6210\u4e00\u4e2a\u7ebf\u6027\u7684\u63d0\u4ea4")))),(0,r.kt)("h2",{id:"\u4ee3\u7801\u56de\u9000"},"\u4ee3\u7801\u56de\u9000"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git checkout"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git reset")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--hard"),"\uff1a\u786c\u91cd\u7f6e\uff0c\u5f71\u54cd\u3010\u5de5\u4f5c\u533a\u3001\u6682\u5b58\u533a\u3001\u672c\u5730\u4ed3\u5e93\u3011"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--mixed"),"\uff1a\u9ed8\u8ba4\uff0c\u5f71\u54cd\u3010\u6682\u5b58\u533a\u3001\u672c\u5730\u4ed3\u5e93\u3011\uff0c\u88ab\u91cd\u7f6e\u7684\u4fee\u6539\u5185\u5bb9\u8fd8\u7559\u5728\u5de5\u4f5c\u533a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--soft"),"\uff1a\u8f6f\u91cd\u7f6e\uff0c\u5f71\u54cd \u3010\u672c\u5730\u4ed3\u5e93\u3011\uff0c\u88ab\u91cd\u7f6e\u7684\u4fee\u6539\u5185\u5bb9\u8fd8\u7559\u5728\u5de5\u4f5c\u533a\u548c\u6682\u5b58\u533a"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git revert")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u64a4\u56de\u5de5\u4f5c\u533a\u8be5\u6587\u4ef6\u7684\u4fee\u6539\uff0c\u591a\u4e2a\u6587\u4ef6\u7528\u7a7a\u683c\u9694\u5f00\ngit checkout -- <file-name>\n# \u64a4\u56de\u5de5\u4f5c\u533a\u6240\u6709\u6539\u52a8\ngit checkout .\n\n# \u653e\u5f03\u5df2git add\u5230\u6682\u5b58\u533a\u7684\u6307\u5b9a\u6587\u4ef6\u7684\u7f13\u5b58\uff08HEAD\u8868\u793a\u6700\u65b0\u7248\u672c\uff09\ngit reset HEAD <file-name>\n# \u653e\u5f03\u6240\u6709\u7684\u7f13\u5b58\ngit reset HEAD .\n# \u4e22\u5f03\u5df2commit\u7684\u5176\u4ed6\u7248\u672c\uff0chard\u53c2\u6570\u8868\u793a\u540c\u65f6\u91cd\u7f6e\u5de5\u4f5c\u533a\u7684\u4fee\u6539\ngit reset --hard <commit-id>  \n# \u56de\u5230\u4e0a\u4e00\u4e2acommit\u7684\u7248\u672c\uff0chard\u53c2\u6570\u8868\u793a\u540c\u65f6\u91cd\u7f6e\u5de5\u4f5c\u533a\u7684\u4fee\u6539\ngit reset --hard HEAD^\n\n# \u64a4\u95000ffaacc\u8fd9\u6b21\u63d0\u4ea4\ngit revert 0ffaacc     \n# \u64a4\u9500\u6700\u8fd1\u4e00\u6b21\u63d0\u4ea4\ngit revert HEAD       \n# \u64a4\u9500\u6700\u8fd12\u6b21\u63d0\u4ea4\uff0c\u6ce8\u610f\uff1a\u6570\u5b57\u4ece0\u5f00\u59cb\ngit revert HEAD~1      \n\n# \u56de\u9000\u540e\u8981\u6267\u884c\u5f3a\u5236\u63a8\u9001\u8fdc\u7a0b\u5206\u652f\ngit push -f \n")),(0,r.kt)("p",null,"\u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reset")," \u662f\u6839\u636e\u6765\u79fb\u52a8 ",(0,r.kt)("inlineCode",{parentName:"li"},"HEAD")," \u6307\u9488\uff0c\u5728\u8be5\u6b21\u63d0\u4ea4\u70b9\u540e\u9762\u7684\u63d0\u4ea4\u8bb0\u5f55\u4f1a\u4e22\u5931\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"revert")," \u4f1a\u4ea7\u751f\u65b0\u7684\u63d0\u4ea4\uff0c\u6765\u62b5\u6d88\u9009\u4e2d\u7684\u8be5\u6b21\u63d0\u4ea4\u7684\u4fee\u6539\u5185\u5bb9\uff0c\u4e0d\u4f1a\u4e22\u5931\u4e2d\u95f4\u7684\u63d0\u4ea4\u8bb0\u5f55\u3002")),(0,r.kt)("p",null,"\u8bb0\u5f55\u81ea\u5df1 MAC \u4e0a\u540c\u65f6\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"github")," \u4ee5\u53ca\u516c\u53f8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"gitlab")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'// \u53d6\u6d88\u5168\u5c40 \u7528\u6237\u540d/\u90ae\u7bb1 \u914d\u7f6e\n\ngit config --global --unset user.name\ngit config --global --unset user.email\n\n// \u5355\u72ec\u8bbe\u7f6e\u6bcf\u4e2arepo \u7528\u6237\u540d/\u90ae\u7bb1\ngit config user.email "1599823637@qq.com"\ngit config user.name "Honjay"\n\n// \u67e5\u770b\u5f53\u524d\u9879\u76ee\u7684git\u914d\u7f6e\ngit config --local --list\n\n\nssh-keygen -t rsa -C "xxx@xxx.com"\n\nssh -T git@github.com\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nvm")," \u591a\u7248\u672c node \u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nrm")," \u591a\u6e90\u7ba1\u7406")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"// \u67e5\u770b\u6e90\uff0c\u53ef\u4ee5\u770b\u5230\u8bbe\u7f6e\u8fc7\u7684\u6240\u6709\u7684\u6e90 npm config get registry\n\nnpm config set registry http://npm-registry.qunhequnhe.com/\nnpm config set registry https://registry.npmjs.org/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"//\u76f4\u63a5\u62c9\u53d6\u5e76\u5408\u5e76\u6700\u65b0\u4ee3\u7801\ngit pull origin master // \u62c9\u53d6\u8fdc\u7aeforigin/master\u5206\u652f\u5e76\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f\ngit pull origin dev // \u62c9\u53d6\u8fdc\u7aeforigin/dev\u5206\u652f\u5e76\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git checkout master\ngit pull origin master\ngit merge dev\ngit push origin master\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\nrm -rf \nrimraf\n\nyarn cache clean --force\n\n\ngit rm <fileName>  \u4f1a\u5c06\u5de5\u4f5c\u533a\u7684\u6587\u4ef6\u5220\u9664\ngit rm <fileName> --cached   \u5de5\u4f5c\u533a\u7684\u6587\u4ef6\u4e0d\u4f1a\u5220\u9664\uff0c\u4ec5\u5220\u9664\u6682\u5b58\u533a\u4e2d\u5bf9\u5e94\u7684\u6587\u4ef6\n\n\n")),(0,r.kt)("h4",{id:"\u5de5\u4f5c\u6d41\u7a0b"},"\u5de5\u4f5c\u6d41\u7a0b"),(0,r.kt)("p",null,"\u5728\u591a\u4eba\u534f\u4f5c\u7684\u5206\u652f\u7ba1\u7406\u4e2d,\u6211\u4eec\u5b9a\u4e49\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"master(\u7a33\u5b9a) => sit(\u6d4b\u8bd5) => release(beta) => \u6d41\u8f6crelease\u5230\u7ebf\u4e0a => \u5408\u5e76release\u5230master "),"\u8fd9\u6837\u4e00\u4e2a\u5de5\u4f5c\u6d41"),(0,r.kt)("p",null,"\u57fa\u672c\u516c\u5f0f\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"<type>(<scope>): <subject>\n"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\uff1a\u7528\u4e8e\u8bf4\u660e ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," \u7684\u7c7b\u522b"),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"feat\uff1a\u65b0\u529f\u80fd\uff08feature\uff09\nfix\uff1a\u4fee\u8865bug\ndocs\uff1a\u6587\u6863\uff08documentation\uff09\nstyle\uff1a \u683c\u5f0f\uff08\u4e0d\u5f71\u54cd\u4ee3\u7801\u8fd0\u884c\u7684\u53d8\u52a8\uff09\nrefactor\uff1a\u91cd\u6784\uff08\u5373\u4e0d\u662f\u65b0\u589e\u529f\u80fd\uff0c\u4e5f\u4e0d\u662f\u4fee\u6539bug\u7684\u4ee3\u7801\u53d8\u52a8\uff09\ntest\uff1a\u589e\u52a0\u6d4b\u8bd5\nchore\uff1a\u6784\u5efa\u8fc7\u7a0b\u6216\u8f85\u52a9\u5de5\u5177\u7684\u53d8\u52a8\n"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scope"),"\uff1a\u7528\u4e8e\u8bf4\u660e ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," \u7684\u5f71\u54cd\u8303\u56f4"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"subject"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," \u76ee\u7684\u7684\u7b80\u77ed\u63cf\u8ff0s"),(0,r.kt)("p",null,"\uff08\u968f\u65f6\u66f4\u65b0...\uff09"))}s.isMDXComponent=!0}}]);