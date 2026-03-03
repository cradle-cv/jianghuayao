import { useEffect, useState } from 'react'
import {
  FileText,
  Image,
  Folder,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
} from 'lucide-react'
import { allICHContent, ichCategories } from '../data/ichData'
import type { ICHItem } from '../types'

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalContent: 0,
    totalCategories: 0,
    totalImages: 0,
    contentByType: {} as Record<string, number>,
    contentByCategory: {} as Record<string, number>,
  })
  const [recentContent, setRecentContent] = useState<ICHItem[]>([])

  useEffect(() => {
    // 计算统计数据
    const contentByType: Record<string, number> = {}
    const contentByCategory: Record<string, number> = {}

    allICHContent.forEach((item) => {
      contentByType[item.type] = (contentByType[item.type] || 0) + 1
      contentByCategory[item.category] = (contentByCategory[item.category] || 0) + 1
    })

    setStats({
      totalContent: allICHContent.length,
      totalCategories: ichCategories.length,
      totalImages: new Set(allICHContent.map((item) => item.image)).size,
      contentByType,
      contentByCategory,
    })

    // 获取最近添加的内容
    setRecentContent(allICHContent.slice(0, 5))
  }, [])

  const statCards = [
    {
      title: '总内容数',
      value: stats.totalContent,
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      title: '非遗类别',
      value: stats.totalCategories,
      icon: Folder,
      color: 'bg-green-500',
    },
    {
      title: '图片数量',
      value: stats.totalImages,
      icon: Image,
      color: 'bg-purple-500',
    },
    {
      title: '本月新增',
      value: 12,
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ]

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      artwork: '文化拾珠',
      news: '动态资讯',
      technique: '古法技艺',
      story: '传承故事',
      festival: '节庆活动',
    }
    return labels[type] || type
  }

  const getCategoryName = (categoryId: string) => {
    const category = ichCategories.find((c) => c.id === categoryId)
    return category?.name || categoryId
  }

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">仪表盘</h1>
        <p className="text-gray-500 mt-1">欢迎使用江华非遗后台管理系统</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => {
          const Icon = card.icon
          return (
            <div key={card.title} className="card p-6">
              <div className="flex items-center">
                <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Content Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* By Type */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">内容类型分布</h2>
          <div className="space-y-4">
            {Object.entries(stats.contentByType).map(([type, count]) => (
              <div key={type} className="flex items-center">
                <span className="w-24 text-sm text-gray-600">{getTypeLabel(type)}</span>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${(count / stats.totalContent) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* By Category */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">类别分布</h2>
          <div className="space-y-4">
            {Object.entries(stats.contentByCategory).map(([category, count]) => (
              <div key={category} className="flex items-center">
                <span className="w-24 text-sm text-gray-600">{getCategoryName(category)}</span>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${(count / stats.totalContent) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Content */}
      <div className="card">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">最近添加</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">标题</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">类别</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">类型</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">日期</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentContent.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10 rounded-lg object-cover mr-3"
                      />
                      <span className="font-medium text-gray-900">{item.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {getCategoryName(item.category)}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                      {getTypeLabel(item.type)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.date || '-'}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-gray-400 hover:text-primary-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
