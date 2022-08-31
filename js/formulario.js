const inputs = document.getElementsByClassName ("completar");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function() {
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add("fijo");
        } else {
            this.nextElementSibling.classList.remove("fijo");
        }
    });
}

const enviar = document.getElementById ("send");
enviar.addEventListener('click', () => {
    swal.fire ({
        title: '¡Enviado Exitosamente!',
        text: 'A la brevedad, nos estaremos contactando con usted',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
})

