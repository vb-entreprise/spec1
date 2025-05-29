"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    mobileNo: '',
    dob: '',
    city: '',
    discipline: '',
    program: '',
    agreeNotifications: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  return (
    <Card className="w-full max-w-sm lg:max-w-md bg-white shadow-2xl mx-auto lg:mx-0 overflow-hidden flex-shrink-0 lg:self-start lg:mt-8">
      {/* Header */}
      <CardHeader className="text-center py-4 lg:py-6 px-4 lg:px-6 bg-white">
        <div className="space-y-1 lg:space-y-2">
          <p className="text-gray-600 text-sm uppercase tracking-wide">APPLY TODAY FOR</p>
          <h2 className="text-xl font-bold text-gray-800 leading-tight">
            CHANDIGARH UNIVERSITY<br />
            PROGRAMS
          </h2>
          <div className="bg-[#c40c12] text-white text-xs px-4 py-2 rounded-full inline-block">
            Registration End Date (Phase - I): 30th May 2025
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-4 lg:px-6 pb-4 lg:pb-6">
        <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
          {/* Student Name */}
          <div>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c40c12] focus:border-transparent text-gray-700 placeholder-gray-400"
              placeholder="STUDENT NAME"
              required
            />
          </div>

          {/* Student Email */}
          <div>
            <input
              type="email"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c40c12] focus:border-transparent text-gray-700 placeholder-gray-400"
              placeholder="STUDENT EMAIL ID"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="flex">
            <div className="flex items-center bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3">
              <span className="text-gray-600 text-sm">+91</span>
            </div>
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#c40c12] focus:border-transparent text-gray-700 placeholder-gray-400"
              placeholder="STUDENT MOBILE NO"
              required
            />
          </div>

          {/* Date of Birth and City */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c40c12] focus:border-transparent text-gray-700 placeholder-gray-400"
              placeholder="SELECT DOB"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c40c12] focus:border-transparent text-gray-700 placeholder-gray-400"
              placeholder="STUDENT CITY"
              required
            />
          </div>

          {/* Discipline and Program */}
          <div className="grid grid-cols-2 gap-3">
            <select
              name="discipline"
              value={formData.discipline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c40c12] focus:border-transparent text-gray-700 bg-white"
              required
            >
              <option value="">SELECT DISCIPLINE</option>
              <option value="engineering">Engineering</option>
              <option value="management">Management</option>
              <option value="computer-science">Computer Science</option>
              <option value="design">Design</option>
              <option value="law">Law</option>
              <option value="architecture">Architecture</option>
              <option value="pharmacy">Pharmacy</option>
              <option value="agriculture">Agriculture</option>
            </select>
            <select
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c40c12] focus:border-transparent text-gray-700 bg-white"
              required
            >
              <option value="">SELECT PROGRAM</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="doctorate">Doctorate</option>
              <option value="diploma">Diploma</option>
            </select>
          </div>

          {/* Agreement Text */}
          <div className="text-center">
            <p className="text-xs text-gray-600 leading-relaxed">
              By submitting this form, I agree to receive notifications from the<br />
              University in the form of SMS/E-mail/Call.
            </p>
          </div>

          {/* Apply Button */}
          <Button 
            type="submit"
            className="w-full bg-[#c40c12] hover:bg-[#a30a0f] text-white py-3 text-lg font-semibold transition-colors duration-200"
          >
            APPLY NOW
          </Button>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already Registered ? Click to{' '}
              <a href="#" className="text-[#c40c12] hover:underline font-medium">
                Login
              </a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
} 