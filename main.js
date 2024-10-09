import "./css/bootstrap.min.css";
import "./js/bootstrap.bundle.min.js";

const fetchData = async (query) => {
	const url = `https://real-time-amazon-data.p.rapidapi.com/product-category-list?country=${query}`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
			'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		handleData(result);
	} catch (error) {
		console.error(error);
	}
};

fetchData();

document.getElementById("searchButton").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value;
  fetchData(query);
});

function handleData(data) {
	const container = document.querySelector(".dynamic_data");
	container.innerHTML = ""; 
	const categories = data.data;
	if (categories && categories.length > 0) {
	  categories.forEach(item => {
		container.innerHTML += `
		  <div class="col">
			<article class="card">
			  <div class="card-body">
				<p><strong>Category Name:</strong> ${item.name}</p>
				<p><strong>Category ID:</strong> ${item.id}</p>
			  </div>
			</article>
		  </div>`;
	  });
	} 
  }
  
