/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';

class Editor extends BalloonEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Bold,
	Essentials,
	FontBackgroundColor,
	FontColor,
	Italic,
	Paragraph,
	RemoveFormat,
	Underline
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'removeFormat',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'undo',
			'redo'
		]
	},
	language: 'en'
};

export default Editor;
