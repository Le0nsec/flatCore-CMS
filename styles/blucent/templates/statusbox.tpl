{nocache}
<div class="well well-sm">
	<p>{$status_msg} <b>{$smarty.session.user_nick}</b></p>
	
	<div class="list-group" style="margin-bottom:0;">
		<a href="{$link_profile}" class="list-group-item"><i class="icon-user"></i> {$lang_button_profile}</a>
		<a href="{$link_logout}" class="list-group-item"><i class="icon-remove"></i> {$lang_button_logout}</a>
	
		{if $smarty.session.user_class == "administrator"}
		<a href="{$link_acp}" class="list-group-item"><i class="icon-cog"></i>  {$lang_button_acp}</a>
		<hr>
		<form action="/acp/acp.php?tn=pages&sub=edit" method="POST">
		<button name="editpage" value="{$page_id}" class="btn btn-secondary btn-block">{$lang_button_edit_page}</button>
		</form>
		{/if}
		
	</div>
</div>
{/nocache}