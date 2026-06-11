(function () {
  'use strict';

  // kintone record create/show event example
  kintone.events.on('app.record.create.show', function (event) {
    var record = event.record;

    // Example: set a default value for a text field with code "Text"
    if (record.Text) {
      record.Text.value = 'Hello from kintone customization!';
    }

    return event;
  });

  // kintone record detail/show event example
  kintone.events.on('app.record.detail.show', function (event) {
    // メニューの上のスペース（ボタンとかを置く公式の場所）を取得
    const space = kintone.app.record.getHeaderMenuSpace();
    
    // もしスペースがちゃんと取れたら、ボタンを作る
    if (space) {
      const myButton = document.createElement('button');
      myButton.innerText = 'AIが作ったボタン';
      myButton.style.padding = '10px 20px';
      myButton.style.backgroundColor = '#4caf50';
      myButton.style.color = 'white';
      myButton.style.border = 'none';
      myButton.style.cursor = 'pointer';

      // ボタンを押したときの動き
      myButton.onclick = function() {
        alert('ChromebookのCodespacesからkintoneのハックに成功しました！');
      };

      // 画面にボタンを合体させる
      space.appendChild(myButton);
    }

    return event;
  });
})();
