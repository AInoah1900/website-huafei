import { Video } from '@/components';
import { CodeSandbox } from '@/shared/embed/code-sandbox';
import { Gfycat } from '@/shared/embed/gfycat';
import { LinkPreview } from '@/shared/embed/link-preview';
import { OgCard } from '@/shared/embed/og-card';
import { StackBlitz } from '@/shared/embed/stack-blitz';
import { Tweet } from '@/shared/embed/tweet';
import { Callout, defineConfig, Steps, useConfig } from '@theguild/components';

function ensureAbsolute(url: string): string {
  return url.startsWith('/') ? `https://the-guild.dev${url}` : url;
}

const siteDescription = 'AI数字智能产业领导者，提供智能数据分析、决策支持系统和企业数字化转型解决方案。';
const siteName = '华飞科技';

export default defineConfig({
  backgroundColor: {
    dark: '15,17,20',
    light: '250,250,250',
  },
  docsRepositoryBase: 'https://github.com/the-guild-org/the-guild-website/tree/master/website', // base URL for the docs repository
  head: function useHead() {
    const { frontMatter, title: pageTitle, normalizePagesResult } = useConfig();

    const title = `${pageTitle} (${siteName})`;
    const {
      description = `${siteName}: ${siteDescription}`,
      canonical,
      image,
      thumbnail,
    } = frontMatter;

    // Get the current page path
    // Because it shows the full path, from top to bottom,
    // we need to get the last one to get the current page.
    const pagePath = normalizePagesResult.activePath[normalizePagesResult.activePath.length - 1];

    if (!pagePath) {
      throw new Error('No path found for a page.');
    }

    if (!pagePath.route) {
      throw new Error('No route found for page.');
    }

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={canonical ?? ensureAbsolute(pagePath.route)} />
        <meta
          name="og:image"
          content={ensureAbsolute(
            thumbnail ||
              image ||
              `https://og-image.the-guild.dev/?product=GUILD&title=${encodeURI(pageTitle)}`,
          )}
        />
        <meta property="og:site_name" content={siteName} />
      </>
    );
  },
  components: {
    Callout,
    Video,
    CodeSandbox,
    LinkPreview,
    OgCard,
    Gfycat,
    Tweet,
    StackBlitz,
    Steps,
  },
  websiteName: '华飞科技',
  description: siteDescription,
  search: {
    placeholder: '搜索…',
  },
});
