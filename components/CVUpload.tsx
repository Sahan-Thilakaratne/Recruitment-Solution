"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CVUpload() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append("cv", file)

    try {
      const response = await fetch("/api/upload-cv", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        // Handle successful upload
        console.log("CV uploaded successfully")
        // You might want to trigger a re-fetch of the profile data here
      } else {
        // Handle error
        console.error("Failed to upload CV")
      }
    } catch (error) {
      console.error("Error uploading CV:", error)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upload Your CV</h2>
      <div className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cv">CV File</Label>
          <Input id="cv" type="file" onChange={handleFileChange} />
        </div>
        <Button onClick={handleUpload} disabled={!file}>
          Upload CV
        </Button>
      </div>
    </div>
  )
}