import { useState, useMemo } from 'react'
import {
  Search,
  Plus,
  Filter,
  Edit,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { allICHContent, ichCategories } from '../data/ichData'
import type { ICHItem } from '../types'

export default function ContentManage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

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

  const filteredContent = useMemo(() => {
    return allICHContent.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      const matchesType = selectedType === 'all' || item.type === selectedType
      return matchesSearch && matchesCategory && matchesType
    })
  }, [searchQuery, selectedCategory, selectedType])

  const totalPages = Math.ceil(filteredContent.length / itemsPerPage)
  const paginatedContent = filteredContent.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">内容管理</h1>
          <p className="text-gray-500 mt-1">管理江华非遗的所有内容</p>
        </div>
        <button className="btn-primary flex items-center justify-center">
          <Plus className="w-5 h-5 mr-2" />
          添加内容
        </button>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索内容..."
              className="input pl-10"
            />
          </div>
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input"
            >
              <option value="all">所有类别</option>
              {ichCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="input"
            >
              <option value="all">所有类型</option>
              <option value="artwork">文化拾珠</option>
              <option value="technique">古法技艺</option>
              <option value="story">传承故事</option>
              <option value="festival">节庆活动</option>
              <option value="news">动态资讯</option>
            </select>
          </div>
        </div>
      </div>

      {/* Content Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">内容</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">类别</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">类型</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">作者</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">日期</th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedContent.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder.jpg'
                        }}
                      />
                      <div>
                        <p className="font-medium text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500 line-clamp-1">{item.content}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{getCategoryName(item.category)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                      {getTypeLabel(item.type)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.author || '-'}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.date || '-'}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-gray-400 hover:text-primary-600 rounded-lg hover:bg-primary-50">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            显示 {(currentPage - 1) * itemsPerPage + 1} 到{' '}
            {Math.min(currentPage * itemsPerPage, filteredContent.length)} 条，共{' '}
            {filteredContent.length} 条
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-600">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
