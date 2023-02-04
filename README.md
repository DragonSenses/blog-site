# Description

This is a simple blog-site landing page using the Tailwind CSS framework,
and organized with a CSS Grid Layout and Flexbox.

<a href="https://dragons-blog-site.netlify.app/">***See It Live!***</a>

# Technologies:
- HTML5
- Tailwind CSS

# Instructions to run

1. Go to https://dragons-blog-site.netlify.app/ for a Live Demo

# Prerequisites
- Node.js
- Visual Studio Code with Live Server Extension

# Instructions to run locally

1. Clone this repository(or download as ZIP through GitHub)
2. Install node.js
3. Open the terminal/command line and go to the directory where this code is 
located.

```powershell
cd blog-site
```
4. Setting up the environment: install dependencies 

```powershell
npm install tailwindcss
```

5. Open up the folder on Visual Studio Code

6. In the Terminal, compile Tailwind CSS by running this command: 

```powershell
npm run build-css
```

If that does not work then run this command in the terminal instead

```powershell
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

7. In Visual Studio Code's explorer, go to "index.html" > right-click > 
Open with Live Server