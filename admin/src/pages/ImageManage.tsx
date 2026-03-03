import { useState } from 'react'
import {
  Upload,
  Search,
  Grid,
  List,
  Trash2,
  Download,
  Image as ImageIcon,
} from 'lucide-react'
import { allICHContent } from '../data/ichData'

export default function ImageManage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  // 获取所有图片
  const allImages = allICHContent.map((item) => ({
    id: item.id,
    src: item.image,
    title: item.title,
    category: item.category,
  }))

  const filteredImages = allImages.filter(
    (img) =>
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">图片管理</h1>
          <p className="text-gray-500 mt-1">管理所有非遗内容配图</p>
        </div>
        <button className="btn-primary flex items-center justify-center">
          <Upload className="w-5 h-5 mr-2" />
          上传图片
        </button>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索图片..."
              className="input pl-10"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:bg-gray-100'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:bg-gray-100'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Images */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="card group overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                  <button className="p-2 bg-white rounded-lg text-gray-700 hover:text-primary-600">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white rounded-lg text-gray-700 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900 truncate">{image.title}</p>
                <p className="text-xs text-gray-500">{image.id}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">图片</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">标题</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredImages.map((image) => (
                <tr key={image.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-12 h-12 rounded-lg object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.jpg'
                      }}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-900">{image.title}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{image.id}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-gray-400 hover:text-primary-600 rounded-lg hover:bg-primary-50">
                        <Download className="w-4 h-4" />
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
      )}

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="card p-12 text-center">
          <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">没有找到匹配的图片</p>
        </div>
      )}
    </div>
  )
}
