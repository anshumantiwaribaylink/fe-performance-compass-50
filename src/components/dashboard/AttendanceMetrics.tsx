
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const AttendanceMetrics = () => {
  const attendanceData = {
    totalWorkingDays: 24,
    presentDays: 22,
    absentDays: 2,
    lateArrivals: 3,
    earlyDepartures: 1,
    attendanceRate: 91.7
  };

  const weeklyAttendance = [
    { week: 'Week 1', present: 6, total: 6, rate: 100 },
    { week: 'Week 2', present: 5, total: 6, rate: 83.3 },
    { week: 'Week 3', present: 6, total: 6, rate: 100 },
    { week: 'Week 4', present: 5, total: 6, rate: 83.3 }
  ];

  const monthlyCalendar = [
    { date: 1, status: 'present' }, { date: 2, status: 'present' }, { date: 3, status: 'absent' },
    { date: 4, status: 'present' }, { date: 5, status: 'present' }, { date: 6, status: 'present' },
    { date: 7, status: 'present' }, { date: 8, status: 'late' }, { date: 9, status: 'present' },
    { date: 10, status: 'present' }, { date: 11, status: 'present' }, { date: 12, status: 'present' },
    { date: 13, status: 'present' }, { date: 14, status: 'absent' }, { date: 15, status: 'present' },
    { date: 16, status: 'present' }, { date: 17, status: 'late' }, { date: 18, status: 'present' },
    { date: 19, status: 'present' }, { date: 20, status: 'present' }, { date: 21, status: 'present' },
    { date: 22, status: 'present' }, { date: 23, status: 'late' }, { date: 24, status: 'present' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-500';
      case 'absent':
        return 'bg-red-500';
      case 'late':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-3 w-3 text-green-600" />;
      case 'absent':
        return <XCircle className="h-3 w-3 text-red-600" />;
      case 'late':
        return <AlertCircle className="h-3 w-3 text-yellow-600" />;
      default:
        return null;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Clock className="h-5 w-5 mr-2 text-blue-600" />
          Attendance Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Monthly Attendance Rate</span>
            <span className="text-2xl font-bold text-blue-600">{attendanceData.attendanceRate}%</span>
          </div>
          <Progress value={attendanceData.attendanceRate} className="h-3 mb-4" />
          
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="p-2 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-600">{attendanceData.presentDays}</div>
              <div className="text-xs text-gray-600">Present</div>
            </div>
            <div className="p-2 bg-red-50 rounded-lg">
              <div className="text-lg font-bold text-red-600">{attendanceData.absentDays}</div>
              <div className="text-xs text-gray-600">Absent</div>
            </div>
            <div className="p-2 bg-yellow-50 rounded-lg">
              <div className="text-lg font-bold text-yellow-600">{attendanceData.lateArrivals}</div>
              <div className="text-xs text-gray-600">Late</div>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">{attendanceData.earlyDepartures}</div>
              <div className="text-xs text-gray-600">Early Out</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Weekly Breakdown</h4>
          <div className="space-y-2">
            {weeklyAttendance.map((week, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm font-medium">{week.week}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{week.present}/{week.total}</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    week.rate === 100 ? 'bg-green-100 text-green-800' : 
                    week.rate >= 80 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {week.rate.toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Monthly Calendar</h4>
          <div className="grid grid-cols-6 gap-1">
            {monthlyCalendar.map((day) => (
              <div 
                key={day.date}
                className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium text-white ${getStatusColor(day.status)}`}
                title={`Day ${day.date}: ${day.status}`}
              >
                {day.date}
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center space-x-4 mt-3 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
              <span>Present</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded mr-1"></div>
              <span>Late</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded mr-1"></div>
              <span>Absent</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceMetrics;
