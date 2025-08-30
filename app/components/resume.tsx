"use client";

import siteData from "@/data/site-data.json";

export default function Resume() {
  const { personalInfo, skills, experience, education, projects } =
    siteData.resume;

  const renderSkills = (title: string, skillArray: string[]) => (
    <div>
      <h3 className="text-lg font-semibold text-black mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skillArray.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex space-y-4 flex-col md:flex-row md:justify-between items-start md:mb-4">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-gray-600">{personalInfo.title}</p>
            </div>
            <div className="text-left md:text-right text-sm space-y-1 text-gray-600">
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.email}</p>
              <p>{personalInfo.linkedin}</p>
              <p>{personalInfo.github}</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Experience</h2>
          {experience.map((exp, idx) => (
            <div key={idx} className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {exp.company} - {exp.role}
                  </h3>
                  <p className="text-sm text-gray-600 italic">{exp.period}</p>
                </div>
              </div>

              {exp.projects ? (
                exp.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="mb-4">
                    <h4 className="font-medium text-black mb-2">
                      {proj.name}{" "}
                      {proj.url && (
                        <>
                          —{" "}
                          <a
                            href={proj.url}
                            target="_blank"
                            className="text-blue-600 underline"
                          >
                            {proj.url}
                          </a>
                        </>
                      )}
                    </h4>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      {proj.details.map((detail, dIdx) => (
                        <li key={dIdx}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : exp.details ? (
                <ul className="space-y-1 text-gray-700 text-sm ml-4">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx}>• {detail}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 text-sm gap-6">
            {renderSkills("Languages", skills.languages)}
            {renderSkills("Frontend", skills.frontend)}
            {renderSkills("APIs", skills.apis)}
            {renderSkills("Backend", skills.backend)}
            {renderSkills("Database", skills.databases)}
            {renderSkills("DevOps & Cloud", skills.devopsCloud)}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Education</h2>
          {education.map((edu, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-black">{edu.degree}</h3>
              <p className="text-gray-600">{edu.university}</p>
              <p className="text-gray-600">{edu.period}</p>
              <p className="text-gray-600">GPA: {edu.gpa}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6">Selected Projects</h2>
          <div className="space-y-6">
            {projects.map((proj, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {proj.name} ({proj.year})
                </h3>
                <ul className="space-y-1 text-gray-700 text-sm ml-4">
                  {proj.details.map((detail, dIdx) => (
                    <li key={dIdx}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
