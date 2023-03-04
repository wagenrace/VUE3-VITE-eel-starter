# Vue starter project for Eel

This is a basic [eel](https://github.com/python-eel/Eel) + [VUE.js 3](https://vuejs.org/) + [VITE](https://vitejs.dev/). It will create a local app with python as backend and VITE+VUE3 as front-end.
It is not unlike electron

## Start a new app

Copy this repo and you are ready to start.

### Installation

```cmd
pip install eel
cd web-src
npm i
```

### Develop front-end

Run the VUE app.

```cmd
cd web-src
npm run dev
```

With in `web-src\public\eel.js` there is a mock-up eel implementation. This file will be overwritten when building.
It holds 2 example functions `hello_world` and `get_greeting`.
`get_greeting` has also the callback logic.
These are just for testing so you can quickly develop the front-end like you would with every VUE app.

### Build front-end

Running the build command will create a folder `/web`. This folder holds build VUE app.

```cmd
cd web-src
npm run build
```

### Develop eel.js

Eel can now be build in the same way as normal.

```cmd
python app.py
```

All the mock-up function with `eel.js` are now overwritten by the eel app.
If the eel exposed function in `app.py` are called the same it will work directly.

### Building the full app

This will build the front-end and then the app as one `.exe` file.

```cmd
cd web-src
npm run build
cd ..
pip install pyinstaller
python -m eel app.py web --onefile
```

## Update your current project

Within `index.html` add:

```html
<script type=text/javascript src=/eel.js></script>
```

In `vite.config.js` add a `build - outDir`

```js
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "../web",
  },
});
```

### eel.js debugger [Optional]

Copy the `public/eel.js` into your public folder.
This script creates a mockup eel so you can test your VUE app without building or running the eel app.
