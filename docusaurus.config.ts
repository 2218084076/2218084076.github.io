import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: "Terry's blog",
    tagline: '全栈开发工程师 ⌨ | 野生摄影师 📷',
    favicon: 'img/88高科技.png',

    // Set the production url of your site here
    url: 'https://2218084076.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: '2218084076', // Usually your GitHub org/user name.
    projectName: '2218084076.github.io', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Terry',
            logo: {
                alt: 'My Site Logo',
                src: 'img/彩虹.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: '文档',
                },
                {
                    position: 'left',
                    label: '分类标签',
                    to: '/docs/tags'
                },
                {to: '/blog', label: '关于', position: 'left'},
                {
                    href: 'https://github.com/2218084076',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: '技术文档',
                    items: [
                        {
                            label: 'OpenAI GPT (RAG)',
                            to: '/docs/technology/2024-03-29-openai-api-usage-1',
                        },
                    ],
                },
                {
                    title: '摄影作品集',
                    items: [
                        {
                            label: '上海 · 三星堆',
                            to: '/docs/photography/20240413',
                        },
                        {
                            label: '上海·薯塔 · 华东电力设计院',
                            to: '/docs/photography/20240609',
                        },
                        {
                            label: '保利大剧院 · 上海 远香湖畔的文化万花筒',
                            to: '/docs/photography/2022-07-19',
                        },
                    ],
                },
                {
                    title: '使用教程',
                    items: [
                        {
                            label: '安卓中安装Clash',
                            to: '/docs/user_guide/2024-06-27-clash替代方案-docusaurus',
                        },
                        {
                            label: '在 Windows 中使用 v2ray',
                            to: '/docs/user_guide/2024-03-29-win-v2ray',
                        },
                    ],
                },
                {
                    title: '社交',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/2218084076',
                        },
                        {
                            label: 'X',
                            href: 'https://x.com/Stuartbb25',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Terry. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
