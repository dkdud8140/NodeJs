document.addEventListener("DOMContentLoaded",()=>{

	const main_section = document.querySelector("section.main");

	if(main_section) {

		main_section.addEventListener("click",(e)=>{
			const target = e.target;

			if(target.tagName === "DIV" && target.className.includes("table")) {
				const table_id = target.dataset.table_id;
				document.location.href= `/pos/order/${table_id}`;
			}
		})
	}
})