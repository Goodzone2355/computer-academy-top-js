const x = [{
	'id': '1',
	'title': 'CASIO MQ-24-7BUL',
	'src': 'img/s-1.png',
	'price': '235'
}, {
	'id': '2',
	'title': 'SAUVAGE SA-SV88682RG',
	'src': 'img/s-2.png',
	'price': '356'
}, {
	'id': '3',
	'title': 'CITIZEN JP1010-00E',
	'src': 'img/s-3.png',
	'price': '574'
}, {
	'id': '4',
	'title': 'ROYAL LONDON 41040-01',
	'src': 'img/s-4.png',
	'price': '456'
},];
function createObject() {
	let obj = {
		id: text.value,
		title: desc.value,
		src: date.value,
		price: dasdsa
	}
	return obj
}


const products = JSON.parse(JSON.stringify(x));
console.log(products);
products.forEach(element => {
	console.log(element);

	const card = document.createElement('div');
	card.classList.add('card');
	card.id = element.id

	const img = document.createElement('img');
	img.classList.add('card__img');
	img.src = element.src;

	const title = document.createElement('h2');
	title.classList.add('card__title');
	title.textContent = element.title;

	const blockEc = document.createElement('div');
	blockEc.classList.add('card__ec', 'block-ec');

	const price = document.createElement('p');
	price.classList.add('card__price', 'price');
	price.textContent = '$ ' + element.price

	const cart = document.createElement('div');
	cart.classList.add('card__cart', 'cart');

	const category = document.querySelector('#category');

	blockEc.append(price, cart);
	card.append(img, title, blockEc);
	category.append(card);
});

const carts = document.querySelectorAll('.cart');
let order = [];
for (elemCart of carts) {
	elemCart.addEventListener('click', function (event) {
		let parent = event.target.closest('.card');
		order.push({
			title: parent.querySelector('h2').textContent,
			price: parent.querySelector('.price').textContent
		})
		console.log(order);
		setLocal(order)
		displayOrder()
	})
}
displayOrder()
function displayOrder() {
	// получить данные
	order = getLocal() || [];
	const selectProduct = document.querySelector('#selectProduct');
	selectProduct.innerHTML = '';

	order.forEach(element => {
		console.log(element)
		const li = document.createElement('li');
		li.innerHTML = `<span>${element.title}</span> <span>${element.price}</span>`;
		selectProduct.append(li)
	});
}

function setLocal(order) {
	localStorage.setItem('watch', JSON.stringify(order))
}

function getLocal() {
	return JSON.parse(localStorage.getItem('watch'));
}

function clearOrder() {
	localStorage.removeItem('watch');
	selectProduct.innerHTML = '';
	order = []
}

subm.addEventListener('click', function () {
	clearOrder()
})