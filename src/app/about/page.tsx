import Head from "next/head"
import { FaCode } from "react-icons/fa"

const About = () => {
  return (
    <>
                    <Head>
        <title>My page title</title>
      </Head>
    <div className="container max-w-7xl mx-auto py-20">

      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* Bio Section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">I am a passionate developer with a strong interest in both front-end and back-end technologies. Always eager to learn, actively seek opportunities to enhance my skills and stay updated with industry trends. My goal is to create efficient, user-friendly applications while collaborating with diverse teams. I am excited tocontribute to innovative projects in the future.</p>
      </section>

      {/* Skills section */}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-2">
              <li>React /  Next.js</li>
              <li>JavaScript</li>
              <li>Tailwind Css</li>
              <li>Html / Css</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-2">
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>

        </div>

      </section>


      {/* Experience section */}
      <section className="mb-16">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Junior Frontend Developer</h3>
            <p className="text-primary mb-2">Afea Group - 2025 - Present</p>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Machine Learning Intern</h3>
            <p className="text-primary mb-2">Neurotime - June 2024 - October 2024</p>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Frontend Mentor</h3>
            <p className="text-primary mb-2">Div Academy - August 2023 - October 2023</p>
          </div>
        </div>

      </section>

      {/* Education Section */}

      <section className="mb-16">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-primary mb-2">ADA University - 2019 - 2024</p>
          </div>
        </div>

      </section>
    </div>
    </>
  )
}

export default About
