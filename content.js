window.onload = function(e) {
    // Single Page Apps (SPAs) don't show the UI elements right away, so we
    // need to wait for them to load. They are usually avaiable within
    // first 100-200ms, but if the user's internet connection is slow, we will
    // retry 10 times with exponential backoff.
    const timeouts = [100, 200, 300, 500, 800, 1300, 2100, 3400, 5500, 8900];
    var timeoutIdx = -1;

    function updateLinks() {
        const extensionName = "YCSU Fix LinkedIn URL"
        const linkText = "View on LinkedIn"
        const customAttribute = "data-ycsu-linkedin-fixup";
        const anchors = document.querySelectorAll('a');
        let linkElement;

        for (let anchor of anchors) {
            if (anchor.textContent.includes(linkText)) {
                linkElement = anchor;
                break;
            }
        }

        if (linkElement) {
            if (linkElement.parentElement?.title?.includes("startupschool.org")) {
                const url = linkElement.parentElement.title.split("startupschool.org")[1];
                // ensure that we are updating with a valid linkedin URL
                if (url.includes("https://") && url.includes("linkedin.com")) {
                    // don't update DOM unless it's necessary
                    if (linkElement.getAttribute(customAttribute) !== "true" || linkElement.href !== url) {
                        console.log(extensionName, ": ", "Fixed URL = ", url);
                        linkElement.href = url;
                        linkElement.target = "_blank"; // open in new tab
                        linkElement.setAttribute(customAttribute, "true");
                    }
                }
            }
        }

        if (timeoutIdx < timeouts.length) {
            setTimeout(updateLinks, timeouts[++timeoutIdx])
        }
    }

    updateLinks();
}
