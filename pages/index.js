import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { getTeamsData } from "../lib/teams";
import Link from "next/link";
import Date from "../components/date";

console.log("getTeamsData =======");
console.log(getTeamsData());

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	const allTeamsData = getTeamsData();
	return {
		props: {
			allPostsData,
			allTeamsData,
		},
	};
}

export default function Home({ allPostsData, allTeamsData }) {
	console.log("allPostsData");
	console.log(allPostsData);
	console.log("allTeamsData");
	console.log(allTeamsData);
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hello, I'm <strong>Jolyon</strong>. I'm a Web Developer. You can
					contact me on <a href="https://twitter.com/chibicode">Twitter</a>.
				</p>
				<p>
					(This is a sample website - you'll be building a site like this in{" "}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Teams</h2>
				<ul className={utilStyles.list}>
					{allTeamsData.clubs.map(({ id, name, country }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/teams/${id}`}>
								<a>{name}</a>
							</Link>
							<p className={utilStyles.lightText}>{country}</p>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
