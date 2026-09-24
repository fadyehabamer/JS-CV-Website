# JS CV Website
> this is a website acts like a cv template for individuals or even companies made with pure JS

**Live demo:** https://fadyehabamer.github.io/JS-CV-Website/

## Features

- Settings panel with a main-colour switcher (remembered in `localStorage`), a rotating random landing background and a toggle for the side navigation bullets
- Animated skill bars, image gallery with a pop-up viewer, timeline, features and testimonials sections
- Typed headline ([Typed.js](https://github.com/mattboldt/typed.js) from cdnjs) and scroll-in animations ([WOW.js](https://wowjs.uk/) + animate.css, vendored)
- Font Awesome is vendored in `css/` and `webfonts/`, so no kit or API key is needed

## Run locally

It is a static site with no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
index.html   page markup
main.js      settings panel, gallery pop-up, smooth scroll, skills animation
wow.min.js   WOW.js (vendored)
css/         style.css plus vendored normalize, animate.css and Font Awesome
imgs/        landing backgrounds, gallery images and feature icons
webfonts/    Font Awesome font files
```

## License

[MIT](LICENSE)
