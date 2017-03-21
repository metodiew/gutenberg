export { default as Editable } from './components/editable';

/**
 * Registers a new block provided a unique slug and an object defining its
 * behavior. Once registered, the block is made available as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string} namespace Block grouping unique to package or plugin
 * @param  {string} block     Block name
 * @param  {Object} settings  Block settings
 */
export function registerBlock( namespace, block, settings ) {

}

/**
 * Returns settings associated with a registered block.
 *
 * @param  {string}  namespace Block grouping unique to package or plugin
 * @param  {string}  block     Block name
 * @return {?Object}           Block settings
 */
export function getBlockSettings( namespace, block ) {

}

/**
 * Returns all registered blocks.
 *
 * @return {Object} Block settings keyed by block name
 */
export function getBlocks() {

}
