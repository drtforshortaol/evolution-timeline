FROM UNIVERSE TO US — standalone PWA

Files:
- index.html
- styles.css
- app.js
- manifest.webmanifest
- sw.js
- icons/

Run locally:
PWAs need HTTP/HTTPS for service workers. From this folder run, for example:
  python -m http.server 8080
Then open http://localhost:8080

On iPhone/iPad:
Host the folder via HTTPS (for example GitHub Pages), open in Safari, then Share > Add to Home Screen.

Status:
This build is intentionally independent from the EVO Hub. Its content and file structure can later be incorporated into the hub.


v3 update system:
- Network-first service worker: when online, the app prefers the newest GitHub Pages files; cache is used offline.
- Refresh / Check for Updates button clears the app cache and reloads the newest published build.
