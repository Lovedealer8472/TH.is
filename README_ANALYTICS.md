# Analytics og SEO Setup

Leiðbeiningar fyrir að setja upp Google Analytics, Google Search Console og sitemap.

## 1. Google Analytics

### Skref 1: Búðu til Google Analytics reikning

1. Farðu á [Google Analytics](https://analytics.google.com/)
2. Búðu til nýjan eign (Property) fyrir `tolvuhvislarinn.is`
3. Fáðu mælikvarða ID (Measurement ID) - líkt og `G-XXXXXXXXXX`

### Skref 2: Bættu við í umhverfisbreytum

Bættu við í `.env.local` á staðnum:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Á server:**
```bash
cd /var/www/tolvuhvislarinn
nano .env.local
```

Bættu við línunni:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Vistaðu með `Ctrl+X`, `Y`, `Enter`.

### Skref 3: Endurræstu forritið

```bash
pm2 restart tolvuhvislarinn --update-env
```

### Skref 4: Prófaðu

1. Opnaðu vefsíðuna í vafra
2. Farðu í Google Analytics → Realtime → Overview
3. Þú ættir að sjá heimsóknina

## 2. Google Search Console

### Skref 1: Búðu til eign í Google Search Console

1. Farðu á [Google Search Console](https://search.google.com/search-console)
2. Bættu við eign (Property) fyrir `tolvuhvislarinn.is`
3. Veldu "HTML tag" aðferðina fyrir staðfestingu
4. Afritaðu innihald `content` eigindisins úr meta taginu

Dæmi:
```html
<meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
```

Afritaðu bara hlutfinn eftir `content="` (án gæsalappanna).

### Skref 2: Bættu við í umhverfisbreytum

Bættu við í `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Á server:**
```bash
cd /var/www/tolvuhvislarinn
nano .env.local
```

Bættu við línunni:
```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Vistaðu með `Ctrl+X`, `Y`, `Enter`.

### Skref 3: Endurræstu forritið

```bash
pm2 restart tolvuhvislarinn --update-env
```

### Skref 4: Staðfestu í Google Search Console

1. Farðu aftur í Google Search Console
2. Smelltu á "Verify"
3. Ef allt er rétt, verður eignin staðfest

## 3. Sitemap

Sitemap er sjálfkrafa búin til af Next.js og er aðgengileg á:

**https://tolvuhvislarinn.is/sitemap.xml**

### Bættu sitemap í Google Search Console

1. Farðu í Google Search Console
2. Farðu í "Sitemaps" í vinstri valmynd
3. Bættu við: `sitemap.xml`
4. Smelltu á "Submit"

## 4. Robots.txt

Robots.txt er sjálfkrafa búin til af Next.js og er aðgengileg á:

**https://tolvuhvislarinn.is/robots.txt**

## Umhverfisbreytur - Fullt dæmi

Á server, í `.env.local`:

```env
# SMTP (Email)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=tolvuhvislarinn@gmail.com

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## Athugasemdir

- **NEXT_PUBLIC_**: Breytur sem byrja á `NEXT_PUBLIC_` eru aðgengilegar í vafra (client-side)
- **Öryggi**: Ekki deila `.env.local` skránni eða committa hana í Git
- **Endurræsing**: Eftir að bæta við nýjum umhverfisbreytum, endurræstu alltaf PM2 með `--update-env` flaginu

## Prófun

Eftir að setja upp:

1. **Google Analytics**: Athugaðu Realtime skýrslur í Google Analytics
2. **Google Search Console**: Athugaðu að eignin sé staðfest og sitemap sé skráð
3. **Sitemap**: Opnaðu `https://tolvuhvislarinn.is/sitemap.xml` í vafra

## Vandamálaleit

- **Analytics virkar ekki**: Athugaðu að `NEXT_PUBLIC_GA_ID` sé rétt sett og PM2 sé endurræst
- **Search Console staðfesting virkar ekki**: Athugaðu að meta tagið sé í `<head>` á síðunni (opnaðu "View Page Source")
- **Sitemap finnst ekki**: Bíða eftir að Next.js byggi síðuna (getur tekið nokkrar mínútur eftir fyrstu byggingu)
