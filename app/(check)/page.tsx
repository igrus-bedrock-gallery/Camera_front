"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="p-4 border-2 border-gray-300 rounded-lg shadow-lg">
        <div className="flex flex-col items-center w-full gap-3">
          <span>대충 약관 머시기</span>
          <span>대충 약관 머시기</span>
          <span>대충 약관 머시기</span>
          <span>대충 약관 머시기</span>

          <Link href="/home" className="primary-btn text-lg py-2.5">
            넘기기
          </Link>
        </div>
      </div>
    </div>
  );
}
