
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, TrendingUp, Package, MapPin } from 'lucide-react';

const TotalSales = () => {
  const categoryData = [
    { name: 'Beverages', value: 85000, color: '#3B82F6' },
    { name: 'Snacks', value: 72000, color: '#60A5FA' },
    { name: 'Personal Care', value: 58000, color: '#93C5FD' },
    { name: 'Dairy', value: 45000, color: '#DBEAFE' }
  ];

  const areaData = [
    { area: 'North', sales: 95000 },
    { area: 'South', sales: 87000 },
    { area: 'East', sales: 78000 },
    { area: 'West', sales: 92000 },
    { area: 'Central', sales: 68000 }
  ];

  const skuData = [
    { sku: 'Coca Cola 500ml', sales: 25000 },
    { sku: 'Lays Classic 100g', sales: 22000 },
    { sku: 'Colgate 100ml', sales: 18000 },
    { sku: 'Amul Milk 1L', sales: 15000 },
    { sku: 'Britannia Biscuits', sales: 12000 }
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
          Total Sales Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">₹4,20,000</div>
              <div className="text-sm text-gray-600">Total Sales</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">+12.5%</div>
              <div className="text-sm text-gray-600">Growth Rate</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="category" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="category" className="text-xs">Category</TabsTrigger>
            <TabsTrigger value="area" className="text-xs">Area Wise</TabsTrigger>
            <TabsTrigger value="sku" className="text-xs">SKU Wise</TabsTrigger>
          </TabsList>

          <TabsContent value="category" className="space-y-4">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span>{item.name}: ₹{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="area" className="space-y-4">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={areaData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="area" />
                  <YAxis />
                  <Bar dataKey="sales" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="sku" className="space-y-4">
            <div className="space-y-3">
              {skuData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm font-medium">{item.sku}</span>
                  <span className="text-sm text-blue-600 font-bold">₹{item.sales.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TotalSales;
