(function (window) {
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        };
    }

    function updateLinks() {
        const extensionName = "YCSS Fix LinkedIn URL"
        const linkText = "View on LinkedIn"
        const customAttribute = "data-ycss-linkedin-fixup";
        const anchors = window.document.querySelectorAll('a');
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
    }

    let updateLinksDebounced = debounce(function() {
        updateLinks();
    }, 500);

    function updateLinksWithTimeout() {
        updateLinks();

        setTimeout(updateLinksWithTimeout, 500)
    }

    function updateLinksWithMutationObserver() {
        const targetNodes = document.getElementsByClassName("top-container");
        for (let targetNode of targetNodes) {
            const observer = new MutationObserver(updateLinksDebounced);
            observer.observe(targetNode, {childList: true, subtree: true});
        }
    }

    window.onload = function(e) {
        if ('MutationObserver' in window) {
            updateLinksWithMutationObserver();
        } else {
            updateLinksWithTimeout();
        }
    }
})(window);
