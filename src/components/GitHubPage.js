import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function GitHubPage() {
  useEffect(() => {
    window.location.href = "https://github.com/"; 
  }, []);

  return null; 
}

export default GitHubPage