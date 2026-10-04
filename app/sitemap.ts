import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://ack-techs.com/', priority: 1 },
    ...projects.map((project) => ({
      url: `https://ack-techs.com/projeler/${project.slug}/`,
      priority: 0.8,
    })),
  ];
}
