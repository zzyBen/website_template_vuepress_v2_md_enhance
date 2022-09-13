import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";


export default defineUserConfig({
    base: '/website_template_vuepress_v2_md_enhance/',
    dest: './docs',
    lang: 'en-US',
    title: "Ziyu Zhou's personal website",
    description: 'Just playing around',
    theme: defaultTheme({
        // default theme config
        navbar: [
            { text: 'Home', link: '/', },
            { text: 'About', link: '/about/' },
            { text: 'Projects', link: '/projects/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/zzyBen' },
        ],

        sidebar: {
            '/guide/': [
              {
                text: 'Guide',
                children: ['/guide/README.md', '/guide/getting-started.md'],
              },
            ],
        },
    }),
    plugins: [
      mdEnhancePlugin({
        // 启用幻灯片
        presentation: { plugins: ['math']},
        // tex: true,
      }),
    ],
})