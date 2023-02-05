# Description

This is a blog-site landing page using the Tailwind CSS framework,
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

1. Clone this repository (or download as ZIP through GitHub)
2. Install node.js
3. Open the terminal/command line and go to the directory where this code is 
located.

```powershell
cd blog-site
```

4. Open up the folder on Visual Studio Code

5. In the Terminal, compile Tailwind CSS by running this command: 

```powershell
npm run build-css
```

If that does not work then run this command in the terminal instead

```powershell
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

6. In Visual Studio Code's explorer, go to "index.html" > right-click > 
Open with Live Server


*If you got lost on any of these steps, let me know!*

# What's next?

- [ ] Dark Mode (my favorite feature)
- [x] Responsive Design
- [x] Mobile First
- [ ] For extra-large displays (1536px), fix space on 1st and last item
- [ ] Header with navbar
- [x] Footer with extra details
- [ ] Populate articles with format -> Top | 2 Asides | Article | Footer
- [ ] Actually have links go to pages within website
- [ ] Separate the logic of author/author-image/author-title to be fixed to the bottom
of a div blog-card item
- [ ] *More coming soon...*

## Notes I had while making the site

Moved comments out of "index.html" and also taking note of some things I learned. 

- **Modular**: used Tailwind CSS: applied directives because there was too many classes repeating a lot of the the same class names. So moved them into external CSS sheet "input.css" and gave making reusable and scalable components such as "blog-card" or "post-title".

- **Planning the Grid System**
  - 1st Row is one large Blog Post contained in 3 columns.
  - 2nd Row is three blog posts each contained in one column
  - 3rd Row the first post takes two columns and the 3rd post takes up one column
    
  
- **To make site more *Responsive***:
  - Went to the Tailwind CSS documentation on [Responsive Design](https://tailwindcss.com/docs/responsive-design)
  - Tailwind is mobile first
    > Use unprefixed utilities to target mobile, and override them at larger breakpoints

    ```css
    <!-- This will center text on mobile, and left align it on screens 640px and wider -->
    <div class="text-center sm:text-left"></div>
    ```

    > Don't use sm: to target mobile devices
    ```css
    <!-- This will only center text on screens 640px and wider, not on small screens -->
    <div class="sm:text-center"></div>
    ```
  - Learned about breakpoints

  1. For mobile, one column in the grid is preferred.
  2. For smaller displays, grid-columns-1, since we don't need grid-column-3, we can make it all a single column
  3. For medium displays, grid-columns-2
  4. For large displays, grid-columns-3
  5. Check every div container that manually spans more than one column, and apply responsive design by adding different behavior for each breakpoint (mobile, sm, md, lg, xl, 2xl screen sizes)
  6. Also check gaps at different breakpoints. Nice for large displays but gaps could be too wide on smaller displays. 