declare module 'FeLib' {
	 const component: {
	    hello: any;
	};
	export default component;

}
declare module 'FeLib' {
	import * as Component from 'components/__all'; const ui: {
	    component: typeof Component;
	};
	export default ui;

}
declare module 'FeLib' {
	import * as UI from 'ui/__all'; const FeLib: {
	    ui: typeof UI;
	};
	export default FeLib;

}
declare module 'FeLib' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface HelloProps {
	    compiler: string;
	    framework: string;
	}
	export class Hello extends React.Component<HelloProps, undefined> {
	    render(): JSX.Element;
	}

}
