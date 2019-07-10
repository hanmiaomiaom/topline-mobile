const USER_KEY = 'user'
// 获取数据
export const getUser = () => JSON.parse(window.localStorage.getItem(USER_KEY))
// 保存数据
export const saveUser = () => window.localStorage.setItem(USER_KEY, JSON.stringify(USER_KEY))
// 删除数据
export const removeUser = () => window.localStorage.removeItem(USER_KEY)
