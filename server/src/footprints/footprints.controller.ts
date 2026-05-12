import { Controller, Get, Post, Body } from '@nestjs/common'

interface FootprintData {
  regions: string[]
}

@Controller('footprints')
export class FootprintsController {
  // 存储用户的足迹数据（内存存储，生产环境应使用数据库）
  private footprints: FootprintData = {
    regions: []
  }

  @Get()
  getFootprints() {
    return {
      code: 200,
      msg: 'success',
      data: this.footprints
    }
  }

  @Post()
  updateFootprints(@Body() body: FootprintData) {
    // 验证 regions 格式
    if (!body.regions || !Array.isArray(body.regions)) {
      return {
        code: 400,
        msg: 'Invalid regions data',
        data: null
      }
    }
    
    // 只保存有效的省份ID
    const validRegions = body.regions.filter(id => typeof id === 'string')
    this.footprints = { regions: validRegions }
    
    return {
      code: 200,
      msg: 'success',
      data: this.footprints
    }
  }
}
