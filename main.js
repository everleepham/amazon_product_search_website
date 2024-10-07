import "./css/bootstrap.min.css";
import "./js/bootstrap.bundle.min";

const loadAllDishes = async () => {
const url = `https://chinese-food-db.p.rapidapi.com/all-dishes`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
		'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	} catch (error) {
	console.error(error);
	}
};

document.getElementById('searchButton').addEventListener('click', () => {
	const query = document.getElementById('searchInput').value;
	fetchData(query);
	});

	let dishList = []; 

window.onload = async () => {
		dishList = await loadAllDishes();
		console.log(dishList);  
	};

const searchByName = (query) => {
	return dishList.filter(dish => dish.name.toLowerCase().includes(query.toLowerCase()));
	};
	
document.getElementById('searchButton').addEventListener('click', () => {
	const query = document.getElementById('searchInput').value.trim();
	const results = searchByName(query);  
	console.log(results);  
	displayResults(results);
	});

