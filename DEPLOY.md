# Deploying mjpdf.site on Cloudflare Pages

Build command: `npm run build` · Output directory: `dist` · Node 20+.

## 1. Canonical domain
Add `mjpdf.site` as the Pages custom domain. Also add `www` as a DNS record so the redirect rule can run:
`www` AAAA `100::` (proxied / orange cloud). Without a proxied record the rule never sees the request.

## 2. www -> non-www (HTTP 301, edge level)
Pages' `_redirects` file cannot match on hostname, so use a Cloudflare **Redirect Rule**
(Rules -> Redirect Rules -> Create rule):

- If: `(http.host eq "www.mjpdf.site")`
- Then: Dynamic redirect
  - Expression: `concat("https://mjpdf.site", http.request.uri.path)`
  - Status code: `301`
  - Preserve query string: **on**

Test: `curl -sI "https://www.mjpdf.site/faq/?a=1"` -> `301`, `location: https://mjpdf.site/faq/?a=1`.

Optional: turn on "Always Use HTTPS" and disable the `*.pages.dev` hostname (Pages -> Settings) so only one origin is reachable.

## 3. Old URL migration map
The old site was a single `index.html`; every "page" was a `#fragment`, and fragments never reach a server, so they cannot be redirected at the edge.

| Old URL | New URL |
|---|---|
| https://www.mjpdf.site/ | https://mjpdf.site/ |
| https://www.mjpdf.site/#features | https://mjpdf.site/features/ (link manually where you control the source) |
| #screenshots | /screenshots/ |
| #install, #download | /download/ |
| #release | /releases/3-1-0/ |
| #faq | /faq/ |
| #permissions, #privacy | /privacy/ |
| #about, #about-us | /about/ |

The old sitemap listed only fragment URLs, so no real indexed sub-paths need individual redirects. Submit `https://mjpdf.site/sitemap.xml` in Search Console and use the Change of Address tool if the old domain was verified as a separate property.

## 4. Updating for a new version
1. Replace the APK in `public/downloads/` and update `src/data/apk.ts` (version, size, SHA-256, ABIs).
2. Add an entry at the top of `src/data/releases.ts`; set `current: true` only on the newest.
3. Update screenshots and `src/data/screenshots.ts`.
