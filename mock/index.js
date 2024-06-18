import Mock from 'mockjs'

const arr = []
for (let i = 0; i < arr.length; i++) {
  arr.push({
    id: Mock.mock('@id'),
    name: Mock.mock('@name'),
    place: Mock.mock('@place'),
    address: Mock.mock('@address')
  })
}
export default [
  {
    url: '/api/list',
    method: 'get',
    response: () => {
      return arr
    }
  },
  {
    url: '/api/delete/id',
    method: 'delete',
    response: (req) => {
      const index = arr.findIndex((item) => item.id === req.query.id)
      if (index > -1) {
        arr.splice(index, 1)
        return {
          code: 20000,
          message: '删除成功'
        }
      }
    }
  }

]
