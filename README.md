# Los Angeles County Roleplay — Static Site

This is a small modern static site starter for the FiveM server "Los Angeles County Roleplay".

Files added:

- `index.html` — main page
- `css/styles.css` — styling (responsive, modern glass look)
- `js/main.js` — tiny JS for nav toggle and smooth scrolling
- `assets/logo-placeholder.svg` — placeholder logo (replace with your own)

Quick edits to customize:

- Replace `assets/logo-placeholder.svg` with your real logo. Keep the same filename or update `index.html` to point to your file.
- Update the Discord link if it changes (currently `https://discord.gg/lacountyrp`).
- Add the server IP into the hero/meta areas.

Previewing locally

If you have Python installed, you can serve the folder from PowerShell:

```powershell
# start a simple HTTP server from the project folder
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

Or, with Node.js installed, install http-server once and run it:

```powershell
npx http-server -p 8000
```
