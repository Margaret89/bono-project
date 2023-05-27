<template>
	<p><a>This is a standard link</a></p>

	<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p><br><br>

	<div class="h2">Additional classes for text</div>
	<p><span class="code">text-red</span> Red text</p>
	<p><span class="code">text-green</span> Green text</p>
	<p><span class="code">text-grey</span> Grey text</p>
	<p><span class="code">text-center</span> Text alignment in the center</p><br><br>

	<div class="h2">Headers</div>
	<h1>Header - h1</h1>
	<h2>Header - h2</h2>
	<h3>Header - h3</h3>
	<h4>Header - h4</h4>
	<h5>Header - h5</h5>
	<h6>Header - h6</h6>
	<br>

	<p class="h1">This is a class with the name h1</p>
	<p class="h2">This is a class with the name h2</p>
	<p class="h3">This is a class with the name h3</p>
	<p class="h4">This is a class with the name h4</p>
	<p class="h5">This is a class with the name h5</p>
	<p class="h6">This is a class with the name h6</p>
	<br><br><br>

	<div class="h2">Buttons</div>
	<my-button>Button</my-button>
	<br><br>
	<my-button class="btn_green">Button</my-button>
	<br><br>
	<my-button>
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br><br>
	<my-button class="btn_green">
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br><br>
	<my-button class="btn_grey">
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br><br>
	<my-button class="btn_red">
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br><br>
	<my-button class="btn_border">
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br><br>
	<my-button class="btn_border-dark">
		<svg class="icon ic-briefcase" width="15" height="15">
			<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
		</svg>
		Button
	</my-button>
	<br>
	<br>
	<div style="background: #000; padding: 20px">
		<my-button class="btn_white">
			<svg class="icon ic-briefcase" width="15" height="15">
				<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
			</svg>
			Button
		</my-button>
		<br><br>
		
		<my-button class="btn_white-fill">
			<svg class="icon ic-briefcase" width="15" height="15">
				<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
			</svg>
			Button
		</my-button>
	</div>
	<br><br><br>
	
	<div class="h2">Checkbox</div>
	<my-checkbox v-model="valCheck">Text</my-checkbox>
	<br><br><br>

	<div class="h2">Табуляция</div>
	<div class="tabs-page">
		<ul class="tabs-page__list">
			<li class="tabs-page__item active" data-item="tab1">Tab1</li>
			<li class="tabs-page__item" data-item="tab2">Tab2</li>
			<li class="tabs-page__item" data-item="tab3">Tab3</li>
			<li class="tabs-page__item" data-item="tab4">Tab4</li>
		</ul>
		<div class="tabs-page__content">
			<div class="tabs-page__content-item active" id="tab1">Text 1</div>
			<div class="tabs-page__content-item" id="tab2">Text 2</div>
			<div class="tabs-page__content-item" id="tab3">Text 3</div>
			<div class="tabs-page__content-item" id="tab4">Text 4</div>
		</div>
	</div><br><br><br>
	<div class="tabs-page tabs-page_line">
		<ul class="tabs-page__list">
			<li class="tabs-page__item active" data-item="tab1">Tab1</li>
			<li class="tabs-page__item" data-item="tab2">Tab2</li>
			<li class="tabs-page__item" data-item="tab3">Tab3</li>
			<li class="tabs-page__item" data-item="tab4">Tab4</li>
		</ul>
		<div class="tabs-page__content">
			<div class="tabs-page__content-item active" id="tab1">Text 1</div>
			<div class="tabs-page__content-item" id="tab2">Text 2</div>
			<div class="tabs-page__content-item" id="tab3">Text 3</div>
			<div class="tabs-page__content-item" id="tab4">Text 4</div>
		</div>
	</div><br><br><br>

	<div class="h2">Теги</div>
	<div class="tag">Text</div><br><br>
	<div class="tag tag_red">Text</div><br><br>
	<div class="tag tag_purple">Text</div><br><br>
	<div class="tag tag_yellow">Text</div><br><br>
	<div class="tag tag_black">Text</div><br><br>
	<div class="tag tag tag_small">Text</div><br><br>
	<br><br>
	

	<div class="h2">Switch</div>
	<my-switch idswitch="switch1" v-model="valSwitch">Text</my-switch>
	<br><br>
	<br><br>

	<div class="h2">Иконки</div>
	<div class="type-icon">
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-star" width="20" height="20">
					<use xlink:href="../assets/sprites/sprite.svg#ic-star"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-star</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-phone" width="20" height="20">
					<use xlink:href="../assets/sprites/sprite.svg#ic-phone"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-phone</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-people" width="20" height="20">
					<use xlink:href="../assets/sprites/sprite.svg#ic-people"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-people</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-home" width="20" height="20">
					<use xlink:href="../assets/sprites/sprite.svg#ic-home"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-home</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-person" width="16" height="22">
					<use xlink:href="../assets/sprites/sprite.svg#ic-person"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-person</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-arrow-left" width="6" height="11">
					<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-left"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-arrow-left</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-arrow-right" width="6" height="11">
					<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-right"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-arrow-right</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-arrow-up" width="11" height="6">
					<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-up"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-arrow-up</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-arrow-down" width="11" height="6">
					<use xlink:href="../assets/sprites/sprite.svg#ic-arrow-down"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-arrow-down</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-arr-left" width="10" height="8">
					<use xlink:href="../assets/sprites/sprite.svg#ic-arr-left"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-arr-left</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-arr-right" width="10" height="8">
					<use xlink:href="../assets/sprites/sprite.svg#ic-arr-right"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-arr-right</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-briefcase" width="15" height="15">
					<use xlink:href="../assets/sprites/sprite.svg#ic-briefcase"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-briefcase</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-msg" width="21" height="20">
					<use xlink:href="../assets/sprites/sprite.svg#ic-msg"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-msg</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-notice" width="18" height="21">
					<use xlink:href="../assets/sprites/sprite.svg#ic-notice"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-notice</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-notice-fill" width="12" height="14">
					<use xlink:href="../assets/sprites/sprite.svg#ic-notice-fill"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-notice-fill</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-plus" width="10" height="10">
					<use xlink:href="../assets/sprites/sprite.svg#ic-plus"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-plus</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-minus" width="7" height="1">
					<use xlink:href="../assets/sprites/sprite.svg#ic-minus"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-minus</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-call" width="16" height="16">
					<use xlink:href="../assets/sprites/sprite.svg#ic-call"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-call</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-bin" width="12" height="14">
					<use xlink:href="../assets/sprites/sprite.svg#ic-bin"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-bin</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-calendar" width="16" height="18">
					<use xlink:href="../assets/sprites/sprite.svg#ic-calendar"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-calendar</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-calendar-close" width="17" height="18">
					<use xlink:href="../assets/sprites/sprite.svg#ic-calendar-close"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-calendar-close</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-calendar-check" width="17" height="18">
					<use xlink:href="../assets/sprites/sprite.svg#ic-calendar-check"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-calendar-check</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-tick" width="8" height="8">
					<use xlink:href="../assets/sprites/sprite.svg#ic-tick"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-tick</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-close" width="10" height="10">
					<use xlink:href="../assets/sprites/sprite.svg#ic-close"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-close</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-edit" width="20" height="20">
					<use xlink:href="../assets/sprites/sprite.svg#ic-edit"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-edit</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-edit-line" width="20" height="21">
					<use xlink:href="../assets/sprites/sprite.svg#ic-edit-line"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-edit-line</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-dots" width="14" height="2">
					<use xlink:href="../assets/sprites/sprite.svg#ic-dots"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-dots</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-info" width="16" height="16">
					<use xlink:href="../assets/sprites/sprite.svg#ic-info"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-info</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-lines" width="12" height="12">
					<use xlink:href="../assets/sprites/sprite.svg#ic-lines"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-lines</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-tile" width="12" height="12">
					<use xlink:href="../assets/sprites/sprite.svg#ic-tile"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-tile</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-filter" width="18" height="16">
					<use xlink:href="../assets/sprites/sprite.svg#ic-filter"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-filter</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-clear" width="19" height="19">
					<use xlink:href="../assets/sprites/sprite.svg#ic-clear"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-clear</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-column" width="15" height="15">
					<use xlink:href="../assets/sprites/sprite.svg#ic-column"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-column</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-search" width="15" height="15">
					<use xlink:href="../assets/sprites/sprite.svg#ic-search"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-search</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-clock" width="13" height="13">
					<use xlink:href="../assets/sprites/sprite.svg#ic-clock"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-clock</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-many-dots" width="6" height="10">
					<use xlink:href="../assets/sprites/sprite.svg#ic-many-dots"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-many-dots</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-star-fill" width="10" height="10">
					<use xlink:href="../assets/sprites/sprite.svg#ic-star-fill"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-star-fill</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-missed-call" width="12" height="12">
					<use xlink:href="../assets/sprites/sprite.svg#ic-missed-call"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-missed-call</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-eye" width="16" height="14">
					<use xlink:href="../assets/sprites/sprite.svg#ic-eye"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-eye</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-eye-close" width="18" height="18">
					<use xlink:href="../assets/sprites/sprite.svg#ic-eye-close"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-eye-close</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-sound" width="14" height="12">
					<use xlink:href="../assets/sprites/sprite.svg#ic-sound"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-sound</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-plus-circle" width="19" height="19">
					<use xlink:href="../assets/sprites/sprite.svg#ic-plus-circle"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-plus-circle</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-user" width="18" height="21">
					<use xlink:href="../assets/sprites/sprite.svg#ic-user"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-user</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-mail" width="22" height="19">
					<use xlink:href="../assets/sprites/sprite.svg#ic-mail"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-mail</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-send-mail" width="16" height="14">
					<use xlink:href="../assets/sprites/sprite.svg#ic-send-mail"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-send-mail</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-send" width="17" height="17">
					<use xlink:href="../assets/sprites/sprite.svg#ic-send"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-send</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-15-prev" width="19" height="22">
					<use xlink:href="../assets/sprites/sprite.svg#ic-15-prev"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-15-prev</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-15-next" width="19" height="22">
					<use xlink:href="../assets/sprites/sprite.svg#ic-15-next"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-15-next</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-review" width="19" height="19">
					<use xlink:href="../assets/sprites/sprite.svg#ic-review"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-review</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-volume" width="24" height="17">
					<use xlink:href="../assets/sprites/sprite.svg#ic-volume"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-volume</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-pause" width="10" height="15">
					<use xlink:href="../assets/sprites/sprite.svg#ic-pause"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-pause</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-play" width="11" height="14">
					<use xlink:href="../assets/sprites/sprite.svg#ic-play"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-play</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-move-to" width="18" height="14">
					<use xlink:href="../assets/sprites/sprite.svg#ic-move-to"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-move-to</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-export" width="16" height="16">
					<use xlink:href="../assets/sprites/sprite.svg#ic-export"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-export</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-print" width="18" height="19">
					<use xlink:href="../assets/sprites/sprite.svg#ic-print"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-print</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-archive" width="18" height="18">
					<use xlink:href="../assets/sprites/sprite.svg#ic-archive"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-archive</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-spiral" width="17" height="17">
					<use xlink:href="../assets/sprites/sprite.svg#ic-spiral"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-spiral</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-write" width="15" height="17">
					<use xlink:href="../assets/sprites/sprite.svg#ic-write"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-write</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-file" width="12" height="15">
					<use xlink:href="../assets/sprites/sprite.svg#ic-file"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-file</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-logout" width="16" height="16">
					<use xlink:href="../assets/sprites/sprite.svg#ic-logout"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-logout</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-chat" width="15" height="15">
					<use xlink:href="../assets/sprites/sprite.svg#ic-chat"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-chat</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-check" width="17" height="9">
					<use xlink:href="../assets/sprites/sprite.svg#ic-check"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-check</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-wallet" width="17" height="16">
					<use xlink:href="../assets/sprites/sprite.svg#ic-wallet"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-wallet</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-link" width="17" height="10">
					<use xlink:href="../assets/sprites/sprite.svg#ic-link"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-link</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-note" width="17" height="17">
					<use xlink:href="../assets/sprites/sprite.svg#ic-note"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-note</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-photo" width="17" height="17">
					<use xlink:href="../assets/sprites/sprite.svg#ic-photo"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-photo</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-credit-card" width="22" height="19">
					<use xlink:href="../assets/sprites/sprite.svg#ic-credit-card"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-credit-card</div>
		</div>
		<div class="type-icon__item">
			<div class="type-icon__img">
				<svg class="icon ic-paper" width="13" height="14">
					<use xlink:href="../assets/sprites/sprite.svg#ic-paper"></use>
				</svg>
			</div>
			<div class="type-icon__name">ic-paper</div>
		</div>
	</div>
</template>

<script>
import MyCheckbox from '@/components/UI/MyCheckbox.vue'
import MySwitch from '@/components/UI/MySwitch.vue'
export default {
	components: {
		MyCheckbox,
		MySwitch
	},
 data() {
	return{
			valCheck: false,
			valSwitch: false,
		}
	},
}
</script>

<style scoped lang="scss">
	.type-icon{
		display: flex;
		flex-wrap: wrap;

		&__item{
			width: 100px;
			margin: 15px;
			text-align: center;
		}

		&__img{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100px;
			width: 100%;
		}

		&_white{
			color: #fff;
		}
	}
</style>