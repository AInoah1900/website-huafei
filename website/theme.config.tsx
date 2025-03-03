// 主题配置
import { Video } from '@/components';
import { CodeSandbox } from '@/shared/embed/code-sandbox';
import { Gfycat } from '@/shared/embed/gfycat';
import { LinkPreview } from '@/shared/embed/link-preview';
import { OgCard } from '@/shared/embed/og-card';
import { StackBlitz } from '@/shared/embed/stack-blitz';
import { Tweet } from '@/shared/embed/tweet';
import { Callout, defineConfig, Steps, useConfig } from '@theguild/components';
// 导入 Image 组件（如果需要使用图片）
import Image from 'next/image';

// 确保 URL 是绝对路径
function ensureAbsolute(url: string): string {
  return url.startsWith('/') ? `http://localhost:3000${url}` : url;
}

// 网站描述和名称
const siteDescription = 'AI数字智能产业领导者，提供智能数据分析、决策支持系统和企业数字化转型解决方案。';
const siteName = '华飞科技';

// 导出默认配置
export default defineConfig({
  // 背景颜色配置
  backgroundColor: {
    dark: '15,17,20',
    light: '250,250,250',
  },
  docsRepositoryBase: 'https://github.com/the-guild-org/the-guild-website/tree/master/website',
  // 修改 logo 配置

  // 自定义 head 标签
  head: function useHead() {
    const { frontMatter, title: pageTitle, normalizePagesResult } = useConfig();

    const title = `${pageTitle} (${siteName})`;
    const {
      description = `${siteName}: ${siteDescription}`,
      canonical = 'http://localhost:3000',
      image = 'http://localhost:3000/static/your-logo.svg',
      thumbnail = 'http://localhost:3000/static/your-logo.svg',
    } = frontMatter;

    // 获取当前页面路径
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
  // 组件配置
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
  // 网站名称和描述
  websiteName: '华飞科技',
  description: siteDescription,
  // 搜索配置
  search: {
    placeholder: '搜索…',
  },
});
