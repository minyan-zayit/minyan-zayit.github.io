import { z } from 'astro/zod';
import config from '../data/config.json';

export const icsSchema = z.object({
  id: z.string(),
  summary: z.string(),
  description: z.string().optional(),
  location: z.string().optional(),
  start: z.date(),
  end: z.date(),
  url: z.url().optional(),
});

export const calendarSchema = z.object({
  ics: z.url(),
  public: z.url()
})

export const configSchema = z.object({
  name: z.string(),
  subtitle: z.string().optional(),
  donate: z.url(),
  newsletter: z.url(),
  email: z.email(),
  calendar: calendarSchema
})

export type SiteConfig = z.infer<typeof configSchema>;
export type Ics = z.infer<typeof icsSchema>;
export type Calendar = z.infer<typeof calendarSchema>;

export const siteConfig = configSchema.parse(config);