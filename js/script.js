// WEB303 Assignment 2
// Your Name Here


$(document).ready(function(){
    $('.loadData').click(function(){
    	let file  = $(this).attr('data-fileName')
       $.ajax({
            url: file,
            type: "GET",
            crossDomain: true,
            success: function (response) {
                var resp = response
                $("#solution").hide().html(resp).fadeIn(1000)
            },
            error: function (xhr, status) {
                $("#solution").html('Not Found')
            }
        });
    })
    
});
