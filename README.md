
# SCSS Theme Boilerplate

Boilerplate code for a SCSS theme (usually used for OutSystems applications).


## Installation

- Get npm and Node.js from https://www.npmjs.com/get-npm 

**IMPORTANT: Don't go over the 16.1 version because it will cause problems while compiling SCSS with GULP**

To check if you have Node.js, npm and npx installed on your machine, run:

```bash
  node -v
```

```bash
  npm -v
```

```bash
  npx -v
```

- Install Gulp globally on your machine
```bash
  npm install --global gulp-cli
```

- Install the Gulp package locally on your project folder
```bash
  npm install --save-dev gulp
```

- Install the Stylelint package locally on your project folder
```bash
  npm install --save-dev stylelint stylelint-config-recommended stylelint-order stylelint-scss
```
## How to run the project

- When running the project for the first time, head on over to your terminal and type:

```bash
  npm install
```
## Compiling


- To compile your SCSS code, head on over to your terminal and type:

```bash
  gulp
```

After this, you can check your compiled code on the CSS folder that is located inside of the dist folder that will be created on your project's root path
