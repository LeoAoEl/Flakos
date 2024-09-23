import { defineCollection, z } from "astro:content";
const rooms = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      type: z.string(),
      title: z.string(),
      description: z.string(),
      image: image(),
      beds: z.string(),
      bathrooms: z.string(),
      parking: z.string(),
      extras: z.object({
        wifi: z.string(),
        showers: z.string(),
        laundry: z.string(),
        air_conditioning: z.string(),
        coffee_maker: z.string(),
        tv: z.string(),
        fridge: z.string(),
        dishwasher: z.string(),
        kitchen: z.string(),
        washing_machine: z.string(),
      }),
      gallery: z.string(),
      prices: z.object({
        peak: z.string(),
        regular: z.string(),
        special: z.string(),
      }),
    }),
});

export const collections = { rooms };
