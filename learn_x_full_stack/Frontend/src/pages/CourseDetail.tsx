import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

const API = process.env.REACT_APP_API_URL;

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [videos, setVideos] = useState<any[]>([]);
  const [progress, setProgress] = useState<{ [key: number]: any }>({});
  const [assignments, setAssignments] = useState<any[]>([]);
  const token = localStorage.getItem("token");
  const playerRefs = useRef<{ [key: number]: ReactPlayer | null }>({});

  useEffect(() => {
    axios.get(`${API}/api/courses/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setCourse(res.data))
      .catch(() => setMessage("Course not found"));

    axios.get(`${API}/api/videos/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setVideos(res.data))
      .catch(() => setVideos([]));

    axios.get(`${API}/api/assignments/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setAssignments(res.data))
      .catch(() => setAssignments([]));
  }, [id, token]);

  useEffect(() => {
    videos.forEach(v =>
      axios.get(`${API}/api/progress/${v.id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => setProgress(p => ({ ...p, [v.id]: res.data })))
    );
  }, [videos, token]);

  const handleEnroll = async () => {
    try {
      await axios.post(`${API}/api/courses/${id}/enroll`, {}, { headers: { Authorization: `Bearer ${token}` } });
      setMessage("Enrolled successfully!");
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Enroll failed");
    }
  };

  const handleProgress = (videoId: number, playedSeconds: number, duration: number) => {
    const completed = playedSeconds / duration > 0.98;
    axios.post(`${API}/api/progress`, {
      video_id: videoId,
      watched_seconds: Math.round(playedSeconds),
      completed
    }, { headers: { Authorization: `Bearer ${token}` } });
  };

  if (!course) return <div>{message || "Loading..."}</div>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button onClick={handleEnroll}>Enroll</button>
      <p>{message}</p>
      <Link to={`/courses/${id}/upload`}>Upload Video (Instructor)</Link>
      <Link to={`/courses/${id}/chat`}>Course Chat</Link>
      <h3>Videos</h3>
      <ul>
        {videos.map((v) => (
          <li key={v.id}>
            <strong>{v.title}</strong>
            <ReactPlayer
              url={API + v.video_url}
              controls
              width="480px"
              height="270px"
              ref={ref => playerRefs.current[v.id] = ref}
              onProgress={state => handleProgress(v.id, state.playedSeconds, playerRefs.current[v.id]?.getDuration() || 1)}
            />
            <div>
              {progress[v.id]?.completed ? "✅ Watched" : `Watched: ${progress[v.id]?.watched_seconds || 0}s`}
              <div>
                <strong>Transcript:</strong>
                <pre>{v.transcript}</pre>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h3>Assignments</h3>
      <ul>
        {assignments.map(a => (
          <li key={a.id}>
            <Link to={`/assignments?assignment_id=${a.id}`}>{a.title}</Link> - Due: {a.due_date ? new Date(a.due_date).toLocaleString() : "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
}