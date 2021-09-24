const form_data_send = async () =>{
	const form = document.querySelector("form");
	const form_data = new FormData(form);
	const entries_data = Object.fromEntries(form_data.entries());
 
	const fetch_option = {
		method:"POST",
		body:JSON.stringify(entries_data),
		headers :{
			"Content-Type" : "application/json",
		}
	}

	await fetch("/bbs/write",fetch_option)
	const result = await res.json();
	console.log(result);
	await bbs_list_view(result);
}

document.addEventListener("DOMContentLoaded", async ()=>{
	const btn_send = document.querySelector("button.btn_save_form");

	if(btn_send) {
		btn_send.addEventListener("click",()=>{
			alert("FORM 저장완료")
			data_send();
		})
	}
})