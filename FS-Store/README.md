# FS-Store

A small frontend project. This README covers the quick setup and common commands to run the project locally.

Prerequisites
- Node.js (>= 18 recommended)
- npm (comes with Node) or Yarn

Install
1. Open a terminal in the project root (FS-Store folder)
2. Install dependencies:

```bash
npm install
# or with yarn
# yarn install
```

Run (development)
```bash
npm run dev
# or with yarn
# yarn dev
```

Build (production)
```bash
npm run build
# or with yarn
# yarn build
```

Useful scripts
- `dev` — start development server with hot reload
- `build` — create a production build
- `preview` — preview the production build locally (if configured)

Notes
- If you see permission or package errors, try removing `node_modules` and `package-lock.json` then reinstalling.
- This README is intentionally minimal — update with project-specific instructions (env vars, backend endpoints, etc.) as needed.

License
- Add license information here if the project has one.

Troubleshooting
- If `npm run dev` fails, run `node -v` and `npm -v` and check compatibility.
- Common fixes: `npm cache clean --force`, delete `node_modules`, then `npm install`.
