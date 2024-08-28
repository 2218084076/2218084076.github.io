import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import React from "react";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  toLink: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "摄影",
    Svg: require("@site/static/img/户外摄影.svg").default,
    description: <>Photography</>,
    toLink: "/docs/category/摄影",
  },
  {
    title: "技术研究",
    Svg: require("@site/static/img/程序员.svg").default,
    description: <>Technology Research</>,
    toLink: "/docs/category/技术研究",
  },
  {
    title: "使用指南",
    Svg: require("@site/static/img/首页_icon_使用指南.svg").default,
    description: <>User Guide</>,
    toLink: "/docs/category/使用指南",
  },
  {
    title: "收藏",
    Svg: require("@site/static/img/收藏.svg").default,
    description: <>Favorites</>,
    toLink: "/docs/category/收藏",
  },
];

function Feature({ title, Svg, description, toLink }: FeatureItem) {
  return (
    <Link to={toLink} className={styles.homePageLinkCard}>
      <div className={clsx("col")}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h2">{title}</Heading>
          <h4>{description}</h4>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={clsx("container")}>
        <div className={styles.row}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
