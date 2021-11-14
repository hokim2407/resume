i = 4;

full_container.insertAdjacentHTML(
  "beforeend",
  `    
	<div class="section page-1 back">
	
		<div class="inner-pull">
			<div class="text-b1">
				책임감있는 마리모
			</div>
			<div class="text-b2"  style='margin-top: 2rem'> 
			저의 코딩 스타일은?!
			</div>
			<div class="text-b3"  > 
				여기저기 돌아다니기보다는 한자리에 가만히 앉아서 코딩하는 걸 좋아해요.</br>
				책임감이 강해서 한번 맡은 일은 무슨 일이 있어도 끝마칩니다.</br>
				기존의 코드를 개선하는 것도, 새로운 기술을 배우는 것도 좋아해요.</br>

			</div>
			
			<div class="text-b2"  style='margin-top: 2rem'> 
				Why Coding?
			</div>
			<div class="text-b3" > 
				왜 코딩을 하냐구요?</br>
				재밌으니까요! </br>
				매순간순간 제가 짠 코드를 검증하면서 결국 성공을 얻어내는 과정이 너무 즐거워요.</br>
				배우면 배울수록 더 배우고 싶고 더 많이 알고 싶어요.</br>
				손대면 프로그램이 뚝딱 완성되는 그날까지!


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
