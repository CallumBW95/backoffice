import React, { Component } from "react";
import Table from "../_partials/_table";
import Kpi from "../_partials/_kpi";

import Read from "../facc/Read";

class Pages extends Component {
	render() {
		return (
			<div className="page">
				<div className="page__content">
					<Read path="pages">
						{pages => (
							<Table
								headers={[
									{title:"Title"},
									{content:"Content"},
									{enabled: "Status"}
								]}
								rows={pages}
								type="page"
							/>
						)}
					</Read>
					{/* <Kpi /> */}
				</div>
			</div>
		);
	}
}

export default Pages;
