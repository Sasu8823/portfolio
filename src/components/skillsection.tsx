import SkillCircle from './skillcircle';

const skills = [
  { name: "JavaScript", percent: 90 },
  { name: "TypeScript", percent: 80 },
  { name: "Python", percent: 85 },
  { name: "C++", percent: 70 },
  { name: "PHP", percent: 90 },
  { name: "Laravel", percent: 90 },
  { name: "Docker", percent: 80 },
  { name: "HTML5", percent: 85 },
  { name: "Nuxt", percent: 70 },
  { name: "Vue", percent: 90 },
];

export default function SkillSection() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">プログラミング言語</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {skills.map(skill => (
            <SkillCircle key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
