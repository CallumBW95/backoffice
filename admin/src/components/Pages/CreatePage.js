import React, { Component } from "react";
import Create from "../facc/Create";
import Field from "../_partials/_field";

class EditPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="page">
				<div className="page__content form">
					<h1
						className="form__title"
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						New Page
					</h1>
					<Field id="slug" name="slug" label="Slug:" type="text" />
					<Field id="enabled" value={true} name="enabled" label="Enabled:" type="switch" />
					<Field id="content" name="content" label="Content:" type="wysiwyg" />
					<Create type="page">
						{ajax => 
							<button className="form__submit" onClick={ajax}>
								Submit
							</button>
						}
					</Create>
				</div>
			</div>
		);
	}
}

export default EditPage;
