//  get input value 
$(document).ready(function () {
    $("#myForm").submit(function (event) {
        event.preventDefault();

        const name = $("#name").val();
        const email = $("#email").val();
        const password = $("#password").val();

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

    });
});

// $(document).ready(function (event) {
//     var data = "Hii i am NIkesh"
//    const main =  $("#myInput").val(data)
//    console.log(main);
// })

// var htmlContent = $('.main-container').html();
// // Set HTML content
// $('.main-container').html('<p>New HTML content</p>');

// $(document).ready(function() {
//     $("#loadButton").click(function() {
//     alert('hii')
// $("#contentArea").load("https://jsonplaceholder.typicode.com/users");
//     });
//     });


//  Api Handle code was here


// $(document).ready(function () {
//     $.ajax({
//         url: "https://fakestoreapi.com/products",
//         type: "GET",
//         success: function (data) {
//             $(".main-container").empty();
//             $.each(data, function (index, item) {
//                 $(".main-container").append(`<div id="contentArea">
//                                                     <div class="image-holder">
//                                                         <img class="comman-image" src="${item.image}" />
//                                                     </div>
//                                                       <p> ${item.category} </p>
//                                                       <p> ${item.title}  </p>
//                                                  </div>`);

//             });
//         },
//         error: function (error) {
//             console.log("Error:", error);
//         }
//     });
// });

