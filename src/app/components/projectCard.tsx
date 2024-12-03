"use client"
import { useEffect, useState } from "react";
import { getDescription } from "./descriptions";
interface CardProps {
    projectName: string
}

export default function ProjectCard({projectName} : CardProps) {
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([""]);
    
    useEffect(() => {
        const relatedObject = getDescription(projectName);
        setDescription(relatedObject.description);
        setTags(relatedObject.tags);
    }, [])

    return (
        <div className="bg-white dark:bg-slate-800 max-w-sm rounded overflow-hidden shadow-lg border border-black">
            <img className="flex w-full aspect-video" src={"/" + projectName.toLowerCase() + ".png"} alt={projectName}></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{projectName}</div>
                <p className="text-gray-700 text-base dark:text-white">
                {description}
                </p>
            </div>
            {tags && 
            <div className="px-6 pt-4 pb-2">
                {tags.map((value, key) => 
                    <div key={key} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{value}</div>
                )}
            </div>
            }
        </div>
    );
}