import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const ProjectList = [
  {
    page: '/rtag',
    title: 'Rtag',
    Svg: require('@site/static/img/rtag-icon.svg').default,
    description: (
      <Translate id="homepage.projects.rtag.desc">
        A Bukkit library to read/edit/write NBT tags as if they were known objects.
      </Translate>
    ),
  },
  {
    page: '/ezlib',
    title: 'Ezlib',
    Svg: require('@site/static/img/noimage.svg').default,
    description: (
      <Translate id="homepage.projects.ezlib.desc">
        Runtime library/dependency loader & relocator for Java in a single class.
      </Translate>
    ),
  },
  {
    page: '/uclansync',
    title: 'UClanSync',
    Svg: require('@site/static/img/noimage.svg').default,
    description: (
      <Translate id="homepage.projects.uclansync.desc">
        UltimateClans addon to synchronize clans data across multiple servers.
      </Translate>
    ),
  },
  {
    page: '/delivery4j',
    title: 'Delivery4j',
    Svg: require('@site/static/img/noimage.svg').default,
    description: (
      <Translate id="homepage.projects.delivery4j.desc">
        Java library wrapper for different data delivery concepts.
      </Translate>
    ),
  },
  {
    page: '/mcode',
    title: 'Mcode',
    Svg: require('@site/static/img/noimage.svg').default,
    description: (
      <Translate id="homepage.projects.mcode.desc">
        Framework for multi-platform Minecraft plugin
      </Translate>
    ),
  },
];

function Project({page, Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={page}>
      <div className="text--center">
        <Svg className={styles.projectSvg} role="img" />
      </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageProjects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
