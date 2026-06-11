const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

if (imageInput && preview) {
    imageInput.addEventListener("change", function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.style.display = "block";
            };

            reader.readAsDataURL(file);
        }
    });
}

function openWallet() {
    alert("Wallet Balance: 0.00 ETB");
}
<script>
function toggleMenu() {
    var menu = document.getElementById("sideMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
</script>