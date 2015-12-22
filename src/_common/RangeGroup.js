import React, { PropTypes } from 'react';

const RangeGroup = ({ id, label, hint, value, min, max, step, items, readOnly, onChange }) => (
	<div className="range-selector">
        {label && <label htmlFor={id}>{label}</label>}
		<br />
		<input type="range" defaultValue={value} readOnly={readOnly} onChange={onChange} min={min} max={max} step={step} />
		<div className="range-selector-items">
			{ items.map(i => <label key={i}>{i}</label>) }
		</div>
		{hint && <p className="hint">{hint}</p>}
	</div>
);

RangeGroup.propTypes = {
	items: PropTypes.array,
	id: PropTypes.string,
	label: PropTypes.string,
	hint: PropTypes.string,
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	readOnly: PropTypes.bool,
	onChange: PropTypes.func,
};

export default RangeGroup;