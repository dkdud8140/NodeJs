document.addEventListener("DOMContentLoaded",()=>{
	const api_text_call = document.querySelector("p.api_text");
	const api_text_res = document.querySelector("span.api_text");

	const api_json_call = document.querySelector("p.api_json");
	const api_json_res = document.querySelector("span.api_json"); 

	if(api_text_call) {
		api_text_call.addEventListener("click",(e)=>{
			fetch("/api/text")
			.then((res)=>res.text())
			.then((result)=>{
				console.log(result);
				api_text_res.innerText = result;
			})
		})
	}

	if(api_json_call) {
		api_json_call.addEventListener("click", async (e)=>{
			const res = await fetch("/api/json")
			const result = await res.json();
			await console.log(result);

			let json_html = `<span>${result.j_name}, </span>`
			json_html += `<span>${result.j_addr}, </span>`
			json_html += `<span>${result.j_tel}, </span>`
			json_html += `<span>${result.j_age}</span>`

			api_json_res.innerHTML = json_html;
			//api_json_res.innerText = result.j_name;
		})
	}


})