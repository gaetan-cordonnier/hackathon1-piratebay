import React, { Component } from "react";
import { VotesStyled } from "../ComponentsStyled/VotesStyled";

class Votes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			voteTypes: [
				{ name: "Alcohol", votes: 0 },
				{ name: "Weapons", votes: 0 },
				{ name: "Womens", votes: 0 },
				{ name: "Food", votes: 0 },
			],
		};
	}

	vote(i) {
		let newVote = [...this.state.voteTypes];
		if (newVote[i].votes < 10) {
			newVote[i].votes++;
			this.setState({ voteTypes: newVote });
		}
	}

	render() {
		return (
			<VotesStyled>
				<h1 className="title">Harbor'n'b</h1>
				<div className="voteTypes">
					{this.state.voteTypes.map((type, i) => (
						<div key={i} className="voteType">
							<div className="voteCount">{type.votes}/10</div>
							<div className="type">{type.name}</div>
							<button onClick={this.vote.bind(this, i)}>Note</button>
						</div>
					))}
				</div>
			</VotesStyled>
		);
	}
}
export default Votes;
