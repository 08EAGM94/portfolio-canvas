document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() =>{
        document.querySelector("#loadIframeMap").innerHTML = `
        <iframe  class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14930.714953880417!2d-103.43195946282601!3d20.682645196345828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428aebe9cf93c6b%3A0x15ad51a6f27ad99e!2sPlaza%20Galer%C3%ADas%20Guadalajara!5e0!3m2!1ses-419!2smx!4v1722206394822!5m2!1ses-419!2smx" ></iframe>
        `;
    }, 5000);
    
});