function loadQuill($selector, $options) {
  var toolbarFullOptions = [
    [
      // {'font': []},
      {'header': [1, 2, 3, 4, 5, 6, false]},
      //  {'size': ['small', false, 'large', 'huge']}
    ],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    //  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    // [{'script': 'sub'}, {'script': 'super'}],
    [{'header': 1}, {'header': 2}, 'blockquote', 'code-block'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    [{'direction': 'rtl'}, {'align': []}],        // text direction
    ['link', 'image', 'video'],
    ['clean'],
    [{'placeholder': $options}]// remove formatting button
  ];

  var options = {
    debug: 'info',
    modules: {
      toolbar: {
        container: toolbarFullOptions,
        handlers: {
          'placeholder': function (value) {
            console.log(value);
            if (value) {

              var cursorPosition = this.quill.getSelection().index;
              console.log(cursorPosition);
              this.quill.insertText(cursorPosition, value);
              this.quill.setSelection(cursorPosition + value.length);
            }
          }
        }
      }
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
  };
  new Quill($selector, options);

  var placeholderPickerItems = Array.prototype.slice.call(document.querySelectorAll('.ql-placeholder .ql-picker-item'));
  //placeholderPickerItems.forEach(item => item.textContent = item.dataset.value)

  placeholderPickerItems.forEach(function (item) {
    item.textContent = item.dataset.value
  });

  document.querySelector('.ql-placeholder .ql-picker-label').innerHTML
    = 'Champs de fusion' + document.querySelector('.ql-placeholder .ql-picker-label').innerHTML;
}