const theForm = document.querySelector('main form');
// theForm.noValidate = true;
theForm.addEventListener('submit', validateForm);
let theFields;

function validateForm(e) {
	theFields = e.target;
	const form = e.target;
	if(form.elements.password.value !== form.elements.passwordConfirm.value) {
		e.preventDefault();
		form.elements.passwordConfirm.parentElement.querySelector('.error').hidden = false;
	}
}