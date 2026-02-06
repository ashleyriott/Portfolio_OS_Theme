import React from "react";
import "./about.scss";
import user from "../../../utils/data/user.config";

function Skills() {
	return (
		<div
			className="uk-grid-small uk-child-width-expand@s uk-text-center uk-grid-match"
			uk-grid={"true"}
		>
			{user.skills.map((skill, index) => {
				return (
					<div key={index}>
						<div className="uk-card uk-card-default uk-card-body uk-border-rounded project-card uk-shadow-large">
							<h4 className="font-color-white">{skill.name}</h4>
							<div>
								{skill.values.map((value, valIndex) => {
									return (
										<span
											className="uk-badge uk-padding-small skill-badge"
											key={valIndex}
										>
											{value}
										</span>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Skills;
