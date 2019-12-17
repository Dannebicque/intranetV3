
  $( "#sortable" ).sortable({
    revert: true
  });
  $( ".draggable" ).draggable({
    connectToSortable: "#sortable",
    helper: "clone",
    revert: "invalid"
  });
