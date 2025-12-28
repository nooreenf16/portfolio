"use client";
import React, { useState, useEffect } from "react";

const InteractiveRing = () => {
    return (
        <div>
            <div className="absolute w-80 h-80 border border-purple-500 rounded-full opacity-50 "></div>
            <div className="absolute w-96 h-96 border border-blue-400 rounded-full opacity-30"></div>
        </div>
    )
};

export default InteractiveRing;
