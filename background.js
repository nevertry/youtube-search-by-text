chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "searchYouTube",
        title: "Search YouTube for '%s'",
        contexts: ["selection"]
    });
});
  
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchYouTube") {
        const query = info.selectionText;
        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        chrome.tabs.create({ url: url });
    }
});
  