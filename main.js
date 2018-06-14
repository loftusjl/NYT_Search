$(document).ready(function () {
  let search = $('#search');
  let clear = $('#clear');
  let searchTerm = $('#searchTerm');
  let numberOfRecords = $('#numberOfRecords');
  let startYearEL = $('#startYear');
  let endYearEL = $('#endYear');
  $('form').on('submit', function (event) {
    event.preventDefault();
    let startYear = startYearEL.val() + '0101';
    let endYear = endYearEL.val() + '0101';
    console.log(searchTerm.val());
    console.log(numberOfRecords.val());
    console.log(startYear);
    console.log(endYear);
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "88ca91cf95d14ca098d837fac2cf6cbc",
      'q': "fire",
      'begin_date': startYear,
      'end_date': endYear
    });
    console.log(url)
    $.ajax ({
      url: url,
      method: "GET"
    }).then(function (data) {
      console.log(data);
      var results = data.response
      for (var i = 0; i < results.length; i++) {
        var newDiv = $('<div>')
        var header = $('<h1>')
  
        var author = $('<p>').text('Author: ' + results[i].byline.original)
        newDiv.append(header)
        newDiv.append(author)
        $('#articlesContainer').append(newDiv)
      }
      console.log(newDiv)
    })
  })
});