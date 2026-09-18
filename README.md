# AI Task Manager

[![CI](https://github.com/simaofop/ai-task-manager/actions/workflows/ci.yml/badge.svg)](https://github.com/simaofop/ai-task-manager/actions/workflows/ci.yml)
![React](https://img.shields.io/badge/React-TypeScript-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)

AI Task Manager is a learning project created as my first hands-on experience with AI coding agents and agent-assisted software development.

The main goal of the project was not only to build a functional React application, but also to learn how to integrate AI agents into a structured software engineering workflow.

Throughout the project, I used it as a practical environment to improve my skills with:

- Git and GitHub
- Issues and feature branches
- Pull Requests
- AI-assisted implementation
- Human code review
- Automated testing
- Test coverage
- GitHub Actions / CI
- Vercel deployment
- Technical documentation

OpenAI Codex was used as the coding agent, while requirements, validation, Git workflow, review decisions and project organisation remained under human control.

## Live Demo

[![Open Live Demo](https://img.shields.io/badge/Open-Live%20Demo-success?style=for-the-badge)](https://ai-task-manager-eight-rho.vercel.app/)

## Preview

![AI Task Manager](docs/screenshots/task-manager.png)

## Features

- Add tasks
- Mark tasks as completed
- Delete tasks
- Filter by all, pending and completed
- Persist tasks using localStorage
- Responsive interface

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Git / GitHub
- OpenAI Codex

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Testing

Run the test suite:

```bash
npm test
```

Run the test suite with V8 coverage reporting:

```bash
npm run test:coverage
```

CI runs the production build and tests automatically.

## AI-Assisted Development

OpenAI Codex was used as a development agent for implementation tasks.

My responsibilities included:

- defining requirements;
- selecting the technology stack;
- writing repository instructions in `AGENTS.md`;
- reviewing generated changes;
- testing application behaviour;
- validating production builds;
- managing Git and GitHub;
- documenting the development process.

See [`AI_WORKFLOW.md`](AI_WORKFLOW.md) for more details.

## Project Status

First functional version completed.
