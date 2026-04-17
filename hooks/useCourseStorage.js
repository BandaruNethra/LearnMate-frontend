'use client';
import { useState, useEffect } from 'react';

export function useCourseStorage(courseId) {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // keys for localStorage
  const ENROLL_KEY = `learnmate_enrolled_${courseId}`;
  const COMPLETE_KEY = `learnmate_completed_${courseId}`;

  useEffect(() => {
    // Load from browser memory on startup
    const enrolled = localStorage.getItem(ENROLL_KEY) === 'true';
    const completed = localStorage.getItem(COMPLETE_KEY) === 'true';
    
    setIsEnrolled(enrolled);
    setIsCompleted(completed);
    setIsLoaded(true);
  }, [courseId]);

  const enroll = () => {
    localStorage.setItem(ENROLL_KEY, 'true');
    setIsEnrolled(true);
  };

  const completeCourse = () => {
    localStorage.setItem(COMPLETE_KEY, 'true');
    setIsCompleted(true);
  };

  // Optional: Function to reset for testing
  const resetCourse = () => {
    localStorage.removeItem(ENROLL_KEY);
    localStorage.removeItem(COMPLETE_KEY);
    setIsEnrolled(false);
    setIsCompleted(false);
  };

  return { isEnrolled, isCompleted, isLoaded, enroll, completeCourse, resetCourse };
}