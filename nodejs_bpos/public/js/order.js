const add_oreder_list = ( menu_list ) =>{
	const order_box = document.querySelector("article.order_list");

	let order_list = document.querySelectorAll("div.order_list")
	if(order_list) {
		order_list.forEach((order_tag)=>{
			order_box.removeChild(order_tag);
		})
	}

	const orders = menu_list.map( ( menu,index ) => {

		order_list = document.createElement("div");
		order_list.classList.add('order_list')

		const menu_id = document.createElement("div");
		menu_id.classList.add("menu_id");
		menu_id.innerText = menu.p_code;

		const menu_name = document.createElement("div");
		menu_name.classList.add("menu_name");
		menu_name.innerText = menu.p_name;

		const menu_qty = document.createElement("div");
		menu_qty.classList.add("menu_qty");
		menu_qty.innerText = 1;

		const menu_price = document.createElement("div");
		menu_price.classList.add("menu_price");
		menu_price.innerText = menu.p_price;

		order_list.appendChild(menu_id);
		order_list.appendChild(menu_name);
		order_list.appendChild(menu_price);
		order_list.appendChild(menu_qty);

		return order_list;
		// order_box.appendChild(order_list);
	});
	order_box.append(...orders);
};

const order_input = (table_id, menu_id) => {
	
	fetch(`/pos/order/${table_id}/input/${menu_id}`)
	.then((res)=> res.json())
	.then((result)=> {
		console.log(result)
		add_oreder_list(result.menu_list)
	});


};

 
document.addEventListener("DOMContentLoaded",()=>{
	const product_article = document.querySelector("article.product_list");
	
	const order_article = document.querySelector("article.order_list");
	const table_id = order_article.dataset.table_id;


	if(product_article) {
		product_article.addEventListener("click",(e)=>{
			const target = e.target;

			if(target.tagName === "DIV" && target.className.includes("menu")) {
				const menu_id = target.dataset.menu_id;
				order_input(table_id,menu_id);
			}
		})
	}

})