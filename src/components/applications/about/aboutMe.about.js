import React from "react";
import avatar from "../../../assets/images/baseImages/default_avatar.svg";
import user from "../../../utils/data/user.config";
import "./about.scss";

function AboutMe() {
	return (
		<div className="about-me-container">
			<div className="uk-card uk-text-center font-color-white">
				<div className="about-me-header">
					<div className="avatar-wrapper">
						<img
							className="uk-border-circle about-avatar"
							width="140"
							height="140"
							src={
								user.userImage !== undefined &&
								user.userImage !== null &&
								user.userImage !== ""
									? user.userImage
									: avatar
							}
							alt="user"
						/>
					</div>
					<h2 className="uk-margin-small-top uk-margin-remove-bottom font-color-white about-name">
						{user.firstName} {user.lastName}
					</h2>
					{user.aboutMe.intro && (
						<p className="about-intro">
							{user.aboutMe.intro}
						</p>
					)}
				</div>
				{user.aboutMe.description && (
					<div className="about-description">
						{user.aboutMe.description}
					</div>
				)}

				{user.aboutMe.outro && (
					<div className="about-outro">
						{user.aboutMe.outro}
					</div>
				)}
			</div>
		</div>
	);
}

export default AboutMe;
