const validateEmail = () => {
    const email = document.getElementById('email');
    const emailText = email.value;
    const regEx = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    const isValid = regEx.test(emailText);
    email.value = '';
    if (isValid) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    }
    else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
}