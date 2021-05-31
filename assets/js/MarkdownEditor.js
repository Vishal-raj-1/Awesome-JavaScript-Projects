const Editor = toastui.Editor;

const editor = new Editor({
  el: document.querySelector("#editor"),
  initialEditType: "markdown",
  previewStyle: "vertical",
});
