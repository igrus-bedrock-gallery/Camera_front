import React from "react";

interface CaptureProps {
  img: string;
}

export default function CaptureModal({ img }: CaptureProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-center bg-white rounded-lg shadow-lg m -20">
        <h2 className="mb-4 text-2xl font-bold">사진이 촬영되었습니다!</h2>
        <p>사진 다시 찍을 아님 그냥ㄱ?</p>
        <img src={img} className="border border-gray-300 rounded-md" />
        <div className="flex gap-2 my-2">
          <button
            className="h-10 primary-btn"
            onClick={() => window.location.reload()}
          >
            다시 찍기
          </button>
          <button className="h-10 primary-btn">결과 확인하기</button>
        </div>
      </div>
    </div>
  );
}
