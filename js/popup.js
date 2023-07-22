document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("catifyButton").addEventListener("click", catifyPage);
  });
  
  function catifyPage() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: replaceImagesWithCats,
      });
    });
  }
  
  function replaceImagesWithCats() {
    const catImageUrl = "https://placekitten.com/200/300";
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].src = catImageUrl;
    }
  }
  