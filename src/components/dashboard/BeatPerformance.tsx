
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { MapPin, Target, CheckCircle } from 'lucide-react';

const BeatPerformance = () => {
  const beatData = [
    { beat: 'Beat A - Central Market', scheduled: 25, completed: 23, rate: 92 },
    { beat: 'Beat B - North District', scheduled: 20, completed: 18, rate: 90 },
    { beat: 'Beat C - South Zone', scheduled: 30, completed: 24, rate: 80 },
    { beat: 'Beat D - East Area', scheduled: 15, completed: 14, rate: 93 },
    { beat: 'Beat E - West Region', scheduled: 22, completed: 19, rate: 86 }
  ];

  const overallCompletion = Math.round(
    (beatData.reduce((sum, beat) => sum + beat.completed, 0) / 
     beatData.reduce((sum, beat) => sum + beat.scheduled, 0)) * 100
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <MapPin className="h-5 w-5 mr-2 text-blue-600" />
          Beat Performance & Completion Rate
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Overall Completion Rate</span>
            <span className="text-2xl font-bold text-blue-600">{overallCompletion}%</span>
          </div>
          <Progress value={overallCompletion} className="h-3" />
        </div>

        <div className="space-y-4">
          {beatData.map((beat, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{beat.beat}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  beat.rate >= 90 ? 'bg-green-100 text-green-800' : 
                  beat.rate >= 80 ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'
                }`}>
                  {beat.rate}%
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <div className="flex items-center">
                  <Target className="h-4 w-4 mr-1" />
                  Scheduled: {beat.scheduled}
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                  Completed: {beat.completed}
                </div>
              </div>
              
              <Progress value={beat.rate} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BeatPerformance;
