# Setup Instructions — AI Adoption Survey

## Step 1: Deploy the Apps Script (5 min)

1. Open your Google Sheet:
   https://docs.google.com/spreadsheets/d/1m5F55XaeR2hQz1VhrZlh3p-FWTGx82im2KUk9-DB0mw

2. Top menu → **Extensions → Apps Script**

3. Delete everything in the editor, paste the full contents of `apps-script.js`

4. Click **Save** (💾 icon)

5. Click **Deploy → New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**

6. Copy the **Web app URL** — looks like:
   `https://script.google.com/macros/s/AKfyc.../exec`

7. Open `index.html`, find this line near the bottom:
   ```
   const SCRIPT_URL = 'PASTE_YOUR_APPS_SCRIPT_URL_HERE';
   ```
   Replace with your URL.

---

## Step 2: Push to GitHub (3 min)

```bash
cd "/Users/anna/coding/AI Adoption /ai-adoption-survey"

git init
git add .
git commit -m "Initial: AI Adoption Survey landing page"

# Create repo on GitHub first at github.com/new
# then:
git remote add origin https://github.com/annakulakova-cmyk/ai-adoption-survey.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy on Vercel (2 min)

1. Go to vercel.com → **Add New Project**
2. Import your `ai-adoption-survey` repo from GitHub
3. Framework: **Other** (it's a static HTML file)
4. Click **Deploy**
5. Done — you get a URL like `ai-adoption-survey.vercel.app`

---

## That's it!

Share the Vercel URL with your team.
Responses appear in your Google Sheet automatically.
