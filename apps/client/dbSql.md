# supabase 数据库表结构 sql


## 1. 用户表 (users)
 - 记录用户的基本信息，user_id 是 Logto 的用户 ID。
```shell
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,  -- 用户邮箱
  user_id VARCHAR(255) UNIQUE NOT NULL,  -- Logto 用户 ID
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```
## 2. 网站表 (websites)
 - 记录每个网站的信息，包括访问次数、推荐标记、排序、类别、详细描述等。
```shell
CREATE TABLE websites (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) REFERENCES users(user_id) ON DELETE CASCADE,  -- 外键关联用户表
  url VARCHAR(255) NOT NULL,  -- 网站的 URL
  title VARCHAR(255) NOT NULL,  -- 网站标题
  description TEXT,  -- 网站简要描述
  detailed_description TEXT,  -- 网站详细描述
  usage_scenario TEXT,  -- 网站的使用场景或用途
  rating INTEGER,  -- 网站评分（1-5分）
  review TEXT,  -- 用户对该网站的评价
  is_public BOOLEAN DEFAULT FALSE,  -- 是否是公开的
  is_recommended BOOLEAN DEFAULT FALSE,  -- 是否是推荐网站
  sort_order INTEGER DEFAULT 0,  -- 用户自定义的排序字段
  visit_count INTEGER DEFAULT 0,  -- 访问次数
  logo VARCHAR(255),  -- 网站的 logo URL
  image VARCHAR(255),  -- 网站的图片 URL
  tags TEXT[],  -- 网站标签
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
## 3. 网站访问记录表 (website_access_logs)
 - 记录用户访问每个网站的历史，并增加访问次数。
```shell
CREATE TABLE website_access_logs (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) REFERENCES users(user_id) ON DELETE CASCADE,  -- 外键关联用户表
  website_id INTEGER REFERENCES websites(id) ON DELETE CASCADE,  -- 外键关联网站表
  access_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- 记录访问时间
  UNIQUE(user_id, website_id, access_time)  -- 保证同一用户同一时间不会重复访问
);
```
## 4. 标签表 (tags)
 - 记录所有网站标签，方便用户对网站进行分类和筛选。
```shell
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL  -- 标签名称
);
```
## 5. 网站标签关联表 (website_tags)
 - 多对多关联表，用来为每个网站打上多个标签。
```shell
CREATE TABLE website_tags (
  website_id INTEGER REFERENCES websites(id) ON DELETE CASCADE,  -- 外键关联网站
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,  -- 外键关联标签
  PRIMARY KEY (website_id, tag_id)
);
```
## 7. 分类表 (categories)
 - 这个表用于存储所有的分类信息，网站的类别可以在这个表中定义。分类名称是唯一的，可以有描述字段来进一步解释这个分类。
```shell
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,  -- 分类名称
  description TEXT,  -- 分类描述（可选）
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- 创建时间
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- 更新时间
);
```
## 8. 网站与分类关联表 (website_categories)
 - 这个表是实现 多对多关系 的核心，允许一个网站有多个分类，反之亦然。
```shell
CREATE TABLE website_categories (
  website_id INTEGER REFERENCES websites(id) ON DELETE CASCADE,  -- 外键关联网站
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,  -- 外键关联分类
  PRIMARY KEY (website_id, category_id)
);
```