# 1. Init VuePress V2 Repo

1. Initialize your project
    ```bash
    git init
    yarn init
    ```

1. Install VuePress locally
    ```bash
    yarn add -D vuepress@next
    ```

1. Add some scripts to `package.json`, set source code dir as `src`
    ```json
    {
        "scripts": {
            "dev": "vuepress dev src",
            "build": "vuepress build src"
        }
    }
    ```

1. Add the default temp and cache directory to `.gitignore` file (Warning: this file must be **UTF-8** or **ASCII** to work correctly)
    ```bash
    echo 'node_modules' >> .gitignore
    echo '.temp' >> .gitignore
    echo '.cache' >> .gitignore
    ```

1. Create your first document
    ```bash
    mkdir docs
    mkdir src
    echo '# Hello VuePress' > src/README.md
    ```

# 2. Config NavBar and SideBar
1. Add config file at `src/.vuepress/config.js`
    **Warning**:
    - `base` must be set to the repo name.
    - `dest` should be set to the output folder
    ```js
    import { defineUserConfig } from 'vuepress'

    export default defineUserConfig({
        base: '/website_template_vuepress_v2/',
        dest: './docs',
        lang: 'en-US',
        title: 'Hello VuePress',
        description: 'Just playing around',
    })
    ```
2. Use default theme
    ```js
    import { defaultTheme } from 'vuepress'

    export default  {
      theme: defaultTheme({
        // default theme config
          navbar: [
          {
            text: 'Home',
            link: '/',
          },
        ],
      }),
    }
    ```
3. Add Nav Bar
   Tutorial
    ```js
    export default {
      theme: defaultTheme({
        navbar: [
          // NavbarItem
          { text: 'Foo', link: '/foo/', },
          // NavbarGroup
          { text: 'Group', children: ['/group/foo.md', '/group/bar.md'],},
          // string - page file path
          '/bar/README.md',
        ],
      }),
    }
    ```

    My config
    ```js
    export default {
      theme: defaultTheme({
        navbar: [
          { text: 'Home', link: '/', },
          { text: 'About', link: '/about/' },
          { text: 'Projects', link: '/projects/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'GitHub', link: 'https://github.com/zzyBen' },
        ],
      }),
    }
    ```
4. Add Side Bar
    Tutorial
    ```js
    export default {
      theme: defaultTheme({
        // sidebar object
        // pages under different sub paths will use different sidebar
        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              children: ['/guide/README.md', '/guide/getting-started.md'],
            },
          ],
          '/reference/': [
            {
              text: 'Reference',
              children: ['/reference/cli.md', '/reference/config.md'],
            },
          ],
        },
      }),
    }
    ```

    My config
    ```js
    export default {
      theme: defaultTheme({
        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              children: ['/guide/README.md', '/guide/getting-started.md'],
            },
          ],
        },
      }),
    }
    ```

