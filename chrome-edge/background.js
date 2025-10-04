chrome.webNavigation.onCommitted.addListener(function (details) {
    chrome.tabs.get(details.tabId).then(function(tab) {
        if (!tab || !tab.url) return;
        let url = new URL(tab.url);
        let domain = url.hostname.replace(/^www\./, '');
        if (domain === "yougame.biz") {
            RunAdblocker(details.tabId);
        }
    })
});

function RunAdblocker(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['ygadblocker.js'],
    });
}



