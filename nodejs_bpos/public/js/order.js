const order_input = (table_id, menu_id) => {
	fetch(`/pos/order/${table_id}/input/${menu_id}`)
	.then((res)=> res.json())
	.then((result)=> console.log(result));
};

 
document.addEventListener("DOMContentLoaded",()=>{
	const product_article = document.querySelector("article.product_list");
	
	const order_article = document.querySelector("article.order_list");
	const table_id = order_article.dataset.table_id;


	if(product_article) {
		product_article.addEventListener("click",(e)=>{
			const target = e.target;
			if(target.tagName === "DIV" && 
				target.className.includes("menu")) {
				const menu_id = target.dataset.menu_id;
				order_input(table_id,menu_id);
			}
		})
	}

})