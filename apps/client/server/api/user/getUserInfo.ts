import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  // 解析请求体，获取 userId
  const body = await readBody(event)
  const { userId } = body
  console.log(userId, 'userId')

  // 初始化 Supabase 客户端
  const client = await serverSupabaseClient(event)

  // 从请求中获取 Access Token（假设存在 Cookie 或 Header）
  //   const token = getCookie(event, 'access_token') // 从 Cookie 中提取 Token
  //   if (!token) {
  //     throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  //   }

  // 使用 Supabase 查询数据库
  const { data, error } = await client
    .from('user') // 替换为你的表名
    .select('*') // 选择所有字段，或者根据需要选择特定字段
    .eq('user_id', userId) // 'user_id' 是你查询的字段名

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Supabase query failed: ${error.message}`,
    })
  }

  // 如果查询到的 data 是数组且有数据，取第一个元素
  if (data && data.length > 0) {
    return data[0] // 直接返回第一个用户对象
  }

  // 如果没有找到数据，返回一个空对象或适当的错误信息
  return {} // 或者抛出 404 错误
})
