# 旅游手账地图应用

一个利用Coze平台通过AI codings实现的基于Taro框架构建的跨平台旅游手账应用，支持微信小程序、抖音小程序、H5等多端部署，集成了地图功能、行程记录和旅游分享。



https://github.com/user-attachments/assets/983abb26-f65f-4f78-9290-ce3cddfd7e6c


## 项目特点

- 🌍 跨平台支持：微信小程序、抖音小程序、H5网页
- 🗺️ 集成地图功能，支持地点标记和路线规划
- 📱 响应式设计，适配各种设备
- 🎨 现代化UI设计，使用Tailwind CSS
- ⚡ 高性能React应用，使用Zustand状态管理
- 🛡️ 完善的错误处理和调试机制
- 📝 丰富的组件库，包括UI组件和工具组件

## 技术栈

- **核心框架**: Taro 4.1.9 (跨平台框架)
- **前端**: React 18 + TypeScript
- **样式**: Tailwind CSS 4.1.18
- **状态管理**: Zustand 5.0.9
- **图标**: Lucide React Icons
- **构建工具**: Vite 4.2.0 + pnpm
- **后端**: NestJS (Node.js)
- **其他依赖**:
  - @tarojs/components (Taro组件库)
  - date-fns (日期处理)
  - clsx (条件类名)
  - class-variance-authority (样式变体)
  - tailwindcss-animate (动画效果)

## 项目结构

```
旅游手账地图-projects/
├── src/                 # 前端源代码
│   ├── components/      # UI组件
│   ├── lib/            # 工具函数
│   ├── pages/          # 页面组件
│   ├── presets/        # 环境预设
│   └── types/          # TypeScript类型定义
├── server/             # 后端服务
│   ├── src/            # NestJS源代码
│   └── package.json    # 后端依赖
├── config/             # 配置文件
├── scripts/            # 部署和构建脚本
└── assets/             # 静态资源
```

## 功能特性

### 核心功能
- 📍 地图集成：支持地点标记、路线规划和位置搜索
- 📝 手账记录：记录旅行日志、照片和感想
- 📸 照片管理：上传和管理旅行照片
- 🗺️ 路线规划：规划旅行路线和景点
- 📊 数据统计：旅行数据统计和可视化
- 📱 多端同步：数据在不同平台间同步

### UI组件
- Alert - 警告提示组件
- Avatar - 用户头像组件
- Button - 按钮组件
- Card - 卡片组件
- Calendar - 日历组件
- Dialog - 对话框组件
- Input - 输入框组件
- NavigationMenu - 导航菜单
- Popover - 弹出框组件

## 运行方式

### 开发模式

```bash
# 启动开发服务器（前端+后端）
pnpm dev

# 单独启动前端
pnpm dev:web  # H5网页
pnpm dev:weapp # 微信小程序
pnpm dev:tt    # 抖音小程序

# 单独启动后端
pnpm dev:server
```

### 构建项目

```bash
# 构建所有平台
pnpm build

# 构建特定平台
pnpm build:web    # H5网页
pnpm build:weapp  # 微信小程序
pnpm build:tt     # 抖音小程序
pnpm build:server # 后端服务
```

### 预览

```bash
pnpm preview:weapp # 预览微信小程序
pnpm preview:tt    # 预览抖音小程序
```

## 部署

1. 安装依赖: `pnpm install`
2. 配置环境变量
3. 构建项目: `pnpm build`
4. 部署到对应平台

## 开发规范

- 使用TypeScript进行类型安全开发
- 遵循ESLint代码规范
- 使用Tailwind CSS进行样式开发
- 组件化开发，提高代码复用性

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 许可证

本项目采用MIT许可证。

### 组件库

#### UI 组件

UI 组件位于 `@/components/ui`，推荐按需引入：

```typescript
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
```

UI 组件列表:

Accordion,Alert,AlertDialog,AspectRatio,Avatar,Badge,Breadcrumb,Button,ButtonGroup,Calendar,Card,Carousel,Checkbox,CodeBlock,Collapsible,Command,ContextMenu,Dialog,Drawer,DropdownMenu,Field,HoverCard,Input,InputGroup,InputOTP,Label,Menubar,NavigationMenu,Pagination,Popover,Portal,Progress,RadioGroup,Resizable,ScrollArea,Select,Separator,Sheet,Skeleton,Slider,Sonner,Switch,Table,Tabs,Textarea,Toast,Toggle,ToggleGroup,Tooltip

#### Taro 原生组件

可以使用的 Taro 组件（UI 未覆盖）

```typescript
import { View, Text, Icon, Image } from '@tarojs/components'
```

Taro 原生组件列表：

Text,Icon,RichText,CheckboxGroup,Editor,Form,Picker,PickerView,PickerViewColumn,Radio,FunctionalPageNavigator,NavigationBar,Navigator,TabItem,Camera,Image,Video,ScrollView,Swiper,SwiperItem,View

### 路径别名

项目配置了 `@/*` 路径别名指向 `src/*`：

```typescript
import { SomeComponent } from '@/components/some-component'
import { useUserStore } from '@/stores/user'
```

### 代码模板

#### 页面组件 (TypeScript + React)

```tsx
// src/pages/example/index.tsx
import { View } from '@tarojs/components'
import { useLoad, useDidShow } from '@tarojs/taro'
import type { FC } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import './index.css'

const ExamplePage: FC = () => {
  useLoad(() => {
    console.log('Page loaded.')
  })

  useDidShow(() => {
    console.log('Page showed.')
  })

  return (
    <View className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Hello Taro!</CardTitle>
          <CardDescription>
            页面布局用 Taro 基础组件，交互与视觉优先用项目内置 UI 组件。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <View className="text-sm text-muted-foreground">
            组件位于 src/components/ui，推荐按需从 @/components/ui/* 引入。
          </View>
        </CardContent>
        <CardFooter className="justify-end">
          <Button size="sm" onClick={() => console.log('clicked')}>
            点击
          </Button>
        </CardFooter>
      </Card>
    </View>
  )
}

export default ExamplePage
```

#### 页面配置

```typescript
// src/pages/example/index.config.ts
import { definePageConfig } from '@tarojs/taro'

export default definePageConfig({
  navigationBarTitleText: '示例页面',
  enablePullDownRefresh: true,
  backgroundTextStyle: 'dark',
})
```

#### 应用配置

```typescript
// src/app.config.ts
import { defineAppConfig } from '@tarojs/taro'

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/example/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'App',
    navigationBarTextStyle: 'black',
  },
  // TabBar 配置 (可选)
  // tabBar: {
  //   list: [
  //     { pagePath: 'pages/index/index', text: '首页' },
  //   ],
  // },
})
```

### 发送请求

**IMPORTANT: 禁止直接使用 Taro.request、Taro.uploadFile、Taro.downloadFile，使用 Network.request、Network.uploadFile、Network.downloadFile 替代。**

Network 是对 Taro.request、Taro.uploadFile、Taro.downloadFile 的封装，自动添加项目域名前缀，参数与 Taro 一致。

✅ 正确使用方式

```typescript
import { Network } from '@/network'

// GET 请求
const data = await Network.request({
  url: '/api/hello'
})

// POST 请求
const result = await Network.request({
  url: '/api/user/login',
  method: 'POST',
  data: { username, password }
})

// 文件上传
await Network.uploadFile({
  url: '/api/upload',
  filePath: tempFilePath,
  name: 'file'
})

// 文件下载
await Network.downloadFile({
  url: '/api/download/file.pdf'
})
```

❌ 错误用法

```typescript
import Taro from '@tarojs/taro'

// ❌ 会导致自动域名拼接无法生效，除非是特殊指定域名
const data = await Network.request({
  url: 'http://localhost/api/hello'
})

// ❌ 不要直接使用 Taro.request
await Taro.request({ url: '/api/hello' })

// ❌ 不要直接使用 Taro.uploadFile
await Taro.uploadFile({ url: '/api/upload', filePath, name: 'file' })
```

### Zustand 状态管理

```typescript
// src/stores/user.ts
import { create } from 'zustand'

interface UserState {
  userInfo: UserInfo | null
  token: string
  setUserInfo: (info: UserInfo) => void
  setToken: (token: string) => void
  logout: () => void
}

interface UserInfo {
  id: string
  name: string
  avatar: string
}

export const useUserStore = create<UserState>((set) => ({
  userInfo: null,
  token: '',
  setUserInfo: (info) => set({ userInfo: info }),
  setToken: (token) => set({ token }),
  logout: () => set({ userInfo: null, token: '' }),
}))
```

### Taro 生命周期 Hooks

```typescript
import {
  useLoad,             // 页面加载 (onLoad)
  useReady,            // 页面初次渲染完成 (onReady)
  useDidShow,          // 页面显示 (onShow)
  useDidHide,          // 页面隐藏 (onHide)
  usePullDownRefresh,  // 下拉刷新 (onPullDownRefresh)
  useReachBottom,      // 触底加载 (onReachBottom)
  useShareAppMessage,  // 分享 (onShareAppMessage)
  useRouter,           // 获取路由参数
} from '@tarojs/taro'
```

### 路由导航

```typescript
import Taro from '@tarojs/taro'

// 保留当前页面，跳转到新页面
Taro.navigateTo({ url: '/pages/detail/index?id=1' })

// 关闭当前页面，跳转到新页面
Taro.redirectTo({ url: '/pages/detail/index' })

// 跳转到 tabBar 页面
Taro.switchTab({ url: '/pages/index/index' })

// 返回上一页
Taro.navigateBack({ delta: 1 })

// 获取路由参数
const router = useRouter()
const { id } = router.params
```

### 图标使用 (lucide-react-taro)

**IMPORTANT: 禁止使用 lucide-react，必须使用 lucide-react-taro 替代。**

lucide-react-taro 是 Lucide 图标库的 Taro 适配版本，专为小程序环境优化，API 与 lucide-react 一致：

```tsx
import { View } from '@tarojs/components'
import { House, Settings, User, Search, Camera, Zap } from 'lucide-react-taro'

const IconDemo = () => {
  return (
    <View className="flex gap-4">
      {/* 基本用法 */}
      <House />
      {/* 自定义尺寸和颜色 */}
      <Settings size={32} color="#1890ff" />
      {/* 自定义描边宽度 */}
      <User size={24} strokeWidth={1.5} />
      {/* 绝对描边宽度（描边不随 size 缩放） */}
      <Camera size={48} strokeWidth={2} absoluteStrokeWidth />
      {/* 组合使用 */}
      <Zap size={32} color="#ff6b00" strokeWidth={1.5} className="my-icon" />
    </View>
  )
}
```

常用属性：
- `size` - 图标大小（默认 24）
- `color` - 图标颜色（默认 currentColor，小程序中建议显式设置）
- `strokeWidth` - 线条粗细（默认 2）
- `absoluteStrokeWidth` - 绝对描边宽度，启用后描边不随 size 缩放
- `className` / `style` - 自定义样式

更多图标请访问：https://lucide.dev/icons

### TabBar 图标生成 (CLI 工具)

**IMPORTANT: 微信小程序的 TabBar 不支持 base64 或 SVG 图片，必须使用本地 PNG 文件。**

lucide-react-taro 提供了 CLI 工具来生成 TabBar 所需的 PNG 图标：

```bash
# 生成带选中状态的图标
npx taro-lucide-tabbar House Settings User -c "#999999" -a "#1890ff"

# 指定输出目录和尺寸
npx taro-lucide-tabbar House Settings User -c "#999999" -a "#1890ff" -o ./src/assets/tabbar -s 81
```

CLI 参数：
- `--color, -c` (默认 #000000): 图标颜色
- `--active-color, -a`: 选中状态颜色
- `--size, -s` (默认 81): 图标尺寸
- `--output, -o` (默认 ./tabbar-icons): 输出目录
- `--stroke-width` (默认 2): 描边宽度

在 `app.config.ts` 中使用生成的图标：

> IMPORTANT：iconPath 和 selectedIconPath 必须以 `./` 开头，否则图标无法渲染

```typescript
export default defineAppConfig({
  tabBar: {
    color: '#999999',
    selectedColor: '#1890ff',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/tabbar/house.png',
        selectedIconPath: './assets/tabbar/house-active.png',
      },
      {
        pagePath: 'pages/settings/index',
        text: '设置',
        iconPath: './assets/tabbar/settings.png',
        selectedIconPath: './assets/tabbar/settings-active.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '用户',
        iconPath: './assets/tabbar/user.png',
        selectedIconPath: './assets/tabbar/user-active.png',
      },
    ],
  },
})

### Tailwind CSS 样式开发

IMPORTANT：必须使用 tailwindcss 实现样式，只有在必要情况下才能 fallback 到 css / less

> 项目已集成 Tailwind CSS 4.x + weapp-tailwindcss，支持跨端原子化样式：

```tsx
import { View, Text } from '@tarojs/components'
import { Button } from '@/components/ui/button'

<View className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <Text className="text-2xl font-bold text-blue-600 mb-4">标题</Text>
  <View className="w-full px-4">
    <Button className="w-full" size="lg">
      按钮
    </Button>
  </View>
</View>
```

### 性能优化

#### 图片懒加载

```tsx
import { Image } from '@tarojs/components'

<Image src={imageUrl} lazyLoad mode="aspectFill" />
```

#### 虚拟列表

```tsx
import { VirtualList } from '@tarojs/components'

<VirtualList
  height={500}
  itemData={list}
  itemCount={list.length}
  itemSize={100}
  renderItem={({ index, style, data }) => (
    <View style={style}>{data[index].name}</View>
  )}
/>
```

#### 分包加载

```typescript
// src/app.config.ts
export default defineAppConfig({
  pages: ['pages/index/index'],
  subPackages: [
    {
      root: 'packageA',
      pages: ['pages/detail/index'],
    },
  ],
})
```

### 小程序限制

| 限制项   | 说明                                     |
| -------- | ---------------------------------------- |
| 主包体积 | ≤ 2MB                                    |
| 总包体积 | ≤ 20MB                                   |
| 域名配置 | 生产环境需在小程序后台配置合法域名       |
| 本地开发 | 需在微信开发者工具开启「不校验合法域名」 |

### 权限配置

```typescript
// src/app.config.ts
export default defineAppConfig({
  // ...其他配置
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示'
    }
  },
  requiredPrivateInfos: ['getLocation', 'chooseAddress']
})
```

### 位置服务

```typescript
// 需先在 app.config.ts 中配置 permission
async function getLocation(): Promise<Taro.getLocation.SuccessCallbackResult> {
  return await Taro.getLocation({ type: 'gcj02' })
}
```

## 后端核心开发规范

本项目后端基于 NestJS + TypeScript 构建，提供高效、可扩展的服务端能力。

### 项目结构

```sh
.
├── server/                   # NestJS 后端服务
│   └── src/
│       ├── main.ts           # 服务入口
│       ├── app.module.ts     # 根模块
│       ├── app.controller.ts # 根控制器
│       └── app.service.ts    # 根服务
```

### 开发命令

```sh
pnpm dev:server // 启动开发服务 (热重载, 默认端口 3000)
pnpm build:server // 构建生产版本
```

### 新建模块流程 (CLI)

快速生成样板代码：

```bash
cd server

# 生成完整的 CRUD 资源 (包含 Module, Controller, Service, DTO, Entity)
npx nest g resource modules/product

# 仅生成特定部分
npx nest g module modules/order
npx nest g controller modules/order
npx nest g service modules/order
```

### 环境变量配置

在 server/ 根目录创建 .env 文件：

```sh
## 服务端口
PORT=3000

## 微信小程序配置
WX_APP_ID=你的AppID
WX_APP_SECRET=你的AppSecret

## JWT 密钥
JWT_SECRET=your-super-secret-key
```

在代码中使用 @nestjs/config 读取环境变量：

```typescript
import { ConfigService } from '@nestjs/config';

// 在 Service 中注入
constructor(private configService: ConfigService) {}

getWxConfig() {
  return {
    appId: this.configService.get<string>('WX_APP_ID'),
    secret: this.configService.get<string>('WX_APP_SECRET'),
  };
}
```

### 标准响应封装

建议使用拦截器 (Interceptor) 统一 API 响应格式：

```typeScript
// src/common/interceptors/transform.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  code: number;
  data: T;
  message: string;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        code: 200,
        data,
        message: 'success',
      })),
    );
  }
}
```

在 main.ts 中全局注册：

```typescript
app.useGlobalInterceptors(new TransformInterceptor());
```

### 微信登录后端实现

```typescript
// src/modules/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async code2Session(code: string) {
    const appId = this.configService.get('WX_APP_ID');
    const secret = this.configService.get('WX_APP_SECRET');
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${code}&grant_type=authorization_code`;

    const { data } = await lastValueFrom(this.httpService.get(url));

    if (data.errcode) {
      throw new UnauthorizedException(`微信登录失败: ${data.errmsg}`);
    }

    return data; // 包含 openid, session_key
  }
}
```

### 异常处理

使用全局异常过滤器 (Filter) 统一错误响应：

```typescript
// src/common/filters/http-exception.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    response.status(status).json({
      code: status,
      message: typeof exceptionResponse === 'string' ? exceptionResponse : (exceptionResponse as any).message,
      data: null,
    });
  }
}
```

在 main.ts 中注册：

```
app.useGlobalFilters(new HttpExceptionFilter());
```

### 数据库 (Drizzle ORM)

推荐使用 [Drizzle ORM](https://orm.drizzle.team/)，已预安装。

### 类型校验 (Zod)

项目集成了 [Zod](https://zod.dev/) 用于运行时类型校验。

#### 定义 Schema

```typescript
import { z } from 'zod';

// 基础类型
const userSchema = z.object({
  id: z.number(),
  name: z.string().min(1).max(50),
  email: z.string().email(),
  age: z.number().int().positive().optional(),
});

// 从 schema 推导 TypeScript 类型
type User = z.infer<typeof userSchema>;
```

#### 请求校验

```typescript
// src/modules/user/dto/create-user.dto.ts
import { z } from 'zod';

export const createUserSchema = z.object({
  nickname: z.string().min(1, '昵称不能为空').max(20, '昵称最多20个字符'),
  avatar: z.string().url('头像必须是有效的URL').optional(),
  phone: z.string().regex(/^1[3-9]\d{9}$/, '手机号格式不正确').optional(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;

// 在 Controller 中使用
@Post()
create(@Body() body: unknown) {
  const result = createUserSchema.safeParse(body);
  if (!result.success) {
    throw new BadRequestException(result.error.errors);
  }
  return this.userService.create(result.data);
}
```
