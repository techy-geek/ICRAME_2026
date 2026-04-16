# ICRAME 2026 Conference Website

Modular conference website built with HTML, CSS, and vanilla JavaScript.

## Folder Structure

- `index.html` - application shell
- `components/` - reusable global and section components
- `components/home/` - reusable home subsections
- `pages/` - route-level pages
- `assets/css/styles.css` - global styles
- `assets/js/main.js` - router and dynamic component loader
- `assets/images/` - images and gallery assets
- `assets/brochures/` - brochure PDFs

## Routing

Routes are hash-based and loaded dynamically:

- `#home`
- `#about`
- `#committees`
- `#speakers`
- `#call-for-papers`
- `#important-dates`
- `#paper-submission`
- `#registration`
- `#contact`

## Notes

- Home page is composed from multiple reusable subsection files in `components/home/`.
- Replace dummy content directly in each component/page file.
- For local testing, use a static server (for example Live Server) so `fetch()` can load component files.
