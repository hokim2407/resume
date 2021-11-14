let full_container = document.getElementById("fullpage");
let menu_container = document.getElementById("menu");
let i = 1;

full_container.insertAdjacentHTML(
  "beforeend",
  `    
	  <div class="section back-${i} back">
		  <div class="inner-pull">
		  	<div class="text-b1"> 안녕하세요</div>
		  	<div class="text-b2"  style='margin-top: .5rem'> 42에서 공부하고있는
			  	<br/>백엔드 개발자 김호정입니다.<br/>
			</div>
			<div class="text-r3 gray" >
				깃허브: <a href='https://github.com/hokim2407'>https://github.com/hokim2407</a>
				</div>

			<div class="small-box">
				<div>
					<div class="text-b2-5" style='margin-bottom: 1rem'> 
						&#9889; 저는 이런 것을 추구합니다.
					</div>
					<div class="text-r2 long" > 
						- 리팩토링 하기 편하게 정리된 프로젝트<br/>
						- 가독성 좋은 코드<br/>
						- 함께 성장하는 동료 학습<br/>
						- 협업을 위한 문서화

					</div>
				</div>
				<div>
				  	<div class="text-b2-5" style='margin-bottom: 1rem'> 
						&#128150; 저는 이런 것을 좋아합니다.
					</div>
					<div class="text-r2 long" > 
						- CI/CD를 통한 테스트/자동 배포<br/>
						- 효율적인 코드를 위한 리팩토링<br/>
						- 반복 작업 자동화<br/>
						- 새로운 언어/프레임워크 배우기<br/>
						
					</div>
				</div>
		  	</div>
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
