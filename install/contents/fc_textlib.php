<?php

$database = "content";
$table_name = "fc_textlib";

$cols = array(
  "textlib_id"  => 'INTEGER NOT NULL PRIMARY KEY',
  "textlib_name"  => 'VARCHAR',
  "textlib_title"  => 'VARCHAR',
  "textlib_content"  => 'VARCHAR',
  "textlib_teaser"  => 'VARCHAR',
  "textlib_keywords"  => 'VARCHAR',
  "textlib_classes"  => 'VARCHAR',
  "textlib_permalink"  => 'VARCHAR',
  "textlib_permalink_name"  => 'VARCHAR',
  "textlib_permalink_title"  => 'VARCHAR',
  "textlib_permalink_classes"  => 'VARCHAR',
  "textlib_images" => 'VARCHAR',
  "textlib_groups"  => 'VARCHAR',
  "textlib_labels"  => 'VARCHAR',
  "textlib_template"  => 'VARCHAR',
  "textlib_theme"  => 'VARCHAR',
  "textlib_notes"  => 'VARCHAR',
  "textlib_lastedit"  => 'VARCHAR',
  "textlib_lastedit_from"  => 'VARCHAR',
  "textlib_lang" => 'VARCHAR',
  "textlib_status"  => 'VARCHAR',
  "textlib_priority" => 'INTEGER'
  );

?>