i = 2;

const make42 = (title, content) => {
  return `
  	<div class='small-text-box'>  
		<div class="text-b2-5">📌 ${title}</div>
		<p class="text-r2" style='margin-top: .5rem;'>
			${content}<br/>
		</p>
	</div>
`;
};

full_container.insertAdjacentHTML(
  "beforeend",
  `    
	<div class="section back-2 back">
		<div class="inner-pull">
		<div class="text-b1">
			42 서울의 개발자
		</div>
		<div class="text-b2"  style='margin-top: 2rem'> 
		c로 쌓아 올린 기초
		</div>
	` +
    make42(
      "헤더? 헤더!",
      "string.h를 구현하며 헤더의 동작 방식을 이해하고 c의 기초를 배웠습니다."
    ) +
    make42(
      "정렬, 그 효율성에 관하여",
      `가장 짧은 횟수로 정렬할 수 있는 방법을 찾으며 정렬의 효율성에 대해 깊게 고민했습니다.<br/>
	  과제의 요구사항을 맞추기 위해 덱과 스택을 구현하며 자료구조를 익혔습니다.`
    ) +
    make42(
      "두고두고 꺼내먹는 미니쉘",
      `
	  작은 bash 쉘을 구현하며 쉘의 동작 방법을 제대로 이해할 수 있었고,<br/>
	  프로세스를 생성하는 방법, 파이프를 통해 부모프로세스와 자식 프로세스가 통신하는 방법을 배웠습니다.<br/>
	  이때 배운 지식들이 프로그램이 돌아가는 근간에 대한 내용이어서 이후에 다른 언어를 공부할 때도 도움이 되었습니다. 
	  `
    ) +
    make42(
      "철학자는 죽지 않아요",
      "식사하는 철학자 상황을 만들고 해결하며 데드락과 스레드에 대해 잘 이해하게 되었습니다."
    ) +
    `	
		<div class='small-text-box'>
		<br/>
			<a href="https://42place.innovationacademy.kr/" class="text-r3 gray">
			42 블로그 보러 가기
			</a>
			<div class="text-r3 short">42 서울에서 운영하는 블로그에는 프로젝트 후기나 멘토 혹은 다른 카뎃분들의 꿀팁이 많이 올라와요.</br>
			<a href="https://42place.innovationacademy.kr/archives/9344" class="text-r3 underline">
				제가 쓴 글
			</a>도 있으니 많이 봐주세요.
			</div>
		</div>
		<div class='small-text-box'>
			<a href="https://www.youtube.com/watch?v=zqpfKTDoWAg" class="text-r3 gray">
				42유월 영상 보러 가기
			</a>
			<div class="text-r3 short">42 서울에서 댄스 영화 유월을 오마주해 만든 영상도 있답니다.</br>
			저도 1초 정도 등장해요!</div>
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
