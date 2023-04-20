import React from "react";
import { BookOpenIcon } from "@heroicons/react/solid";
import './Timelinestyle.css';
export default function TimeLine()
{
    return(
        <section id="timeline" className="text-gray-400 bg-gray-900 body-font text-center">
       <div className="flex flex-col w-full mb-3">
          <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Education details
          </h1>
        </div>
        <ul className="line">
          <li>
            <div className="cont">
              <h3>Class X</h3>
              <p>
                Educational Institution: Kendriya Vidyalaya Banswara <br/>
                CGPA: 8.2
              </p>
              <time>May, 2016</time>
            </div>
          </li>
          <li>
            <div className="cont">
              <h3>Class XII</h3>
              <p>
                Stream: Commerce <br/>
                Educational Institution: Kendriya Vidyalaya Banswara  <br/>
                Percentage: 77.8%
              </p>
              <time>May, 2018</time>
            </div>
          </li>
          <li>
            <div className="cont">
              <h3>BCA</h3>
              <p>
                Course: Bachelor In Computer Applications <br/>
                Educational Institution: St. Xavier College,Ahmedabad <br/>
                CGPA: 7.4
              </p>
              <time>2018-2021</time>
            </div>
          </li>
          <li>
            <div className="cont">
              <h3>MCA</h3>
              <p>
                Course: Master of Computer Applications <br/>
                Educational Institution: Vellore Institute Of Technology(VIT), Bhopal <br/>
                CGPA Sem-1 : 8.55
              </p>
              <time>2022-2024</time>
            </div>
          </li>
        </ul>
      </section>

         );
}