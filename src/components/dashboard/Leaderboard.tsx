
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, TrendingUp, Star } from 'lucide-react';

const Leaderboard = () => {
  const monthlyData = [
    { rank: 1, name: 'Rajesh Kumar', score: 95, sales: 285000, visits: 142, badge: 'gold' },
    { rank: 2, name: 'Priya Sharma', score: 92, sales: 275000, visits: 138, badge: 'silver' },
    { rank: 3, name: 'Amit Singh', score: 89, sales: 265000, visits: 135, badge: 'bronze' },
    { rank: 4, name: 'Neha Patel', score: 87, sales: 258000, visits: 132, badge: 'none' },
    { rank: 5, name: 'Suresh Gupta', score: 85, sales: 245000, visits: 128, badge: 'none' }
  ];

  const weeklyData = [
    { rank: 1, name: 'Priya Sharma', score: 98, sales: 68000, visits: 35, badge: 'gold' },
    { rank: 2, name: 'Rajesh Kumar', score: 96, sales: 65000, visits: 34, badge: 'silver' },
    { rank: 3, name: 'Amit Singh', score: 94, sales: 62000, visits: 33, badge: 'bronze' },
    { rank: 4, name: 'Neha Patel', score: 91, sales: 58000, visits: 31, badge: 'none' },
    { rank: 5, name: 'Suresh Gupta', score: 88, sales: 55000, visits: 29, badge: 'none' }
  ];

  const getBadgeIcon = (badge: string, rank: number) => {
    switch (badge) {
      case 'gold':
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 'silver':
        return <Award className="h-5 w-5 text-gray-400" />;
      case 'bronze':
        return <Medal className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="h-5 w-5 flex items-center justify-center text-sm font-bold text-gray-500">#{rank}</span>;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'gold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'silver':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      case 'bronze':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Star className="h-5 w-5 mr-2 text-blue-600" />
          FE Performance Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly" className="space-y-3">
            {monthlyData.map((fe) => (
              <div key={fe.rank} className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                fe.rank <= 3 ? 'bg-gradient-to-r from-blue-50 to-white border-blue-200' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    {getBadgeIcon(fe.badge, fe.rank)}
                    <div>
                      <div className="font-semibold text-gray-900">{fe.name}</div>
                      <div className="text-sm text-gray-600">Performance Score: {fe.score}%</div>
                    </div>
                  </div>
                  <Badge className={getBadgeColor(fe.badge)}>
                    Rank #{fe.rank}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                    <span className="text-gray-600">Sales: ₹{fe.sales.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 mr-1 text-blue-600" />
                    <span className="text-gray-600">Visits: {fe.visits}</span>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="weekly" className="space-y-3">
            {weeklyData.map((fe) => (
              <div key={fe.rank} className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                fe.rank <= 3 ? 'bg-gradient-to-r from-blue-50 to-white border-blue-200' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    {getBadgeIcon(fe.badge, fe.rank)}
                    <div>
                      <div className="font-semibold text-gray-900">{fe.name}</div>
                      <div className="text-sm text-gray-600">Performance Score: {fe.score}%</div>
                    </div>
                  </div>
                  <Badge className={getBadgeColor(fe.badge)}>
                    Rank #{fe.rank}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                    <span className="text-gray-600">Sales: ₹{fe.sales.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 mr-1 text-blue-600" />
                    <span className="text-gray-600">Visits: {fe.visits}</span>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
