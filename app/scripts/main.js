
$(function () {
  $('#octocat').on('click', function () {
    //octodex api does not seem to support cors....
    // $.getJSON('http://octodexapi.herokuapp.com/?random', function (response) {
    //   $('#octocat').attr('src', 'https://octodex.github.com' + response.image);
    // });
    $(this).attr('src', $(this).attr('src'))
  });

  // $.ajax({
  //   url: 'https://octodex.github.com/',
  //   success: onAjaxSuccess,
  //   dataType: 'html'
  // });

  // function onAjaxSuccess (response) {
  //   debugger;
  // }
});


// var request = require('request'),
//     cheerio = require('cheerio'),
//     cache = require("memory-cache"),
//     url = 'http://octodex.github.com'
//     cacheKey = 'cache-key',
//     cacheTimeout = 1000 * 60 * 60; // 1 hour

// var parsePage = function(cb) {
//   request(url, function (error, response, html) {
//     if (!error && response.statusCode == 200) {
//       var $ = cheerio.load(html);
//       var imgs = $('a.preview-image > img');
//       cb(null, imgs);
//     } else {
//       cb(error);
//     }
//   });
// };

// var loadImages = function(cb, useCache) {
//   var imgs = useCache ? cache.get(cacheKey) : null;

//   if (imgs) {
//     cb(null, imgs);
//   } else {
//     parsePage(function(error, imgs) {
//       if (!error && useCache) 
//         cache.put(cacheKey, imgs, cacheTimeout);

//       cb(error, imgs);
//     });
//   }
// };

// var img = function img(cb, useCache){ 
//   loadImages(function(error, imgs) {
//     if (!error) 
//       cb(null, url + imgs[Math.floor(Math.random() * (imgs.length))].data.src);
//     else
//       cb(error);
//   }, useCache);
// };

// module.exports = {img: img};