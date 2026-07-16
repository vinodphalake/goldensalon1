FLOURISHH - The Beauty Destination
Production deployment package for serverbyt.in

DEPLOY STEPS (Node.js App on serverbyt.in / cPanel):
1. Upload and extract this zip into your Node.js app's folder.
2. In the cPanel "Setup Node.js App" screen, set:
   - Application startup file: server.js
   - Application root: (the folder you extracted this into)
3. Click "Run NPM Install" (installs the "express" dependency).
4. Start/Restart the application.
5. Visit your domain - the site will be served on the assigned PORT automatically.

FOLDER CONTENTS:
- server.js       -> Node.js server that serves the website
- package.json    -> Dependency list (express only)
- public/         -> Built website files (HTML, CSS, JS, images)

No database or environment variables are required. This is a static
marketing website served by a lightweight Node.js server.
