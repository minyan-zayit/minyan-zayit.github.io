import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import * as ical from "node-ical";

import { siteConfig, icsSchema } from "./schemas/config";
const { calendar } = siteConfig;

const content = defineCollection({
    loader: glob({
        pattern: "*.md",
        base: "./src/content",
    }),
});

const icsCalendar = defineCollection({
    loader: async () => {
        const data = await ical.async.fromURL(calendar.ics);

        return Object.values(data)
            .filter((item): item is ical.VEvent => !!item && item.type === "VEVENT")
            .map((event) => ({
                id: event.uid,
                summary: event.summary,
                description: event.description,
                location: event.location,
                start: event.start,
                end: event.end,
                url: event.url
            }))
    },
    schema: icsSchema
});

export const collections = { icsCalendar, content, };