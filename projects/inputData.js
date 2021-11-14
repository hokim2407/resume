const inputData = (title, content) => {
  return `
		<div class='small-text-box'>  
		  <div class="text-b2-5">📌 ${title}</div>
		  <p class="text-r2 gray" style='margin-top: .5rem; line-height:1.8rem;'>
			  ${content}
		  </p>
	  </div>
  `;
};

const container = document.getElementsByClassName("small-text-box")[0];
