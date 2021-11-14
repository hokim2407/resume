i = 3;

full_container.insertAdjacentHTML(
  "beforeend",
  `    
	<div class="section back-3 back">
		<div class="inner-pull">
			<div class="text-b1">
				기술 스택
			</div>
			<div class="text-r1"  style='margin: 2rem 0'> 
				저는 이 기술을 사용해서 개발합니다.
			</div>
			<div  class="scroll-box short">
				<div class="small-box white mult" style='margin: 0'>

					<img class="img-logo padding" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
					alt="node"/>
					<img class="img-logo padding" src="https://www.pngkit.com/png/full/383-3838914_mongo-db-design-mongodb-logo-mongodb.png"
					alt="mongodb"/>
					<img class="img-logo" src="https://media.vlpt.us/images/sgh002400/post/005be64e-a3e4-4535-9b97-72876a30ef97/MySQL.png"
					alt="mysql"/>
					<img class="img-logo " src="https://hyunseob.github.io/images/sequelizejs.png"
					alt="sequelize"/>
					<img class="img-logo round" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
					alt="js"/>
					<img class="img-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
					alt="ts"/>
					<img class="img-logo" src="https://media.vlpt.us/images/dogakday/post/be79455f-ed49-4e12-a57f-d602fb33d720/1_oNM0JVqivoi3lVPF6ygp9Q.png"
					alt="kotlin"/>
					<img class="img-logo big-padding" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png"
					alt="git"/>
					<img class="img-logo" src="https://blog.kakaocdn.net/dn/buEUNK/btqLkhcE7E8/nPK6SlkXAa21tMJTwzpOA1/img.png"
					alt="docker"/>
					<img class="img-logo padding" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1920px-Amazon_Web_Services_Logo.svg.png"
					alt="aws"/>
				</div>
			</div>
			<br/>
			<br/>
		</div>
	</div>
	  `
);

menu_container.insertAdjacentHTML(
  "beforeend",
  `    
	<li class="anchor" data-menuanchor="anchor${i}">
		<a href="#anchor${i}"> <div class="circle"></div></a>
	</li>
	`
);
