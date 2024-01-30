$(document).ready(function(){
    var Quote = "";
    var author = "";
    $("#new-quote").click(function(){
        const settings = {
            async: true,
            crossDomain: true,
            url: 'https://quotes-api9.p.rapidapi.com/api/quotes/',
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f6ebb72971msh8fd4fbe9e39ef66p1229adjsn031cdc402b19',
                'X-RapidAPI-Host': 'quotes-api9.p.rapidapi.com'
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            Quote = response[0].quotes;
            author = response[0].author;
            console.log(Quote); // This will now log the actual quote
            document.getElementById("text").innerHTML = Quote;
            document.getElementById("author").innerHTML = author;
          });
             
    })
});