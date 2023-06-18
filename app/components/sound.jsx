"use client";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useAppContext } from "../context";

export default function Sound({ title, icon, sound }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.7);
    const { primaryVolume } = useAppContext();

    useEffect(() => {
        const audio = document.getElementById(`audio${title}`)
        if (!audio) return
        audio.volume = volume * primaryVolume;
    }, [volume, primaryVolume]);

    const handlePlayPause = () => {
        const audio = document.getElementById(`audio${title}`)
        if (!audio) return

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying((prev) => !prev);
    };
    return (
        <div className="w-28 h-36">
            <div
                className={classNames("w-20 h-20 mx-auto mb-4 transition-opacity hover:opacity-100", {
                    "opacity-100": isPlaying,
                    "opacity-50": !isPlaying,
                })}
                title={title}>
                <img
                    onClick={handlePlayPause}
                    className="w-full h-full cursor-pointer p-1"
                    src={`/static/icons/${icon}`}
                    alt="cloud_drizzle"
                />
                <audio id={`audio${title}`} src={`/static/sounds/${sound}`} loop volume={volume}></audio>
            </div>
            {isPlaying && (
                <input
                    type="range"
                    id={`volume-${title}`}
                    min="0"
                    max="1"
                    step="0.02"
                    onChange={(e) => setVolume(e.target.value)}
                    onInput={(e) => setVolume(e.target.value)}
                    value={volume}
                    className="w-28 h-0.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
            )}
        </div>
    );
}
