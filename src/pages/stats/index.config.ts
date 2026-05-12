export default typeof definePageConfig === 'function'
  ? definePageConfig({ navigationBarTitleText: '足迹统计' })
  : { navigationBarTitleText: '足迹统计' }
