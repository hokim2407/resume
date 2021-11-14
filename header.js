const addHeader = (i, offset = "") => {
  document.getElementsByTagName("body")[0].insertAdjacentHTML(
    "afterbegin",
    `  
	  <div id="head">
		<div id="title">hokim</div>
		<div id="title-link">
			<a class="link-item 
				${i == 1 ? "selected" : ""}" 
				href="${offset}./index.html">
					소개
			</a>
			<a class="link-item
				${i == 2 ? "selected" : ""}" 
				href="${offset}./portfolio.html">
					포트폴리오
			</a>
			<a class="link-item 
				${i == 3 ? "selected" : ""}"
				href="${offset}./career.html">
					경험
			 </a>
		</div>
		</div>
		`
  );
};
