# To-Do List React

A simple to-do list app built with React + Vite.

## Running locally (dev)

```bash
npm install
npm run dev
```

## Docker (production build served by Nginx)

### Build the image

```bash
docker build -t to-do-list-react .
```

### Run the container

```bash
docker run -p 8080:80 to-do-list-react
```

Then open <http://localhost:8080> in your browser.
