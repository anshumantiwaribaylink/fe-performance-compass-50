
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Users, Calendar, TrendingUp, Loader } from 'lucide-react';

interface VisitsAnalyticsProps {
  isLoading?: boolean;
}

const VisitsAnalytics = ({ isLoading = false }: VisitsAnalyticsProps) => {
  const weeklyData = [
    { week: 'Week 1', visits: 85, planned: 90 },
    { week: 'Week 2', visits: 92, planned: 88 },
    { week: 'Week 3', visits: 78, planned: 85 },
    { week: 'Week 4', visits: 95, planned: 92 }
  ];

  const dailyData = [
    { day: 'Mon', visits: 18 },
    { day: 'Tue', visits: 22 },
    { day: 'Wed', visits: 20 },
    { day: 'Thu', visits: 25 },
    { day: 'Fri', visits: 23 },
    { day: 'Sat', visits: 15 }
  ];

  const totalVisits = weeklyData.reduce((sum, week) => sum + week.visits, 0);
  const averageDaily = Math.round(totalVisits / 30);

  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Loader className="h-5 w-5 mr-2 text-blue-600 animate-spin" />
            Visits Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="text-center p-3 bg-blue-50 rounded-lg">
                <Skeleton className="h-6 w-8 mx-auto mb-1" />
                <Skeleton className="h-3 w-16 mx-auto" />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <Skeleton className="h-4 w-24 mb-3" />
            <Skeleton className="h-32 w-full" />
          </div>

          <div>
            <Skeleton className="h-4 w-32 mb-3" />
            <Skeleton className="h-32 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Users className="h-5 w-5 mr-2 text-blue-600" />
          Visits Analytics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-xl font-bold text-blue-600">{totalVisits}</div>
            <div className="text-xs text-gray-600">Total Visits</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-xl font-bold text-green-600">{averageDaily}</div>
            <div className="text-xs text-gray-600">Daily Avg</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-xl font-bold text-purple-600">89%</div>
            <div className="text-xs text-gray-600">Success Rate</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Weekly Trend</h4>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Line type="monotone" dataKey="visits" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="planned" stroke="#94A3B8" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Daily Distribution</h4>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Bar dataKey="visits" fill="#60A5FA" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisitsAnalytics;
