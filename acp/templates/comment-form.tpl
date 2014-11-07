<div class="well well-sm" style="margin-bottom:3px;padding:5px;">
	<form role="form" action="{form_action}" id="comment_form" method="POST">
		<textarea class="form-control" id="comment" name="comment" rows="3" placeholder="{form_legend}">{value_textarea}</textarea>
		<input type="hidden" name="id" value="{value_hidden_id}">
		<input type="hidden" name="pid" value="{value_hidden_parent_id}">
	</form>
</div>
<script>

$(document).ready(function() {
	$('#comment').keydown(function() {
		var message = $("textarea").val();
		if(event.keyCode == 13) {
			if(message != "") {
				$('#comment_form').submit();
			}
			$("textarea").val('');
			return false;
		}
	});
});

</script>