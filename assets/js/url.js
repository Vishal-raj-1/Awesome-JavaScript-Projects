const userForm = document.getElementById('form-user');
let input = document.getElementById('input-longurl');

userForm.onsubmit = (e) => {
	document.querySelector('button span').classList.add('loader');
	document.querySelector('#result p').textContent = '';
	document.querySelector('#result a').removeAttribute('href');
	document.querySelector('#result a').textContent = '';
	document.querySelector('#error p').textContent = '';

	e.preventDefault();
	const apiUrl = 'https://is.gd/create.php';
	axios
		.get(apiUrl, {
			params: {
				format: 'json',
				url: input.value.toString(),
			},
		})
		.then((res) => {
			document.querySelector('button span').classList.remove('loader');
			const { shorturl, errormessage } = res.data;
			if (shorturl) {
				document.querySelector('#result p').textContent = 'Short URL :';
				document.querySelector('#result a').href = shorturl;
				document.querySelector('#result a').textContent = shorturl;
			} else {
				document.querySelector('#error p').textContent = `Error: ${errormessage}`;
			}
		})
		.catch((err) => {
			console.log(err.response);
		});
};
