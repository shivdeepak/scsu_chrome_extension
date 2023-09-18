# YC Startup School - Fix LinkedIn URL

YC Startup School Co-Founder Matching is an excellent place to find and meet people interested in building startups.

I have noticed that when I `CMD` + click on the "View on LinkedIn" link on user profiles, it opens the same page in the new tab and doesn't open the LinkedIn profile. This happens because the Startup School website uses JavaScript to open the link, and the HTML Anchor Tag points to itself. It's a bit annoying because I am quite used to `CMD` + click, and the website breaks that functionality. So, I wrote a simple extension to fix it.

It is a very lightweight extension and entirely safe for use. It doesn't collect any data, and it doesn't make any network requests. You can audit the source at https://github.com/shivdeepak/ycss_chrome_extension/blob/main/content.js


# Installation

This Extension is currently under review on the Chrome web store, and it will take some time for it to be available there. In the meantime, you'll need to follow these instructions to install it manually.

1. Clone/Download this repository (unzip it if required).
2. Open Chrome and go to `chrome://extensions/`.
3. Turn on "Developer mode" (usually a toggle in the top right).
4. Click "Load unpacked".
5. Navigate to your extension's directory and select it.

Your extension should now be loaded in Chrome, and you should see its icon next to the address bar.
