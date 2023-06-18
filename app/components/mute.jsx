"use client";
import { useState } from "react";
import { useAppContext } from "../context";

export default function Mute() {
    const [isMute, setIsMute] = useState(false);
    const [volumeControl, setVolumeControl] = useState(false);
    const [prevVolume, setPrevVolume] = useState(1)
    const { primaryVolume, setPrimaryVolume } = useAppContext();

    function mute(elem) {
        elem.muted = true;
    }
    function unmute(elem) {
        elem.muted = false;
    }
    function mutePage() {
        document.querySelectorAll("audio").forEach((elem) => mute(elem));
        setIsMute(true);
        setPrimaryVolume(prev => {
            setPrevVolume(prev)
            return 0
        })
    }
    function unmutePage() {
        document.querySelectorAll("audio").forEach((elem) => unmute(elem));
        setIsMute(false);
        setPrimaryVolume(prevVolume)
    }

    function handleVolumeControl (e) {
        setPrimaryVolume(e.target.value)
    }
    

    return (
        <div
            className="flex gap-4 items-center"
            onMouseEnter={() => setVolumeControl(true)}
            onMouseLeave={() => setVolumeControl(false)}>
            {volumeControl && (
                <input
                    type="range"
                    id="volumeControl"
                    min="0"
                    max="1"
                    step="0.02"
                    onChange={(e) => setPrimaryVolume(e.target.value)}
                    onInput={(e) => setPrimaryVolume(e.target.value)}
                    value={primaryVolume}
                    className="w-28 h-0.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
            )}
            {isMute ? (
                <img
                    className="cursor-pointer w-7 opacity-80 hover:opacity-100"
                    onClick={unmutePage}
                    src="/static/icons/mute.svg"
                    alt=""
                />
            ) : (
                <img
                    className="cursor-pointer w-7 opacity-80 hover:opacity-100"
                    onClick={mutePage}
                    src="/static/icons/volume.svg"
                    alt=""
                />
            )}
        </div>
    );
}
