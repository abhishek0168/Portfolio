function sendMail(){
    var params = {
        name: document.getElementById("formName").value,
        email: document.getElementById("formEmail").value,
        message: document.getElementById("formMessage").value,
    };

    const serviceID = "service_lzk343i";
    const templateID = "template_lwgapvq";
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("formName").value = " ";
            document.getElementById("formEmail").value = " ";
            document.getElementById("formMessage").value = " ";
            console.log(res);
            alert("Your message sent successfully");
         })
    
         .catch((err) => console.log(err));

}

