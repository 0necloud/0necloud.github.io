(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65dada26"],{"0071":function(e,t,o){},"7eb6":function(e,t,o){"use strict";o("0071")},"8cca":function(e,t,o){"use strict";o.r(t);var s=o("7a23"),i=function(e){return Object(s["B"])("data-v-38ddb0ca"),e=e(),Object(s["z"])(),e},n={class:"col-12 pt-0"},a=i((function(){return Object(s["i"])("div",{class:"flex flex-wrap justify-content-between align-items-center mb-3"},[Object(s["i"])("h4",{class:"sm:m-0 mb-4"},"Projects")],-1)})),r={class:"list-none m-0 p-0 grid flex"},c=["onClick"],l={class:"card h-full",align:"center",style:{"/* background-color":"rgba(255, 255, 255, 0.2)","*/\r\n              box-shadow":"0 4px 30px rgba(0, 0, 0, 0.1)","backdrop-filter":"blur(5px) brightness(85%)",border:"1px solid rgba(255, 255, 255, 0.3)","/* text-shadow":"0.5px 0.5px black */"}},u=["src"],d={class:"p-0 mt-1"},h={class:"p-0 mt-1 text-indigo-300"};function p(e,t,o,i,p,g){var m=Object(s["G"])("info-wrapper");return Object(s["y"])(),Object(s["h"])("div",n,[Object(s["i"])("div",{class:"card",style:Object(s["u"])(g.projects_background_img)},[a,p.showInfo?(Object(s["y"])(),Object(s["f"])(m,{key:0,title:p.selectedData.title,url:p.selectedData.url,date:p.selectedData.date,images:p.selectedData.images,description:p.selectedData.longDesc,onClose:t[0]||(t[0]=function(e){return g.closeInfo()})},null,8,["title","url","date","images","description"])):Object(s["g"])("",!0),Object(s["i"])("ul",r,[(Object(s["y"])(!0),Object(s["h"])(s["a"],null,Object(s["E"])(p.projectsData,(function(e){return Object(s["y"])(),Object(s["h"])("li",{key:e.institute,class:"col-12 sm:col-6 md:col-4 lg:col-3 m-0 project-listing",onClick:function(t){return g.openInfo(e)}},[Object(s["i"])("div",l,[Object(s["i"])("img",{src:e.images[0],class:"pb-4",style:{height:"180px",width:"180px","object-fit":"cover"}},null,8,u),Object(s["i"])("h4",d,Object(s["K"])(e.title),1),Object(s["i"])("h5",h,Object(s["K"])(e.shortDesc),1)])],8,c)})),128))])],4)])}var g=o("c06c"),m=o("15f1"),f={data:function(){return{projectsData:g.data,showInfo:!1,selectedData:{}}},computed:{projects_background_img:function(){return""}},methods:{openInfo:function(e){this.showInfo=!0,this.selectedData=e},closeInfo:function(){this.showInfo=!1}},components:{InfoWrapper:m["a"]}},b=(o("7eb6"),o("6b0d")),j=o.n(b);const y=j()(f,[["render",p],["__scopeId","data-v-38ddb0ca"]]);t["default"]=y},c06c:function(e){e.exports=JSON.parse('{"data":[{"title":"Game Wiki Site","url":"https://dungeonslasher.wiki/","images":["images/projects/DSInfo/1.png","images/projects/DSInfo/2.png","images/projects/DSInfo/3.png","images/projects/DSInfo/4.png","images/projects/DSInfo/5.png"],"date":"2024","shortDesc":"Vue.js, SEO","longDesc":"DungeonSlasher is a mobile game for which I have created a wiki site from scratch for. Through this project, I have gotten first hand experience with purchasing my own domain, setting DNS records, monitor traffic through the Google Search Console and also learn basic SEO techniques to help my site appear more on Search Engines.\\n\\nI have also created a similar site for a game which has ended service, and will not be maintaining the site any longer: https://revivedwitch.netlify.app/"},{"title":"Audio Visualiser","url":"https://bavisualiser.netlify.app/","images":["images/projects/AudioVisualiser/1.png","images/projects/AudioVisualiser/2.png","images/projects/AudioVisualiser/3.png","images/projects/AudioVisualiser/4.png"],"date":"2024","shortDesc":"Vue.js, Three.js, Web Audio API","longDesc":"A fun yet painful project I undertook to experiment using Three.js. Integrates the Web Audio API to convert audio into visuals.\\n\\nAllows users to\\n1. Stream audio by sharing their tabs / windows / screens (Desktop only and browser-dependent)\\n2. Upload an audio file.\\n\\nThree.js implemented effects include:\\n1. Bouncing & Colour-Changing Halo\\n2. Audio Bars\\n\\nDemo: https://0necloud.github.io/audio-visualiser/\\nSource Code: https://github.com/0necloud/audio-visualiser"},{"title":"RSHub","url":"https://0necloud.github.io/RSHub/","images":["images/projects/RSHub/1.jpg","images/projects/RSHub/2.jpg"],"date":"2024","shortDesc":"Vue.js","longDesc":"Vue.js application that provides searching of a resource JSON object containing a defined set of keys. Essentially a hub containing urls to different resources.\\n\\nhttps://github.com/0necloud/RSHub"},{"title":"Portfolio Website","url":"#","images":["images/projects/portfolio/1.png","images/projects/portfolio/2.png"],"date":"2024","shortDesc":"That\'s this site!","longDesc":"A site built for my portfolio to practice my front-end web development skills using the Vue.js framework. Made this to keep myself busy during my National Service period and to not lose touch of my web development skills.\\n\\nUses components from PrimeVue and the style classes from the Sakai template. However, the overall layout and design was made by me.\\n\\nhttps://github.com/0necloud/0necloud.github.io"},{"title":"Secured Smartfarms Control and Monitoring System","url":"#","images":["images/projects/SSCaMS/1.jpg","images/projects/SSCaMS/2.jpg","images/projects/SSCaMS/3.jpg","images/projects/SSCaMS/4.jpg"],"date":"2022","shortDesc":"Vue.js, Socket.IO, Redis, IoT","longDesc":"Countless industries are benefiting from ever improving and everchanging technologies, yet many agricultural processes still have room for improvement. The web application, as part of my polytechnic\'s year 3 Final Year Project with Leaptron Engineering Pte Ltd, was built for overseeing administration and monitoring of crops is just one of the many possible solutions. The objective of solutions should be self-sustainability by increasing yield and reducing costs and wasted resources through increased efficiency.\\n\\nThe web application makes use of sockets to receive sensor data from farming racks, where it is processed on the backend and forwarded to the dashboard. On top of monitoring crop growth and conditions, numerous security features have been built into the system, including JSON Web Tokens for authentication, Role-based Access Control, Password Policies, Account Lockout, Logging, and more. It also allows the receiving of notifications via a Telegram bot and through emails.\\n\\nThrough this project, I have learnt how to do database modelling and implement stored procedures in MariaDB, caching data in Redis, and implement multiple web application security features. During the course of the FYP, we have also learnt to use the SCRUM methodology for project management, which allowed us to meticulously plan out our project timeline and tasks."},{"title":"SP Shirts","url":"#","images":["images/projects/SPShirts/1.jpg","images/projects/SPShirts/2.jpg","images/projects/SPShirts/3.jpg"],"date":"2022","shortDesc":"Web Application Security","longDesc":"This is my polytechnic\'s year 2 assignment for the Secure Coding module. Given an extremely vulnerable web application, my buddy and I have found and categorized the various vulnerabilities with reference to the OWASP Top Ten Web Application Security Risks, after which we have implemented fixes to. Examples of vulnerabilties addressed are:\\n\\n1. Privilege Escalation\\n2. Insecure Direct Object References\\n3. SQL Injection\\n4. XSS Injection\\n5. Lack of encryption (at rest & in transit)\\n6. Credential Stuffing.\\n\\nIn the process of researching on the various vulnerabilties, we have created proof-of-concepts such as using webhooks for XSS attacks and brute-forcing tools. In the implementation of protection against the attacks, we have learnt to implement HTTPS for securing our data in transit, multi-factor authentication, account lockout, and more. All of these were knowledge not covered in school, but done through research and testing."},{"title":"SP Movies","url":"#","images":["images/projects/SPMovies/1.jpg","images/projects/SPMovies/2.jpg"],"date":"2022","shortDesc":"JWT, MySQL","longDesc":"This is my polytechnic\'s year 2 assignment for the Back-End Web Development module. Here, I got to learn how to use MySQL and create databases, develop endpoints, and implement JWT authentication for security."},{"title":"SPAM2 System","url":"#","images":["images/projects/SPAM2/1.jpg","images/projects/SPAM2/2.jpg","images/projects/SPAM2/3.jpg"],"date":"2022","shortDesc":"Public Key Cryptography","longDesc":"This is my polytechnic\'s year 1 assignment for the Applied Cryptography module. It consists of a server and client, where the client sends a request for a menu at the start of the day and sends a CSV file back at the end of the day. The original assignment code sends the data in cleartext, and we were supposed to modify the system to provide Confidentiality, Integrity, and Non-Repudiation of data.\\n\\nIn order to achieve this, we integrated a Public Key Infrastructure, hashing, and AES encryption. As an addition, we also developed a simple GUI to stand out from the other assignment submissions. "},{"title":"Front-End Website","url":"https://0necloud.github.io/front-end-website/","images":["images/projects/FED/1.jpg"],"date":"2020","shortDesc":"Bootstrap, HTML, CSS, JS","longDesc":"This was my polytechnic\'s year 1 assignment for the Front-End Web Development module. It incorporates the use of Bootstrap for mobile responsiveness, and implements simple JavaScript functionalities such as a countdown timer and form selection.\\n\\nhttps://github.com/0necloud/front-end-website"},{"title":"MikuXSmiku","url":"https://github.com/0necloud/MikuXSmiku","images":["images/projects/MikuXSmiku/1.jpg","images/projects/MikuXSmiku/2.jpg","images/projects/MikuXSmiku/3.jpg"],"date":"2021","shortDesc":"Tkinter & Turtle","longDesc":"A fun little project I took on to make a game in Python. Play as the famous Hatsune Miku or Sakura Miku and throw leeks and cherries and each other until one player\'s HP falls below zero! Fire projectiles at orbs (Battle Ether) to earn points which can be used to activate abilities (Large Projectile/Healing)! All of this while listening to Hatsune Miku\'s hit songs! \\n\\nNote: The assets are NOT made by me, and this is meant to be a fun little side project. "},{"title":"Python Drawing Programme","url":"https://github.com/0necloud/draw","images":["images/projects/drawapp/1.jpg"],"date":"2021","shortDesc":"Tkinter & Turtle","longDesc":"This was the first project which I have embarked on. This drawing programme uses gamified WASD controls to move the cursor, and offers options to change the pen and canvas colors. It also allows the user to save the current artwork as a local file, although improvements need to be made."}]}')}}]);
//# sourceMappingURL=chunk-65dada26.a6f2d9c6.js.map