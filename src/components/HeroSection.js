import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./HeroSection.css";
import loadingGif from "../assets/oUimVfeqwk.gif"; // Import the loading GIF

function HeroSection() {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null); // State to hold the selected file
  const [isLoading, setIsLoading] = useState(false); // State to handle loading animation
  const [prediction, setPrediction] = useState(null); // State to hold the prediction result
  const fullCaption = "Revealing Reality, Defending Integrity";
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const typewriter = setInterval(() => {
      if (index < fullCaption.length) {
        setCaption(fullCaption.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typewriter);
      }
    }, 100);
    return () => clearInterval(typewriter);
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Update file state
  };

  const handleUploadClick = async () => {
    if (file) {
      setIsLoading(true); // Show loading animation

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Handle the response from the server
        const predictionResult = response.data.prediction;
        setPrediction(predictionResult); // Save prediction to state
        setIsLoading(false);

        // Navigate to results page with prediction result
        navigate('/results', { state: { prediction: predictionResult } });
      } catch (error) {
        console.error('Error uploading file:', error);
        setIsLoading(false);
      }
    } else {
      alert('Please select a file before uploading.');
    }
  };

  return (
    <div className="hero-section" data-aos="fade-up">
      {isLoading ? (
        <div className="loading-container">
          <img src={loadingGif} alt="Loading..." className="loading-gif" />
          <div className="loading-text">
            Analyzing
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      ) : (
        <>
          <div className="circles-container">
            <div className="circle circle-left"></div>
            <div className="circle circle-right"></div>
          </div>
          <div className="title-container">
            <h1 className="title">DeepShield</h1>
            <p className="subtitle">
              <span className="caption">{caption}</span>
              <span className="cursor">|</span>
            </p>
            <br />
            <br />
            <div className="upload-box">
              <label className="custom-file-upload">
                <input
                  type="file"
                  className="upload-input"
                  onChange={handleFileChange}
                />
                <i className="fa fa-cloud-upload"></i> Choose File
              </label>
              {file && <span className="file-name">{file.name}</span>}
              <button className="upload-button" onClick={handleUploadClick}>
                <i className="fa fa-upload"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HeroSection;
