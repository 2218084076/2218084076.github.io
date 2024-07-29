import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import React from "react";


type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    toLink: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: '摄影 | Photography',
        Svg: require('@site/static/img/户外摄影.svg').default,
        description: (
            <>
                光影之间，故事自成。
                <br/>
                “Between light and shadow, stories emerge.”
            </>
        ),
        toLink: '/docs/category/摄影'
    },
    {
        title: '技术研究 | Technology Research',
        Svg: require('@site/static/img/程序员.svg').default,
        description: (
            <>
                Technology integration, <br/>innovation without bounds.
            </>
        ),
        toLink: '/docs/category/技术研究'
    },
    {
        title: '使用指南 | User Guide',
        Svg: require('@site/static/img/首页_icon_使用指南.svg').default,
        description: (
            <>
                Master every detail, simplify every action.
            </>
        ),
        toLink: '/docs/category/使用指南'
    },
    {
        title: '收藏 | Favorites',
        Svg: require('@site/static/img/收藏.svg').default,
        description: (
            <>
                <br/>
                <br/>
            </>
        ),
        toLink: '/docs/category/收藏'
    },
];

function Feature({title, Svg, description, toLink}: FeatureItem) {
    return (
        <Link to={toLink} className={styles.homePageLinkCard}>
            <div className={clsx('col col--4')}>
                <div className="text--center">
                    <Svg className={styles.featureSvg} role="img"/>
                </div>
                <div className="text--center padding-horiz--md">
                    <Heading as="h3">{title}</Heading>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className={clsx('container', styles.myContainer)}>
                <div className={styles.row}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
