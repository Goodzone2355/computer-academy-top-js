function createObject() {
	let obj = {
		userName: text.value,
		desc: desc.value,
		date: date.value
	}
	return obj
}

function createArray(array, ob) {
	array.push(ob)
	return array
}

const text = document.querySelector('#text');
const desc = document.querySelector('#desc');
const date = document.querySelector('#date');
const submit = document.querySelector('#submit');
const content = document.querySelector('#content');
let arr = []
submit.addEventListener('click', createTask);
function createTask() {
	// создание секции
	const section = document.createElement('section');
	section.classList.add('block');

	// создание имя
	const pName = document.createElement('p');
	pName.textContent = 'Имя: ' + text.value;

	// создание заметки
	const pDesc = document.createElement('p');
	pDesc.textContent = 'Заметка: ' + desc.value;

	// дата
	const pDate = document.createElement('p');
	pDate.textContent = 'Дата: ' + date.value;

	// очистка
	const button = document.createElement('span');
	button.classList.add('remove-button');
	section.append(pName, pDesc, pDate, button);
	content.prepend(section);

	button.addEventListener('click', function () {
		const parent = button.parentElement;
		parent.remove();
	});
	let object = createObject()
	createArray(arr, object)
	console.log(arr)
}


