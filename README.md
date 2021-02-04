### GamerStore - React

<br />
<p align="center">
  <a href="https://dazzling-mclean-a17029.netlify.app/">
    <img src="./app\assets\images\svg\bonfire.svg" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">GamerStore | Search and View Games </h3>

  <p align="center">
Games Search Engine <br />
    <a href="m90khan@gmail.com"><strong>Contact Me</strong></a>
    <br />
    <br />
    <a href="https://dazzling-mclean-a17029.netlify.app/">View Demo</a>
    
   </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Process](#process)
- [Skills](#skills)
- [Code Snipet](#code)
- [Connect with me](#Contact)

---

### About the Project

Live: https://dazzling-mclean-a17029.netlify.app/

<img src="./src\img\GamerStore-Cover.jpg">

#### Process

- Setup react environment with react-router.
- Implement the structure, divide it into components.
- Applied styling using styled-components.
- Use Axios to fetch data from rawg.io API used for games.
- Setup redux for state management.
- Divide fetch data for popular, upcoming, and new games.
- Add framer for an Animate Shared Layout effect.

<img src="./src\img\GamerStore.jpg">

---

### Skills

[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][youtube]
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][youtube]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][youtube]
[<img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />][youtube]
[<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />][youtube]
[<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />][youtube]
[<img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/redux.svg" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][youtube]
[<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />][youtube]
[<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />][youtube]
<br />
<br />

---

### Code Snippet

```javascript
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
class TourPackage {
  constructor(query) {
    this.revealPackages = query;
    this.hideInitial();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.windowHeight = window.innerHeight;
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle);
    window.addEventListener(
      'resize',
      debounce(() => {
        this.windowHeight = window.innerHeight;
      }, 333)
    );
  }
  calcCaller() {
    this.revealPackages.forEach((el) => {
      if (el.isVisible == false) {
        this.calculateScroll(el);
      }
    });
  }
  calculateScroll(el) {
    if (window.scrollY + this.windowHeight > el.offsetTop) {
      let scrollPercent = (el.getBoundingClientRect().y / this.windowHeight) * 100;
      if (scrollPercent < 70) {
        let className = 0;
        this.GenerateHTML(el, className);
        el.classList.add('package__reveal--visible');

        el.isVisible = true;
        if (el.isLastItem) {
          window.removeEventListener('scroll', this.scrollThrottle);
        }
      }
    }
  }
  hideInitial() {
    this.revealPackages.forEach((el) => {
      el.classList.add('package__reveal');
      el.isVisible = false;
    });
    this.revealPackages[this.revealPackages.length - 1].isLastItem = true;
  }
  GenerateHTML(el, className) {
    const arr = [];
    if (el.classList.contains('feature')) {
      console.log(el, className);
    }
  }
}

export default TourPackage;
```

---

### Connect with me:

[<img align="left" alt="Khan | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]

[<img align="left" alt="twitter | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="khanmohsinx | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/behance.svg" />][behance]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/dribbble.svg" />][dribble]
<br />

---

[youtube]: https://www.youtube.com/channel/UC96rVfdTKsjZpREnH6CaCOw
[twitter]: https://twitter.com/m90khan
[linkedin]: https://www.linkedin.com/in/uxdkhan
[instagram]: https://www.instagram.com/uxd.khan/
[behance]: https://www.behance.net/Khan_Mohsin
[dribble]: https://dribbble.com/uxdkhan
