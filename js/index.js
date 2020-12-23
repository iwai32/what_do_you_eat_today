$(function () {

  var $footer = $('#globalFooter');

  /**footerを下に固定する */
  if (window.innerHeight > $footer.offset().top + $footer.outerHeight()) {
    $footer.attr({
      'style': 'position:fixed; top:' + (window.innerHeight - $footer.outerHeight()) + 'px;'
    });
  }

  $('#firstSelect .eat-select__list').on('click', function () {
    selectNextGenre($('#firstSelect'), $('#secondSelect'));
  })

  $('#secondSelect .eat-select__list').on('click', function () {
    selectNextGenre($('#secondSelect'), $('#mealSearchResult'));
  })

  $('#toEditProfileBtn').on('click', function() {
    window.location.href = './edit_my_page.php';
  })
})