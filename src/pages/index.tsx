import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageProjects from '@site/src/components/HomepageProjects';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.header.title">Saicone Documentation</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.header.subtitle">Information about saicone projects</Translate>
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
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
              <Heading as="h2">
                <Translate id="homepage.projects.title">Projects</Translate>
              </Heading>
            </div>
          </div>
        </div>
        <HomepageProjects />
      </main>
    </Layout>
  );
}
