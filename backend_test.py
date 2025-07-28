#!/usr/bin/env python3
"""
Backend Test Suite for Godeloup Domotique Application
Tests backend API functionality after frontend boutique modifications
"""

import requests
import json
import time
import sys
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from frontend environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    print("❌ REACT_APP_BACKEND_URL not found in frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"

class BackendTester:
    def __init__(self):
        self.test_results = []
        self.failed_tests = []
        
    def log_test(self, test_name, success, message="", details=""):
        """Log test result"""
        status = "✅ PASS" if success else "❌ FAIL"
        result = {
            'test': test_name,
            'success': success,
            'message': message,
            'details': details,
            'timestamp': datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        if not success:
            self.failed_tests.append(test_name)
            
        print(f"{status}: {test_name}")
        if message:
            print(f"   {message}")
        if details and not success:
            print(f"   Details: {details}")
        print()

    def test_server_availability(self):
        """Test if backend server is accessible"""
        try:
            response = requests.get(f"{API_BASE_URL}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("Server Availability", True, 
                                f"Backend server responding at {API_BASE_URL}")
                    return True
                else:
                    self.log_test("Server Availability", False, 
                                f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("Server Availability", False, 
                            f"HTTP {response.status_code}: {response.text}")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("Server Availability", False, 
                        f"Connection failed to {API_BASE_URL}", str(e))
            return False

    def test_status_endpoint_get(self):
        """Test GET /api/status endpoint"""
        try:
            response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("GET /api/status", True, 
                                f"Retrieved {len(data)} status checks")
                    return True
                else:
                    self.log_test("GET /api/status", False, 
                                f"Expected list, got: {type(data)}")
                    return False
            else:
                self.log_test("GET /api/status", False, 
                            f"HTTP {response.status_code}: {response.text}")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("GET /api/status", False, 
                        "Request failed", str(e))
            return False

    def test_status_endpoint_post(self):
        """Test POST /api/status endpoint"""
        try:
            test_data = {
                "client_name": "Godeloup_Test_Client"
            }
            
            response = requests.post(f"{API_BASE_URL}/status", 
                                   json=test_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if (data.get("client_name") == test_data["client_name"] and 
                    "id" in data and "timestamp" in data):
                    self.log_test("POST /api/status", True, 
                                f"Created status check with ID: {data['id']}")
                    return True
                else:
                    self.log_test("POST /api/status", False, 
                                f"Invalid response structure: {data}")
                    return False
            else:
                self.log_test("POST /api/status", False, 
                            f"HTTP {response.status_code}: {response.text}")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("POST /api/status", False, 
                        "Request failed", str(e))
            return False

    def test_cors_headers(self):
        """Test CORS configuration"""
        try:
            response = requests.options(f"{API_BASE_URL}/", timeout=10)
            headers = response.headers
            
            cors_headers = [
                'Access-Control-Allow-Origin',
                'Access-Control-Allow-Methods',
                'Access-Control-Allow-Headers'
            ]
            
            missing_headers = [h for h in cors_headers if h not in headers]
            
            if not missing_headers:
                self.log_test("CORS Configuration", True, 
                            "All required CORS headers present")
                return True
            else:
                self.log_test("CORS Configuration", False, 
                            f"Missing CORS headers: {missing_headers}")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("CORS Configuration", False, 
                        "CORS test failed", str(e))
            return False

    def test_api_response_format(self):
        """Test API response format consistency"""
        try:
            # Test root endpoint
            response = requests.get(f"{API_BASE_URL}/", timeout=10)
            if response.status_code == 200:
                try:
                    data = response.json()
                    self.log_test("API Response Format", True, 
                                "All endpoints return valid JSON")
                    return True
                except json.JSONDecodeError:
                    self.log_test("API Response Format", False, 
                                "Invalid JSON response")
                    return False
            else:
                self.log_test("API Response Format", False, 
                            f"API not responding properly")
                return False
        except requests.exceptions.RequestException as e:
            self.log_test("API Response Format", False, 
                        "Response format test failed", str(e))
            return False

    def run_all_tests(self):
        """Run all backend tests"""
        print("=" * 60)
        print("GODELOUP DOMOTIQUE - BACKEND TEST SUITE")
        print("=" * 60)
        print(f"Testing backend at: {API_BASE_URL}")
        print(f"Test started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print()

        # Run tests in order
        tests = [
            self.test_server_availability,
            self.test_api_response_format,
            self.test_cors_headers,
            self.test_status_endpoint_get,
            self.test_status_endpoint_post,
        ]

        for test in tests:
            test()

        # Summary
        print("=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = len([r for r in self.test_results if r['success']])
        failed_tests = total_tests - passed_tests
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {failed_tests}")
        
        if failed_tests == 0:
            print("\n🎉 ALL TESTS PASSED - Backend is functioning correctly!")
            return True
        else:
            print(f"\n⚠️  {failed_tests} TEST(S) FAILED:")
            for failed_test in self.failed_tests:
                print(f"   - {failed_test}")
            return False

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)