'use strict';
var app = angular.module('com.module.core');
app.run(function($rootScope, gettextCatalog, $location, Setting) {

	$rootScope.messages = [];
	$rootScope.addMessage = function(name, uisref, icon, root) {
		$rootScope.menu.push({
			name: name,
			sref: uisref,
			icon: icon,
			root: root
		});
	};

	$rootScope.notifications = [];
	$rootScope.addNotification = function(name, uisref, icon, root) {
		$rootScope.menu.push({
			name: name,
			sref: uisref,
			icon: icon,
			root: root
		});
	};

	$rootScope.tasks = [];
	$rootScope.addTask = function(name, uisref, icon, root) {
		$rootScope.menu.push({
			name: name,
			sref: uisref,
			icon: icon,
			root: root
		});
	};

	// Left Sidemenu
	$rootScope.menu = [];

	// Add Sidebar Menu
	$rootScope.addMenu = function(name, uisref, icon, root, subMenu) {
		$rootScope.menu.push({
			name: name,
			sref: uisref,
			icon: icon,
			root: root,
			subMenu: subMenu
		});
	};

	// Add Menu Dashboard
	$rootScope.addMenu(gettextCatalog.getString('Dashboard'), 'app.dashboard',
		'fa-dashboard', 'app.dashboard');

	// Dashboard
	$rootScope.dashboardBox = [];

	// Add Dashboard Box
	$rootScope.addDashboardBox = function(name, color, icon, quantity, href) {
		$rootScope.dashboardBox.push({
			name: name,
			color: color,
			icon: icon,
			quantity: quantity,
			href: href
		});
	};

  // Get Settings for Database
  $rootScope.setSetting = function(key, value) {

    Setting.find({
      filter: {
        where: {
          key: key
        }
      }
    }, function(data) {

      if (data.length) {
        data[0].value = value;
        data[0].$save();
      } else {
        Setting.create({
          key: key,
          value: value
        }, function(data) {
          console.log(data);
        });
      }
      $rootScope.loadSettings();
    });
  };

  // Load Settings blank
  $rootScope.settings = {};

  // Get Settings for Loopback Service
  $rootScope.loadSettings = function() {
    Setting.find(function(settings) {
      $rootScope.settings.data = settings;
    });
  };
	
	$rootScope.sidebarCollapse = '';

	$rootScope.toggleSidebar = function() {
		if ($(window).width() > (767)) {
			if($rootScope.sidebarCollapse == 'sidebar-collapse') {
				$rootScope.sidebarCollapse = '';
			} else {
			$rootScope.sidebarCollapse = 'sidebar-collapse';
			}
		} else {
			if($rootScope.sidebarCollapse == 'sidebar-open') {
				$rootScope.sidebarCollapse = '';
			} else {
			$rootScope.sidebarCollapse = 'sidebar-open';
			}
		}
	};
});

app.config(['cfpLoadingBarProvider',
	function(cfpLoadingBarProvider) {
		cfpLoadingBarProvider.includeSpinner = false;
	}
]);
