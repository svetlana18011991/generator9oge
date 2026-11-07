# MathJax 3.2.2, unchanged CHTML bundle

`tex-mml-chtml.js` is the unchanged component previously loaded from
`https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js`.
Its bytes were also verified against the version-pinned upstream URL:

https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js

SHA-256: `300480069078b5892d2363a2b65e2dfbbf30fe5c80f83edbfecf4610fd093862`

The 22 fonts in `fonts/woff-v2` are byte-for-byte copies of the fonts already
embedded in the site's downloaded HTML. Their filenames match the actual
component's CHTML font URLs. Per-file sizes and SHA-256 values are recorded in
`manifest.json`.

The application sets `chtml.fontURL` to the local `fonts/woff-v2` directory.
Its `loader.paths.mathjax` remains the version-pinned upstream `/es5` directory
so optional TeX extensions and optional accessibility enrichment keep their
existing upstream location. The normal startup, standard TeX/AMS formulas,
and full 25-task generation do not need those optional resources. This is the
same TeX/MathML to CHTML renderer; no output format or font data was changed.

The JavaScript component is Apache-2.0 licensed; see `LICENSE`. The WOFF fonts
are SIL Open Font License 1.1 licensed; their original font notices and the OFL
text are in `FONT-LICENSE.txt` and are also retained inside the font binaries.
The standard OFL text was obtained from SIL's own font repository:
https://github.com/silnrsi/font-harmattan/blob/master/OFL.txt

Run `node --test tests/local-mathjax.test.cjs` with Playwright and Chromium
available to check asset integrity, every WOFF font, real fractions/roots/AMS/
matrices, and full application generation while all external requests fail.
