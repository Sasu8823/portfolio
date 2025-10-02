import { useInView } from 'react-intersection-observer';
import SkillCircle from './skillcircle';

const skills = [
    { name: "JavaScript", percent: 95 },
    { name: "TypeScript", percent: 80 },
    { name: "Python", percent: 85 },
    { name: "C++", percent: 70 },
    { name: "PHP", percent: 90 },
    { name: "React", percent: 95 },
    { name: "Django", percent: 85 },
    { name: "Laravel", percent: 85 },
    { name: "Docker", percent: 95 },
    { name: "Mysql", percent: 85 },
];

export default function SkillSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="py-32">
            <div className="max-w-4xl mx-auto text-center mt-20">
                <h2 className="text-3xl font-bold mb-12">プログラミング言語</h2>
                <div className="flex flex-wrap justify-center gap-16">
                    {skills.map(skill => (
                        <SkillCircle key={skill.name} skill={skill} visible={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
