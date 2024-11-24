function uploadImage() {
    var fileInput = document.getElementById("file-upload");
    var file = fileInput.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imagePreview = document.getElementById("image-preview");
            imagePreview.innerHTML = '<img src="' + e.target.result + '" alt="صورة محملة" style="max-width: 100%; height: auto; border-radius: 8px;">';
        };
        reader.readAsDataURL(file);
    } else {
        alert("من فضلك اختر صورة أولاً.");
    }
}
