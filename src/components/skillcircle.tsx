import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import Wavify from 'react-wavify';

interface Skill {
    name: string;
    percent: number;
}

const SkillCircle = ({ skill, visible }: { skill: Skill, visible: boolean }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!visible) {
            setValue(0);
            return;
        }

        let start = 0;
        const end = skill.percent;
        const duration = 2000; // 1 second
        const interval = 16;   // ~60fps
        const step = end / (duration / interval);

        const animate = () => {
            start += step;
            if (start < end) {
                setValue(Math.round(start));
                requestAnimationFrame(animate);
            } else {
                setValue(end);
            }
        };
        requestAnimationFrame(animate);
    }, [visible, skill.percent]);

    return (
        <div className="w-28 h-28 relative">
            <CircularProgressbar
                value={value}
                text={`${value}%`}
                styles={buildStyles({
                    pathColor: "#62df3007",
                    textColor: "#fff",
                    trailColor: "rgba(119, 81, 81, 0)",
                    textSize: '24px',
                })}
            />
            <div className="inset-0 flex items-center justify-center text-white text font-semibold mt-5">
                {skill.name}
            </div>
            {/* 波を円形内に重ねる場合 */}
            <div className="absolute inset-0 rounded-full overflow-hidden w-full h-full">
                <Wavify fill="rgba(45, 216, 22, 0.51)" paused={false} options={{ height: (100 - value) , amplitude: 5, speed: 0.3, points: 3 }} className="w-full h-full" />
            </div>
        </div>
    );
};

export default SkillCircle;
