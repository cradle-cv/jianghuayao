import { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { allICHContent, ichCategories } from '../data/ichData'

const COLORS = ['#f97316', '#22c55e', '#3b82f6', '#a855f7', '#ef4444']

export default function Stats() {
  const [stats, setStats] = useState({
    contentByType: [] as { name: string; value: number }[],
    contentByCategory: [] as { name: string; value: number }[],
    monthlyData: [] as { month: string; content: number }[],
  })

  useEffect(() => {
    // 按类型统计
    const typeCount: Record<string, number> = {}
    const categoryCount: Record<string, number> = {}

    allICHContent.forEach((item) => {
      typeCount[item.type] = (typeCount[item.type] || 0) + 1
      categoryCount[item.category] = (categoryCount[item.category] || 0) + 1
    })

    const typeLabels: Record<string, string> = {
      artwork: '文化拾珠',
      news: '动态资讯',
      technique: '古法技艺',
      story: '传承故事',
      festival: '节庆活动',
    }

    const contentByType = Object.entries(typeCount).map(([type, count]) => ({
      name: typeLabels[type] || type,
      value: count,
    }))

    const contentByCategory = Object.entries(categoryCount).map(([cat, count]) => {
      const category = ichCategories.find((c) => c.id === cat)
      return {
        name: category?.name || cat,
        value: count,
      }
    })

    // 模拟月度数据
    const monthlyData = [
      { month: '1月', content: 15 },
      { month: '2月', content: 20 },
      { month: '3月', content: 18 },
      { month: '4月', content: 25 },
      { month: '5月', content: 22 },
      { month: '6月', content: 30 },
      { month: '7月', content: 28 },
      { month: '8月', content: 35 },
      { month: '9月', content: 32 },
      { month: '10月', content: 40 },
      { month: '11月', content: 38 },
      { month: '12月', content: 45 },
    ]

    setStats({
      contentByType,
      contentByCategory,
      monthlyData,
    })
  }, [])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">数据统计</h1>
        <p className="text-gray-500 mt-1">查看江华非遗内容的统计数据</p>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content by Type */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">内容类型分布</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stats.contentByType}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stats.contentByType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Content by Category */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">类别分布</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.contentByCategory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Trend */}
        <div className="card p-6 lg:col-span-2">
          <h2 className="text-lg font-bold text-gray-900 mb-6">月度内容增长趋势</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="content" name="新增内容" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6 text-center">
          <p className="text-3xl font-bold text-primary-600">{allICHContent.length}</p>
          <p className="text-gray-500 mt-1">总内容数</p>
        </div>
        <div className="card p-6 text-center">
          <p className="text-3xl font-bold text-green-600">{ichCategories.length}</p>
          <p className="text-gray-500 mt-1">非遗类别</p>
        </div>
        <div className="card p-6 text-center">
          <p className="text-3xl font-bold text-blue-600">
            {new Set(allICHContent.map((item) => item.image)).size}
          </p>
          <p className="text-gray-500 mt-1">图片数量</p>
        </div>
        <div className="card p-6 text-center">
          <p className="text-3xl font-bold text-purple-600">12</p>
          <p className="text-gray-500 mt-1">本月新增</p>
        </div>
      </div>
    </div>
  )
}
