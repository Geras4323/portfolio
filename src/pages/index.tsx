import React from 'react';
import Head from 'next/head';

import { Switcher } from '@/components/Switcher';
import { Presentation } from '@/containers/Presentation';
import { Certificate } from '@/containers/Certificate';
import { ProjectList } from '@/containers/ProjectList';
import { CourseList } from '@/containers/CourseList';
import { Personal } from '@/containers/Personal';


export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <React.Fragment>

        <Switcher />

        <Presentation />

        <Certificate />

        <ProjectList />

        <CourseList />

        <Personal />

      </React.Fragment>
    </>
  )
}
