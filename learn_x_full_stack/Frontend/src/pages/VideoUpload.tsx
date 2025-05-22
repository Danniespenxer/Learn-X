import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function VideoUpload() {
  const { courseId } = useParams();
  const [title, setTitle] = useState("");
  const [transcript, setTranscript] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return setMessage("No file selected");
    const formData = new FormData();
    formData.append("video", file);
    formData.append("title", title);
    formData.append("transcript", transcript);
    try {
      await axios.post(`${API}/api/videos/${courseId}/upload`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage("Video uploaded!");
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Upload failed");
    }
  };

  return (
    <div>
      <h3>Upload Video</h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        /><br/>
        <textarea
          placeholder="Transcript (optional)"
          value={transcript}
          onChange={e => setTranscript(e.target.value)}
        /><br/>
        <input
          type="file"
          accept="video/*"
          onChange={e => setFile(e.target.files?.[0] || null)}
          required
        /><br/>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}