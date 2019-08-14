const data = [
  {id:1, name: 'wu'},
  {id:2, name: 'q'},
  {id:3, name: '2'},
]

const getTaxListPayable = {
  errorMessage: null,
  hasAuthoity: true,
  message: null,
  needLogin: false,
  result: true,
  data: [
    {id:1, receivableNo: '1', receiptNo: '2', type: '3', typeSettlement: '4', statusSettlement: '5', amountSettlement: '6', settlementTime: '7'},
  ]
}

const unTaxPayable = {
  errorMessage: null,
  hasAuthoity: true,
  message: '反核销成功',
  needLogin: false,
  result: true,
  data: null,
}

const routerAry = [
  {path: '/data', data: data, type: 'get'},
  {path: '/', data: 'hi', type: 'get'},
  {path: '/getTaxListPayable.action', data: getTaxListPayable, type: 'post'},
  {path: '/unTaxPayable.action', data: unTaxPayable, type: 'post'},

];

module.exports = routerAry;