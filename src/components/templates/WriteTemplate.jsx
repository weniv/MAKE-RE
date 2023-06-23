import React from 'react'
import { Layout } from '../organisms'
import {
  ProfileInput,
  IntroInput,
  SkillInput,
  CareerInput,
  ProjectInput,
  ExperienceInput,
  CertificateInput,
  EducationInput,
  UrlInput,
} from '../index'

export default function WriteTemplate({ resumeData, setResumeData }) {
  return (
    <Layout>
      <main className="main">
        <ProfileInput setResumeData={setResumeData} resumeData={resumeData} />
        <IntroInput setResumeData={setResumeData} resumeData={resumeData} />
        <SkillInput setResumeData={setResumeData} resumeData={resumeData} />
        <CareerInput setResumeData={setResumeData} resumeData={resumeData} />
        <ProjectInput setResumeData={setResumeData} resumeData={resumeData} />
        <ExperienceInput
          setResumeData={setResumeData}
          resumeData={resumeData}
        />
        <CertificateInput
          setResumeData={setResumeData}
          resumeData={resumeData}
        />
        <EducationInput setResumeData={setResumeData} resumeData={resumeData} />
        <UrlInput setResumeData={setResumeData} resumeData={resumeData} />
      </main>
    </Layout>
  )
}
