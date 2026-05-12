import { useState, useEffect, useCallback } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { ChinaMap, regions } from '@/components/china-map'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { Network } from '@/network'
import { Attraction } from '@/components/china-map/map-regions'
import './index.css'

interface SelectedRegion {
  id: string
  name: string
  attractions: Attraction[]
  isLit: boolean
}

export default function Index() {
  const [visitedRegions, setVisitedRegions] = useState<string[]>([])
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [pendingAction, setPendingAction] = useState<{ type: 'add' | 'remove'; region: { id: string; name: string } } | null>(null)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [selectedRegion, setSelectedRegion] = useState<SelectedRegion | null>(null)

  // 加载已打卡区域
  const loadVisitedRegions = useCallback(async () => {
    try {
      setLoading(true)
      const res = await Network.request({
        url: '/api/footprints'
      })
      console.log('加载足迹数据:', res.data)
      if (res.data?.data?.regions) {
        setVisitedRegions(res.data.data.regions)
      }
    } catch (error) {
      console.error('加载足迹失败:', error)
      // 使用本地存储作为降级方案
      const localData = Taro.getStorageSync('visitedRegions')
      if (localData) {
        setVisitedRegions(localData)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadVisitedRegions()
  }, [loadVisitedRegions])

  // 处理区域点击
  const handleRegionClick = useCallback((regionId: string) => {
    const region = regions.find(r => r.id === regionId)
    if (!region) return
    
    const isVisited = visitedRegions.includes(regionId)
    setPendingAction({
      type: isVisited ? 'remove' : 'add',
      region: { id: regionId, name: region.name }
    })
    setShowConfirmDialog(true)
  }, [visitedRegions])

  // 处理区域选择（用于显示景点推荐）
  const handleRegionSelect = useCallback((regionId: string, regionName: string, attractions: Attraction[], isLit: boolean) => {
    setSelectedRegion({
      id: regionId,
      name: regionName,
      attractions,
      isLit
    })
  }, [])

  // 确认操作
  const confirmAction = useCallback(async () => {
    if (!pendingAction) return

    const { type, region } = pendingAction
    let newVisitedRegions: string[]

    if (type === 'add') {
      newVisitedRegions = [...visitedRegions, region.id]
      setToastMessage(`🎉 恭喜！${region.name}打卡成功！`)
    } else {
      newVisitedRegions = visitedRegions.filter(id => id !== region.id)
      setToastMessage(`📍 已取消${region.name}打卡`)
    }

    setVisitedRegions(newVisitedRegions)
    setShowConfirmDialog(false)
    setPendingAction(null)

    // 保存到后端
    try {
      await Network.request({
        url: '/api/footprints',
        method: 'POST',
        data: { regions: newVisitedRegions }
      })
      console.log('保存足迹成功')
    } catch (error) {
      console.error('保存足迹失败:', error)
      // 本地存储降级
      Taro.setStorageSync('visitedRegions', newVisitedRegions)
    }

    // 显示成功提示
    setShowSuccessToast(true)
    setTimeout(() => setShowSuccessToast(false), 2000)
  }, [pendingAction, visitedRegions])

  // 计算统计数据
  const totalRegions = 34
  const visitedCount = visitedRegions.length
  const percentage = Math.round((visitedCount / totalRegions) * 100)

  return (
    <View className="page-container">
      {/* 手帐风格头部 */}
      <View className="journal-header">
        <View className="header-decoration left">
          <Text className="decoration-text">✿</Text>
        </View>
        <View className="header-content">
          <Text className="block text-xl font-bold text-foreground text-center">旅行足迹</Text>
          <Text className="block text-sm text-muted-foreground text-center mt-1">记录每一段美好旅程</Text>
        </View>
        <View className="header-decoration right">
          <Text className="decoration-text">✿</Text>
        </View>
      </View>

      {/* 打卡统计卡片 */}
      <View className="stats-card">
        <View className="stats-content">
          <View className="stats-main">
            <Text className="block text-3xl font-bold text-primary">{visitedCount}</Text>
            <Text className="block text-sm text-muted-foreground">已打卡省份</Text>
          </View>
          <View className="stats-divider" />
          <View className="stats-secondary">
            <Text className="block text-2xl font-bold text-mint">{percentage}%</Text>
            <Text className="block text-sm text-muted-foreground">完成度</Text>
          </View>
        </View>
        
        {/* 进度条 */}
        <View className="progress-bar">
          <View 
            className="progress-fill" 
            style={{ width: `${percentage}%` }}
          />
        </View>
        
        <Text className="block text-xs text-muted-foreground text-center mt-2">
          已点亮 {visitedCount}/{totalRegions} 个省级行政区
        </Text>
      </View>

      {/* 地图区域 */}
      <View className="map-section">
        {loading ? (
          <View className="map-loading">
            <Text className="block text-muted-foreground">加载地图中...</Text>
          </View>
        ) : (
          <ChinaMap
            litRegions={visitedRegions}
            onRegionClick={handleRegionClick}
            onRegionSelect={handleRegionSelect}
          />
        )}
      </View>

      {/* 操作提示 */}
      <View className="tips-section">
        <Text className="block text-xs text-muted-foreground text-center">
          💡 点击地图中的省份区域即可打卡/取消打卡
        </Text>
      </View>

      {/* 确认对话框 */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <View className="dialog-content">
          <View className="dialog-icon">
            <Text className="text-3xl">{pendingAction?.type === 'add' ? '📍' : '❓'}</Text>
          </View>
          <Text className="block text-lg font-bold text-center mb-2">
            {pendingAction?.type === 'add' ? '确认打卡' : '取消打卡'}
          </Text>
          <Text className="block text-center text-muted-foreground mb-4">
            {pendingAction?.type === 'add' 
              ? `确定要在 ${pendingAction?.region.name} 留下你的足迹吗？`
              : `确定要取消 ${pendingAction?.region.name} 的打卡记录吗？`
            }
          </Text>
          <View className="dialog-actions">
            <Button 
              variant="outline" 
              onClick={() => setShowConfirmDialog(false)}
            >
              <Text>取消</Text>
            </Button>
            <Button 
              onClick={confirmAction}
              className={pendingAction?.type === 'remove' ? 'bg-destructive' : ''}
            >
              <Text>{pendingAction?.type === 'add' ? '确认打卡' : '确认取消'}</Text>
            </Button>
          </View>

          {/* 景点推荐 */}
          {selectedRegion && selectedRegion.attractions && selectedRegion.attractions.length > 0 && (
            <View className="attraction-section">
              <Text className="block text-base font-bold text-center mb-3">
                🌟 {selectedRegion.name}著名景点推荐
              </Text>
              <View className="attraction-list">
                {selectedRegion.attractions.map((attraction, index) => (
                  <View key={index} className="attraction-item">
                    <Text className="block text-sm font-bold text-primary">{attraction.name}</Text>
                    <Text className="block text-xs text-muted-foreground mt-1">{attraction.description}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </Dialog>

      {/* 成功提示 */}
      {showSuccessToast && (
        <View className="success-toast">
          <Text className="block text-center">{toastMessage}</Text>
        </View>
      )}
    </View>
  )
}
