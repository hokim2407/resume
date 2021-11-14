const content_container = document.getElementById("content");

const addPageToContainer = (title, term, summary, content, i) => {
  content_container.insertAdjacentHTML(
    "beforeend",
    `  
		<div class="element port-back-${i} back" onclick="pageOpen(${i})">
		  <div class="element-box">
			<div class="text-b1" >
				${title}
				<p class="text-r2">
			  	${term}
			  	</p>
				<div class="line"></div>
			</div>
			<div class="text-b2-5" style='margin-top:1rem;'>
				${summary}</br>
			</div>
			<div class="text-r2 gray"></br>
				${content}
			</div>
		  </div>
		</div>
	  `
  );
};

const pageOpen = (i) => {
  location.href = `./projects/project${i}.html`;
};
