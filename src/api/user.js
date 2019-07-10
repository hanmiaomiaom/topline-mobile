
/**
 * 用户相关接口封装模块
 * 最佳实践：建议将所有的请求封装成一个个小函数，在需要的时候直接调用
 * 好处：1、好维护，统一管理
 *      2、可重用
 * 遵循一个原则:不要直接在组件中发请求，都封装成函数进行调用
 */
import request from '@/utils/request'

export const login = ({ mobile, code }) => {
  // 在此处可以写其他逻辑
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
// 没有其他逻辑的话可以直接一步简写
// export const  login = ({ mobile,code }) => request({
//         method: 'POST',
//         url: '/app/v1_0/authorizations',
//         data: {
//             mobile,
//             code
//         }
//     })
//
