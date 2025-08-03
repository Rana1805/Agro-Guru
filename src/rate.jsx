import { useState, useEffect } from 'react';
import {
 TrendingUp,
 TrendingDown,
 DollarSign,
 Package,
 Truck,
 Users,
 BarChart3,
 Target,
 Zap,
 AlertTriangle,
 CheckCircle,
 Clock,
 MapPin,
 Leaf,
 Award,
 RefreshCw
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const OptimalRatesDashboard = () => {
 const [selectedProduct, setSelectedProduct] = useState('tomatoes');
 const [selectedRegion, setSelectedRegion] = useState('california');
 const [timeframe, setTimeframe] = useState('30days');

 // Market data for pricing optimization
 const [priceData] = useState([
 { date: '7/1', current: 4.50, optimal: 4.75, market: 4.60, demand: 85 },
 { date: '7/8', current: 4.50, optimal: 4.80, market: 4.65, demand: 92 },
 { date: '7/15', current: 4.50, optimal: 4.85, market: 4.70, demand: 88 },
 { date: '7/22', current: 4.50, optimal: 4.90, market: 4.75, demand: 95 },
 { date: '7/29', current: 4.50, optimal: 4.95, market: 4.80, demand: 90 },
 { date: '8/5', current: 4.50, optimal: 5.00, market: 4.85, demand: 98 }
 ]);

 const [shippingRates] = useState([
 { distance: '0-50', current: 2.50, optimal: 2.25, savings: 0.25, volume: 45 },
 { distance: '51-100', current: 4.00, optimal: 3.75, savings: 0.25, volume: 32 },
 { distance: '101-200', current: 6.50, optimal: 6.00, savings: 0.50, volume: 18 },
 { distance: '201-500', current: 12.00, optimal: 11.00, savings: 1.00, volume: 5 }
 ]);

 const [demandData] = useState([
 { product: 'Tomatoes', current: 4.50, optimal: 4.95, demand: 98, trend: 'up' },
 { product: 'Corn', current: 0.75, optimal: 0.85, demand: 87, trend: 'up' },
 { product: 'Lettuce', current: 1.75, optimal: 1.65, demand: 72, trend: 'down' },
 { product: 'Carrots', current: 2.25, optimal: 2.40, demand: 91, trend: 'up' },
 { product: 'Apples', current: 3.25, optimal: 3.45, demand: 85, trend: 'up' }
 ]);

 const [regionalRates] = useState([
 { region: 'California', avgPrice: 4.85, competition: 23, demand: 'High' },
 { region: 'Texas', avgPrice: 4.20, competition: 18, demand: 'Medium' },
 { region: 'Florida', avgPrice: 4.95, competition: 31, demand: 'High' },
 { region: 'New York', avgPrice: 5.20, competition: 28, demand: 'Very High' },
 { region: 'Illinois', avgPrice: 4.10, competition: 15, demand: 'Medium' }
 ]);

 const pieData = [
 { name: 'Optimal Range', value: 65, color: '#10B981' },
 { name: 'Above Optimal', value: 20, color: '#F59E0B' },
 { name: 'Below Optimal', value: 15, color: '#EF4444' }
 ];

 const calculatePotentialRevenue = () => {
 const currentRevenue = priceData[priceData.length - 1].current * 100; // assuming 100 units
 const optimalRevenue = priceData[priceData.length - 1].optimal * 100;
 return optimalRevenue - currentRevenue;
 };

 const OptimalRateCard = ({ title, current, optimal, unit, trend, icon: Icon, color }) => (
 <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: color }}>
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-3">
 <div className="p-2 rounded-lg" style={{ backgroundColor: `${color}20` }}>
 <Icon className="w-5 h-5" style={{ color }} />
 </div>
 <h3 className="font-semibold text-gray-900">{title}</h3>
 </div>
 {trend === 'up' ? (
 <TrendingUp className="w-5 h-5 text-green-500" />
 ) : (
 <TrendingDown className="w-5 h-5 text-red-500" />
 )}
 </div>

 <div className="space-y-2">
 <div className="flex justify-between items-center">
 <span className="text-sm text-gray-600">Current:</span>
 <span className="font-medium">${current.toFixed(2)} {unit}</span>
 </div>
 <div className="flex justify-between items-center">
 <span className="text-sm text-gray-600">Optimal:</span>
 <span className="font-bold text-green-600">${optimal.toFixed(2)} {unit}</span>
 </div>
 <div className="flex justify-between items-center">
 <span className="text-sm text-gray-600">Difference:</span>
 <span className={`font-bold ${optimal > current ? 'text-green-600' : 'text-red-600'}`}>
 {optimal > current ? '+' : ''}${(optimal - current).toFixed(2)}
 </span>
 </div>
 </div>
 </div>
 );

 return (
 <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
 {/* Header */}
 <div className="bg-white shadow-sm border-b">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex justify-between items-center h-16">
 <div className="flex items-center gap-3">
 <div className="bg-blue-600 p-2 rounded-lg">
 <BarChart3 className="w-6 h-6 text-white" />
 </div>
 <div>
 <h1 className="text-xl font-bold text-gray-900">Optimal Rate Analytics</h1>
 <p className="text-sm text-gray-600">AI-powered pricing & shipping optimization</p>
 </div>
 </div>

 <div className="flex items-center gap-4">
 <select
 value={selectedProduct}
 onChange={(e) => setSelectedProduct(e.target.value)}
 className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
 >
 <option value="tomatoes">Tomatoes</option>
 <option value="corn">Corn</option>
 <option value="lettuce">Lettuce</option>
 <option value="carrots">Carrots</option>
 </select>

 <select
 value={timeframe}
 onChange={(e) => setTimeframe(e.target.value)}
 className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
 >
 <option value="7days">Last 7 Days</option>
 <option value="30days">Last 30 Days</option>
 <option value="90days">Last 90 Days</option>
 </select>

 <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
 <RefreshCw className="w-4 h-4" />
 Refresh
 </button>
 </div>
 </div>
 </div>
 </div>

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
 {/* Key Metrics */}
 <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
 <OptimalRateCard
 title="Product Price"
 current={4.50}
 optimal={4.95}
 unit="per lb"
 trend="up"
 icon={DollarSign}
 color="#10B981"
 />
 <OptimalRateCard
 title="Shipping Rate"
 current={3.25}
 optimal={2.85}
 unit="avg"
 trend="down"
 icon={Truck}
 color="#3B82F6"
 />
 <OptimalRateCard
 title="Market Share"
 current={12.5}
 optimal={15.2}
 unit="%"
 trend="up"
 icon={Target}
 color="#8B5CF6"
 />
 <OptimalRateCard
 title="Profit Margin"
 current={28.0}
 optimal={32.5}
 unit="%"
 trend="up"
 icon={TrendingUp}
 color="#F59E0B"
 />
 </div>

 {/* Revenue Impact Alert */}
 <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
 <div className="flex items-center gap-4">
 <div className="bg-white bg-opacity-20 p-3 rounded-full">
 <Zap className="w-6 h-6" />
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold">Potential Revenue Increase</h3>
 <p className="text-green-100">
 By optimizing to suggested rates, you could increase revenue by
 <span className="font-bold text-2xl ml-2">${calculatePotentialRevenue().toFixed(0)}</span> per month
 </p>
 </div>
 <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
 Apply Optimal Rates
 </button>
 </div>
 </div>

 {/* Charts Section */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 {/* Price Trend Chart */}
 <div className="bg-white rounded-xl shadow-md p-6">
 <div className="flex justify-between items-center mb-6">
 <h3 className="text-lg font-semibold text-gray-900">Price Optimization Trend</h3>
 <div className="flex gap-4 text-sm">
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
 <span>Current Price</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
 <span>Optimal Price</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
 <span>Market Average</span>
 </div>
 </div>
 </div>

 <ResponsiveContainer width="100%" height={300}>
 <LineChart data={priceData}>
 <CartesianGrid strokeDasharray="3 3" />
 <XAxis dataKey="date" />
 <YAxis />
 <Tooltip />
 <Line type="monotone" dataKey="current" stroke="#3B82F6" strokeWidth={2} />
 <Line type="monotone" dataKey="optimal" stroke="#10B981" strokeWidth={2} />
 <Line type="monotone" dataKey="market" stroke="#F59E0B" strokeWidth={2} />
 </LineChart>
 </ResponsiveContainer>
 </div>

 {/* Pricing Distribution */}
 <div className="bg-white rounded-xl shadow-md p-6">
 <h3 className="text-lg font-semibold text-gray-900 mb-6">Price Distribution</h3>

 <div className="flex justify-center mb-4">
 <ResponsiveContainer width="100%" height={200}>
 <PieChart>
 <Pie
 data={pieData}
 cx="50%"
 cy="50%"
 innerRadius={60}
 outerRadius={80}
 dataKey="value"
 >
 {pieData.map((entry, index) => (
 <Cell key={`cell-${index}`} fill={entry.color} />
 ))}
 </Pie>
 <Tooltip />
 </PieChart>
 </ResponsiveContainer>
 </div>

 <div className="space-y-3">
 {pieData.map((item, index) => (
 <div key={index} className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
 <span className="text-sm text-gray-600">{item.name}</span>
 </div>
 <span className="font-semibold">{item.value}%</span>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Shipping Optimization */}
 <div className="bg-white rounded-xl shadow-md p-6">
 <h3 className="text-lg font-semibold text-gray-900 mb-6">Shipping Rate Optimization</h3>

 <div className="overflow-x-auto">
 <table className="w-full">
 <thead>
 <tr className="border-b">
 <th className="text-left py-3 px-4 font-semibold text-gray-700">Distance (miles)</th>
 <th className="text-left py-3 px-4 font-semibold text-gray-700">Current Rate</th>
 <th className="text-left py-3 px-4 font-semibold text-gray-700">Optimal Rate</th>
 <th className="text-left py-3 px-4 font-semibold text-gray-700">Potential Savings</th>
 <th className="text-left py-3 px-4 font-semibold text-gray-700">Volume %</th>
 <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
 </tr>
 </thead>
 <tbody>
 {shippingRates.map((rate, index) => (
 <tr key={index} className="border-b hover:bg-gray-50">
 <td className="py-3 px-4 font-medium">{rate.distance}</td>
 <td className="py-3 px-4">${rate.current.toFixed(2)}</td>
 <td className="py-3 px-4 text-green-600 font-semibold">${rate.optimal.toFixed(2)}</td>
 <td className="py-3 px-4 text-green-600 font-semibold">${rate.savings.toFixed(2)}</td>
 <td className="py-3 px-4">{rate.volume}%</td>
 <td className="py-3 px-4">
 {rate.savings > 0 ? (
 <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
 <CheckCircle className="w-3 h-3 inline mr-1" />
 Optimizable
 </span>
 ) : (
 <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
 <Clock className="w-3 h-3 inline mr-1" />
 Optimal
 </span>
 )}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>

 {/* Market Analysis */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 {/* Product Demand Analysis */}
 <div className="bg-white rounded-xl shadow-md p-6">
 <h3 className="text-lg font-semibold text-gray-900 mb-6">Product Demand Analysis</h3>

 <div className="space-y-4">
 {demandData.map((product, index) => (
 <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
 <div className="flex items-center gap-3">
 <div className="text-2xl">
 {product.product === 'Tomatoes' && '🍅'}
 {product.product === 'Corn' && '🌽'}
 {product.product === 'Lettuce' && '🥬'}
 {product.product === 'Carrots' && '🥕'}
 {product.product === 'Apples' && '🍎'}
 </div>
 <div>
 <h4 className="font-medium text-gray-900">{product.product}</h4>
 <p className="text-sm text-gray-600">Demand: {product.demand}%</p>
 </div>
 </div>

 <div className="text-right">
 <div className="text-sm text-gray-600">Current: ${product.current}</div>
 <div className="font-semibold text-green-600">Optimal: ${product.optimal}</div>
 <div className="flex items-center gap-1 mt-1">
 {product.trend === 'up' ? (
 <TrendingUp className="w-4 h-4 text-green-500" />
 ) : (
 <TrendingDown className="w-4 h-4 text-red-500" />
 )}
 <span className={`text-sm ${product.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
 {product.trend === 'up' ? 'Rising' : 'Falling'}
 </span>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Regional Analysis */}
 <div className="bg-white rounded-xl shadow-md p-6">
 <h3 className="text-lg font-semibold text-gray-900 mb-6">Regional Market Analysis</h3>

 <div className="space-y-4">
 {regionalRates.map((region, index) => (
 <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
 <div className="flex items-center gap-3">
 <MapPin className="w-5 h-5 text-blue-500" />
 <div>
 <h4 className="font-medium text-gray-900">{region.region}</h4>
 <p className="text-sm text-gray-600">{region.competition} competitors</p>
 </div>
 </div>

 <div className="text-right">
 <div className="font-semibold text-gray-900">${region.avgPrice.toFixed(2)}</div>
 <div className={`text-sm px-2 py-1 rounded-full ${
 region.demand === 'Very High' ? 'bg-red-100 text-red-800' :
 region.demand === 'High' ? 'bg-orange-100 text-orange-800' :
 'bg-yellow-100 text-yellow-800'
 }`}>
 {region.demand}
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Recommendations */}
 <div className="bg-white rounded-xl shadow-md p-6">
 <h3 className="text-lg font-semibold text-gray-900 mb-6">AI Recommendations</h3>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
 <div className="flex items-center gap-2 mb-2">
 <Award className="w-5 h-5 text-blue-500" />
 <h4 className="font-semibold text-blue-900">Price Optimization</h4>
 </div>
 <p className="text-sm text-blue-800">
 Increase tomato prices by $0.45 to match market demand. Expected revenue increase: $450/month.
 </p>
 </div>

 <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
 <div className="flex items-center gap-2 mb-2">
 <Truck className="w-5 h-5 text-green-500" />
 <h4 className="font-semibold text-green-900">Shipping Efficiency</h4>
 </div>
 <p className="text-sm text-green-800">
 Reduce short-distance shipping rates by $0.25 to increase volume and competitiveness.
 </p>
 </div>

 <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
 <div className="flex items-center gap-2 mb-2">
 <Target className="w-5 h-5 text-purple-500" />
 <h4 className="font-semibold text-purple-900">Market Expansion</h4>
 </div>
 <p className="text-sm text-purple-800">
 Target New York market where prices are 15% higher than your current rates.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
};

export default OptimalRatesDashboard;