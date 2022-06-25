import teams from "../data/en.1.clubs.json";
console.log(teams);

export function getTeamsData() {
	// Get file names under /posts
	const { name, clubs } = teams;
	const allTeamsData = clubs.map((club) => {
		const id = club.code;
		console.log("id ======");
		console.log(id);

		// Combine the data with the id
		return {
			id,
			...club,
		};
	});
	// Sort posts by date
	// return allTeamsData.sort(({ date: a }, { date: b }) => {
	// 	if (a < b) {
	// 		return 1;
	// 	} else if (a > b) {
	// 		return -1;
	// 	} else {
	// 		return 0;
	// 	}
	// });
	// return allTeamsData;

	return {
		name,
		clubs: allTeamsData,
	};
}

export function getAllTeams() {
	// const fileNames = fs.readdirSync(postsDirectory);

	const { clubs } = teams;
	console.log(clubs);

	// const teamNames =

	// Returns an array that looks like this:
	// [
	//   {
	//     params: {
	//       id: 'ssg-ssr'
	//     }
	//   },
	//   {
	//     params: {
	//       id: 'pre-rendering'
	//     }
	//   }
	// ]
	return clubs.map((team) => {
		return {
			params: {
				team: team.code,
			},
		};
	});
}
