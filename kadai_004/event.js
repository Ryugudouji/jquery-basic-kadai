$(function () {
  $(window).on('load scroll', (e) => {
    // 読み込まれた場合
    if(e.type === 'load'){
      console.log('loadイベントが発生しました');
    }
    // スクロールされた場合
    if(e.type === 'scroll'){
      console.log('scrollイベントが発生しました');
    }
  });
});