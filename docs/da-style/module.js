function main() {
  window.parent.postMessage(`location:${location.href}`, "*")
  window.addEventListener('keydown', event => {
    window.parent.postMessage(`keydown:${event.keyCode}`, "*")
  })

  window.addEventListener('click', event => {
    window.parent.postMessage(`click:${location.href}`, "*")
  })
}

