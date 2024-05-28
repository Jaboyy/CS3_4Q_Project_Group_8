document.getElementById('signup-form').addEventListener('submit', function(event) {
    storeFormData();
});

function storeFormData() {
    var email = document.getElementById('email').value;
    var formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        sex: document.querySelector('input[name="sex"]:checked').value,
        email: email,
        supportReason: document.getElementById('support-reason').value
    };
    
    localStorage.setItem(email, JSON.stringify(formData));
}

