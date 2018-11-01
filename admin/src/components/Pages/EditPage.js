import React, { Component } from "react";
import Update from "../facc/Update";
import Read from "../facc/Read";
import Field from "../_partials/_field";

class EditPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="page">
				<Read path="page" id={this.props.match.params.id}>
					{page => (
						<div className="page__content form">
							<h1 className="form__title" contentEditable="true">{page.title}</h1>
							<Field
								id="slug"
								name="slug"
								label="Slug:"
								type="text"
								value={page.slug}
							/>
							<Field
								id="enabled"
								name="enabled"
								label="Enabled:"
								type="switch"
								value={page.enabled}
							/>
							<Field
								id="content"
								name="content"
								label="Content:"
								type="wysiwyg"
								value={page.content}
							/>
							<Update>
								{update => (
									<button className="form__submit" onClick={console.log}>Submit</button>
								)}
							</Update>
						</div>
					)}
				</Read>
			</div>
		);
	}
}

export default EditPage;
