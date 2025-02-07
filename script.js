document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll(".input-box input");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const formData = {};
        inputs.forEach((input) => {
            formData[input.placeholder] = input.value;
        });

        console.log("Введенные данные:", formData);
    });
});
