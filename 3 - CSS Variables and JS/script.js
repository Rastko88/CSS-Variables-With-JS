const inputs = document.querySelectorAll('input');

function handleUpdate() {
	
	// .dataset bira sve elemente u DOM-u koji imaju atribut 'data-...' 
	//dataset.sizing bira elemente koji imaju atribut 'data-sizing'
	const suffix = this.dataset.sizing || '';
	
	// uz pomoc reda ispod, mi zapravo update-ujemo vrednosti promenljivih u css-u na osnovu inputa u HTML
	// this.name jer svaki input ima atribut 'name' koji smo takodje koristili u css, samo ispred ide --
	// this.value ustvari update-uje vrednost na osnovu slidera, i imamo + suffix da bi se znalo da su jedinice px 
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));