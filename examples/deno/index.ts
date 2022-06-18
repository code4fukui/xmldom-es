import {DOMParser, XMLSerializer} from '../../lib/index.js';

const source = `<xml xmlns="a">
	<child>test</child>
	<child/>
</xml>`

const doc = new DOMParser().parseFromString(source, 'text/xml')

const serialized = new XMLSerializer().serializeToString(doc)

if (source !== serialized) {
  throw `expected\n${source}\nbut was\n${serialized}`
}
