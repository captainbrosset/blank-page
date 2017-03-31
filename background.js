function createBlankPage() {
  browser.tabs.create({
    url: "blank.html"
  });
}

browser.browserAction.onClicked.addListener(createBlankPage);
