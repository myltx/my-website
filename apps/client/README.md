# 导航网站
 - 用于记录自己平时使用或发现的好用的网站

# 技术栈
 - [nuxt3](https://nuxt.com/)
 - [logto](https://logto.io/)
 - [supabase](https://supabase.com/)
 - [unocss](https://unocss.dev/)

# 🚀 How To Start?
<!-- The mentioned operations below are based on the root directory of the current project, please be attentive to ensure there are no errors! -->
1. 添加 .env 配置文件
	```shell
	# logto 配置
	NUXT_LOGTO_ENDPOINT=
	NUXT_LOGTO_APP_ID=
	NUXT_LOGTO_APP_SECRET=
	NUXT_LOGTO_COOKIE_ENCRYPTION_KEY=
	# supabase 配置
	SUPABASE_URL=
	SUPABASE_KEY=
	SUPABASE_JWT_SECRET=

	```
2. 安装依赖
   ```shell
   npm install
   ```
3. 启动项目
   ```shell
   pnpm dev
   ```
# 注意事项
1. node 版本需要 20 以上

## TODO

- [X] logto 模块添加调试
- [x] logto 登录后用户数据添加到 supabase
- [ ] supabase api 封装
- [ ] 暗黑主题配置
- [ ] 展示布局开发
- [ ] 后台功能设计