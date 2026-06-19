# Minyan Zayit

![Minyan Zayit Logotype](/src/assets/mz_logo.png)

Website for Minyan Zayit, built in Astro, and deployed to GitHub Pages. Minyan Zayit...

> is an anti-Zionist traditional egalitarian community based in Cambridge and Somerville, Massachusetts. We seek to be a welcoming space for Jews who oppose Israel's occupation of Palestinian lands, policies of apartheid, and ongoing genocide.

## Development

To launch development server...

```sh
npm run dev
```

The site pulls events from a Proton calendar---point to this in `calendar.ics` in `data/config.json`. Site is rebuilt automatically at 2AM (UTC) every night to accomodate calendar changes.