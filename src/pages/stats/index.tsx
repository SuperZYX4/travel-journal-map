import { useState, useEffect, useCallback } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Network } from '@/network'
import { regions, regionGroups } from '@/components/china-map'
import './index.css'

export default function Stats() {
  const [visitedRegions, setVisitedRegions] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

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

  // 获取已打卡的省份详情
  const visitedRegionDetails = regions.filter(r => visitedRegions.includes(r.id))
  
  // 按区域分组统计
  const groupStats = Object.entries(regionGroups).map(([key, group]) => {
    const visited = group.ids.filter(id => visitedRegions.includes(id)).length
    const total = group.ids.length
    const percentage = Math.round((visited / total) * 100)
    return {
      key,
      name: group.name,
      visited,
      total,
      percentage,
      regionNames: group.ids
        .filter(id => visitedRegions.includes(id))
        .map(id => regions.find(r => r.id === id)?.name)
        .filter(Boolean)
    }
  })

  // 按区域类型展示
  const displayGroups = groupStats.filter(g => g.visited > 0)

  // 成就徽章
  const achievements = [
    { id: 'first', name: '初次打卡', desc: '完成第一次打卡', condition: visitedRegions.length >= 1, icon: '🌟' },
    { id: 'five', name: '足迹初现', desc: '打卡5个省份', condition: visitedRegions.length >= 5, icon: '🏃' },
    { id: 'ten', name: '旅途达人', desc: '打卡10个省份', condition: visitedRegions.length >= 10, icon: '🗺️' },
    { id: 'half', name: '半壁江山', desc: '打卡17个省份', condition: visitedRegions.length >= 17, icon: '🏔️' },
    { id: 'all', name: '环游中国', desc: '打卡全部34个省份', condition: visitedRegions.length >= 34, icon: '🎉' }
  ]

  return (
    <ScrollView className="page-container" scrollY>
      {/* 手帐风格头部 */}
      <View className="journal-header">
        <View className="header-decoration left">
          <Text className="decoration-text">✿</Text>
        </View>
        <View className="header-content">
          <Text className="block text-xl font-bold text-foreground text-center">足迹统计</Text>
          <Text className="block text-sm text-muted-foreground text-center mt-1">记录你的旅途故事</Text>
        </View>
        <View className="header-decoration right">
          <Text className="decoration-text">✿</Text>
        </View>
      </View>

      {loading ? (
        <View className="loading-state">
          <Text className="block text-muted-foreground">加载中...</Text>
        </View>
      ) : (
        <>
          {/* 总览卡片 */}
          <View className="overview-section">
            <Card className="overview-card">
              <CardContent className="p-6">
                <View className="overview-grid">
                  <View className="overview-item">
                    <Text className="block text-4xl font-bold text-primary">{visitedRegions.length}</Text>
                    <Text className="block text-sm text-muted-foreground mt-1">已打卡省份</Text>
                  </View>
                  <View className="overview-item">
                    <Text className="block text-4xl font-bold text-mint">{displayGroups.length}</Text>
                    <Text className="block text-sm text-muted-foreground mt-1">踏足区域</Text>
                  </View>
                  <View className="overview-item">
                    <Text className="block text-4xl font-bold text-journal-brown">{Math.round((visitedRegions.length / 34) * 100)}%</Text>
                    <Text className="block text-sm text-muted-foreground mt-1">完成进度</Text>
                  </View>
                </View>
              </CardContent>
            </Card>
          </View>

          {/* 已打卡省份列表 */}
          {visitedRegionDetails.length > 0 ? (
            <View className="visited-section">
              <View className="section-header">
                <Text className="block text-base font-bold">已打卡省份</Text>
                <Badge variant="secondary">{visitedRegionDetails.length}个</Badge>
              </View>
              <View className="visited-tags">
                {visitedRegionDetails.map(region => (
                  <View key={region.id} className="visited-tag">
                    <Text className="block text-sm">{region.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          ) : (
            <View className="empty-state">
              <Text className="text-4xl mb-3 block">🌍</Text>
              <Text className="block text-muted-foreground text-center">
                还没有打卡记录{'\n'}去首页点亮你的足迹吧！
              </Text>
            </View>
          )}

          {/* 区域统计 */}
          {displayGroups.length > 0 && (
            <View className="region-stats-section">
              <Text className="block text-base font-bold mb-4">区域完成度</Text>
              {displayGroups.map(group => (
                <Card key={group.key} className="region-card mb-3">
                  <CardContent className="p-4">
                    <View className="region-header">
                      <Text className="block font-medium">{group.name}</Text>
                      <Text className="block text-sm text-muted-foreground">
                        {group.visited}/{group.total}
                      </Text>
                    </View>
                    <View className="region-progress">
                      <View 
                        className="region-progress-fill" 
                        style={{ width: `${group.percentage}%` }}
                      />
                    </View>
                    <View className="region-names">
                      {group.regionNames.map((name, idx) => (
                        <Badge key={idx} variant="outline" className="region-badge">
                          {name}
                        </Badge>
                      ))}
                    </View>
                  </CardContent>
                </Card>
              ))}
            </View>
          )}

          {/* 成就徽章 */}
          <View className="achievements-section">
            <Text className="block text-base font-bold mb-4">成就徽章</Text>
            <View className="achievements-grid">
              {achievements.map(achievement => (
                <View 
                  key={achievement.id} 
                  className={`achievement-item ${achievement.condition ? 'unlocked' : 'locked'}`}
                >
                  <Text className="achievement-icon">{achievement.icon}</Text>
                  <Text className="block text-sm font-medium mt-2">{achievement.name}</Text>
                  <Text className="block text-xs text-muted-foreground mt-1">{achievement.desc}</Text>
                </View>
              ))}
            </View>
          </View>
        </>
      )}
    </ScrollView>
  )
}
