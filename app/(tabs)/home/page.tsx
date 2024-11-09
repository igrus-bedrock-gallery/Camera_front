"use client";
import React, { useRef, useState, useEffect } from "react";
import { useActionState } from "react";
import { sendFile } from "./actions";
import Button from "@/components/button";
import Input from "@/components/input";
import Capture from "@/components/capture";

export default function Camera() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [state, dispatch] = useActionState(sendFile, null);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          // 비디오가 로드되면 비율을 계산하여 캔버스에 적용
          videoRef.current.onloadedmetadata = () => {
            const videoWidth = videoRef.current!.videoWidth;
            const videoHeight = videoRef.current!.videoHeight;
            if (canvasRef.current) {
              canvasRef.current.width = videoWidth;
              canvasRef.current.height = videoHeight;
            }
          };
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    };
    startWebcam();
  }, []);

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        // 비디오의 현재 프레임을 캔버스에 맞춰서 그리기
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const imageData = canvasRef.current.toDataURL("image/png");
        setPhoto(imageData);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="p-4 border-2 border-gray-300 rounded-lg shadow-lg">
        <video ref={videoRef} autoPlay className="rounded-md" />
        <canvas ref={canvasRef} className="hidden" />
        <form action={dispatch} className="flex gap-4 mt-4">
          <Input name="setting" placeholder="암거나 적으셈" />
          <Button text="사진 찍기" onClick={takePhoto} />
        </form>
        {photo && (
          <div className="mt-4">
            <Capture img={photo} />
          </div>
        )}
      </div>
    </div>
  );
}
