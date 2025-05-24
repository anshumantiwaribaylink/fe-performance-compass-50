
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { RotateCcw, TrendingDown, AlertTriangle, DollarSign } from 'lucide-react';

const ReturnsAnalysis = () => {
  const returnsSalesData = [
    { month: 'Jan', sales: 125000, returns: 8500, creditNotes: 12 },
    { month: 'Feb', sales: 138000, returns: 9200, creditNotes: 15 },
    { month: 'Mar', sales: 142000, returns: 7800, creditNotes: 11 },
    { month: 'Apr', sales: 135000, returns: 8900, creditNotes: 13 },
    { month: 'May', sales: 148000, returns: 9600, creditNotes: 16 }
  ];

  const returnReasons = [
    { reason: 'Damaged Product', value: 35, color: '#EF4444' },
    { reason: 'Expired Items', value: 28, color: '#F97316' },
    { reason: 'Wrong Product', value: 22, color: '#EAB308' },
    { reason: 'Customer Complaint', value: 15, color: '#3B82F6' }
  ];

  const currentMonth = returnsSalesData[returnsSalesData.length - 1];
  const returnRate = ((currentMonth.returns / currentMonth.sales) * 100).toFixed(2);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <RotateCcw className="h-5 w-5 mr-2 text-blue-600" />
          Returns vs Sales Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-xl font-bold text-blue-600">₹{currentMonth.sales.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Current Sales</div>
          </div>
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <div className="text-xl font-bold text-red-600">₹{currentMonth.returns.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Returns Value</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <div>
              <div className="text-lg font-bold text-yellow-600">{returnRate}%</div>
              <div className="text-xs text-gray-600">Return Rate</div>
            </div>
            <TrendingDown className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div>
              <div className="text-lg font-bold text-green-600">{currentMonth.creditNotes}</div>
              <div className="text-xs text-gray-600">Credit Notes</div>
            </div>
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Monthly Trend</h4>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={returnsSalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Bar dataKey="sales" fill="#3B82F6" />
                <Bar dataKey="returns" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Return Reasons</h4>
          <div className="flex">
            <div className="w-1/2">
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie
                    data={returnReasons}
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={50}
                    dataKey="value"
                  >
                    {returnReasons.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 text-xs space-y-2">
              {returnReasons.map((reason, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: reason.color }}
                  ></div>
                  <span className="text-gray-700">{reason.reason}: {reason.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReturnsAnalysis;
