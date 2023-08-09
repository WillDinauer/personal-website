import React from 'react';
import './SoftwareExperiences.css';
import SoftwareExperience from './SoftwareExperience';

function SoftwareExperiences() {
  return (
    <div className='se-container'>
      <h1>Software Projects</h1>
      <div className="project-container">
        {/******** CEDAR *******/}
        <SoftwareExperience 
          img={require('../images/Cedar.png')}
          title='Cedar Mobile App'
          stack='React Native, Express.js, MongoDB'
          link='https://medium.com/dartmouth-cs98/how-can-a-mobile-app-help-combat-sexual-violence-on-college-campuses-meet-cedar-eb581d55d013'
          projectDescription={
            <>
              <p className="project-text">Implemented and deployed a mobile app in a scrum environment over the course of 6 months in a team of 5.</p>
              <ul className='bullet-list'>
                <li className='bullet-item'>Led the design and development of a mobile app aimed at addressing sexual assault on college campuses, leveraging React Native, Expo, Node.js, and MongoDB.</li>
                <li className='bullet-item'>Implemented a RESTful API with web sockets using Express.js, facilitating real-time communication between the frontend and backend.</li>
                <li className='bullet-item'>Deployed the server using Render, ensuring a reliable and scalable infrastructure for user access.</li>
                <li className='bullet-item'>Structured the MongoDB database to support efficient and secure storage, enabling optimized NoSQL queries for retrieving and storing data.</li>
              </ul>
            </>
          }
        />

        {/******** TINY SEARCH ENGINE *******/}
        <SoftwareExperience 
          img={require('../images/TSE.png')}
          title='Tiny Search Engine'
          stack='C, Unix, Makefiles'
          gitLink='https://github.com/WillDinauer/Tiny-Search-Engine'
          projectDescription={
            <>
              <p className="project-text">
                Developed a fully functional search engine (~2k+ lines of code) in a Unix environment using C, resulting in a scalable search engine with extensive documentation. 
                Each component has extensive documentation and comments, including Design and Implementation details. There are three subsystems:
              </p>
              <ul className='bullet-list'>
                <li className='bullet-item'>
                  <span> 
                    <strong>crawler, </strong>
                  </span> 
                  which crawls the web from a given seed to a given maxDepth and caches the content of the pages it finds, one page per file, in a given directory.
                </li>
                <li className='bullet-item'>
                  <span>
                    <strong>indexer, </strong>
                  </span>
                  which reads files from the given directory, builds an index that maps from words to pages (URLs), and writes that index to a given file.
                </li>
                <li className='bullet-item'>
                  <span>
                    <strong>querier, </strong>
                  </span>
                  which reads the index from a given file, and a query expressed as a set of words optionally combined by (AND, OR), and outputs a ranked list of pages (URLs) in which the given combination of words appear.
                </li>
              </ul>
            </>
          }
          invert
        />

        {/******** X86 Code Generator *******/}
        <SoftwareExperience 
          img={require('../images/x86_code_generator.PNG')}
          title='X86 Code Generator'
          stack='C++'
          gitLink='https://github.com/WillDinauer/x86-Code-Generation'
          projectDescription={
            <>
              <p className="project-text">
                Implemented a code generator that converts clang-compiled LLVM IR to x86-64 machine code. 
                The program is structured as an LLVM optimization pass and handles binary operators as well as icmp instructions. 
                In addition, LLVM PHI nodes are handled to structure conditional x86 blocks of code by inserting proper 'jmp' commands.
              </p>
            </>
          }
        />
        
        {/******** Part of Speech Recognizer *******/}
        <SoftwareExperience 
          img={require('../images/HMM.PNG')}
          title='Part of Speech Recognizer'
          stack='Java'
          gitLink='https://github.com/WillDinauer/Part-of-Speech-Recognizer'
          projectDescription={
            <>
              <p className="project-text">
                Developed a Java program for part-of-speech recognition by building a Hidden Markov Model (HMM) and applying the Viterbi Algorithm. 
                To train the model I use a training set of data, where example tagged sentences are of the form 'Word/TAG [Word/TAG]...'
                The frequency of transitions and observations are used to construct two maps, which constitute the HMM. 
                The Viterbi Algorithm is then applied to a test set of data, tagging a brand new set of sentences. The program then checks
                and reports the accuracy based on the true tags.<br/><br/>Ultimately, my model was over 96% accurate for a set of around 2.4k sentences totalling over 36k words.
              </p>
            </>
          }
          invert
        />

        {/******** Space Wizards *******/}
        <SoftwareExperience 
          img={require('../images/SpaceWizardPhoto.JPG')}
          title='Space Wizards VR'
          stack='C#, Unity'
          link='https://youtu.be/DxJX_zAtysg'
          projectDescription={
            <>
              <p className="project-text">
                Developed a VR multiplayer spellcasting game using Unity in C#. I was in charge of implementing the main game mechanics, including fireball shooting and projectile blocking. 
                I designed a unique control system where players cast and actively control fireballs by performing physical motions in the forward direction, calculated using a dot product threshold.
                This makes players feel really immersed in the game, even without any kind of haptic feedback.
                We utilized Normcore for multiplayer functionality, requiring extensive integration with the modeling and mechanics.
                <br/><br/>
                We held a demo for our game at Dartmouth's Technigala in March of 2022. It was one of the most popular stands at the event, allowing two friends to duel in an exciting space environment.
                The president of the college even gave a favorable review after testing out the game mechanics!
              </p>
            </>
          }
        />

        {/******** Gold Nuggets Game *******/}
        <SoftwareExperience 
          img={require('../images/GoldNuggetsOverview.PNG')}
          title='Gold Nuggets Game'
          stack='C, Unix, Makefiles'
          gitLink='https://github.com/WillDinauer/Nuggets-Game/'
          projectDescription={
            <>
              <p className="project-text">
                Led development of server (~1.5k lines of code) for multiplayer game in a scrum-environment within a group of three. The server allows up to 26 players to compete to collect gold in visibility-limited maps. 
                Wrote code to handle communication between the server and clients, ensuring real-time updates for all players and spectators. Developed a system
                for randomly dividing and placing clumps of gold within the map, and wrote code to validate client inputs.
                <br/><br/>
                This project was developed over the course of three weeks. We wrote a Design and Implementation file to describe the project and decisions we made in detail.
                These files and the source code are available to view on GitHub.
              </p>
            </>
          }
          invert
        />

        {/******** Space Wizards *******/}
        <SoftwareExperience 
          img={require('../images/MiniC_Compiler.PNG')}
          title='Mini C Compiler'
          stack='Lex, Yacc'
          gitLink='https://github.com/WillDinauer/MiniC-Frontend-Compiler'
          projectDescription={
            <>
              <p className="project-text">
              Developed a frontend compiler for a simplified version of C called MiniC using Lex and Yacc (~300 lines of code).
                The program constructs an abstract syntax tree (AST) which can be compiled down to machine code.
                <br/><br/>
                All variables, parameters and constants in a miniC program are integers. 
                Functions can return void or int and take a maximum of one void or int parameter.
                The program will find and print every syntactical error (variables used that were never defined; multiple declarations of a single variable), 
                so long as there are no syntax errors according to the grammar.
              </p>
            </>
          }
        />
      </div>
  </div>
  );
}

export default SoftwareExperiences