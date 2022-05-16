
/** @type {HTMLElement} */
var linkToActiveModule = null
var activeMark = null
var occurencies = []
var currentOccurenceIndex = -1
var query = ""
var queryBox = null
var aside = null
var highlighter = null
var mouseOverElement = null
var origSideWidth = 0
var toolbarTargets = ['query', 'search', 'expand', 'collapse', 'select', 'hide']


function main() {
  queryBox = document.getElementById('query')
  aside = document.querySelector('aside')
  aside.style.zIndex = 1
  highlighter = aside.insertAdjacentElement('afterbegin', document.createElement('div'))
  highlighter.style.height = `${document.querySelectorAll('.toc summary')[0].offsetHeight}px`
  attachHandlers()
}

function attachHandlers() {
  window.addEventListener("message", (event) => {
    if (!event.data.startsWith('location:'))
      return;
    var fileName = event.data.split('#')[0].split('/').reverse()[0] 
    linkToActiveModule = document.querySelectorAll(`a[href='dataDict/${fileName}']`)[0] 
  }, false);

  document.querySelectorAll('.toc summary, .toc a').forEach(el => {
    el.addEventListener('mouseover', event => {
      if (activeMark != null)
        return

      mouseOverElement = el
      highlight(el, '#0a3d6d', 'lightskyblue', false)
    })
    el.addEventListener('mouseleave', event => {
      if (activeMark != null)
        return
      mouseOverElement = null  
      unhighlight(el)
    })
  })

  document.body.addEventListener("keydown", event => {
    var keyCode = event.keyCode

    if (keyCode == 27) { // ESC
      clearOccurencies()
      event.preventDefault()

    } else if (keyCode == 40) { // down
      highlightNextOccurence()
      event.preventDefault()


    } else if (keyCode == 38) { // up
      highlightPreviousOccurence()
      event.preventDefault()

    } else if (keyCode == 13) { // Enter
      var occ = activeOccurence()
      if (occ != null)
        occ.click()
      clearOccurencies()
      event.preventDefault()

    } else {
      if (!event.ctrlKey && !event.altKey && !event.metaKey && (keyCode == 8 || keyCode == 32 || (keyCode >= 48 && keyCode <= 90))) { // backspace || space || 0-9 ||  A-Z
        var newQuery = query
        if (keyCode == 8)
          newQuery = newQuery.slice(0, newQuery.length -1)
        else
          newQuery += String.fromCharCode(keyCode).toLowerCase() 
        clearOccurencies()
        mark(newQuery)
        event.preventDefault()
      }
    }
  })

  document.body.addEventListener('mousedown', event  => {
    clearOccurencies()
  })

  document.getElementById('toolbar').addEventListener('click', event => {
    var id = event.target.id
    if (id == 'search') 
      queryBox.style.display = 'block'
    else if (id == 'collapse')
      collapseAll()
    else if (id == 'expand')  
      expandAll()
    else if (id == 'select')    
      revealActiveModuleInTocTree()
    else if (id == 'hide')    
      hide()
    else if (id == 'show')    
      show()
  })  
}

function activeOccurence() {
  if (currentOccurenceIndex < 0)
    return null

  return occurencies[currentOccurenceIndex]
}

function findNextVisibleOccurence() {
  var active = activeOccurence()
  return occurencies.findIndex((el, index) => index > currentOccurenceIndex && active != el && !isHidden(el))
}

function findPreviousVisibleOccurence() {
  var active = activeOccurence()
  var index = currentOccurenceIndex
  for ( ; index >= 0 && (active == occurencies[index] || isHidden(occurencies[index])); index--) ;
  return index  
}

function highlightNextOccurence() {
  if ((currentOccurenceIndex + 1) >= occurencies.length) 
    return
  unhighlight(activeOccurence())
  var tmpIndex = findNextVisibleOccurence()
  if (tmpIndex >= 0)
   currentOccurenceIndex = tmpIndex
  highlight(activeOccurence())
}

function highlightPreviousOccurence() {
  if ((currentOccurenceIndex - 1) < 0) 
    return

  unhighlight(activeOccurence())
  currentOccurenceIndex = findPreviousVisibleOccurence()
  highlight(activeOccurence())  
}

function clearOccurencies() {
  if (currentOccurenceIndex >= 0) 
    unhighlight(activeOccurence())
  unmark()
  occurencies = []
  currentOccurenceIndex = -1
}

function unhighlight(el) {
  if (el == null)
    return;
  highlighter.style.backgroundColor = 'initial'
  el.style.color = el.color
  highlighter.style.top = '0px'
  highlighter.style.width = '0px'
}
function highlight(el, color = '#4f93de', backgroundColor = '#2b3c68', scrollIntoView = true) {
  if (el == null)
    return;

  var style = highlighter.style
  style.zIndex = -1;
  style.position = 'relative'
  style.top = `${el.offsetTop - 80}px`
  style.left = "0px"
  style.width = `${aside.scrollWidth}px`
  style.height = `${el.offsetHeight}px`
  style.border = 'none'
  el.backgroundColor = el.style.backgroundColor
  if (el.color == null)  
    el.color = el.style.color
  style.backgroundColor = backgroundColor
  el.style.color = color
  style.display = 'block'    
  if (scrollIntoView)
    el.scrollIntoView(false)
}

function mark(expression) {
  query = expression
  queryBox.innerHTML = query
  queryBox.style.display = 'block'
  unhighlight(mouseOverElement)
  var instance = new Mark(document.querySelector(".toc"))
  activeMark = instance.mark(expression, {"each": function(el) {
   
  }, "done": function(count) {
    occurencies = [...document.getElementsByTagName("mark")].map(e => {
      e = e.parentElement
      if (e.className == 'link-prefix')
        e = e.parentElement
      return e
    })
    unhighlight(activeOccurence())    
    if (occurencies.length > 0) {
      currentOccurenceIndex = -1
      highlightNextOccurence()
    } else {
      currentOccurenceIndex = -1  
    }

    if (count == 0 && query.length > 0)
      queryBox.style.color = 'darkorange'
    else
      queryBox.style.color = '#4f93de'
  }})
}

function unmark() {
  if (activeMark != null)
    activeMark.unmark()
  activeMark = null  
  query = ""  
  queryBox.style.display = 'none'
}

function expandAll() {
  document.querySelectorAll('details').forEach(d => d.open = true)  
}

function collapseAll() {
  highlighter.style.top = '0px'
  highlighter.style.width = '0px'
  document.querySelectorAll('details').forEach(d => d.open = false)
}

function revealActiveModuleInTocTree() {
  if (linkToActiveModule == null)    
    return 
  expandAllParentFolders(linkToActiveModule)
  occurencies = [linkToActiveModule]
  currentOccurenceIndex = 0
  highlight(linkToActiveModule)
}

function expandAllParentFolders(el) {
  if (el.tagName == 'A')
    el = linkToActiveModule.parentElement.parentElement  

  while(el != null && el.parentElement.className != 'toc') {
    el.open = true
    el = el.parentElement
  } 
  el.open = true
}

function hide() {
  origSideWidth = aside.offsetWidth
  aside.style.width='24px'
  document.getElementById('toolbar').style.width= '24px'
  toolbarTargets.forEach( el =>
    document.getElementById(el).style.display = 'none'
  )

  document.getElementById('show').style.display = 'inline'
  document.querySelector('.side-tree').style.display = 'none'
}

function show() {
  aside.style.width=`${origSideWidth}px`
  document.getElementById('toolbar').style.width= `${origSideWidth}px`
  toolbarTargets.slice(1).forEach( el =>
    document.getElementById(el).style.display = 'inline'
  )
  document.getElementById('show').style.display = 'none'
  document.querySelector('.side-tree').style.display = 'block'
}

function isHidden(el) {
  return (el.offsetParent === null)
}
