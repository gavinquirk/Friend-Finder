        // On Submit Button Click
        $('#submitButton').on('click', function () {
            event.preventDefault()

            // Validate Form Function
            function validateForm() {
                var isValid = true
                $(".form-control").each(function () {
                    if ($(this).val() === "") {
                        isValid = false
                    }
                });
                return isValid
            }

            // If form is valid...
            if (validateForm()) {

                // Create userData object
                var userData = {
                    name: $("#name").val(),
                    photo: $("#photo").val(),
                    scores: [
                        $("#q1").val(),
                        $("#q2").val(),
                        $("#q3").val(),
                        $("#q4").val(),
                        $("#q5").val(),
                        $("#q6").val(),
                        $("#q7").val()
                    ]
                }

                // Post data to friends API
                $.post("/api/friends", userData, function (data) {
                    console.log(data)

                    // Grab the response, send to modal
                    $("#matchName").text(data.name);
                    $("#matchImage").attr("src", data.photo);

                    // Show the match modal
                    $("#matchModal").modal()
                });
            } else {
                alert('Please enter a name and picture at the top of the survey!')
            }
        })