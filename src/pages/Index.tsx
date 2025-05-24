
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Users, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">FMCG Sales Analytics</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive field executive performance tracking and analytics dashboard for offline general trade sales management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Analytics</h3>
            <p className="text-gray-600">Track beat completion rates, sales metrics, and visit analytics in real-time</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Field Executive Insights</h3>
            <p className="text-gray-600">Monitor attendance, leaderboards, and individual FE performance metrics</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Reporting</h3>
            <p className="text-gray-600">Advanced filtering, area-wise analysis, and accounts receivable management</p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/dashboard">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <TrendingUp className="h-5 w-5 mr-2" />
              Launch Dashboard
            </Button>
          </Link>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Beat Performance Tracking</h4>
                  <p className="text-gray-600 text-sm">Monitor visit completion rates and scheduled vs actual visits</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sales Analytics</h4>
                  <p className="text-gray-600 text-sm">Category-wise, SKU-wise, and area-wise sales breakdown</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Visit Frequency Analysis</h4>
                  <p className="text-gray-600 text-sm">Track visit patterns with monthly and weekly filters</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Performance Leaderboards</h4>
                  <p className="text-gray-600 text-sm">Rank field executives based on comprehensive performance metrics</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Attendance Management</h4>
                  <p className="text-gray-600 text-sm">Track daily attendance against 24 working days per month</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Returns Analysis</h4>
                  <p className="text-gray-600 text-sm">Monitor credit notes, returns, and their impact on sales</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Accounts Receivable</h4>
                  <p className="text-gray-600 text-sm">Track pending bills with sorting by value and aging</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Advanced Filtering</h4>
                  <p className="text-gray-600 text-sm">Filter by FE, time frame, and area for detailed insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
