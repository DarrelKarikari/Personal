import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

const CustomDate = styled.span.attrs({
  className: 'bg-clip-text bg-transparent font-bold text-xl', // Tailwind classes
})`
  @media (max-width: 768px) {
    color: white !important;
    background-clip: initial;
    -webkit-background-clip: initial;
  }
`;

const ExperienceTimeline = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="mt-32">
      <h2 className="text-center text-6xl font-bold text-white mt-4 mb-8 md:mb-12">My Experience</h2>

      <VerticalTimeline lineColor="#2f374b">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5E6E97', color: 'text-white' }}
          contentArrowStyle={{ borderRight: '7px solid  #5E6E97' }}
          date={<CustomDate>Aug 2022 - Present</CustomDate>}
          visible={true}
          iconStyle={{ backgroundImage: 'url(/images/Experiences/WLU.jpeg)', backgroundSize: 'cover' }}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-2xl">Software Developer</h1>
          <h4 className="vertical-timeline-element-subtitle font-medium">Laurier Computing Society (LCS) | Waterloo, ON</h4>
          <ul className="mt-3 space-y-2 px-3 list-outside list-disc">
            <li>Built and optimized LCS web apps using React.js and Node.js, driving a 20% traffic increase and improving user engagement.</li>
            <li>Leveraged Git, GitHub, and HTML/CSS to develop tools for events, boosting engagement and streamlining data management.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#56658A', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #56658A' }}
          date={<CustomDate>Aug 2022 - Present</CustomDate>}
          visible={true}
          iconStyle={{ backgroundImage: 'url(/images/Experiences/WLU.jpeg)', backgroundSize: 'cover' }}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-2xl">Data Analyst</h3>
          <h4 className="vertical-timeline-element-subtitle font-medium">Association Of Black Students - WLU | Waterloo, ON</h4>
          <ul className="mt-3 space-y-2 px-3 list-outside list-disc">
            <li>Analyzed event data using Python, Pandas, and SQL to identify trends, resulting in a 45% increase in event attendance and community participation.</li>
            <li>Delivered data-driven insights using R and Matplotlib, boosting awareness campaigns and increasing member involvement by 26.5%.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#4F5C7D' }}
          contentArrowStyle={{ borderRight: '7px solid  #4F5C7D' }}
          date={<CustomDate>Jan 2022 - Aug 2022</CustomDate>}
          visible={true}
          iconStyle={{ backgroundImage: 'url(/images/Experiences/LCS.png)', backgroundSize: 'cover' }}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-2xl">Health, Life and Disability Insurance Agent</h3>
          <h4 className="vertical-timeline-element-subtitle font-medium">Sun Life Financial | Montréal, QC</h4>
          <ul className="mt-3 space-y-2 px-3 list-outside list-disc">
            <li>Analyzed case files to ensure accurate communication of information, while adhering to the organization’s policies and underwriting.</li>
            <li>Optimized case file triaging with Excel VBA, reducing escalations by 45% and boosting efficiency through streamlined workflows and team collaboration.</li>
            <li>Resolved software glitches and account issues, ensuring prompt solutions and improved customer satisfaction.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#475371' }}
          contentArrowStyle={{ borderRight: '7px solid  #475371' }}
          date={<CustomDate>Sep 2023 - Present</CustomDate>}
          visible={true}
          iconStyle={{ backgroundImage: 'url(/images/Experiences/LaurierGrappling.png)', backgroundSize: 'cover' }}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-2xl">Data Analyst Intern</h3>
          <h4 className="vertical-timeline-element-subtitle font-medium">Icon Office Environments | Brantford, ON</h4>
          <ul className="mt-3 space-y-2 px-3 list-outside list-disc">
            <li>Achieved 100% inventory accuracy by developing and implementing automated workflows, driving operational excellence and precision.</li>
            <li>Streamlined data processes with SQL, QuickBooks API, and Method API, improving reliability and reducing manual effort.</li>
            <li>Introduced Open-Audit for tech system auditing, revolutionizing operational efficiency and ensuring enhanced equipment management.</li>
            <li>Enhanced cross-team collaboration by creating detailed inventory visualizations in Miro, fostering clear communication and optimized workflows.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{
            background: 'linear-gradient(90deg, hsla(207, 27%, 44%, 1) 0%, hsla(230, 33%, 47%, 1) 100%)',
            color: '#fff',
          }}
          icon={<ChevronDoubleUpIcon className="text-slate-300 hover:text-white cursor-pointer" />}
          visible={true}
          iconOnClick={scrollToTop}
        />
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;