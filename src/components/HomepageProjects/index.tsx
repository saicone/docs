import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type ProjectItem = {
  page: string;
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const ProjectList: ProjectItem[] = [
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
    page: '/settings',
    title: 'Settings',
    Svg: require('@site/static/img/noimage.svg').default,
    description: (
      <Translate id="homepage.projects.settings.desc">
        Java library to interpret multiple data formats as flexible configuration.
      </Translate>
    ),
  },
  {
    page: '/mcode',
    title: 'Mcode',
    Svg: require('@site/static/img/noimage.svg').default,
    description: (
      <Translate id="homepage.projects.mcode.desc">
        Framework for multi-platform Minecraft plugin.
      </Translate>
    ),
  },
  {
    page: '/pixelbuy',
    title: 'PixelBuy',
    Svg: require('@site/static/img/noimage.svg').default,
    description: (
      <Translate id="homepage.projects.pixelbuy.desc">
        Free plugin for donation system based on WooMinecraft.
      </Translate>
    ),
  },
];

function Project({page, title, Svg, description}: ProjectItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={page}>
      <div className="text--center">
        <Svg className={styles.projectSvg} role="img" />
      </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageProjects(): ReactNode {
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
