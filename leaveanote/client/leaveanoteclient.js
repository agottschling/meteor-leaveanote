Template.addnote.events({
	'click #add-note-button' : function(event){
		event.preventDefault();
		var noteText = $("#noteInput").val();

		if (!(/\S/.test(noteText))) {
			$("#noteInput").attr("placeholder", "No empties!");
			console.log("Can't add an empty note!");
		
		} else {

			$("#noteInput").attr("placeholder", "Leave your note here!");
			
			Meteor.call("addNote",noteText,function(error , noteId){
			console.log('added note with Id .. ' + noteId);
			});

		}
		$("#noteInput").val("");
	}
});


Notes = new Meteor.Collection("notes");

Template.notes.items = function(){
    return Notes.find({},{sort:{'submittedOn':-1}});
}