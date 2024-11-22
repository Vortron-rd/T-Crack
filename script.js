//Opens a about:blank tab with either a <iframe> or a <embed>
function aboutBlank(url, type) {
  var urlObj = new window.URL(window.location.href);
  if(url) {
    var win;
    if(win) {
      win.focus();
    } else {
      win = window.open();
      win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';
      var iframe = win.document.createElement(type);
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.margin = '0';
      iframe.src = url;
      win.document.body.appendChild(iframe);
      win.document.title = "IXL | Math, Language Arts, Science, Social Studies, and Spanish"
      var link = document.querySelector("link[rel~='icon']");
      if(!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = 'https://stackoverflow.com/favicon.ico';
    }
  };
}

//Replaces the current tab with the specified url and (usually) overwrites history https://

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}

function replace(url) {
	window.location.replace(url);
}


// Function to load a game into the game container
function loadGame(gameUrl) {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = `<embed src="${gameUrl}" width="100%" height="100%" frameborder="0"></embed>`;
}
//Function ran when index.html is loaded, loads about:blank main.html and replaces parent with ixl.com
function init() {
str = window.location.href;
mainpage = (str.substring(0, str.lastIndexOf("/"))) + '/main.html';
console.log("Redirecting to: ");
aboutBlank(mainpage, "embed");
replace('https://ixl.com');
}

function loadCustomGame() {
  loadGame(document.getElementById('url-input').value);
}
// Function to toggle fullscreen mode
function toggleFullscreen() {
  const gameContainer = document.getElementById('game-container');


    if (gameContainer.requestFullscreen) {
      gameContainer.requestFullscreen();
    } else if (gameContainer.mozRequestFullScreen) {
      gameContainer.mozRequestFullScreen();
    } else if (gameContainer.webkitRequestFullscreen) {
      gameContainer.webkitRequestFullscreen();
    } else if (gameContainer.msRequestFullscreen) {
      gameContainer.msRequestFullscreen();
    } 
}
