$(function(){

    // Send a POST request to add a burger 
    $("#submit").on("click", function() {

        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: 0
        };

        if (newBurger.name == "") {return false}
        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        )
    });

    // Send a PUT request to update burger status
    $(".devour").on("click", function(){

        var id = $(this).data("id");
        var devouredBurger = {
            id: id,
            devoured: 1
        };

        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(
            function(){
                console.log("updated burger " + devouredBurger);
                location.reload();
            }
        )
    })

});