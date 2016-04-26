(function() {
	var numInput = $('input').length,
		parentSect = $('#completed').parent().height(),
		count = 0;
	
	$('input').on('click', function(){
		var parentDiv = $(this).parents('.course'),
			row = parentDiv.parents('.portfolio_section');
		
		count++;
			
		$('<div></div>')
			.css({					
				'backgroundColor' : '#ECF5E4',
				'opacity' : 0,
				'marginTop' : -parentDiv.height(),
				'paddingTop' : parentDiv.height()
			})				
			.animate({'opacity' : 0.4}, {
				duration : 1000,
				complete : function(){					
					parentDiv.animate({'opacity' : 0}, {
						duration: 1000,
						complete: function(){
							parentDiv.remove();							
							if (count === numInput){								
								$('#completed')									
									.css({
										'paddingTop' : (parentSect / 2),
										'paddingBottom' : (parentSect / 2),
										'display' : 'block',
										'opacity' : 0
									})
									.animate({'opacity': 1}, 1250)
							}
						}
					});
				}
			})
			.appendTo($(this).parents('.course'));
		
		if(count === numInput) {
			parentSect = $('#completed').parent().height();
			row.css('height', parentSect);
		}		
		
	});
		
}());