import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--secondary button--lg', styles.ctaButton)}
              to="/docs/intro">
              Get Started - 5min ⏱️
            </Link>
          </div>
        </div>
        <div className={styles.heroDecorations}>
          <div className={styles.decorationCircle}></div>
          <div className={styles.decorationCircle}></div>
          <div className={styles.decorationCircle}></div>
        </div>
      </div>
    </header>
  );
}

function Feature({icon, title, description, link}) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={link} style={{textDecoration: 'none', color: 'inherit'}}>
        <div className="text--center padding-horiz--md">
          <div className={styles.featureIcon}>{icon}</div>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Comprehensive documentation for Aero EBT and its products: EBT Instructor, EBT Scenario Builder, and Wingman">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature
                icon="🎯"
                title="Aero EBT"
                description="The core platform for Evidence-Based Training management and analytics."
                link="/docs/aero-ebt/intro"
              />
              <Feature
                icon="👨‍🏫"
                title="EBT Instructor"
                description="Comprehensive instructor tools for managing and delivering EBT training sessions."
                link="/docs/ebt-instructor/intro"
              />
              <Feature
                icon="📋"
                title="EBT Scenario Builder"
                description="Create and customize training scenarios tailored to your training needs."
                link="/docs/ebt-scenario-builder/intro"
              />
              <Feature
                icon="🛡️"
                title="Wingman"
                description="Advanced flight safety and monitoring companion for real-time decision support."
                link="/docs/wingman/intro"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
