import React from 'react';
import './TeamSection.css';
import { teamMembers } from './content.ts';

const TeamSection: React.FC = () => {
  return (
    <div id='team' className='team-wrapper'>
      <section className='team-section'>
        <h2 className='team-title'>Our Team</h2>
        <div className='team-content'>
          {teamMembers.map((member, index) => {
            // Determine if the team member's position (1-indexed) is even
            const isEvenPosition = (index + 1) % 2 === 0;
            return (
              <div
                key={`team-member-${index}`}
                className={`team-member ${isEvenPosition ? 'reverse' : ''}`}
              >
                <div className='team-member-title'>
                  <h2>{member.name}</h2>
                  <h4>{member.tag}</h4>
                </div>
                <div className='content'>
                  <div className='team-text'>
                    {member.summary.split('\n').map((paragraph) => <p>{paragraph}</p>)}
                  </div>
                  <div className='team-image'>
                    <img className='team-member-image' src={member.image} alt={member.name} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
