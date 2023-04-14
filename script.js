const dragArea = document.querySelector('.drag-area');
const title = dragArea.querySelector('h3');
const button = dragArea.querySelector('button');
const input = dragArea.querySelector('input');
let file;

button.onclick = () => {
	input.click();  
}

input.addEventListener('change', function() {
	file = this.files[0];
	dragArea.classList.add('active');
	showImg();
})

dragArea.addEventListener('dragover', (e) => {
	e.preventDefault();
	dragArea.classList.add('active');
	title.textContent = 'Release to upload File';
})

dragArea.addEventListener('dragleave', (e) => {
	e.preventDefault();
	dragArea.classList.remove('active');
	title.textContent = 'Drag & Drop';
})

dragArea.addEventListener('drop', (e) => {
	e.preventDefault();
	file = e.dataTransfer.files[0];
	showImg();
})

const showImg = () => {
	const fileType = file.type;
	const validation = ['image/jpeg', 'image/jpg', 'image/png','image/gif','image/bmp'];
	if(validation.includes(fileType)){
		const fileReader = new FileReader();
		fileReader.onload = () => {
			const imgUrl = fileReader.result;
			const img = `<img src="${imgUrl}" ali="Image">`
			dragArea.innerHTML = img;
		}
		fileReader.readAsDataURL(file)
	}else{
		alert('This file is not valid');
		dragArea.classList.remove('active');
	}
}
