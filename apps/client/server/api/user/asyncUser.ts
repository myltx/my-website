import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  // 解析请求体，获取 userId
  const body = await readBody(event)
  const { user } = body
  console.log(user, 'user')

  // 初始化 Supabase 客户端
  const client = await serverSupabaseClient(event)

  // 从请求中获取 Access Token（假设存在 Cookie 或 Header）
  //   const token = getCookie(event, 'access_token') // 从 Cookie 中提取 Token
  //   if (!token) {
  //     throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  //   }

  let userInfo

  // 使用 Supabase 查询数据库
  const { data, error } = await client
    .from('cities')
    .select('name, country_id')
    .eq('name', 'The Shire')

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Supabase query failed: ${error.message}`,
    })
  }

  // 返回用户信息和数据库查询结果
  return {
    data,
    userInfo,
  }
})
