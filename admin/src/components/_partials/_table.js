import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Select from "./_select";
import Field from './_field';

import keys from "../../../../config/keys";

class Table extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { headers, rows, type } = this.props;
		
		return (
			<div className="table-container">
				<div className="controls">
					<Select
						title="Action"
						options={[
							{ id: 1, value: "option 1" },
							{ id: 2, value: "option 2" },
							{ id: 3, value: "option 3" }
						]}
					/>
					<Link
						to={`/${keys.adminUrl}/${type}/new`} 
						className='controls__add'>
						<i className="material-icons">add</i>
					</Link>
				</div>
				<table className="table">
					<thead className="table__header">
						<tr>
							<th />
							{headers ? headers.map((header,i) => (
								<th key={i}>{Object.values(header)}</th>
							)) : ''}
							<th>Edit</th>
						</tr>
					</thead>
					<tbody>
						{rows ? rows.map((row, i) => (
							<tr key={row.id ? row.id : i}>
								<td>
									<Field
										id={row.id}
										name="edit"
										type="checkbox"
									/>
								</td>
								{headers ? headers.map((header,i) => {
									if (Object.keys(header) == 'enabled') {
										return (
											<td key={i}>
												<span className='material-icons table__status'>
													{row[Object.keys(header)] ? 'check' : 'clear'}
												</span>
											</td>
										);
									}
									return (
										<td key={i}>{row[Object.keys(header)]}</td>
									);
								}) : ''}
								<td>
									<Link
										to={`/${keys.adminUrl}/${type}/${row._id}`}
										className="table__edit"
									>
										<i className="material-icons">edit</i>
									</Link>
								</td>
							</tr>
						)) : ''}
					</tbody>
				</table>
			</div>
		);
	}
}

Table.propTypes = {
	headers: PropTypes.array.isRequired,
	rows: PropTypes.array.isRequired,
	type: PropTypes.string.isRequired,
};

export default Table;
