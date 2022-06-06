# React-Hello-World
> Ready to use React skeleton project

Open this project with GitPod: https://gitpod.io/#https://github.com/bots-garden/react-hello-world

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/bots-garden/react-hello-world)


Ref: https://reactjs.org/docs/getting-started.html#online-playgrounds

> Get the HTML skeleton
```bash
wget https://raw.githubusercontent.com/reactjs/reactjs.org/main/static/html/single-file-example.html-O index.html
```

> Get JavaScript dependencies
```bash
wget https://unpkg.com/react@18/umd/react.development.js -O js/react.development.js
wget https://unpkg.com/react-dom@18/umd/react-dom.development.js -O js/react-dom.development.js
wget https://unpkg.com/@babel/standalone/babel.min.js -O js/babel.min.js
```

> Update the header of `index.html`
```html
<script src="js/react.development.js"></script>
<script src="js/react-dom.development.js"></script>

<!-- Don't use this in production: -->
<script src="js/babel.min.js"></script>
```


> Serve the page
```bash
python3 -m http.server 8080
```
