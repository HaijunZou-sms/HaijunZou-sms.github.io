# Customize

Here we will give you some tips on how to customize the website. One important thing to note is that **ALL** the changes you make should be done on the **main** branch of your repository. The `gh-pages` branch is automatically overwritten every time you make a change to the main branch.

<!--ts-->
<!--te-->

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

## Configuration

The configuration file [\_config.yml](_config.yml) contains the main configuration of the website. Most of the settings is self-explanatory and we also tried to add as much comments as possible.

> Note that the `url` and `baseurl` settings are used to generate the links of the website, as explained in the [install instructions](INSTALL.md).

All changes made to this file are only visible after you rebuild the website. That means that you need to run `bundle exec jekyll serve` again if you are running the website locally or push your changes to GitHub if you are using GitHub Pages. All other changes are visible immediately, you only need to refresh the page.

## Modifying the CV information

The CV page content is generated from the YAML file located in [\_data/cv.yml](_data/cv.yml). Edit this file to update your education, experience, and other CV information.

To add a downloadable CV PDF, place your PDF file in the `assets/pdf/` directory and update the `cv_pdf` field in [\_pages/cv.md](_pages/cv.md):

```yaml
---
layout: cv
permalink: /cv/
title: CV
nav: true
nav_order: 5
cv_pdf: your_cv_filename.pdf
toc:
  sidebar: left
---
```

> **Note:** The `cv_pdf` field currently references `example_pdf.pdf`, which does not exist. Replace it with your actual CV PDF filename, or remove the field if you don't want a PDF download button.

## Creating new pages

You can create new pages by adding new Markdown files in the [\_pages](_pages/) directory. The easiest way to do this is to copy an existing page and modify it. You can choose the layout of the page by changing the [layout](https://jekyllrb.com/docs/layouts/) attribute in the [frontmatter](https://jekyllrb.com/docs/front-matter/) of the Markdown file, and also the path to access it by changing the [permalink](https://jekyllrb.com/docs/permalinks/) attribute. You can also add new layouts in the [\_layouts](_layouts/) directory if you feel the need for it.

To add a page to the navigation bar, set `nav: true` and assign a `nav_order` value in the frontmatter:

```yaml
---
layout: page
permalink: /your-page/
title: Your Page Title
nav: true
nav_order: 3
---
```

The current navigation bar items are:
| nav_order | Page | File |
|---|---|---|
| — | Home | `_pages/about.md` (always first) |
| 1 | Publications | `_pages/publications.md` |
| 5 | CV | `_pages/cv.md` |

## Creating new blog posts

To create a new blog post, you can add a new Markdown file in the [\_posts](_posts/) directory, which is the [default location for posts in Jekyll](https://jekyllrb.com/docs/posts/). The [name of the file must follow](https://jekyllrb.com/docs/posts/#creating-posts) the format `YYYY-MM-DD-title.md`.

> **Note:** The blog page is currently disabled in the navigation bar (`nav: false` in [\_pages/blog.md](_pages/blog.md)). Once you add your first blog post, set `nav: true` to enable it.

If you want to create blog posts that are not ready to be published, but you want to track it with git, you can create a [\_drafts](https://jekyllrb.com/docs/posts/#drafts) directory and store them there.

## Adding some news

You can add news in the about page by adding new Markdown files in the [\_news](_news/) directory. There are currently two types of news: inline news and news with a link. News with a link take you to a new page while inline news are displayed directly in the about page. The easiest way to create yours is to copy an existing news and modify it.

Current news items:
- `launch.md` — Personal website officially launched
- `lmask_iclr.md` — LMask paper accepted to ICLR 2026
- `dag_preprint.md` — DAG scheduling preprint
- `qap_preprint.md` — QAP preprint

## Adding a new publication

To add publications create a new entry in the [\_bibliography/papers.bib](_bibliography/papers.bib) file. You can find the BibTeX entry of a publication in Google Scholar by clicking on the quotation marks below the publication title, then clicking on "BibTeX", or also in the conference page itself. By default, the publications will be sorted by year and the most recent will be displayed first. You can change this behavior and more in the `Jekyll Scholar` section in [\_config.yml](_config.yml) file.

You can add extra information to a publication, like a PDF file in the `assets/pdf/` directory and add the path to the PDF file in the BibTeX entry with the `pdf` field. Some of the supported fields are: `abstract`, `altmetric`, `annotation`, `arxiv`, `bibtex_show`, `blog`, `code`, `dimensions`, `doi`, `eprint`, `html`, `isbn`, `pdf`, `pmid`, `poster`, `slides`, `supp`, `video`, and `website`.

Current PDF files in `assets/pdf/`:
- `LMask/LMask.pdf` — Paper PDF
- `LMask/Slide-LMask.pdf` — Presentation slides
- `LMask/poster.pdf` — Conference poster
- `DAG_scheduling.pdf` — DAG paper PDF
- `PLMA_arxiv.pdf` — QAP paper PDF

### Author annotation

In publications, the author entry for yourself is identified by string array `scholar:last_name` and string array `scholar:first_name` in [\_config.yml](_config.yml). The current configuration is:

```yaml
scholar:
  last_name: [Zou]
  first_name: [Haijun]
  bold_author: Haijun Zou
```

If the entry matches one form of the last names and the first names, it will be underlined and bolded.

To add co-author links, create a [\_data/coauthors.yml](_data/coauthors.yml) file with the following format (keys must be lower cased and without accents):

```yaml
"yuan":
  - firstname: ["Ya-xiang", "Y.", "Y.-x."]
    url: https://lsec.cc.ac.cn/~yyx/

"wen":
  - firstname: ["Zaiwen", "Z."]
    url: http://faculty.bicmr.pku.edu.cn/~wenzw/
```

### Buttons (through custom bibtex keywords)

There are several custom bibtex keywords that you can use to affect how the entries are displayed on the webpage:

- `abbr`: Adds an abbreviation to the left of the entry. You can add links to these by creating a venue.yaml-file in the \_data folder and adding entries that match.
- `abstract`: Adds an "Abs" button that expands a hidden text field when clicked to show the abstract text
- `altmetric`: Adds an [Altmetric](https://www.altmetric.com/) badge (Note: if DOI is provided just use `true`, otherwise only add the altmetric identifier here - the link is generated automatically)
- `annotation`: Adds a popover info message to the end of the author list that can potentially be used to clarify superscripts. HTML is allowed.
- `arxiv`: Adds a link to the Arxiv website (Note: only add the arxiv identifier here - the link is generated automatically)
- `bibtex_show`: Adds a "Bib" button that expands a hidden text field with the full bibliography entry
- `blog`: Adds a "Blog" button redirecting to the specified link
- `code`: Adds a "Code" button redirecting to the specified link
- `dimensions`: Adds a [Dimensions](https://www.dimensions.ai/) badge (Note: if DOI or PMID is provided just use `true`, otherwise only add the Dimensions' identifier here - the link is generated automatically)
- `html`: Inserts an "HTML" button redirecting to the user-specified link
- `pdf`: Adds a "PDF" button redirecting to a specified file (if a full link is not specified, the file will be assumed to be placed in the /assets/pdf/ directory)
- `poster`: Adds a "Poster" button redirecting to a specified file (if a full link is not specified, the file will be assumed to be placed in the /assets/pdf/ directory)
- `slides`: Adds a "Slides" button redirecting to a specified file (if a full link is not specified, the file will be assumed to be placed in the /assets/pdf/ directory)
- `supp`: Adds a "Supp" button to a specified file (if a full link is not specified, the file will be assumed to be placed in the /assets/pdf/ directory)
- `website`: Adds a "Website" button redirecting to the specified link

You can implement your own buttons by editing the [\_layouts/bib.liquid](_layouts/bib.liquid) file.

