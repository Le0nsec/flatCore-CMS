$(function() {
	$('textarea.mceEditor').tinymce({
		selector: 'textarea.mceEditor',
	  language : languagePack,
	  skin: tinymce_skin,
	  schema: 'html5',
	  element_format: "html",
	  allow_html_in_named_anchor: true,
	  entity_encoding : "raw",
	  menubar: "edit insert table tools view",
	  toolbar_items_size: 'small',
	  content_css : "../styles/blucent/css/editor.css?v=14",
	  plugins: [
	    "advlist autolink lists link image charmap preview anchor", "searchreplace visualblocks code fullscreen wordcount template", "media table contextmenu paste textcolor"
	  ],
	  toolbar1: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link unlink anchor image media",
	  toolbar2: "forecolor backcolor fontsizeselect | table | hr removeformat | subscript superscript | fullscreen visualchars visualchars visualblocks | template ",
	  image_list : "core/imagelist.php",
	  image_advtab: true,
	  image_title: true,
	  convert_urls: false,
	  
	  templates: [ 
	    {title: 'row [6|6]', description: 'Zwei Spalten (Bootsrap)', url: '../styles/blucent/templates/editor_2cols.html'},
	    {title: 'row [4|4|4]', description: 'Drei Spalten (Bootsrap)', url: '../styles/blucent/templates/editor_3cols.html'},
	    {title: 'row [3|3|3|3]', description: 'Vier Spalten (Bootsrap)', url: '../styles/blucent/templates/editor_4cols.html'}
	  ],
		style_formats : [
			{title: 'Headlines', items: [
				{title : 'Headline H1', block : 'h1'},
				{title : 'Headline H2', block : 'h2'},
				{title : 'Headline H3', block : 'h3'},
				{title : 'Headline H4', block : 'h4'},
				{title : 'Headline H5', block : 'h5'},
				{title : 'Headline H6', block : 'h6'}
			]},
			{title: 'Typo', items: [
				{title : 'Absatz', block : 'p'},
				{title : 'Lead paragraph', block : 'p', classes : 'lead'}
			]},
			{title: 'Links', items: [
				{title : 'btn', selector: 'a', classes : 'btn btn-default'},
				{title : 'btn-primary', selector: 'a', classes : 'btn btn-primary'},
				{title : 'btn-info', selector: 'a', classes : 'btn btn-info'},
				{title : 'btn-success', selector: 'a', classes : 'btn btn-success'},
				{title : 'btn-warning', selector: 'a', classes : 'btn btn-warning'},
				{title : 'btn-danger', selector: 'a', classes : 'btn btn-danger'}
			]},
			{title: 'Label/Div', items: [
			{title : 'Label', inline : 'span', classes : 'label label-default'},
			{title : 'Label Success', inline : 'span', classes : 'label label-success'},
			{title : 'Label Warning', inline : 'span', classes : 'label label-warning'},
			{title : 'Label Info', inline : 'span', classes : 'label label-info'},
			{title : 'Div alert-danger', block : 'div', classes : 'alert alert-danger'},
			{title : 'Div alert-success', block : 'div', classes : 'alert alert-success'},
			{title : 'Div alert-info', block : 'div', classes : 'alert alert-info'}
			]},
			{title: 'IMG', items: [
				{title : 'img-rounded', selector : 'img', classes : 'img-rounded'},
				{title : 'img-circle', selector : 'img', classes : 'img-circle'}
			]},
			{title: 'Code', items: [
				{title : 'Code PrettyPrint', block : 'pre', classes : 'prettyprint'},
				{title : 'Code PrettyPrint Linenums', block : 'pre', classes : 'prettyprint linenums'}
			]},
		],
	  fontsize_formats : "10px 12px 13px 14px 16px 18px 20px",
		width : "100%",
		height : 480,
		remove_script_host : true,
		rel_list: [
			{title: 'Keine', value: ''},
	    {title: 'Lightbox', value: 'lightbox'}
	  ],
		extended_valid_elements : "*[*]",
		visual : true,
		paste_as_text: true
	});


	$('textarea.mceEditor_small').tinymce({
	  selector: 'textarea.mceEditor_small',
	  language : languagePack,
	  skin: tinymce_skin,
	  toolbar_items_size: 'small',
	  content_css : "../styles/blucent/css/editor.css",
	  plugins: [
	    "advlist autolink lists link image charmap preview anchor",
	    "searchreplace visualblocks code fullscreen wordcount template",
	    "media table contextmenu paste textcolor"
	  ],
	  menubar: "edit insert table tools view",
	  toolbar1: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link unlink anchor image media",
	  toolbar2: "forecolor backcolor fontsizeselect | table | hr removeformat | subscript superscript | fullscreen visualchars visualchars visualblocks | template",
	  image_list : "core/imagelist.php",
	  image_advtab: true,
	  image_title: true,
	  convert_urls: false,
	  templates: [ 
	  	{title: 'row [6|6]', description: 'Zwei Spalten (Bootsrap)', url: '../styles/blucent/templates/editor_2cols.html'},
	    {title: 'row [4|4|4]', description: 'Drei Spalten (Bootsrap)', url: '../styles/blucent/templates/editor_3cols.html'},
	    {title: 'row [3|3|3|3]', description: 'Vier Spalten (Bootsrap)', url: '../styles/blucent/templates/editor_4cols.html'}
	  ],
		style_formats : [
			{title: 'Headlines', items: [
				{title : 'Headline H1', block : 'h1'},
				{title : 'Headline H2', block : 'h2'},
				{title : 'Headline H3', block : 'h3'},
				{title : 'Headline H4', block : 'h4'},
				{title : 'Headline H5', block : 'h5'},
				{title : 'Headline H6', block : 'h6'}
			]},
			{title: 'Typo', items: [
				{title : 'Absatz', block : 'p'},
				{title : 'Lead paragraph', block : 'p', classes : 'lead'}
			]},
			{title: 'Links', items: [
				{title : 'btn', selector: 'a', classes : 'btn btn-default'},
				{title : 'btn-primary', selector: 'a', classes : 'btn btn-primary'},
				{title : 'btn-info', selector: 'a', classes : 'btn btn-info'},
				{title : 'btn-success', selector: 'a', classes : 'btn btn-success'},
				{title : 'btn-warning', selector: 'a', classes : 'btn btn-warning'},
				{title : 'btn-danger', selector: 'a', classes : 'btn btn-danger'}
			]},
			{title: 'Label/Div', items: [
			{title : 'Label', inline : 'span', classes : 'label label-default'},
			{title : 'Label Success', inline : 'span', classes : 'label label-success'},
			{title : 'Label Warning', inline : 'span', classes : 'label label-warning'},
			{title : 'Label Info', inline : 'span', classes : 'label label-info'},
			{title : 'Div alert-danger', block : 'div', classes : 'alert alert-danger'},
			{title : 'Div alert-success', block : 'div', classes : 'alert alert-success'},
			{title : 'Div alert-info', block : 'div', classes : 'alert alert-info'}
			]},
			{title: 'IMG', items: [
				{title : 'img-rounded', selector : 'img', classes : 'img-rounded'},
				{title : 'img-circle', selector : 'img', classes : 'img-circle'}
			]},
			{title: 'Code', items: [
				{title : 'Code PrettyPrint', block : 'pre', classes : 'prettyprint'},
				{title : 'Code PrettyPrint Linenums', block : 'pre', classes : 'prettyprint linenums'}
			]},
		],
	  fontsize_formats : "10px 12px 13px 14px 16px 18px 20px",
		width : "100%",
		height : 350,
		remove_script_host : true,
		extended_valid_elements : "*[*]",
		visual : true,
		paste_as_text: true
	});

});