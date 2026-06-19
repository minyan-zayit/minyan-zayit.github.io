import { defineCollection } from "astro:content";
import ical from "node-ical";

import { siteConfig, icsSchema } from "./schemas/config";
const { calendar } = siteConfig;

export const icsCalendar = defineCollection({
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
            .filter((entry) => {
                const result = icsSchema.safeParse(entry);
                return result.success;
            })
    }
});

export const collections = { icsCalendar };