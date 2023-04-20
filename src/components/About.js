import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Harsh Trivedi.
                <br className="hidden lg:inline-block" />Currently pursuing Master of Computer Application(MCA) from Vellore institute of technology.
                
              </h1>
              <p className="mb-8 leading-relaxed">
              <ul style={{ listStyleType: 'square' }}>
              
              <li>
              I am a BCA graduate from Gujarat University. 
              My journey or introduction to high-level programming languages started after 10th standard, C Language is the first programming language that I learned.
              Throughout my journey in computer science, I have become intimately familiar with several programming languages and worked on projects of different types of domains. 
              </li>
              <li>
              I am a very capable, curious, motivated person and with the knowledge and skills I learned from my journey in computer science
              I will bring innovative solutions and great ideas to solve problems and meet customer requirements.
              </li>
              
              <li>
              I want to work and contribute to your company because developing software or designing computer programs and solutions let
              me use my creative and problem-solving skills.
              </li>
              
              <li>
              I enjoy challenges and I am adaptive to changing environments so if the company requires me to work on a new domain, I can easily shift to a new domain
              and can deliver the final product on time.
              </li>
              
              </ul>
              </p>
              <div className="flex justify-center">
                <a
                  href="https://drive.google.com/file/d/1KRPdCGDXNhrsL5fdn554MbVKTCvOvHyB/view?usp=share_link"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                  target="_blank">
                  My Resume
                </a>
                <a
                  href="#contact"
                  className="ml-6 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contact
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
                </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="my photo"
            src="./photo2.jpg"
          />
        </div>
      </div>
    </section>
  );
}