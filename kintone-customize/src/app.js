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
    console.log('Record detail screen loaded for record ID:', event.recordId);
    return event;
  });
})();
