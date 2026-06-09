# Customize Your Website

This guide explains how to customize your website.

---

## Local Development & Deployment

**Run Locally with Docker**

```bash
docker compose up
```

Open `http://localhost:8080` in your browser. If you modify `_config.yml`, restart Docker to see the changes:

```bash
docker compose down && docker compose up
```

**Deploy to Remote Repository**

All changes should be made on the `main` branch. Push to publish:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Actions will automatically build and deploy your site.

---

## Project structure

The project is structured as follows, focusing on the main components that you will need to modify:

```txt
.
├── 📂 assets/: contains the assets that are displayed in the website
│   ├── 📂 css/: compiled CSS stylesheets
│   ├── 📂 fonts/: font files
│   ├── 📂 img/: images (e.g., prof_pic.jpg)
│   ├── 📂 js/: JavaScript files
│   ├── 📂 pdf/: PDF files for publications, posters, slides
│   └── 📂 webfonts/: web font files
├── 📂 _bibliography/
│   └── 📄 papers.bib: bibliography in BibTeX format
├── 📄 _config.yml: the configuration file of the template
├── 📂 _data/: contains some of the data used in the template
│   ├── 📄 cv.yml: CV in YAML format, used for the CV page
│   └── 📄 socials.yml: your social media and contact info in YAML format
├── 📂 _includes/: contains code parts that are included in the main HTML file
│   └── 📄 news.liquid: defines the news section layout in the about page
├── 📂 _layouts/: contains the layouts to choose from in the frontmatter of the Markdown files
├── 📂 _news/: the news that will appear in the news section in the about page
├── 📂 _pages/: contains the pages of the website
│   ├── 📄 about.md: the homepage (permalink: /)
│   ├── 📄 publications.md: publications page (nav: true, nav_order: 1)
│   ├── 📄 blog.md: blog page (nav: false, currently disabled)
│   ├── 📄 cv.md: CV page (nav: true, nav_order: 5)
│   ├── 📄 news.md: full news list page
│   └── 📄 404.md: 404 page (page not found)
├── 📂 _posts/: contains the blog posts (currently empty)
└── 📂 _sass/: contains the SASS files that define the style of the website
    ├── 📄 _base.scss: base style of the website
    ├── 📄 _cv.scss: style of the CV page
    ├── 📄 _distill.scss: style of the Distill articles
    ├── 📄 _layout.scss: style of the overall layout
    ├── 📄 _themes.scss: themes colors and a few icons
    └── 📄 _variables.scss: variables used in the SASS files
```

---

## Configuration

**`_config.yml`** contains the main site settings. Key fields:

| Field | Description |
|---|---|
| `title` | Website title (if `blank`, uses `first_name` + `last_name`) |
| `first_name` / `last_name` | Your name, displayed in the header |
| `url` | Base URL of your site (e.g., `https://HaijunZou-sms.github.io`) |
| `navbar_fixed` | Whether the navigation bar stays fixed at the top |
| `search_enabled` | Enable/disable the search feature |
| `enable_darkmode` | Enable/disable dark mode toggle |
| `enable_navbar_social` | Show social icons in the navbar on the homepage |

**Page frontmatter fields** (the YAML block at the top of each `_pages/*.md` file):

| Field | Description |
|---|---|
| `layout` | Layout template to use (`about`, `page`, `cv`, etc.) |
| `title` | Page title, displayed in the navigation bar |
| `permalink` | URL path (e.g., `/publications/`, `/cv/`) |
| `nav` | `true` to show in navigation bar, `false` to hide |
| `nav_order` | Number controlling the order in the navigation bar (smaller = left) |

---

## Adding News

Add new markdown files in `_news/`. The easiest way is to copy an existing news file and modify the date and content. Two types:

- **Inline news** (`inline: true`): displayed directly on the homepage
- **News with link**: takes the reader to a separate page

---

## Adding Publications

To add publications, create a new entry in `_bibliography/papers.bib`. You can find the BibTeX entry of a publication in Google Scholar by clicking on the quotation marks below the title, then clicking on "BibTeX". Publications are sorted by year (most recent first) by default.

You can add extra information to a publication, like a PDF file in the `assets/pdf/` directory and add the path to the PDF file in the BibTeX entry with the `pdf` field. Some of the supported fields are: `abstract`, `altmetric`, `annotation`, `arxiv`, `bibtex_show`, `blog`, `code`, `dimensions`, `doi`, `eprint`, `html`, `isbn`, `pdf`, `pmid`, `poster`, `slides`, `supp`, `video`, and `website`.

### Author annotation

Your name is automatically highlighted based on the `scholar` settings in `_config.yml`:

```yaml
scholar:
  last_name: [Zou]
  first_name: [Haijun]
  bold_author: Haijun Zou
```

### Buttons (through custom bibtex keywords)

Custom bibtex keywords control how entries are displayed:

- `abbr`: Abbreviation badge on the left. Link it by adding entries to `_data/venues.yml`.
- `abstract`: "Abs" button that expands to show the abstract text
- `arxiv`: Link to arXiv (only add the identifier, e.g., `2401.12345`)
- `bibtex_show`: "Bib" button showing the full BibTeX entry
- `code`: "Code" button linking to a repository
- `pdf`: "PDF" button (file assumed in `/assets/pdf/` unless a full URL)
- `poster`: "Poster" button (same path logic as `pdf`)
- `slides`: "Slides" button (same path logic as `pdf`)
- `supp`: "Supp" button for supplementary materials
- `website`: "Website" button linking to an external page
- `blog`: "Blog" button linking to a blog post
- `html`: "HTML" button linking to an external page

You can implement your own buttons by editing `_layouts/bib.liquid`.

---

## Modifying CV

1. **CV Content**: Edit `_data/cv.yml` to update your education and experience.
2. **PDF Download**: Place your PDF in `assets/pdf/` and update the `cv_pdf` field in `_pages/cv.md`:
   ```yaml
   cv_pdf: your_cv_filename.pdf
   ```

---

## Managing Blog Posts

Add markdown files to `_posts/`. File names **must** follow the format `YYYY-MM-DD-title.md`.

> The blog page is currently hidden (`nav: false` in `_pages/blog.md`). Set `nav: true` to enable it once you add a post.

---

## Adding Social Media

Edit `_data/socials.yml` to update your Email, GitHub, Google Scholar, etc. These icons appear on the homepage and footer.

---

## Managing Pages

Pages are located in `_pages/`. To show a page in the navigation bar, set `nav: true` and assign a `nav_order` in the frontmatter:

```yaml
---
layout: page
title: Your Page Title
permalink: /your-page/
nav: true
nav_order: 3
---
```

## Changing Theme Color

Edit the `--global-theme-color` variable in `_sass/_themes.scss`.
