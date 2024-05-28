document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var email = urlParams.get('email');
    
    if (email) {
        var formData = JSON.parse(localStorage.getItem(email));

        if (formData) {
            document.getElementById('profile-name').textContent = formData.firstName + ' ' + formData.lastName;
            document.getElementById('profile-email').textContent = formData.email;
            document.getElementById('profile-sex').textContent = formData.sex;
            document.getElementById('profile-reason').textContent = formData.supportReason;
        }

        var profilePicture = localStorage.getItem(email + '_profilePicture');
        var headerPicture = localStorage.getItem(email + '_headerPicture');

        if (profilePicture) {
            document.getElementById('profile-image').querySelector('img').src = profilePicture;
        }

        if (headerPicture) {
            document.getElementById('header-image').style.backgroundImage = `url(${headerPicture})`;
        }
    } else {
        alert('No email specified for profile.');
    }
});

function savePictures() {
    const email = new URLSearchParams(window.location.search).get('email');
    const profilePictureInput = document.getElementById('upload-profile-picture').files[0];
    const headerPictureInput = document.getElementById('upload-header-picture').files[0];

    if (email) {
        if (profilePictureInput) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem(email + '_profilePicture', e.target.result);
                document.getElementById('profile-image').querySelector('img').src = e.target.result;
            };
            reader.readAsDataURL(profilePictureInput);
        }

        if (headerPictureInput) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem(email + '_headerPicture', e.target.result);
                document.getElementById('header-image').style.backgroundImage = `url(${e.target.result})`;
            };
            reader.readAsDataURL(headerPictureInput);
        }
    } else {
        alert('No email specified for profile pictures.');
    }
}
