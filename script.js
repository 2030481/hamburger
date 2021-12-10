var menu = {
  $window: $('body'),
  $page: $('#page'),
  $hamburger: $('.hamburger'),
  offset: 1800,
  pageHeight: $('#page').outerHeight(),

  open: function() {
		this.$window.addClass('menu-active');
		this.$hamburger.off('click');
		$('.backdrop, .hamburger').on('click', this.close.bind(this));
		this.hamburgerFix(true);
	},
	close: function() {
		this.$window.removeClass('menu-active');
		$('#container, .hamburger').off('click');
		this.$hamburger.on('click', this.open.bind(this));
		this.hamburgerFix(false);
		console.log('closing...');
	},
	updateTransformOrigin: function() {
		scrollTop = $('#container').scrollTop();
		equation = (scrollTop + this.offset) / this.pageHeight * 100;
		this.$page.css('transform-origin', 'center ' + equation + '%');
	},
	//hamburger icon fix to keep its position
	hamburgerFix: function(opening) {
			if(opening) {
				$('.hamburger').css({
					position: 'absolute',
					top: $('#container').scrollTop() + 30 + 'px'
				});
			} else {
				setTimeout(function() {
					$('.hamburger').css({
						position: 'fixed',
						top: '30px'
					});
				}, 300);
			}
		},
	bindEvents: function() {
		this.$hamburger.on('click', this.open.bind(this));
		$('.close').on('click', this.close.bind(this));
		this.$window.on('scroll', this.updateTransformOrigin.bind(this));
	},
	init: function() {
		this.bindEvents();
		this.updateTransformOrigin();
	},
};
menu.init();
