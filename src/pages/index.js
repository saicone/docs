import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageProjects from '@site/src/components/HomepageProjects';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate id="homepage.header.title">Saicone Documentation</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate id="homepage.header.subtitle">Information about saicone projects</Translate>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Documentation for Saicone projects">
      <HomepageHeader />
      <main>
        <div className="container text--center margin-top--xl">
          <div className="row">
            <div className="col">
              <h2>
                <Translate id="homepage.projects.title">Projects</Translate>
              </h2>
            </div>
          </div>
        </div>
        <HomepageProjects />
      </main>
    </Layout>
  );
}
