const add_order_list = ( order_list ) =>{
	const order_box = document.querySelector("article.order_list");

	let order_div_list = document.querySelectorAll("div.order_list")
	if(order_div_list) {
		order_div_list.forEach((order_tag)=>{
			order_box.removeChild(order_tag);
		})
	}

	const total_pay = {count:0, total:0};

	const orders = order_list.map( ( order,index ) => {

		order_div_list = document.createElement("div");
		order_div_list.classList.add('order_list')

		const menu_id = document.createElement("div");
		menu_id.classList.add("menu_id");
		menu_id.innerText = order.to_pcode;

		const menu_name = document.createElement("div");
		menu_name.classList.add("menu_name");
		menu_name.innerText = order.tbl_product.p_name;

		const menu_qty = document.createElement("div");
		menu_qty.classList.add("menu_qty");
		menu_qty.innerText = order.to_qty;

		const menu_price = document.createElement("div");
		menu_price.classList.add("menu_price");
		menu_price.innerText = order.to_price;

		const to_total = order.to_qty * order.to_price ;
		const menu_total = document.createElement("div");
		menu_total.classList.add("menu_totale");
		menu_total.innerText = to_total;

		total_pay.count ++;
		total_pay.total += to_total;

		const menu_delete = document.createElement("div");
		menu_delete.classList.add("menu_delete");
		menu_delete.innerText = "X";
		menu_delete.dataset.order_seq = order.to_seq;

		order_div_list.appendChild(menu_id);
		order_div_list.appendChild(menu_name);
		order_div_list.appendChild(menu_price);
		order_div_list.appendChild(menu_qty);
		order_div_list.appendChild(menu_total);
		order_div_list.appendChild(menu_delete);

		return order_div_list;
		// order_box.appendChild(order_list);
	});

	order_box.append(...orders);

	const total_html = `<div class="order_list">
							<div>합계</div> <div>${total_pay.count}</div>
							<div>${total_pay.total}</div>
						</div>`;

	order_box.innerHTML += total_html;

	const pay_btn_html = `	<div class="order_list pay_box">
								<button class="btn_cash">현금결제</button>
								<button class="btn_card">카드결제</button>
							</div>`;

	order_box.innerHTML += pay_btn_html ; 
};


const order_input = (table_id, menu_id) => {
	fetch(`/pos/order/${table_id}/input/${menu_id}`)
	.then((res)=> res.json())
	.then((result)=> {
		getOrders(table_id);
	});
};


const getOrders = (table_id) =>{
	fetch(`/pos/getorder/${table_id}`)
	.then((res)=> res.json())
	.then((result)=> add_order_list(result));
}

 
document.addEventListener("DOMContentLoaded",()=>{
	const product_article = document.querySelector("article.product_list");
	
	const order_article = document.querySelector("article.order_list");
	const table_id = order_article.dataset.table_id;

	const pay_box = document.querySelector("div.pay_box");

	if(product_article) {
		product_article.addEventListener("click",(e)=>{
			const target = e.target;

			if(target.tagName === "DIV" && target.className.includes("menu")) {
				const menu_id = target.dataset.menu_id;
				order_input(table_id,menu_id);
				getOrders(table_id);
			}
		})
	}

	if(order_article) {
		order_article.addEventListener("click",(e)=>{
			const target = e.target;
			if(target.tagName === "DIV" && target.className.includes("menu_delete")) {
				const order_seq = target.dataset.order_seq;
				
				if(confirm("주문메뉴를 삭제할까요")){
					fetch(`/pos/order/${order_seq}/delete`)
					.then(res=>res.text())
					.then((result)=>{
						if(result === "OK") {
							getOrders(table_id);
						}
					})
				}

			}
		});

	}

	getOrders(table_id);

	document.addEventListener("click",(e)=>{
		const button = e.target;
		if(button.tagName === "BUTTON") {
			if(button.className.includes("btn_cash")) {
				const modal = document.querySelector("div.modal");
				modal.style.display ="flex";
			} else {
				alert("카드결제")
			}
		}
	})


})