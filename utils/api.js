import axios from './axios'
//获取token
export function fetchUsers(params) {
  return axios({
    url: '/api-uaa/oauth/token',
    method: 'POST',
    params
  })
}
//通过id查询菜单
export function list(params) {
  return axios({
    url: '/api-user/user/findById',
    method: 'POST',
    params
  })
}
//删除员工
export function delEmployee(params) {
  return axios({
    url: '/api-basedata/person/delete',
    method: 'POST',
    params
  })
}
//查询当前公司下所有员工
export function selectEmployee(params) {
  return axios({
    url: '/api-basedata/person/findAll',
    method: 'POST',
    params
  })
}
//通过id查询员工
export function idselectEmployee(params) {
  return axios({
    url: '/api-basedata/person/findById',
    method: 'POST',
    params
  })
}
//修改员工状态
export function reviseEmployee(params) {
  return axios({
    url: '/api-basedata/person/modifyEnabled',
    method: 'POST',
    params
  })
}
//新增，更新员工信息
export function addEmployee(params) {
  return axios({
    url: 'api-basedata/person/saveOrModify',
    method: 'POST',
    params
  })
}