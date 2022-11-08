 //Javascript to toggle the menu
document.getElementById('nav-toggle').onclick = function () {
    document.getElementById("nav-content").classList.toggle("hidden");
  }

/*  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("navbar").style.padding = "4px 15px";
    document.getElementById("navbar").style.opacity = "1";

   
  } else {
    document.getElementById("navbar").style.padding = "15px 15px";

  }
}
  
  //* Menu on scroll
  /*var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.opacity = "3";
    } else {
      document.getElementById("navbar").style.top = "-50px";
      document.getElementById("navbar").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
  }
 /*
   * Light YouTube Embeds by @labnol
   * Credit: https://www.labnol.org/
   */

function labnolIframe(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    div.parentNode.replaceChild(iframe, div);
  }

  function initYouTubeVideos() {
    var playerElements = document.getElementsByClassName('youtube-player');
    for (var n = 0; n < playerElements.length; n++) {
      var videoId = playerElements[n].dataset.id;
      var div = document.createElement('div');
      div.setAttribute('data-id', videoId);
      var thumbNode = document.createElement('img');
      thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
      div.appendChild(thumbNode);
      var playButton = document.createElement('div');
      playButton.setAttribute('class', 'play');
      div.appendChild(playButton);
      div.onclick = function () {
        labnolIframe(this);
      };
      playerElements[n].appendChild(div);
    }
  }

  document.addEventListener('DOMContentLoaded', initYouTubeVideos);