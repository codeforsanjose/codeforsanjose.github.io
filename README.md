# Open Source San José Website

Please clone this repository and push any changes to the branch you are working on.  

## Introduction

Open Source San José is a local volunteer organization dedicated to advancing civic innovation in South Bay Area.  
This website serves as the central hub for learning about the organization, its projects, and ways to contribute.  

Our redesign branch focuses on improving usability, accessibility, and maintainability of the site, while making it easier for new contributors to get involved.

## Project Structure

The repository is organized as a Jekyll-based static site:
- `_layouts/` – Page templates used across the site  
- `_includes/` – Reusable components (header, footer, etc.)  
- `_posts/` – Blog posts and announcements  
- `assets/` – Images, stylesheets, and JavaScript files  
- `_config.yml` – Jekyll configuration file  
- `index.html` – Main landing page  

## How To Run

Host a local version of the Open Source San José website to make changes.

To run a local version of the Open Source South Bay Area website and make changes, follow these steps:

1. **Clone the project** to download the project file onto your local computer.
   `git clone https://github.com/codeforsanjose/codeforsanjose.github.io`

2. **Enter the directory** moves your command line into the project folder so you can make changes.
   `cd codeforsanjose.github.io`

3. **Change Branch** moves to the redesign branch so your work is committed to the right place.
   `git checkout 2020_redesign`

4. [Install and build the site with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll):
   ```bash
   bundle exec jekyll serve
   ``` 

5. Open your browser and view the site:

- If running locally with Jekyll:
  http://localhost:4000

- If opening the static file directly:
   `codeforsanjose.github.io/index.html`

## How to Contribute

Join the discussion on our [Discord server](https://discord.gg/XMrqrCfprT) to get involved, ask questions, and collaborate with other contributors.

## Contribution Workflow

1. Fork the repository
2. Create a new feature branch
3. Make your changes
4. Test locally using Jekyll
5. Submit a pull request

## Handoff Notes

- This project uses Jekyll for static site generation
- Always test changes locally before pushing
- Ensure dependencies are installed via Bundler
- Keep changes focused and small for easier review
- Follow existing code and design patterns to maintain consistency

## Technologies

- [Jekyll](https://jekyllrb.com/)
- HTML
- SASS/CSS
- JavaScript

## Legacy Information

The section below contains content from the original website README for reference.

========================

# Open Source San José Website

# [Demo](http://www.codeforsanjose.com)

Open Source San José is a local volunteer organization. This website is the central location where people can learn about the organization.

## How to Run

Host a local version of the Open Source San José website to make changes.

To set up, open the command line and run the following steps:

1. **Clone the project** to download the project file onto your local computer.
   `git clone https://github.com/codeforsanjose/codeforsanjose.github.io`

2. **Enter the project directory** to begin making changes:
   `cd codeforsanjose.github.io`

3. **Open your browser** and navigate to:
   `codeforsanjose.github.io/index.html`

## Technologies

- JavaScript
- jQuery
- HTML
- CSS
- Bootstrap