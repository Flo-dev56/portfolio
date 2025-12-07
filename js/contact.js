function sendContact() {
    // Réinitialiser les messages d'erreur
    $("#nom-info").html("");
    $("#prenom-info").html("");
    $("#mail-info").html("");
    $("#sujet-info").html("");
    $("#mail-status").html("");
    // variable pour vérifier si toutes les champs sont remplis 
    let Valide = true;
    
    if ($("#user_nom").val().trim() === "") {
        $("#nom-info").html("Requis").addClass("info");
        $("#user_nom").addClass("error");
        Valide = false;
    }
    
    if ($("#user_prenom").val().trim() === "") {
        $("#prenom-info").html("Requis").addClass("info");
        $("#user_prenom").addClass("error");
        Valide = false;
    }
    
    // Validation de l'email avec expression régulière
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if ($("#user_mail").val().trim() === "") {
        $("#mail-info").html("Requis").addClass("info");
        $("#user_mail").addClass("error");
        Valide = false;
    } else if (!emailRegex.test($("#user_mail").val().trim())) {
        $("#mail-info").html("Email invalide").addClass("info");
        $("#user_mail").addClass("error");
        Valide = false;
    }
    

    if ($("#inputsujet").val() === "" || $("#inputsujet").val() === null) {
        $("#sujet-info").html("Requis").addClass("info");
        $("#inputsujet").addClass("error");
        Valide = false;
    }
    
    if ($("#floatingTextarea2").val().trim() === "") {
        $("#mail-status").html("<span class='info'>Le message est requis</span>");
        Valide = false;
        $("#floatingTextarea2").addClass("error");
    }
    
    // Si tous les champs sont valides => alert
    if (Valide) {

        alert("Contenu du formulaire :\nNom : " + $("#user_nom").val() + "\nPrenom : " + $("#user_prenom").val() + "\nEmail : " + $("#user_mail").val() + "\nSujet : " + $("#inputsujet").val() + "\nMessage : " + $("#floatingTextarea2").val())
        
        // Vider tous les champs
        $("#user_nom").val("");
        $("#user_prenom").val("");
        $("#user_mail").val("");
        $("#inputsujet").val("");
        $("#floatingTextarea2").val("");
    }
}