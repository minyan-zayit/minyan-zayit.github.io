import { z } from 'astro/zod';
import config from '../data/config.json';

export const icsSchema = z.object({
  id: z.string(),
  summary: z.string(),
  description: z.string().optional(),
  location: z.string().optional(),
  start: z.date(),
  end: z.date(),
  url: z.string().url().optional(),
});

export const calendarSchema = z.object({
  ics: z.string().url(),
  public: z.string().url()
})

export const configSchema = z.object({
  name: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  email: z.string().email(),
  calendar: calendarSchema
})

export type SiteConfig = z.infer<typeof configSchema>;
export type Ics = z.infer<typeof icsSchema>;
export type Calendar = z.infer<typeof calendarSchema>;

export const siteConfig = configSchema.parse(config);