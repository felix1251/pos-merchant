# README

[Deploy Website](https://utak.vercel.app/)

The application does not have authentication so we assume that we are already logged in and premitted to do CRUD for the items.

## Setup Dev Environment

Setup Environment Variables (.env)

Copy ENV file

```
cp .env.sample .env
```

Install Dependencies

```
npm install
```

Run server

```
npm run dev
```

Build

```
npm run build
```

Format with prettier

```
npm run format
```

## Design Pattern

Atomic Design Pattern [Reference Here](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97)

### Folder Structure

```md
utak
├── components
│ ├── atoms
│ ├── molecules
│ ├── organisms
│ ├── templates
├── pages (make sense to separate but can also be inside components)
```

The atomic structure consists of five levels: atoms, molecules, organisms, templates, and pages.
Each level represents a different level of abstraction and encapsulates related components.
Atomic Design offers a clear and hierarchical structure for organizing UI elements.

1. Atoms - Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

2. Molecules - Grouping atoms together, such as combining a button, input and form label to build functionality.

3. Organisms - Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

4. Templates - Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

5. Pages - An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.

## Dependencies

I use TailwindCSS for the styles and all the components are custom-made to ensure complete customization and maintainability. I use as few libraries as possible to avoid dependency overload.

```json
"dependencies": {
    "firebase": "^10.8.0",
    "formik": "^2.4.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.0.1",
    "react-router-dom": "^6.22.1",
    "yup": "^1.3.3"
  },
  // for development only
  "devDependencies": {
    "@types/react": "^18.2.56",
    "@types/react-dom": "^18.2.19",
    "@typescript-eslint/eslint-plugin": "^7.0.2",
    "@typescript-eslint/parser": "^7.0.2",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.17",
    "daisyui": "^4.7.2",
    "eslint": "^8.56.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.35",
    "prettier": "^3.2.5",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.2.2",
    "vite": "^5.1.4",
    "vite-tsconfig-paths": "^4.3.1"
  }
```

## Screenshots

### Firebase Realtime DB Item structure

![db struct](/screenshots/rl-db-struct.png)

> option entity: Firebase Realtime DB doens't store array for our option entity so we utilize string with commas and parsed it to array;

### Web item list page

![Web item list](/screenshots/web-item-list.png)

### Mobile item list page

![mobile item list](/screenshots/mobile-item-list.png)

### Web item create page

![Web item create page](/screenshots/web-item-creation.png)

### Mobile item create page

![Mobile item create page](/screenshots/mobile-item-creation.png)

### Web item update page

![Web item update page](/screenshots/web-item-update.png)

### Mobile item update page

![Mobile item update page](/screenshots/mobile-item-update.png)
