i = 4;

full_container.insertAdjacentHTML(
  "beforeend",
  `    
	<div class="section back-4 back">
	
		<div class="inner-pull">
			<div class="text-b1">
				hokim's TMI
			</div>
			
			<div class = "scroll-box" >
				<div class="text-b2"  style='margin-top: 2rem'> 
				코딩 스타일은?
				</div>
				<div class="text-r2" style="line-height:2rem; margin-top: 1rem;" > 
					여기저기 돌아다니기보다는 한자리에 가만히 앉아서 코딩하는 걸 좋아해요.</br>
					기존의 코드를 개선하는 것도, 새로운 기술을 배우는 것도 좋아합니다.</br>
					다른 사람의 클린 코드를 많이 보는 것도 좋아하고, 제 코드를 보여드리면서 </br>
					효율성에 대해 이야기하는 것도 좋아해요.</br>
				</div>
				
				<div class="text-b2"  style='margin-top: 2rem'> 
					왜 프로그래밍을 하나요?
				</div>
				<div class="text-r2"  style="line-height:2rem; margin-top: 1rem;"> 
					재밌으니까요! </br>
					매순간순간 제가 짠 코드를 검증하면서 결국 성공을 얻어내는 과정이 너무 즐거워요.</br>
					배우면 배울수록 더 배우고 싶고 더 많이 알고 싶어요.</br>
					손대면 프로그램이 뚝딱 완성되는 그날까지 파이팅!
				</div>

				<div class="text-b2"  style='margin-top: 2rem'> 
					성격은 어떤지?
				</div>
				<div class="text-r2"  style="line-height:2rem; margin-top: 1rem;"> 
					책임감이 강해서 맡은 일은 끝까지 해냅니다. </br>
					효율적인걸 중요하게 여겨요. 자동화 할 만한게 보이면 파이선으로 간단하게 자동화해요.</br>
					조화를 중요시해서 사람들 사이에 잘 녹아드는 편이에요. 
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
