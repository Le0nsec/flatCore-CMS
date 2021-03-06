<?php

$database = "content";
$table_name = "fc_pages";

$cols = array(
	"page_id"  => 'INTEGER NOT NULL PRIMARY KEY',
	"page_parent_id" => 'INTEGER',
	"page_priority" => 'INTEGER',
	"page_language"  => 'VARCHAR',
	"page_linkname"  => 'VARCHAR',
	"page_permalink" => 'VARCHAR',
	"page_permalink_short" => 'VARCHAR',
	"page_permalink_short_cnt" => 'VARCHAR',
	"page_type_of_use" => 'VARCHAR',
	"page_redirect" => 'VARCHAR',
	"page_redirect_code" => 'VARCHAR',
	"page_funnel_uri" => 'VARCHAR',
	"page_hash" => 'VARCHAR',
	"page_psw" => 'VARCHAR',
	"page_title" => 'VARCHAR',
	"page_status" => 'VARCHAR',
	"page_usergroup" => 'VARCHAR',
	"page_content" => 'LONGTEXT',
	"page_extracontent" => 'TEXT',
	"page_sort" => 'VARCHAR',
	"page_lastedit" => 'VARCHAR',
	"page_lastedit_from" => 'VARCHAR',
	"page_meta_author" => 'VARCHAR',
	"page_meta_date" => 'VARCHAR',
	"page_meta_keywords" => 'VARCHAR',
	"page_meta_description" => 'VARCHAR',
	"page_meta_robots" => 'VARCHAR',
	"page_meta_enhanced" => 'VARCHAR',
	"page_thumbnail" => 'VARCHAR',
	"page_favicon" => 'VARCHAR',
	"page_head_styles" => 'VARCHAR',
	"page_head_enhanced" => 'VARCHAR',
	"page_template" => 'VARCHAR',
	"page_template_layout" => 'VARCHAR',
	"page_modul" => 'VARCHAR',
	"page_modul_query" => 'VARCHAR',
	"page_addon_string" => 'VARCHAR',
	"page_authorized_users" => 'VARCHAR',
	"page_version" => 'INTEGER',
	"page_version_date" => 'VARCHAR',
  "page_labels" => 'VARCHAR'
  );

?>