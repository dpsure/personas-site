# Personas Hub on Docusaurus

A starter that gives you:
- Persona landing page
- Jobs page for **Build with AI Agents**
- Jobs page for **Migration TCO for Cloud Architects**
- Shared Hero and CardGrid components
- GitHub Pages deployment config

## Quick start

1. Clone your repo and copy this folder in, or unzip and initialize a new repo.
2. Replace `<YOUR_GITHUB_USER>` and `<YOUR_REPO_NAME>` in `docusaurus.config.js`.
3. Install deps:
   ```bash
   npm install
   ```
4. Run locally:
   ```bash
   npm run start
   ```
5. Deploy to GitHub Pages:
   - Ensure GitHub Pages is enabled from the `gh-pages` branch.
   - Push to `main`, then run:
     ```bash
     GIT_USER=<YOUR_GITHUB_USER> npm run deploy
     ```

## Content mapping

- `docs/personas/landing.mdx` is the personas hub
- `docs/jobs/developer-agents.mdx` implements the **How to → Solutions → Related** flow
- `src/components/Hero.js` and `src/components/CardGrid.js` power the layout

## Customize

- Add more persona pages under `docs/personas/`
- Add more jobs under `docs/jobs/`
- Update the navbar in `docusaurus.config.js`
