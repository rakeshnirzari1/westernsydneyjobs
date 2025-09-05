"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"
import { useState } from "react"

export function JobFilters() {
  const [salaryRange, setSalaryRange] = useState([50000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [selectedExperience, setSelectedExperience] = useState<string[]>([])

  const categories = [
    "Technology",
    "Healthcare",
    "Education",
    "Finance",
    "Marketing",
    "Sales",
    "Construction",
    "Retail",
    "Hospitality",
    "Manufacturing",
    "Government",
    "Non-Profit",
  ]

  const jobTypes = ["Full-time", "Part-time", "Contract", "Casual", "Internship"]

  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Executive"]

  const toggleFilter = (value: string, selected: string[], setter: (values: string[]) => void) => {
    if (selected.includes(value)) {
      setter(selected.filter((item) => item !== value))
    } else {
      setter([...selected, value])
    }
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedJobTypes([])
    setSelectedExperience([])
    setSalaryRange([50000])
  }

  const activeFiltersCount = selectedCategories.length + selectedJobTypes.length + selectedExperience.length

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">Filters</h2>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {activeFiltersCount}
            </Badge>
          )}
        </div>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-muted-foreground">
            Clear All
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => toggleFilter(category, selectedCategories, setSelectedCategories)}
              />
            </Badge>
          ))}
          {selectedJobTypes.map((type) => (
            <Badge key={type} variant="secondary" className="text-xs">
              {type}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => toggleFilter(type, selectedJobTypes, setSelectedJobTypes)}
              />
            </Badge>
          ))}
          {selectedExperience.map((exp) => (
            <Badge key={exp} variant="secondary" className="text-xs">
              {exp}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => toggleFilter(exp, selectedExperience, setSelectedExperience)}
              />
            </Badge>
          ))}
        </div>
      )}

      {/* Salary Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Salary Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={salaryRange}
              onValueChange={setSalaryRange}
              max={200000}
              min={30000}
              step={5000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>$30k</span>
              <span className="font-medium text-foreground">${salaryRange[0].toLocaleString()}+</span>
              <span>$200k+</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Job Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-48 overflow-y-auto">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => toggleFilter(category, selectedCategories, setSelectedCategories)}
                />
                <Label htmlFor={category} className="text-sm cursor-pointer">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Job Type */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Job Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {jobTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={selectedJobTypes.includes(type)}
                  onCheckedChange={() => toggleFilter(type, selectedJobTypes, setSelectedJobTypes)}
                />
                <Label htmlFor={type} className="text-sm cursor-pointer">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience Level */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Experience Level</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {experienceLevels.map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox
                  id={level}
                  checked={selectedExperience.includes(level)}
                  onCheckedChange={() => toggleFilter(level, selectedExperience, setSelectedExperience)}
                />
                <Label htmlFor={level} className="text-sm cursor-pointer">
                  {level}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
