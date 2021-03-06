wp.blocks.registerBlock( 'wp', 'Text', {
	edit( state, onChange ) {
		return wp.element.createElement( wp.blocks.Editable, {
			value: state.value,
			onChange: ( value ) => onChange( { value } )
		} );
	},
	save( state ) {
		return wp.element.createElement( 'p', null, state.value );
	}
} );
