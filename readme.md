# 华飞网站项目

这个项目是华飞网站的源代码，基于The Guild网站的架构进行开发。项目使用Next.js作为主要框架，结合了现代化的UI组件库。

## 项目结构

项目采用monorepo结构，使用pnpm作为包管理工具：

- `website/`: 主要网站代码
  - `ui/`: UI相关组件和样式
    - `components/`: 可复用UI组件
  - `pages/`: Next.js页面
  - `public/`: 静态资源
  - `lib/`: 工具函数和库

## UI组件库

项目包含一套完整的UI组件库，位于`website/ui/components/`目录下。这些组件包括：

### 基础组件

- **Avatar**: 显示用户头像，支持GitHub和Twitter头像
- **Button**: 按钮组件，支持primary和secondary两种变体
- **GuildButton**: 特殊样式的按钮，带有箭头动画效果
- **Heading**: 标题组件，支持大(lg)和中(md)两种尺寸
- **Description**: 描述文本组件，支持大(lg)和中(md)两种尺寸
- **Link**: 链接组件，带有默认样式
- **Input**: 输入框组件，支持验证状态
- **Image**: 图片组件，同时支持图片和视频格式
- **Video**: 视频组件，支持本地和远程视频

### 复合组件

- **BlogCardList**: 博客卡片列表，用于展示文章摘要
- **CopyToClipboard**: 复制到剪贴板功能组件
- **Newsletter**: 新闻订阅表单组件
- **TagList**: 标签列表组件，支持可点击和计数功能
- **Tooltip**: 工具提示组件，基于Radix UI
- **Comparison**: 比较组件，用于并排展示内容

## 技术栈

- **框架**: Next.js
- **样式**: Tailwind CSS, Stitches
- **包管理**: pnpm
- **UI库**: 自定义组件 + Radix UI

## 开发指南

### 安装依赖

```bash
pnpm i
```

### 运行开发服务器

```bash
cd website && pnpm dev
```

### 构建生产版本

```bash
pnpm build
pnpm export
```

## 博客系统

项目包含一个基于MDX的博客系统。博客文章存放在`website/pages/blog`目录中。

### 添加新博客文章

1. 在`website/pages/blog`创建新的MDX文件
2. 更新meta对象，包含标题、缩略图、作者等信息
3. 相关资源放在`website/public/blog-assets`目录中
4. 首次贡献需在`ui/authors.ts`文件中添加作者信息

## 组件使用示例

以下是一些常用组件的使用示例：

### Button组件

```jsx
<Button variant="primary">点击我</Button>
<Button variant="secondary">取消</Button>
```

### Newsletter组件

```jsx
<Newsletter className="my-8" />
```

### BlogCardList组件

```jsx
<BlogCardList articles={blogPosts} />
```

## 未来计划

- 优化移动端体验
- 增强组件的可访问性
- 添加更多交互式组件
- 改进性能和加载速度

## 贡献指南

欢迎贡献代码和内容！请确保遵循项目的代码风格和提交规范。
