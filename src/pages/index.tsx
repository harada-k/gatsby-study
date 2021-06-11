import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import type { HeaderComponentQuery } from '../../types/graphql-types';

// styles
const PageStyles = styled.main`
  color: #232129;
  padding: 96px;
  font-family: '-apple-system, Roboto, sans-serif, serif';
`;
const HeadingStyles = styled.h1`
  margin-top: 0;
  margin-bottom: 64px;
  max-width: 320px;
`;
const HeadingAccentStyles = styled.span`
  color: #663399;
`;
const ParagraphStyles = styled.p`
  margin-bottom: 48px;
`;
const CodeStyles = styled.code`
  color: #8a6534;
  padding: 4px;
  background-color: #fff4db;
  font-size: 1.25rem;
  border-radius: 4px;
`;
const ListStyles = styled.ul`
  margin-bottom: 96px;
  padding-left: 0;
`;
const ListItemStyles = styled.li`
  font-weight: 300;
  font-size: 24px;
  max-width: 560px;
  margin-bottom: 30px;
`;

const LinkStyle = styled.a`
  color: #8954a8;
  font-weight: bold;
  font-size: 16px;
  vertical-align: 5%;
`;

const DocLinkStyle = styled.li`
  list-style-type: none;
  margin-bottom: 24px;
`;

const DescriptionStyle = styled.p`
  color: #232129;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 0;
  line-height: 1.25;
`;

const BadgeStyle = styled.span`
  color: #fff;
  background-color: #088413;
  border: 1px solid #088413;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1;
  border-radius: 4px;
  padding: 4px 6px;
  display: inline-block;
  position: relative;
  top: -2px;
  margin-left: 10px;
  line-height: 1;
`;

// data
const docLink = {
  text: 'Documentation',
  url: 'https://www.gatsbyjs.com/docs/',
  color: '#8954A8'
};

const links = [
  {
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial/',
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: '#E95800'
  },
  {
    text: 'How to Guides',
    url: 'https://www.gatsbyjs.com/docs/how-to/',
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: '#1099A8'
  },
  {
    text: 'Reference Guides',
    url: 'https://www.gatsbyjs.com/docs/reference/',
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: '#BC027F'
  },
  {
    text: 'Conceptual Guides',
    url: 'https://www.gatsbyjs.com/docs/conceptual/',
    description:
      'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
    color: '#0D96F2'
  },
  {
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
    description:
      'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
    color: '#8EB814'
  },
  {
    text: 'Build and Host',
    url: 'https://www.gatsbyjs.com/cloud',
    badge: true,
    description:
      'Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
    color: '#663399'
  }
];

// markup
const IndexPage: React.FC = () => {
  const data = useStaticQuery<HeaderComponentQuery>(graphql`
    query HeaderComponent {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <PageStyles>
      <title>Home Page</title>
      <HeadingStyles>
        Congratulations
        <br />
        <HeadingAccentStyles>
          — you just made a Gatsby site!{' '}
        </HeadingAccentStyles>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </HeadingStyles>
      <Link to="/">{data.site?.siteMetadata?.title}</Link>
      <ParagraphStyles>
        Edit <CodeStyles>src/pages/index.js</CodeStyles> to see this page update
        in real-time.{' '}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </ParagraphStyles>
      <ListStyles>
        <DocLinkStyle>
          <LinkStyle
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </LinkStyle>
        </DocLinkStyle>
        {links.map(link => (
          <ListItemStyles key={link.url} style={{ color: link.color }}>
            <span>
              <a
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <BadgeStyle aria-label="New Badge">NEW!</BadgeStyle>
              )}
              <DescriptionStyle>{link.description}</DescriptionStyle>
            </span>
          </ListItemStyles>
        ))}
      </ListStyles>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </PageStyles>
  );
};

export default IndexPage;
