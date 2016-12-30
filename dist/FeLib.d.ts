declare module 'FeLib' {
	export const Component: {
	    Hello: any;
	};

}
declare module 'FeLib' {
	import * as Component from 'components/__all';
	export const Ui: {
	    Component: typeof Component;
	};

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
