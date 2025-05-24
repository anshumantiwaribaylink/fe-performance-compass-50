import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar, Filter, TrendingUp, Users, MapPin, DollarSign, Clock, Award } from 'lucide-react';
import BeatPerformance from '@/components/dashboard/BeatPerformance';
import TotalSales from '@/components/dashboard/TotalSales';
import VisitsAnalytics from '@/components/dashboard/VisitsAnalytics';
import Leaderboard from '@/components/dashboard/Leaderboard';
import AttendanceMetrics from '@/components/dashboard/AttendanceMetrics';
import ReturnsAnalysis from '@/components/dashboard/ReturnsAnalysis';
import AccountsReceivable from '@/components/dashboard/AccountsReceivable';
import AreaWiseSales from '@/components/dashboard/AreaWiseSales';

const Dashboard = () => {
  const [selectedFE, setSelectedFE] = useState('all');
  const [timeFrame, setTimeFrame] = useState('month');
  const [selectedArea, setSelectedArea] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const handleApplyFilters = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const overviewStats = [
    {
      title: 'Beat Completion Rate',
      value: '87.5%',
      icon: MapPin,
      trend: '+12%',
      color: 'bg-blue-500'
    },
    {
      title: 'Total Sales',
      value: '₹2,45,670',
      icon: DollarSign,
      trend: '+8.2%',
      color: 'bg-blue-600'
    },
    {
      title: 'Total Visits',
      value: '342',
      icon: Users,
      trend: '+15%',
      color: 'bg-blue-700'
    },
    {
      title: 'Attendance Rate',
      value: '92.3%',
      icon: Clock,
      trend: '+5%',
      color: 'bg-blue-800'
    }
  ];

  const fieldExecutives = [
    'All Field Executives',
    'Rajesh Kumar',
    'Priya Sharma',
    'Amit Singh',
    'Neha Patel',
    'Suresh Gupta'
  ];

  const areas = [
    'All Areas',
    'North Zone',
    'South Zone',
    'East Zone',
    'West Zone',
    'Central Zone'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">FE Analytics Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="h-6 w-6 text-blue-600" />
              <span className="text-sm text-gray-600">FMCG Sales Management</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Filter className="h-5 w-5 mr-2 text-blue-600" />
              Filters & Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Field Executive
                </label>
                <Select value={selectedFE} onValueChange={setSelectedFE}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select FE" />
                  </SelectTrigger>
                  <SelectContent>
                    {fieldExecutives.map((fe, index) => (
                      <SelectItem key={index} value={index === 0 ? 'all' : fe.toLowerCase().replace(' ', '-')}>
                        {fe}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Frame
                </label>
                <Select value={timeFrame} onValueChange={setTimeFrame}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time frame" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area
                </label>
                <Select value={selectedArea} onValueChange={setSelectedArea}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map((area, index) => (
                      <SelectItem key={index} value={index === 0 ? 'all' : area.toLowerCase().replace(' ', '-')}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700" 
                  onClick={handleApplyFilters}
                  disabled={isLoading}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  {isLoading ? 'Applying...' : 'Apply Filters'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.trend} from last period</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <BeatPerformance isLoading={isLoading} />
          <TotalSales />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <VisitsAnalytics isLoading={isLoading} />
          <AttendanceMetrics />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ReturnsAnalysis />
          <AccountsReceivable />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Leaderboard />
          <AreaWiseSales />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
