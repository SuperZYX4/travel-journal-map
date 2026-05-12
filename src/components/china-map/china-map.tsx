import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { regions, getRegionColor, attractionsData, Attraction } from './map-regions'
import './china-map.css'

interface ChinaMapProps {
  litRegions: string[]
  onRegionClick: (regionId: string) => void
  onRegionSelect: (regionId: string, regionName: string, attractions: Attraction[], isLit: boolean) => void
}

const StarIcon = () => (
  <Text className="star-icon">✦</Text>
)

const ChinaMap: React.FC<ChinaMapProps> = ({ litRegions, onRegionClick, onRegionSelect }) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const litSet = new Set(litRegions)

  const handleRegionClick = (region: typeof regions[0]) => {
    const isLit = litSet.has(region.id)
    const attractions = attractionsData[region.id] || []
    onRegionClick(region.id)
    onRegionSelect(region.id, region.name, attractions, isLit)
  }

  return (
    <View className="china-map-container">
      {/* 顶部装饰 */}
      <View className="map-corner top-left">❧</View>
      <View className="map-corner top-right">❧</View>
      <View className="map-corner bottom-left">❧</View>
      <View className="map-corner bottom-right">❧</View>

      {/* 地图区域 */}
      <View className="map-area">
        {/* 背景装饰 */}
        <View className="map-bg-decoration">
          <Text className="block map-bg-text">Travel</Text>
          <Text className="block map-bg-text-sub">足迹地图</Text>
        </View>

        {/* 省份节点 */}
        {regions.map((region) => {
          const isLit = litSet.has(region.id)
          const isHovered = hoveredRegion === region.id
          const colors = getRegionColor(isLit, isHovered)

          return (
            <View
              key={region.id}
              className={`region-node ${isLit ? 'lit' : ''} ${isHovered ? 'hovered' : ''}`}
              style={{
                left: `${region.left}%`,
                top: `${region.top}%`,
                backgroundColor: colors.bg,
                borderColor: colors.border,
              }}
              onClick={() => handleRegionClick(region)}
              onTouchStart={() => setHoveredRegion(region.id)}
              onTouchEnd={() => {
                setTimeout(() => setHoveredRegion(null), 200)
              }}
            >
              <Text className="block region-name">{region.name}</Text>
              {isLit && (
                <View className="region-star">
                  <StarIcon />
                </View>
              )}
            </View>
          )
        })}

        {/* 连接线装饰 */}
        <View className="connection-lines">
          <View className="line line-1"></View>
          <View className="line line-2"></View>
          <View className="line line-3"></View>
        </View>
      </View>

      {/* 底部装饰 */}
      <View className="map-divider">
        <Text className="block">· 旅行的意义 ·</Text>
      </View>
    </View>
  )
}

export default ChinaMap
