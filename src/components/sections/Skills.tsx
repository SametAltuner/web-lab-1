interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

const skills: Skill[] = [
  { name: "Flutter", level: 85, category: "Mobil" },
  { name: "Java", level: 80, category: "Backend" },
  { name: "Spring Boot", level: 75, category: "Backend" },
  { name: "React", level: 70, category: "Frontend" },
  { name: "TypeScript", level: 65, category: "Frontend" },
  { name: "JavaScript", level: 80, category: "Frontend" },
  { name: "HTML / CSS", level: 85, category: "Frontend" },
  { name: "MySQL", level: 70, category: "Backend" },
];

export default function Skills() {
  return (
    <section id="yetenekler" className="skills-section">
      <h2>Yetenekler</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} seviyesi`}
              />
            </div>
            <span className="skill-category">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
