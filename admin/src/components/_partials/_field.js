import React from "react";
import PropTypes from "prop-types";
import Editor from 'react-pell';

const Field = ({ id, name, label, type, value = '', options }) => {
	let attributes = {className: `field__${type}`};
	if (name) {
		attributes['name'] = name;
	}
	if (type) {
		attributes['type'] = type;
	}
	if (value) {
		attributes['value'] = value;
	}
	

	switch (true) {
	case type == "text" || type == "password":
		return (
			<div id={id} className="field">
				<label className="field__label" htmlFor={name}>{label}</label>
				<input {...attributes}/>
			</div>
		);
		
	case type == "radio":
		return (
			<div id={id} className="field">
				<label className="field__label" htmlFor={name}>{label}</label>
				{options ? options.map((option, i) => {
					attributes['checked'] = option == value ? true : false;
					
					return (
						<div key={i} className={`field__${type}`}>
							<input {...attributes}/>
							<label className={`field__${type}__label`}>{option}</label>
						</div>
					);
				}) : ""}
			</div>
		);

	case type == "checkbox":
		return (
			<div id={id} className="field">
				{() => label != '' ? <label className="field__label" htmlFor={name}>{label}</label> : ''}
				<input
					className={`field__${type}`}
					name={name}
					type={type}
					value={value}
				/>
			</div>
		);

	case type == "textarea":
		return (
			<div id={id} className="field">
				<label className="field__label" htmlFor={name}>{label}</label>
				<input
					className={`field__${type}`}
					name={name}
					type={type}
					value={value}
				/>
			</div>
		);

	case type == "wysiwyg":
		return (
			<div id={id} className="field">
				<label className="field__label" htmlFor={name}>{label}</label>
				<Editor
					containerClass={`field__${type}`}
					defaultContent={value}
				/>
			</div>
		);

	case type == 'switch':
		attributes['checked'] = value;
		attributes['className'] = `field__${type}__input`;
		attributes['type'] = 'checkbox';
		return (
			<label id={id} className="field" htmlFor={name}>
				<span className="field__label">{label}</span>
				<div className={`field__${type}`}>
					<input {...attributes} onChange={console.log}/>
					<span className={`field__${type}__slider`} />
				</div>
			</label>
		);
	}
};

Field.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	options: PropTypes.array
};

export default Field;
