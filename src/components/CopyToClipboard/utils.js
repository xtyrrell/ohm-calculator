function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let promise

  try {
    const successful = document.execCommand('copy');
    if (successful) promise = Promise.resolve()
    else promise = Promise.reject()
  } catch (err) {
    promise = Promise.reject()
  }

  document.body.removeChild(textArea);

  return promise
}

export const copyTextToClipboard = (text) => {
  if (!navigator.clipboard) {
    return fallbackCopyTextToClipboard(text);
  }

  return navigator.clipboard.writeText(text)
}