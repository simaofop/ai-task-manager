# AI Development Workflow

## Objective

The objective of this project was to learn how to use AI coding agents as part of a real software development workflow.

## Tools

- VS Code
- Git
- GitHub CLI
- Node.js / npm
- OpenAI Codex CLI
- GPT-5.6 Luna

## Workflow

1. Created a local Git repository.
2. Configured an `AGENTS.md` file with project-specific development rules.
3. Defined the application requirements manually.
4. Used Codex to implement the initial React + TypeScript + Vite application.
5. Reviewed the files created by the agent.
6. Ran the application locally.
7. Tested the main functionality manually.
8. Ran `npm run build` to validate the production build.
9. Documented the result and committed the changes with Git.

## Initial Prompt

A representative prompt used during development:

> Create a simple task manager using React, TypeScript and Vite.
>
> Features:
> - add tasks
> - mark tasks as completed
> - delete tasks
> - filter: all, pending, completed
> - persist tasks in localStorage
>
> Use simple modern CSS.
> Implement it directly and follow AGENTS.md.

## Validation

The generated implementation was not accepted blindly.

Changes were validated by:

- reviewing source files;
- running the development server;
- manually testing application behaviour;
- checking localStorage persistence;
- running the production build.

## What I Learned

This project introduced me to AI-assisted software development, including:

- giving structured instructions to coding agents;
- controlling agent behaviour with `AGENTS.md`;
- validating AI-generated code;
- using Git during AI-assisted development;
- managing model usage and reasoning levels;
- separating implementation from verification.