
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, AlertCircle, Clock, DollarSign, ArrowUpDown } from 'lucide-react';

const AccountsReceivable = () => {
  const [sortBy, setSortBy] = useState('amount'); // 'amount' or 'days'

  const pendingBills = [
    { 
      retailer: 'Sharma General Store', 
      amount: 45000, 
      pendingDays: 25, 
      billNumber: 'INV-2024-001',
      urgency: 'high'
    },
    { 
      retailer: 'Patel Mart', 
      amount: 32000, 
      pendingDays: 18, 
      billNumber: 'INV-2024-002',
      urgency: 'medium'
    },
    { 
      retailer: 'Kumar Stores', 
      amount: 28000, 
      pendingDays: 45, 
      billNumber: 'INV-2024-003',
      urgency: 'high'
    },
    { 
      retailer: 'Singh Traders', 
      amount: 22000, 
      pendingDays: 12, 
      billNumber: 'INV-2024-004',
      urgency: 'low'
    },
    { 
      retailer: 'Gupta Enterprises', 
      amount: 18000, 
      pendingDays: 33, 
      billNumber: 'INV-2024-005',
      urgency: 'medium'
    },
    { 
      retailer: 'Agrawal Store', 
      amount: 15000, 
      pendingDays: 8, 
      billNumber: 'INV-2024-006',
      urgency: 'low'
    }
  ];

  const sortedBills = [...pendingBills].sort((a, b) => {
    if (sortBy === 'amount') {
      return b.amount - a.amount;
    } else {
      return b.pendingDays - a.pendingDays;
    }
  });

  const totalPending = pendingBills.reduce((sum, bill) => sum + bill.amount, 0);
  const highUrgencyCount = pendingBills.filter(bill => bill.urgency === 'high').length;
  const averagePendingDays = Math.round(
    pendingBills.reduce((sum, bill) => sum + bill.pendingDays, 0) / pendingBills.length
  );

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case 'medium':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'low':
        return <Clock className="h-4 w-4 text-green-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
          Accounts Receivable
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <div className="text-lg font-bold text-red-600">₹{totalPending.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Total Pending</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <div className="text-lg font-bold text-yellow-600">{highUrgencyCount}</div>
            <div className="text-xs text-gray-600">High Priority</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">{averagePendingDays}</div>
            <div className="text-xs text-gray-600">Avg Days</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-medium text-gray-700">Pending Bills</h4>
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant={sortBy === 'amount' ? 'default' : 'outline'}
              onClick={() => setSortBy('amount')}
              className="text-xs"
            >
              <DollarSign className="h-3 w-3 mr-1" />
              Amount
            </Button>
            <Button
              size="sm"
              variant={sortBy === 'days' ? 'default' : 'outline'}
              onClick={() => setSortBy('days')}
              className="text-xs"
            >
              <Clock className="h-3 w-3 mr-1" />
              Days
            </Button>
          </div>
        </div>

        <div className="space-y-3 max-h-64 overflow-y-auto">
          {sortedBills.map((bill, index) => (
            <div key={index} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getUrgencyIcon(bill.urgency)}
                  <span className="font-medium text-gray-900">{bill.retailer}</span>
                </div>
                <Badge className={getUrgencyColor(bill.urgency)}>
                  {bill.urgency.toUpperCase()}
                </Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Amount:</span>
                  <div className="text-blue-600 font-bold">₹{bill.amount.toLocaleString()}</div>
                </div>
                <div>
                  <span className="font-medium">Pending:</span>
                  <div className={`font-bold ${
                    bill.pendingDays > 30 ? 'text-red-600' : 
                    bill.pendingDays > 15 ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {bill.pendingDays} days
                  </div>
                </div>
                <div>
                  <span className="font-medium">Bill #:</span>
                  <div className="text-gray-700">{bill.billNumber}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountsReceivable;
