i = 2;

const make42 = (title, content) => {
  return `
  	<div class='small-text-box'>  
		<div class="text-b2-5"  style='margin: .8rem 0 0.5rem 0;'>π ${title}</div>
		<p class="text-r2 gray" style='line-height:2rem;'>
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
			42 μμΈμ κ°λ°μ
		</div>
		<div class="text-b2"  style='margin-top: 2rem; margin-bottom: 1rem;'> 
		cλ‘ μμ μ¬λ¦° κΈ°μ΄
		</div>
		<div class = "scroll-box short" >
	` +
    make42(
      "ν€λ? ν€λ!",
      "string.hλ₯Ό κ΅¬ννλ©° ν€λμ λμ λ°©μμ μ΄ν΄νκ³  cμ κΈ°μ΄λ₯Ό λ°°μ μ΅λλ€."
    ) +
    make42(
      "μ λ ¬, κ·Έ ν¨μ¨μ±μ κ΄νμ¬",
      `κ°μ₯ μ§§μ νμλ‘ μ λ ¬ν  μ μλ λ°©λ²μ μ°ΎμΌλ©° μ λ ¬μ ν¨μ¨μ±μ λν΄ κΉκ² κ³ λ―Όνμ΅λλ€.<br/>
	  κ³Όμ μ μκ΅¬μ¬ν­μ λ§μΆκΈ° μν΄ λ±κ³Ό μ€νμ κ΅¬ννλ©° μλ£κ΅¬μ‘°λ₯Ό μ΅νμ΅λλ€.`
    ) +
    make42(
      "λκ³ λκ³  κΊΌλ΄λ¨Ήλ λ―Έλμ",
      `
	  μμ bash μμ κ΅¬ννλ©° μμ λμ λ°©λ²μ μ λλ‘ μ΄ν΄ν  μ μμκ³ ,<br/>
	  νλ‘μΈμ€λ₯Ό μμ±νλ λ°©λ², νμ΄νλ₯Ό ν΅ν΄ λΆλͺ¨νλ‘μΈμ€μ μμ νλ‘μΈμ€κ° ν΅μ νλ λ°©λ²μ λ°°μ μ΅λλ€.<br/>
	  μ΄λ λ°°μ΄ μ§μλ€μ΄ νλ‘κ·Έλ¨μ΄ λμκ°λ κ·Όκ°μ λν λ΄μ©μ΄μ΄μ μ΄νμ λ€λ₯Έ μΈμ΄λ₯Ό κ³΅λΆν  λλ λμμ΄ λμμ΅λλ€. 
	  `
    ) +
    make42(
      "μ² νμλ μ£½μ§ μμμ",
      "μμ¬νλ μ² νμ μν©μ λ§λ€κ³  ν΄κ²°νλ©° λ°λλ½κ³Ό μ€λ λμ λν΄ μ μ΄ν΄νκ² λμμ΅λλ€."
    ) +
    `	
		<div class='small-text-box'>
		<br/>
			<a href="https://42place.innovationacademy.kr/" class="text-r3 light-gray">
			42 λΈλ‘κ·Έ λ³΄λ¬ κ°κΈ°
			</a>
			<div class="text-r3 short gray">42 μμΈμμ μ΄μνλ λΈλ‘κ·Έμλ νλ‘μ νΈ νκΈ°λ λ©ν  νΉμ λ€λ₯Έ μΉ΄λλΆλ€μ κΏνμ΄ λ§μ΄ μ¬λΌμμ.</br>
			<a href="https://42place.innovationacademy.kr/archives/9344" class="text-r3 underline">
				μ κ° μ΄ κΈ
			</a>λ μμΌλ λ§μ΄ λ΄μ£ΌμΈμ.
			</div>
		</div>
		<div class='small-text-box'>
			<a href="https://www.youtube.com/watch?v=zqpfKTDoWAg" class="text-r3 light-gray">
				42μ μ μμ λ³΄λ¬ κ°κΈ°
			</a>
			<div class="text-r3 short gray">42 μμΈμμ λμ€ μν μ μμ μ€λ§μ£Όν΄ λ§λ  μμλ μλ΅λλ€.</br>
			μ λ 1μ΄ μ λ λ±μ₯ν΄μ!</div>
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
