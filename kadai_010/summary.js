$(function() {

  // 文字色変化ボタンをクリック
  $('#change-color').on('click', function() {
    // 文字色を赤に
    $('#target').css('color', 'red');
  });
// 文字内容変化ボタンをクリック
$('#change-text').on('click', function() {
  // 文字内容を「Hello!」
  $('#target').text('Hello!');
});
// フェードアウトボタンをクリック
$('#fade-out').on('click', function() {
  // フェードアウトする
  $('#target').fadeOut();
});
// フェードインボタンをクリック
$('#fade-in').on('click', function() {
  // フェードインする
  $('#target').fadeIn();
});

});