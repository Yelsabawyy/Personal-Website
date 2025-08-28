export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">
                Youssef Elsabawy
              </h1>
              <p className="text-xl text-gray-600">
                Software Engineer - Frontend Development & User Experience
              </p>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>+201283230322</p>
              <p>yelsabawyy@gmail.com</p>
              <p>linkedin.com/in/yelsabawyy</p>
              <p>github.com/yelsabawyy</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Summary</h2>
          <div className="text-gray-700 leading-relaxed">
            <p>
              Software engineer specializing in frontend development and user
              experience, with over 300 LeetCode problems solved to strengthen
              problem-solving and coding expertise.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "JavaScript", "Java", "C++", "Python"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "Angular.js",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Bootstrap",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">APIs</h3>
              <div className="flex flex-wrap gap-2">
                {["REST API", "GraphQL", "Socket.io", "JWT", "AJAX"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "Laravel", "ASP.NET Core"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Database
              </h3>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "PostgreSQL", "MongoDB", "Redis"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                DevOps & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "GIT", "AWS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Experience</h2>

          {/* Tech Hive */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Tech Hive - Frontend Developer
                </h3>
                <p className="text-sm text-gray-600 italic">
                  Jan/2024 - Present
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-black mb-2">
                Ingenium — https://ingeniumpros.com
              </h4>
              <ul className="space-y-1 text-gray-700 text-sm ml-4">
                <li>
                  • Built 90% of the frontend for Ingenium, including dynamic
                  calendars, milestone tracking, invoicing systems,
                  notifications, and messaging features.
                </li>
                <li>
                  • Developed 100% of the dashboard to provide comprehensive
                  user control and insights.
                </li>
                <li>
                  • Integrated backend APIs for real-time data synchronization
                  across the platform.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-black mb-2">
                App ASAP — https://appasap.app/
              </h4>
              <ul className="space-y-1 text-gray-700 text-sm ml-4">
                <li>
                  • Improved error monitoring for Terraform issues using AWS
                  services.
                </li>
                <li>
                  • Enhanced system reliability and streamlined troubleshooting.
                </li>
              </ul>
            </div>
          </div>

          {/* ITI */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-black">
                  ITI (Information Technology Institute) - Internship
                </h3>
                <p className="text-sm text-gray-600 italic">
                  Jul 2023 – Nov 2023
                </p>
              </div>
            </div>
            <ul className="space-y-1 text-gray-700 text-sm ml-4">
              <li>
                • Developed the auction system, including triggers and functions
                to validate winning bids.
              </li>
              <li>
                • Handled 50% of both frontend and backend development using C#
                and .NET in an agile team.
              </li>
            </ul>
          </div>

          {/* Alexandria Port */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Alexandria Port Egypt - Internship
                </h3>
                <p className="text-sm text-gray-600 italic">
                  Aug 2019 – Sep 2019
                </p>
              </div>
            </div>
            <ul className="space-y-1 text-gray-700 text-sm ml-4">
              <li>
                • Worked with a team to normalize databases and improve data
                integrity.
              </li>
              <li>
                • Helped enhance database reliability and performance through
                normalization.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Education</h2>
          <div>
            <h3 className="text-lg font-semibold text-black">
              {`Bachelor's Degree in Computer Science`}
            </h3>
            <p className="text-gray-600">Alexandria University</p>
            <p className="text-gray-600">Sep 2017 – Jun 2021</p>
            <p className="text-gray-600">GPA: 3.64 / 4.0</p>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6">Projects</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Auction System (2023)
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm ml-4">
                <li>
                  • Developed a robust auction system, fostering real-time
                  bidding engagement.
                </li>
                <li>
                  • Automated daily trigger for processing and updating
                  completed auction statuses.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Ecommerce (Paintiro) (2022)
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm ml-4">
                <li>
                  • Implemented a visually appealing and responsive Artworks
                  brand website, featuring real-time communication and enhanced
                  user engagement through messaging.
                </li>
                <li>
                  • Implemented a robust REST API for E-commerce, showcasing
                  proficiency in effective data management.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Mobile Application (Roaden) (2021)
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm ml-4">
                <li>
                  • Implemented efficient backend functionality, ensuring
                  scalability and reliability using MongoDB.
                </li>
                <li>
                  • Developed an application with Flutter and Dart, prioritizing
                  efficiency and seamless user experience.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Ecommerce Website [Search by image engine] — Graduation Project
                (2021)
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm ml-4">
                <li>
                  • Developed an E-commerce website with a seamless user
                  experience using modern web technologies.
                </li>
                <li>
                  • Implemented image search, Role Authorization, Data
                  Validation, and real-time messaging with Socket.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
