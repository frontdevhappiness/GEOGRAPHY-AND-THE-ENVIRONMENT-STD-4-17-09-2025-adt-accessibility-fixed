# Geography and the Environment ADT — Validation Fixes

## Document purpose

This file records the validation, accessibility, visual, audio, and bundle-maintenance work completed for **Geography and the Environment Pupil's Book, Standard 4**.

- Validation reference: `ADT VALIDATION REPORT.geography and the environment - Final revised.docx`
- Source reference: `GEOGRAPHY AND THE ENVIRONMENT-STD 4 17-09-2025.pdf`
- ADT language: `en-GB`
- Work completed through: 5 August 2026
- Main implementation commit: `48a0de1` — `Fix ADT validation and accessibility issues`
- Git branch: `main`

## Completed fixes

### 1. Image and map accessibility

- [x] Added or corrected detailed descriptions for maps, diagrams, symbols, figures, and activity images identified during validation.
- [x] Described visible map colours, keys, roads, boundaries, contour lines, regions, routes, symbols, scale, source, and author information where applicable.
- [x] Arranged descriptions in a logical reading order: title, map description, key, source or author, scale, and other details.
- [x] Kept image descriptions connected to stable `data-id` values in HTML, `texts.json`, `audios.json`, and MP3 files.
- [x] Removed repeated figure references and captions identified during review.
- [x] Corrected the Songambele Street map caption and detailed description on `pg062_sec001.html`.

### 2. Signature accessibility

- [x] Added the correct signature image for Dr Aneth A. Komba.
- [x] Added the read-aloud narration: “Signed by Dr Aneth A. Komba, Director General.”
- [x] Preserved the screen-reader description: “Signature of Dr Aneth A. Komba, Director General.”
- [x] Corrected the signature alignment so it remains left-aligned as in the source PDF.

### 3. Activity banners and symbols

- [x] Updated activity banners to follow the source PDF's orange, pink, and gradient design.
- [x] Corrected banner spacing, rounded corners, icon-ring position, and instruction alignment.
- [x] Replaced generic or incorrect activity symbols with the correct source symbols.
- [x] Added reusable accessible activity-symbol assets for walking, observing, reading, and device-based activities.
- [x] Added descriptions and matching audio for activity symbols.
- [x] Corrected early Activity 1 (`pg015`) and Activity 2 (`pg018`) from a pencil icon to the observing-pupil symbol.
- [x] Updated activity banners and symbols through the later activities, including Activities 10–13.

### 4. Tables and structured content

- [x] Added accessible table introductions or captions to all five detected tables.
- [x] Corrected pronunciation of `No.` to “Number” in table narration.
- [x] Added spoken row and column context where required.
- [x] Corrected Roman-numeral narration for table rows and non-table lists.
- [x] Verified the matching-item tables and revision tables retain their visible structure.

### 5. Read-aloud and pronunciation

- [x] Regenerated or replaced affected narration files using a consistent child-appropriate voice and pace.
- [x] Corrected repeated or incorrectly spoken numbers.
- [x] Corrected pronunciation scripts for abbreviations, Roman numerals, labels, and structured table content.
- [x] Preserved word highlighting and standard read-aloud behaviour when adding image narration.
- [x] Kept narration mappings synchronized with `content/i18n/en-GB/audios.json`.

### 6. Heading and content corrections

- [x] Corrected headings and wording required by the validation report.
- [x] Applied the heading **“Drawing /steps for drawing simple map”** where specified.
- [x] Preserved the slash in visible text while ensuring the intended wording is accessible.
- [x] Corrected missing, repeated, or misplaced text blocks identified during page-by-page review.
- [x] Kept validation-report wording literal where requested.

### 7. Typography and alignment

- [x] Added bundled Liberation Sans files as an offline **Arimo-compatible sans-serif** fallback.
- [x] Applied a consistent Arimo-compatible font stack throughout the ADT.
- [x] Introduced a shared responsive type scale for body text and headings.
- [x] Reduced oversized body text while retaining larger heading sizes.
- [x] Standardized figure, activity, note, exercise, list, and table alignment.
- [x] Added a signature-specific exception so the global image-centering rule does not move the signature.
- [x] Centred the inner acknowledgement and signature column on `pg005_sec001.html`.
- [x] Centred the introduction content column on `pg006_sec001.html` while keeping the QR code left-aligned beneath the resources text, as in the PDF.

### 8. Page-edge styling

- [x] Extracted the fine-grain bluish page-edge texture from the source PDF.
- [x] Applied the texture to all 118 book-page HTML files.
- [x] Applied the texture to the left edge on even pages and the right edge on odd pages.
- [x] Kept the cover free from this alternating edge texture, matching the source design.
- [x] Removed 20 older pale-blue decorative side panels so only the fine-grain outer texture remains.

### 9. Watermark cleanup

- [x] Removed “FOR ONLINE READING ONLY” HTML text or overlays from all 15 affected page files.
- [x] Removed the two separate “FOR ONLINE USE ONLY” overlays from `pg006_sec001.html` and `pg015_sec002.html`.
- [x] Verified no standalone watermark text remains in the book HTML.

> **Deferred:** Some raster map and figure images still contain watermark text baked into their pixels. These were intentionally not edited automatically because doing so could erase map roads, labels, boundaries, colours, or other educational details. They should be restored individually if required.

### 10. Cover page

- [x] Replaced the inaccurate reconstructed cover layout with the approved clean cover image supplied during review.
- [x] Preserved all 16 cover accessibility and narration IDs.
- [x] Kept the cover's existing TTS audio files and mappings.
- [x] Restored the visible, centred publisher line **“Tanzania Institute of Education”** below the cover image.

### 11. Bundle and navigation maintenance

- [x] Synchronized edited HTML, JSON, CSS, and offline-preloader content.
- [x] Kept `pages.json`, SCORM files, and the IMS manifest aligned with the active reading order.
- [x] Removed obsolete quiz HTML and quiz audio files after confirming there were no remaining quiz page, text, or audio references.
- [x] Added `.gitignore` rules for local environment files, editor settings, logs, caches, and temporary files.
- [x] Kept all required fonts, images, CSS, narration files, and runtime assets under Git control.

## Issue-to-solution record

| Issue | Solution applied | Main files or areas |
|---|---|---|
| Images were skipped or lacked useful narration | Added stable image `data-id` values, detailed text descriptions, audio mappings, and matching MP3 narration. | Page HTML, `texts.json`, `audios.json`, `content/i18n/en-GB/audio/` |
| Maps did not describe all visible information | Rewrote descriptions in reading order and included title, regions, colours, routes, key, source or author, scale, boundaries, symbols, and other visible details. | Map page HTML and image-description entries |
| Signature was not read aloud | Added an accessible signature description and a dedicated narration mapping and MP3. | `pg005_sec001.html`, `pg005_im001`, signature audio |
| Signature moved to the centre | Added the `adt-signature-image` exception to keep only the signature left-aligned while other figures remain centred. | `pg005_sec001.html`, `assets/validation-overrides.css` |
| Activity banners and symbols did not match the PDF | Rebuilt the banners with the source colours, overlap, ring position, spacing, and correct reusable pupil symbols. | Activity page HTML, `images/activity_icon_*.png` |
| Activity symbols lacked descriptions | Added unique image IDs, descriptions, audio mappings, and reusable narration files. | Activity HTML, language JSON, MP3 files |
| Tables were read as disconnected words | Added table introductions, explicit column and row wording, “Number” for `No.`, and spoken Roman numerals. | Five table pages, language JSON, table narration MP3s |
| Abbreviations and numbers were pronounced incorrectly | Replaced ambiguous narration scripts with fully spoken wording and regenerated affected audio. | `texts.json`, `audios.json`, MP3 files |
| Font families and sizes were inconsistent | Bundled Liberation Sans as an offline Arimo-compatible family and applied a responsive shared type scale. | `assets/fonts.css`, `assets/fonts/`, `assets/validation-overrides.css` |
| Figures, tables, and page content were unevenly aligned | Added shared centring and spacing rules, plus page-specific exceptions where the PDF required left alignment. | `assets/validation-overrides.css`, affected page HTML |
| Page 5 and page 6 content columns were anchored left | Added `mx-auto` to the constrained inner columns while preserving their internal text alignment; added a QR-specific margin override so the page 6 QR code remains left-aligned as in the PDF. | `pg005_sec001.html`, `pg006_sec001.html` |
| The source page-edge texture was missing | Extracted the fine-grain texture into a reusable PNG and applied alternating left/right frame classes based on page parity. | `images/page_edge_texture.png`, shared CSS, 118 page wrappers |
| Old pale-blue side panels competed with the new frame | Removed the 20 narrow decorative side-panel elements while retaining content and bottom-page designs. | 20 affected page HTML files |
| Standalone red watermarks remained visible | Removed “FOR ONLINE READING ONLY” HTML text or overlays from 15 page files and “FOR ONLINE USE ONLY” overlays from two page files. | 17 affected HTML files |
| The cover reconstruction did not match the approved layout | Replaced the visual reconstruction with the approved clean `cover.png`, retained hidden accessible narration IDs, and displayed the publisher line below it. | `cover.png`, `index.html` |
| Offline mode showed stale content | Updated the matching entries in the `INLINE` object after every HTML, JSON, or shared-CSS change. | `assets/offline-preloader.js` |
| Obsolete quizzes remained in the bundle | Removed unreferenced quiz HTML/audio and confirmed no quiz references remained in pages, text, or audio manifests. | Quiz files, `pages.json`, language manifests |

## Page-by-page change register

This register compares the completed bundle with the initial commit `02a1168`. It lists every edited HTML file individually. Unless a row says **cover**, every book-page row also received these common solutions:

- the Arimo-compatible font stack and shared validation stylesheet;
- consistent responsive typography, image, figure, table, activity, note, and exercise alignment;
- the fine-grain alternating outer page frame;
- the corrected `page-section-id` after obsolete quiz pages were removed; and
- a synchronized copy in the offline preloader.

“Common updates only” means that no separate page-specific content rewrite was found in the Git comparison beyond those shared solutions.

### Cover, front matter, and Chapter One

| HTML file | Page-specific solution applied |
|---|---|
| `index.html` | Replaced the reconstructed cover with the approved clean cover image; retained the hidden accessibility/TTS IDs; restored the visible centred publisher line. |
| `pg002_sec001.html` | Removed the old side-panel decoration and the “FOR ONLINE READING ONLY” text; normalized inside-cover text presentation. |
| `pg003_sec001.html` | Removed the “FOR ONLINE READING ONLY” text and added semantic text markers to the table of contents. |
| `pg004_sec001.html` | Removed the old side-panel decoration and normalized the acknowledgements layout. |
| `pg005_sec001.html` | Added the correct Dr Aneth A. Komba signature image and narration, kept the signature left-aligned, centred the inner acknowledgements column, and removed the watermark and old side panel. |
| `pg006_sec001.html` | Centred the introduction column, kept the QR code left-aligned as in the PDF, added an accurate QR description, and removed the “FOR ONLINE USE ONLY” overlay and old side panel. |
| `pg007_sec001.html` | Added descriptions for the Chapter One title panel and the thinking symbol; normalized standard-text and caption semantics. |
| `pg008_sec001.html` | Common updates only; the Exercise 1 questions and answer controls were preserved. |
| `pg008_sec002.html` | Removed the old side-panel decoration and normalized the map-types text layout. |
| `pg009_sec001.html` | Rewrote the Tanga topographical-map description to include regions, colours, roads, rivers, contours, forest, ocean, boundaries, key, scale, source, and author in reading order; corrected related wording and caption semantics. |
| `pg010_sec001.html` | Added a detailed Tanzania regional administrative-map description with regional colours and boundaries; corrected road-and-railway wording and removed the watermark text. |
| `pg011_sec001.html` | Added a detailed Tanzania roads-and-railways network description covering neighbours, routes, colours, key, scale, source, and author; retained one correctly marked caption. |
| `pg011_sec002.html` | Common updates only; Exercise 2 and its answer controls were preserved. |
| `pg012_sec001.html` | Added a detailed Tabora population-distribution map description, including regional neighbours, dot-density key, colours, scale, source, and author; simplified the crowded/not-crowded wording. |
| `pg013_sec001.html` | Added a detailed Iringa rainfall-distribution map description, including neighbouring regions, rainfall colours, key, scale, source, and author. |
| `pg014_sec001.html` | Added a detailed town-plan description covering coloured zones, roads, buildings, key, scale, source, and author; corrected the thematic-map question. |
| `pg014_sec002.html` | Added a complete spoken table introduction for the four-row map-type table, including “Number”, columns, rows, people, and answer fields. |
| `pg015_sec001.html` | Replaced the activity symbol with the observing-pupil symbol and narration; corrected the instruction and added a detailed description of all four maps in Figure 7. |
| `pg015_sec002.html` | Corrected “show” wording to “present” where required by the report, removed the “FOR ONLINE USE ONLY” overlay, and normalized the map-elements text. |
| `pg017_sec001.html` | Added a detailed Tanzania map description with regions, neighbours, colours, boundaries, key, scale, source, and author; removed the watermark text. |
| `pg018_sec001.html` | Replaced the activity symbol with the observing-pupil symbol and narration; corrected the instruction and added a complete Figure 9 Mwendapole Village map description. |
| `pg019_sec001.html` | Corrected the characteristics and importance-of-maps wording to use “present” consistently; removed the watermark and old side-panel decoration. |
| `pg020_sec001.html` | Common updates only; Exercise 4 and its answer controls were preserved. |
| `pg020_sec002.html` | Corrected revision-question wording about what maps present; preserved the multiple-choice activity structure. |
| `pg022_sec001.html` | Added the full matching-table narration, including table title, “Number”, Column A, Column B, Roman-numeral rows, choices, and meanings. |
| `pg022_sec002.html` | Common updates only; the short-answer section and answer controls were preserved. |
| `pg023_sec001.html` | Corrected validation-report terminology in the vocabulary definitions while preserving the two-column vocabulary layout. |

### Chapter Two

| HTML file | Page-specific solution applied |
|---|---|
| `pg024_sec001.html` | Added accessible descriptions for the Chapter Two title panel and thinking symbol; removed the obsolete duplicate image reference and old side-panel decoration. |
| `pg025_sec001.html` | Rebuilt Activity 1 with the source-style banner and walking-pupils symbol, including an accessible symbol description and narration. |
| `pg026_sec001.html` | Added a detailed four-cardinal-directions diagram description and marked the figure caption for consistent narration and styling. |
| `pg027_sec001.html` | Removed the old right-side decorative panel and watermark text; normalized the cardinal-direction methods text. |
| `pg028_sec001.html` | Added a detailed three-panel shadow-direction illustration description and retained one correctly marked caption. |
| `pg028_sec002.html` | Rebuilt Activity 2 with the source-style banner and walking-pupils symbol, including description and narration. |
| `pg028_sec003.html` | Normalized Exercise 2 typography and alignment without changing the questions or answer controls. |
| `pg029_sec001.html` | Normalized the map-method text and heading presentation. |
| `pg029_sec002.html` | Rebuilt Activity 3 with the observing-pupil symbol and narration; corrected the instruction and added a detailed Ziwani Street map description and caption semantics. |
| `pg030_sec001.html` | Added a detailed compass-dial description covering cardinal labels, needle, colours, and orientation; normalized the caption. |
| `pg031_sec001.html` | Corrected the digital-compass instruction and normalized the steps and intercardinal-direction text. |
| `pg031_sec002.html` | Rebuilt Activity 4 with the device-use symbol, source-style banner, description, and narration. |
| `pg032_sec001.html` | Added a detailed eight-direction compass diagram description and normalized the figure caption. |
| `pg033_sec001.html` | Rebuilt Activity 5 with the observing-pupil symbol; added a detailed Sakina direction diagram description and a complete spoken table introduction with “Number”, columns, rows, journeys, and blank answer fields. |
| `pg034_sec001.html` | Normalized Exercise 3 text, spacing, and answer-control presentation. |
| `pg034_sec002.html` | Normalized the importance-of-cardinal-directions text and heading hierarchy. |
| `pg035_sec001.html` | Rebuilt Activity 6 with the source-style banner and walking-pupils symbol, including description and narration. |
| `pg035_sec002.html` | Added the semantic marker needed for consistent revision-exercise text treatment. |
| `pg036_sec001.html` | Removed the repeated “Observe Figure 7” instruction; changed the remaining instruction to “Refer to Figure 7”; added a detailed recreation-and-playground plan description and a single marked caption. |
| `pg037_sec001.html` | Common updates only; the Chapter Two vocabulary content and grid were preserved. |

### Chapter Three

| HTML file | Page-specific solution applied |
|---|---|
| `pg038_sec001.html` | Corrected the Chapter Three introduction and easy-read wording to use “present”; added the thinking-symbol description and removed the watermark text. |
| `pg039_sec001.html` | Rebuilt Activity 1 with the walking-pupils symbol; restored the missing sentence “However, not everything on the earth’s surface will be presented on a map”; corrected the map-symbol explanations and easy-read text. |
| `pg040_sec001.html` | Added a detailed map-symbol chart description and caption semantics; removed the old side-panel decoration. |
| `pg041_sec001.html` | Added a detailed Mbuga Primary School map description covering boundary, north arrow, river, facilities, paths, colours, key, and relative positions. |
| `pg041_sec002.html` | Rebuilt Activity 2 with the source-style banner and walking-pupils symbol, including description and narration. |
| `pg042_sec001.html` | Normalized map-scale figures and captions; corrected the tools wording and easy-read list; removed the old side panel. |
| `pg043_sec001.html` | Applied the report-required heading “Drawing /steps for drawing simple map” and its easy-read equivalent; normalized tool-image captions. |
| `pg044_sec001.html` | Applied the report-required classroom heading “Drawing/steps of drawing a simple map of a classroom” and removed the old side panel. |
| `pg045_sec001.html` | Rebuilt Activity 3 with the correct seated-pupil drawing symbol and description; applied the school map-drawing heading and report wording, including the slash. |
| `pg045_sec002.html` | Rebuilt Activity 4 with the correct seated-pupil drawing symbol, source-style banner, description, and narration. |
| `pg046_sec001.html` | Normalized Exercise 2 while preserving its controls and response fields. |
| `pg046_sec002.html` | Applied the report-required “Draw/explain” wording and normalized the ward-map text. |
| `pg047_sec001.html` | Rebuilt Activity 5 with the observing-pupil symbol and narration; added the detailed Sinza Ward map description. |
| `pg048_sec001.html` | Corrected the Sinza Ward map-drawing instruction to include the report’s “mention the features” wording. |
| `pg048_sec002.html` | Rebuilt Activity 6 with the observing-pupil symbol and narration; added the detailed Dodoma Region districts-map description. |
| `pg049_sec001.html` | Normalized the activity questions and answer-control layout. |
| `pg049_sec002.html` | Rebuilt Activity 7 with the reading-pupil symbol and narration; applied the report-required accessible-format and “drawn/presenting” wording. |
| `pg049_sec003.html` | Corrected the “Draw/represent” Tanzania-map wording and normalized the text semantics. |
| `pg050_sec001.html` | Rebuilt Activity 8 with the reading-pupil symbol, source-style banner, description, and narration. |
| `pg050_sec002.html` | Normalized Exercise 3 typography and alignment without changing its questions or controls. |
| `pg050_sec003.html` | Removed the old side-panel decoration and normalized the digital-map-drawing text. |
| `pg051_sec001.html` | Normalized the Google My Maps search screenshot description and caption sequence; removed the watermark and old side panel. |
| `pg052_sec001.html` | Normalized the Google My Maps creation/menu screenshot descriptions and captions; removed the watermark and old side panel. |
| `pg053_sec001.html` | Normalized the drawing-tools screenshot description and figure caption. |
| `pg054_sec001.html` | Normalized the map-outline screenshot description and caption. |
| `pg055_sec001.html` | Normalized the layer-menu screenshot description and caption. |
| `pg056_sec001.html` | Added/normalized the completed Swaga Swaga map description and caption. |
| `pg056_sec002.html` | Normalized Activity 9 text and answer-control presentation. |
| `pg056_sec003.html` | Normalized the continuation text and semantic markers. |
| `pg057_sec001.html` | Removed the hidden watermark text and normalized the revision-exercise content. |
| `pg058_sec001.html` | Removed the old side-panel decoration and normalized the closing Chapter Three activity layout. |
| `pg059_sec001.html` | Common updates only; the Chapter Three vocabulary content and layout were preserved. |

### Chapter Four and final assessment

| HTML file | Page-specific solution applied |
|---|---|
| `pg060_sec001.html` | Added the thinking-symbol description for the Chapter Four opening and removed the old side-panel decoration. |
| `pg061_sec001.html` | Rebuilt Activity 1 with the observing-pupil symbol and narration; normalized the direction-and-location captions and question text. |
| `pg061_sec002.html` | Normalized the continuation text and semantic markers. |
| `pg062_sec001.html` | Rebuilt Activity 2 with the observing-pupil symbol; applied the approved Figure 2 Songambele Street caption and full descriptive caption, including buildings, gardens, roads, and relative locations. |
| `pg063_sec001.html` | Rebuilt Activity 3 with the observing-pupil symbol; added the approved pictorial school-area caption and description covering all facilities, the lake, and connecting roads. |
| `pg064_sec001.html` | Normalized the straight-distance heading, steps, caption sequence, and standard-text alignment. |
| `pg065_sec001.html` | Added detailed descriptions of the point-A-to-B paper-strip and linear-scale diagrams. |
| `pg066_sec001.html` | Added a detailed two-part folded-paper/linear-scale description; corrected the 500-metre wording and easy-read narration; removed the watermark text. |
| `pg067_sec001.html` | Rebuilt Activity 4 with the observing-pupil symbol and narration; normalized its caption and questions. |
| `pg068_sec001.html` | Corrected the point-A-to-B ruler instruction and easy-read text; normalized Figure 9 caption treatment. |
| `pg069_sec001.html` | Normalized the ruler/scale figure text, number narration, and caption treatment. |
| `pg070_sec001.html` | Rebuilt Activity 5 with the observing-pupil symbol; added a detailed Gezaulole map description and normalized the caption and questions. |
| `pg071_sec001.html` | Normalized the curved-distance diagram and caption sequence and removed the hidden watermark text. |
| `pg072_sec001.html` | Normalized the curved-distance measurement figure, number narration, and caption treatment. |
| `pg073_sec001.html` | Normalized the pair-of-dividers steps and Figure 16 caption sequence. |
| `pg074_sec001.html` | Normalized the dividers-on-a-curved-route description and caption sequence. |
| `pg075_sec001.html` | Rebuilt Activity 6 with the observing-pupil symbol and narration; normalized its map caption and questions. |
| `pg075_sec002.html` | Normalized the Google My Maps search screenshot description and digital-distance text. |
| `pg077_sec001.html` | Normalized the before-zoom map description and caption. |
| `pg078_sec001.html` | Normalized the ruler-toolbar and route-tracing descriptions/captions, corrected the long distance-measurement text sizing, and removed the hidden watermark text. |
| `pg079_sec001.html` | Rebuilt Activity 7 with the reading-pupil symbol, source-style banner, description, and narration. |
| `pg080_sec001.html` | Rebuilt Activity 8 with the observing-pupil symbol and narration; normalized its figure caption and questions. |
| `pg081_sec001.html` | Rebuilt Activity 9 with the observing-pupil symbol and narration; normalized its figure caption and questions. |
| `pg081_sec002.html` | Normalized the Earth-relief introduction and heading hierarchy. |
| `pg082_sec001.html` | Removed the old side-panel decoration and normalized the mountains, hills, valleys, plains, and plateaus text. |
| `pg083_sec001.html` | Rebuilt Activity 10 with the observing-pupil symbol, source-style banner, description, and narration. |
| `pg083_sec002.html` | Rebuilt Activity 11 with the reading-pupil symbol and narration; normalized the feature-and-population-distribution activity text. |
| `pg084_sec001.html` | Removed the watermark and old side-panel decoration; normalized the continuation text. |
| `pg085_sec001.html` | Rebuilt Activity 12 with the observing-pupil symbol; added the detailed 2022 Tanzania regional population-distribution map description, colours, boundaries, source, and caption. |
| `pg086_sec001.html` | Normalized Activity 13 typography, alignment, and controls. |
| `pg086_sec002.html` | Common updates only; Exercise 1 and its answer controls were preserved. |
| `pg086_sec003.html` | Normalized the continuation of the multiple-choice exercise without changing its answers or controls. |
| `pg087_sec001.html` | Corrected the dots-close-together revision question and easy-read wording; normalized revision text semantics. |
| `pg088_sec001.html` | Added explicit table narration for the matching activity, including “Number”, Column A, Column B, Roman-numeral rows, terms, and meanings. |
| `pg089_sec001.html` | Corrected “used to present” wording and normalized short-answer text semantics. |
| `pg090_sec001.html` | Normalized the final vocabulary layout and text scale. |
| `pg090_sec002.html` | Common updates only; the test multiple-choice structure and controls were preserved. |
| `pg093_sec001.html` | Common updates only; the final short-answer questions and response fields were preserved. |
| `pg093_sec002.html` | Added complete narration for the final matching table, including “Number”, columns, Roman-numeral rows, terms, and statements. |
| `pg095_sec001.html` | Corrected the map-reading instruction to “Examine the following map”; normalized the Tanzania administrative-map caption and question layout. |

## Verification completed

The final pre-commit integrity check confirmed:

- 8 JSON files parsed successfully.
- 119 reading-order entries were present.
- 119 HTML files were checked: 1 cover and 118 book pages.
- All 118 book pages contained exactly one fine-grain outer frame.
- No legacy pale-blue side panels remained.
- 3,830 audio mappings pointed to existing MP3 files.
- All locally referenced HTML assets existed.
- All offline-preloader page copies matched their source HTML.
- `assets/offline-preloader.js` and `assets/scorm.js` passed JavaScript syntax checks.
- `git diff --check` passed.
- No OpenAI API-key pattern was detected in the committed changes.
- No changed file exceeded GitHub's individual file-size limit.

## Git record

- Main implementation: `48a0de1` — `Fix ADT validation and accessibility issues`
- Front-matter and documentation follow-up: `75d0940` — `Document fixes and refine front matter layout`
- Page 6 QR alignment follow-up: `876bb60` — `Align page 6 QR code with source PDF`
- Remote branch before this page-by-page documentation expansion: `origin/main`

## Recommended future workflow

1. Continue working one validation issue at a time.
2. Compare each affected page with the source PDF before editing.
3. State the proposed visible text or narration script before changing it.
4. Review the page in the ADT reader.
5. Mark the item complete only after visual and read-aloud confirmation.
6. Synchronize the offline-preloader copy after HTML or JSON changes.
7. Run the full integrity check before every Git commit.
