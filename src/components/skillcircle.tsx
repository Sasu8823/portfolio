import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import Wavify from 'react-wavify';

interface Skill {
  name: string;
  percent: number;
}

const SkillCircle = ({ skill }: { skill: Skill }) => {
  return (
    <div className="w-28 h-28 relative">
      <CircularProgressbar
        value={skill.percent}
        text={`${skill.percent}%`}
        styles={buildStyles({
          pathColor: "#14a545ff",
          textColor: "#fff",
          trailColor: "rgba(250, 249, 249, 0)",
          textSize: '24px',
        })}
      />
      <div className="inset-0 flex items-center justify-center text-white text-sm font-semibold">
        {skill.name}
      </div>

      {/* 波を円形内に重ねる場合 */}
        {/* <div className="absolute inset-0 rounded-full overflow-hidden w-full h-full">
          <Wavify
            fill="rgba(50, 202, 240, 0.3)"
            paused={false}
            options={{
              height: 20,
              amplitude: 20,
              speed: 0.2,
              points: 3
            }}
            className="w-full h-full"
          />
        </div> */}
    </div>
  );
};


export default SkillCircle;