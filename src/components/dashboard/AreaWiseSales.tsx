import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { MapPin, TrendingUp, Users, Calendar, Loader } from 'lucide-react';

interface AreaWiseSalesProps {
  isLoading?: boolean;
}

const AreaWiseSales = ({ isLoading = false }: AreaWiseSalesProps) => {
  const areaData = [
    { 
      area: 'North Zone', 
      sales: 125000, 
      visits: 45, 
      frequency: 3.2, 
      retailers: 28,
      growth: 12.5
    },
    { 
      area: 'South Zone', 
      sales: 98000, 
      visits: 38, 
      frequency: 2.8, 
      retailers: 22,
      growth: 8.7
    },
    { 
      area: 'East Zone', 
      sales: 87000, 
      visits: 32, 
      frequency: 2.5, 
      retailers: 18,
      growth: 15.2
    },
    { 
      area: 'West Zone', 
      sales: 112000, 
      visits: 42, 
      frequency: 3.0, 
      retailers: 25,
      growth: 10.3
    },
    { 
      area: 'Central Zone', 
      sales: 76000, 
      visits: 28, 
      frequency: 2.2, 
      retailers: 15,
      growth: 6.8
    }
  ];

  const visitFrequencyData = areaData.map(area => ({
    area: area.area.split(' ')[0],
    frequency: area.frequency,
    visits: area.visits
  }));

  const totalSales = areaData.reduce((sum, area) => sum + area.sales, 0);
  const totalVisits = areaData.reduce((sum, area) => sum + area.visits, 0);
  const avgFrequency = (areaData.reduce((sum, area) => sum + area.frequency, 0) / areaData.length).toFixed(1);

  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Loader className="h-5 w-5 mr-2 text-blue-600 animate-spin" />
            Area Wise Sales & Visit Frequency
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <Skeleton className="h-6 w-16 mx-auto mb-1" />
                <Skeleton className="h-3 w-20 mx-auto" />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <Skeleton className="h-4 w-32 mb-3" />
            <Skeleton className="h-32 w-full" />
          </div>

          <div className="space-y-3">
            <Skeleton className="h-4 w-24" />
            {[...Array(5)].map((_, index) => (
              <div key={index} className="border rounded-lg p-3 bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-5 w-12" />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <MapPin className="h-5 w-5 mr-2 text-blue-600" />
          Area Wise Sales & Visit Frequency
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">₹{totalSales.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Total Sales</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">{totalVisits}</div>
            <div className="text-xs text-gray-600">Total Visits</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">{avgFrequency}</div>
            <div className="text-xs text-gray-600">Avg Frequency</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Sales Performance by Area</h4>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="area" 
                  tick={{ fontSize: 10 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis />
                <Bar dataKey="sales" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-700">Area Details</h4>
          {areaData.map((area, index) => (
            <div key={index} className="border rounded-lg p-3 bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{area.area}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  area.growth >= 10 ? 'bg-green-100 text-green-800' : 
                  area.growth >= 5 ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'
                }`}>
                  +{area.growth}%
                </span>
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1 text-blue-600" />
                  <span>₹{area.sales.toLocaleString()}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-1 text-green-600" />
                  <span>{area.visits} visits</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1 text-purple-600" />
                  <span>{area.frequency}x/week</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1 text-orange-600" />
                  <span>{area.retailers} outlets</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AreaWiseSales;
