t=$('#main-header');
  var d = new Date();
  var year=d.getFullYear();
  var month=d.getMonth();
  var day=d.getDate();
  t.html("Что день " + day + "." + month + "." + year +"." + " готовит");

advice_url="http://sf-pyw.mosyag.in/m04/api/forecasts"

function set_content_in_divs(data){
  $.each(data, function(i, d) {
  p = $("#p-" + i);
  p.html("<p>" + d + "</p>");
  });
}

function getJson(){
  $.getJSON(advice_url,function(data){
  prophecies=data['prophecies'];
  set_content_in_divs(prophecies);
  });
}

$(".row>div").hover(function(){$(this).css('background-color', 'LightGreen');},function(){$(this).css('background-color', 'inherit');});

$('#main-header').click(function(){
  getJson();
});


// prophecies=['После Обеда предостерегайтесь гостей из забытого прошлого. Вечером будьте открыты для встреч со старыми знакомыми.', 'Утром ожидайте приятных перемен. Перед Сном будьте открыты для неожиданного праздника.', 'Перед Сном будьте открыты для гостей из забытого прошлого. Днём предостерегайтесь встреч со старыми знакомыми.', 'Вечером ожидайте неожиданного праздника. Вечером ожидайте приятных перемен.', 'Перед Сном будьте открыты для неожиданного праздника. Днём будьте открыты для гостей из забытого прошлого.', 'Вечером предостерегайтесь приятных перемен. Перед Сном будьте открыты для встреч со старыми знакомыми.'];

// function set_content_in_divs(data){
// $.each(data, function(i, d) {
// p = $("#p-" + i)
// p.html("<p>" + d + "</p>")
// });
// }

// set_content_in_divs(prophecies);

// $(".row>div").hover(function(){$(this).css('background-color', 'LightGreen');},function(){$(this).css('background-color', 'inherit');});

// $('#main-header').click(function(){
//   set_content_in_divs(prophecies);
// });



