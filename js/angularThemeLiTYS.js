(function() {
	var userId = 8,
	url = 'http://developers.deezer.com/examples/channel.php',
	domContainer = 'player',
	playlistBool = true,
	widthPlayer = 650,
	heightPlayer = 300,
	light = 0; //between 0 & 4
	
	var angularTheme = angular.module("angularThemeLiTYS", []);

	angularTheme.controller("angularThemeControllerLiTYS", AngularThemeControllerLiTYS);

	function AngularThemeControllerLiTYS($scope)
	{
		
		DZ.init({
			appId  : 'userId',
			channelUrl : url,
			player : {
				container : domContainer,
				playlist : playlistBool,
				widthPlayer : 650,
				heightPlayer : 300,
				onload : refreshTracks
			}
		});
	
		var currentTracks =[3135557, 1152226];

		$scope.getTraks=function()
		{
			return currentTracks;
		}

		function refreshTracks()
		{
			switch (light)
			{
				case 0:
					currentTracks =[141433453, 15264305];
					        			console.log('case 0 light');
					        			console.log(currentTracks);


				break;
				case 5:
					currentTracks =[3135557, 1152226];
					        			console.log('case 5 light');

				break;
				default:
        			console.log('case default light');

			}

			DZ.player.playTracks($scope.getTraks());

			
		}
	}



})();
