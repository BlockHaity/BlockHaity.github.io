if (typeof(argonConfig) == "undefined"){
	var argonConfig = {};
}
if (typeof(argonConfig.wp_path) == "undefined"){
	argonConfig.wp_path = "/";
}
/* Cookies 操作 */
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

/* 多语言支持 */
var translation = {};
translation['en_US'] = {
	"确定": "OK",
	"清除": "Clear",
	"恢复博客默认": "Set To Default",
	"评论内容不能为空": "Comment content cannot be empty",
	"昵称不能为空": "Name cannot be empty",
	"邮箱或 QQ 号格式错误": "Incorrect email or QQ format",
	"邮箱格式错误": "Incorrect email format",
	"网站格式错误 (不是 http(s):// 开头)": "Website URL format error",
	"验证码未输入": "CAPTCHA cannot be empty",
	"验证码格式错误": "Incorrect CAPTCHA format",
	"评论格式错误": "Comment format error",
	"发送中": "Sending",
	"正在发送": "Sending",
	"评论正在发送中...": "Comment is sending...",
	"发送": "Send",
	"评论发送失败": "Comment failed",
	"发送成功": "Success",
	"您的评论已发送": "Your comment has been sent",
	"评论": "Comments",
	"未知原因": "Unknown Error",
	"评论内容不能为空": "Comment content cannot be empty",
	"编辑中": "Editing",
	"正在编辑": "Editing",
	"评论正在编辑中...": "Comment is editing",
	"编辑": "Edit",
	"评论编辑失败": "Comment editing failed",
	"已编辑": "Edited",
	"编辑成功": "Success",
	"您的评论已编辑": "Your comment has been edited",
	"评论 #": "Comment #",
	"的编辑记录": "- Edit History",
	"加载失败": "Failed to load",
	"展开": "Show",
	"没有更多了": "No more comments",
	"找不到该 Repo": "Can't find the repository",
	"获取 Repo 信息失败": "Failed to get repository information",
	"点赞失败": "Vote failed",
	"Hitokoto 获取失败": "Failed to get Hitokoto",
	"复制成功": "Copied",
	"代码已复制到剪贴板": "Code has been copied to the clipboard",
	"复制失败": "Failed",
	"请手动复制代码": "Please copy the code manually",
	"刚刚": "Now",
	"分钟前": "minutes ago",
	"小时前": "hours ago",
	"昨天": "Yesterday",
	"前天": "The day before yesterday",
	"天前": "days ago",
	"隐藏行号": "Hide Line Numbers",
	"显示行号": "Show Line Numbers",
	"开启折行": "Enable Break Line",
	"关闭折行": "Disable Break Line",
	"复制": "Copy",
	"在编辑器中打开": "Open in Editor",
	"另存为": "Save As",
	"关闭": "Close",
	"加载编辑器中": "Loading editor",
	"编辑器加载失败": "Failed to load editor",
	"查找": "Find",
	"替换": "Replace",
	"折行": "Word Wrap",
	"减小字号": "Decrease Font Size",
	"增大字号": "Increase Font Size",
	"选择语言": "Select Language",
	"行": "Ln",
	"列": "Col",
	"已选择": "Selected",
	"个字符": "characters",
	"空格": "Spaces",
	"制表符": "Tab Size",
	"换行符": "End of Line",
};
translation['ru_RU'] = {
	"确定": "ОК",
	"清除": "Очистить",
	"恢复博客默认": "Восстановить по умолчанию",
	"评论内容不能为空": "Содержимое комментария не может быть пустым",
	"昵称不能为空": "Имя не может быть пустым",
	"邮箱或 QQ 号格式错误": "Неверный формат электронной почты или QQ",
	"邮箱格式错误": "Неправильный формат электронной почты",
	"网站格式错误 (不是 http(s):// 开头)": "Сайт ошибка формата URL-адреса ",
	"验证码未输入": "Вы не решили капчу",
	"验证码格式错误": "Ошибка проверки капчи",
	"评论格式错误": "Неправильный формат комментария",
	"发送中": "Отправка",
	"正在发送": "Отправка",
	"评论正在发送中...": "Комментарий отправляется...",
	"发送": "Отправить",
	"评论发送失败": "Не удалось отправить комментарий",
	"发送成功": "Комментарий отправлен",
	"您的评论已发送": "Ваш комментарий был отправлен",
	"评论": "Комментарии",
	"未知原因": "Неизвестная ошибка",
	"评论内容不能为空": "Содержимое комментария не может быть пустым",
	"编辑中": "Редактируется",
	"正在编辑": "Редактируется",
	"评论正在编辑中...": "Комментарий редактируется",
	"编辑": "Редактировать",
	"评论编辑失败": "Не удалось отредактировать комментарий",
	"已编辑": "Изменено",
	"编辑成功": "Успешно",
	"您的评论已编辑": "Ваш комментарий был изменен",
	"评论 #": "Комментарий #",
	"的编辑记录": "- История изменений",
	"加载失败": "Ошибка загрузки",
	"展开": "Показать",
	"没有更多了": "Комментариев больше нет",
	"找不到该 Repo": "Невозможно найти репозиторий",
	"获取 Repo 信息失败": "Неудалось получить информацию репозитория",
	"点赞失败": "Ошибка голосования",
	"Hitokoto 获取失败": "Проблемы с вызовом Hitokoto",
	"复制成功": "Скопировано",
	"代码已复制到剪贴板": "Код скопирован в буфер обмена",
	"复制失败": "Неудалось",
	"请手动复制代码": "Скопируйте код вручную",
	"刚刚": "Сейчас",
	"分钟前": "минут назад",
	"小时前": "часов назад",
	"昨天": "Вчера",
	"前天": "Позавчера",
	"天前": "дней назад",
	"隐藏行号": "Скрыть номера строк",
	"显示行号": "Показать номера строк",
	"开启折行": "Включить перенос строк",
	"关闭折行": "Выключить перенос строк",
	"复制": "Скопировать",
	"在编辑器中打开": "Открыть в редакторе",
	"另存为": "Сохранить как",
	"关闭": "Закрыть",
	"加载编辑器中": "Загрузка редактора",
	"编辑器加载失败": "Не удалось загрузить редактор",
	"查找": "Найти",
	"替换": "Заменить",
	"折行": "Перенос строк",
	"减小字号": "Уменьшить шрифт",
	"增大字号": "Увеличить шрифт",
	"选择语言": "Выбрать язык",
	"行": "Стр",
	"列": "Стлб",
	"已选择": "Выбрано",
	"个字符": "символов",
	"空格": "Пробелы",
	"制表符": "Табуляция",
	"换行符": "Конец строки",
};
translation['zh_TW'] = {
	"确定": "確定",
	"清除": "清除",
	"恢复博客默认": "恢復博客默認",
	"评论内容不能为空": "評論內容不能為空",
	"昵称不能为空": "昵稱不能為空",
	"邮箱或 QQ 号格式错误": "郵箱或 QQ 號格式錯誤",
	"邮箱格式错误": "郵箱格式錯誤",
	"网站格式错误 (不是 http(s):// 开头)": "網站格式錯誤 (不是 http(s):// 開頭)",
	"验证码未输入": "驗證碼未輸入",
	"验证码格式错误": "驗證碼格式錯誤",
	"评论格式错误": "評論格式錯誤",
	"发送中": "發送中",
	"正在发送": "正在發送",
	"评论正在发送中...": "評論正在發送中...",
	"发送": "發送",
	"评论发送失败": "評論發送失敗",
	"发送成功": "發送成功",
	"您的评论已发送": "您的評論已發送",
	"评论": "評論",
	"未知原因": "未知原因",
	"评论内容不能为空": "評論內容不能為空",
	"编辑中": "編輯中",
	"正在编辑": "正在編輯",
	"评论正在编辑中...": "評論正在編輯中...",
	"编辑": "編輯",
	"评论编辑失败": "評論編輯失敗",
	"已编辑": "已編輯",
	"编辑成功": "編輯成功",
	"您的评论已编辑": "您的評論已編輯",
	"评论 #": "評論 #",
	"的编辑记录": "的編輯記錄",
	"加载失败": "加載失敗",
	"展开": "展開",
	"没有更多了": "沒有更多了",
	"找不到该 Repo": "找不到該 Repo",
	"获取 Repo 信息失败": "獲取 Repo 信息失敗",
	"点赞失败": "點贊失敗",
	"Hitokoto 获取失败": "Hitokoto 獲取失敗",
	"复制成功": "復制成功",
	"代码已复制到剪贴板": "代碼已復制到剪貼板",
	"复制失败": "復制失敗",
	"请手动复制代码": "請手動復制代碼",
	"刚刚": "剛剛",
	"分钟前": "分鐘前",
	"小时前": "小時前",
	"昨天": "昨天",
	"前天": "前天",
	"天前": "天前",
	"隐藏行号": "隱藏行號",
	"显示行号": "顯示行號",
	"开启折行": "開啟折行",
	"关闭折行": "關閉折行",
	"复制": "復制",
	"在编辑器中打开": "在編輯器中開啟",
	"另存为": "另存新檔",
	"关闭": "關閉",
	"加载编辑器中": "正在載入編輯器",
	"编辑器加载失败": "編輯器載入失敗",
	"查找": "尋找",
	"替换": "取代",
	"折行": "折行",
	"减小字号": "縮小字號",
	"增大字号": "放大字號",
	"选择语言": "選擇語言",
	"行": "行",
	"列": "列",
	"已选择": "已選擇",
	"个字符": "個字元",
	"空格": "空格",
	"制表符": "定位點",
	"换行符": "換行符號"
};
function __(text){
	let lang = argonConfig.language;
	if (typeof(translation[lang]) == "undefined"){
		return text;
	}
	if (typeof(translation[lang][text]) == "undefined"){
		return text;
	}
	return translation[lang][text];
}

/* 根据滚动高度改变顶栏透明度 */
!function(){
	let toolbar = document.getElementById("navbar-main");
	let $bannerContainer = $("#banner_container");
	let $content = $("#content");

	let startTransitionHeight;
	let endTransitionHeight;

	startTransitionHeight = $bannerContainer.offset().top - 75;
	endTransitionHeight = $content.offset().top - 75;

	$(window).resize(function(){
		startTransitionHeight = $bannerContainer.offset().top - 75;
		endTransitionHeight = $content.offset().top - 75;
	});

	function changeToolbarTransparency(){
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop < startTransitionHeight){
			toolbar.style.setProperty('background-color', 'rgba(var(--toolbar-color), 0)', 'important');
			toolbar.style.setProperty('box-shadow', 'none');
			toolbar.classList.add("navbar-ontop");
			return;
		}
		if (scrollTop > endTransitionHeight){
			toolbar.style.setProperty('background-color', 'rgba(var(--toolbar-color), 0.85)', 'important');
			toolbar.style.setProperty('box-shadow', '');
			toolbar.classList.remove("navbar-ontop");
			return;
		}
		let transparency = (scrollTop - startTransitionHeight) / (endTransitionHeight - startTransitionHeight) * 0.85;
		toolbar.style.setProperty('background-color', 'rgba(var(--toolbar-color), ' + transparency, 'important');
		toolbar.style.setProperty('box-shadow', '');
		toolbar.classList.remove("navbar-ontop");
	}
	changeToolbarTransparency();
	document.addEventListener("scroll", changeToolbarTransparency, {passive: true});
}();

/* 顶栏搜索 */
$(document).on("click" , "#navbar_search_input_container" , function(){
	$(this).addClass("open");
	$("#navbar_search_input").focus();
});
$(document).on("blur" , "#navbar_search_input_container" , function(){
	$(this).removeClass("open");
});
$(document).on("keydown" , "#navbar_search_input_container #navbar_search_input" , function(e){
	if (e.keyCode != 13){
		return;
	}
	let word = $(this).val();
	if (word == ""){
		$("#navbar_search_input_container").blur();
		return;
	}
	let scrolltop = $(document).scrollTop();
	$.pjax({
		url: argonConfig.wp_path + "?s=" + encodeURI(word)
	});
});
/* 侧栏搜索 */
$(document).on("click" , "#leftbar_search_container" , function(){
	$(".leftbar-search-button").addClass("open");
	$("#leftbar_search_input").removeAttr("readonly").focus();
	$("#leftbar_search_input").focus();
	$("#leftbar_search_input").select();
	return false;
});
$(document).on("blur" , "#leftbar_search_container" , function(){
	$(".leftbar-search-button").removeClass("open");
	$("#leftbar_search_input").attr("readonly", "readonly");
});
$(document).on("keydown" , "#leftbar_search_input" , function(e){
	if (e.keyCode != 13){
		return;
	}
	let word = $(this).val();
	if (word == ""){
		$("#leftbar_search_container").blur();
		return;
	}
	$("html").removeClass("leftbar-opened");
	$.pjax({
		url: argonConfig.wp_path + "?s=" + encodeURI(word)
	});
});

/* 左侧栏随页面滚动浮动 */
!function(){
	let $leftbarPart1 = $('#leftbar_part1');
	let $leftbarPart2 = $('#leftbar_part2');
	let leftbarPart1 = document.getElementById('leftbar_part1');
	let leftbarPart2 = document.getElementById('leftbar_part2');

	let part1OffsetTop = $('#leftbar_part1').offset().top;
	let part1OuterHeight = $('#leftbar_part1').outerHeight();

	function changeLeftbarStickyStatus(){
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if( part1OffsetTop + part1OuterHeight + 10 - scrollTop <= 90 ){
			// 滚动条在页面中间浮动状态
			leftbarPart2.classList.add('sticky');
		}else{
			// 滚动条在顶部 不浮动状态
			leftbarPart2.classList.remove('sticky');
		}
		if( part1OffsetTop + part1OuterHeight + 10 - scrollTop <= 20 ){// 侧栏下部分是否可以随 Headroom 一起向上移动
			document.body.classList.add('leftbar-can-headroom');
		}else{
			document.body.classList.remove('leftbar-can-headroom');
		}
	}
	changeLeftbarStickyStatus();
	document.addEventListener("scroll", changeLeftbarStickyStatus, {passive: true});
	$(window).resize(function(){
		part1OffsetTop = $('#leftbar_part1').offset().top;
		part1OuterHeight = $('#leftbar_part1').outerHeight();
		changeLeftbarStickyStatus();
	});
	new MutationObserver(function(){
		part1OffsetTop = $('#leftbar_part1').offset().top;
		part1OuterHeight = $('#leftbar_part1').outerHeight();
		changeLeftbarStickyStatus();
	}).observe(leftbarPart1, {attributes: true, childList: true, subtree: true});
}();

/* Headroom */
if (argonConfig.headroom){
	var headroom = new Headroom(document.querySelector("body"),{
		"tolerance" : {
			up : 0,
			down : 0
		},
		"offset": 0,
			"classes": {
			"initial": "with-headroom",
			"pinned": "headroom---pinned",
			"unpinned": "headroom---unpinned",
			"top": "headroom---top",
			"notTop": "headroom---not-top",
			"bottom": "headroom---bottom",
			"notBottom": "headroom---not-bottom",
			"frozen": "headroom---frozen"
		}
	}).init();
}

/* 浮动按钮栏相关 （回顶等） */
!function(){
	let $fabtns = $('#float_action_buttons');
	let $backToTopBtn = $('#fabtn_back_to_top');
	let $toggleSidesBtn = $('#fabtn_toggle_sides');
	let $toggleDarkmode = $('#fabtn_toggle_darkmode');
	let $toggleAmoledMode = $('#blog_setting_toggle_darkmode_and_amoledarkmode');
	let $toggleBlogSettings = $('#fabtn_toggle_blog_settings_popup');
	let $goToComment = $('#fabtn_go_to_comment');

	let $readingProgressBar = $('#fabtn_reading_progress_bar');
	let $readingProgressDetails = $('#fabtn_reading_progress_details');

	let isScrolling = false;
	$backToTopBtn.on("click" , function(){
		if (!isScrolling){
			isScrolling = true;
			setTimeout(function(){
				isScrolling = false;
			} , 600);
			$("body,html").animate({
				scrollTop: 0
			}, 600);
		}
	});

	$toggleDarkmode.on("click" , function(){
		toggleDarkmode();
	});

	$toggleAmoledMode.on("click" , function(){
		toggleAmoledDarkMode();
	})

	if ($("#post_comment").length > 0){
		$("#fabtn_go_to_comment").removeClass("d-none");
	}else{
		$("#fabtn_go_to_comment").addClass("d-none");
	}
	$goToComment.on("click" , function(){
		gotoHash("#post_comment" , 600);
		$("#post_comment_content").focus();
	});

	if (localStorage['Argon_fabs_Floating_Status'] == "left"){
		$fabtns.addClass("fabtns-float-left");
	}
	$toggleSidesBtn.on("click" , function(){
		$fabtns.addClass("fabtns-unloaded");
		setTimeout(function(){
			$fabtns.toggleClass("fabtns-float-left");
			if ($fabtns.hasClass("fabtns-float-left")){
				localStorage['Argon_fabs_Floating_Status'] = "left";
			}else{
				localStorage['Argon_fabs_Floating_Status'] = "right";
			}
			$fabtns.removeClass("fabtns-unloaded");
		} , 300);
	});
	// 博客设置
	$toggleBlogSettings.on("click" , function(){
		$("#float_action_buttons").toggleClass("blog_settings_opened");
	});
	$("#close_blog_settings").on("click" , function(){
		$("#float_action_buttons").removeClass("blog_settings_opened");
	});
	$("#blog_setting_darkmode_switch .custom-toggle-slider").on("click" , function(){
		toggleDarkmode();
	});
	// 字体
	$("#blog_setting_font_sans_serif").on("click" , function(){
		$("html").removeClass("use-serif");
		localStorage['Argon_Use_Serif'] = "false";
	});
	$("#blog_setting_font_serif").on("click" , function(){
		$("html").addClass("use-serif");
		localStorage['Argon_Use_Serif'] = "true";
	});
	if (localStorage['Argon_Use_Serif'] == "true"){
		$("html").addClass("use-serif");
	}else if (localStorage['Argon_Use_Serif'] == "false"){
		$("html").removeClass("use-serif");
	}
	// 阴影
	$("#blog_setting_shadow_small").on("click" , function(){
		$("html").removeClass("use-big-shadow");
		localStorage['Argon_Use_Big_Shadow'] = "false";
	});
	$("#blog_setting_shadow_big").on("click" , function(){
		$("html").addClass("use-big-shadow");
		localStorage['Argon_Use_Big_Shadow'] = "true";
	});
	if (localStorage['Argon_Use_Big_Shadow'] == "true"){
		$("html").addClass("use-big-shadow");
	}else if (localStorage['Argon_Use_Big_Shadow'] == "false"){
		$("html").removeClass("use-big-shadow");
	}
	// 滤镜
	function setBlogFilter(name){
		if (name == undefined || name == ""){
			name = "off";
		}
		if (!$("html").hasClass("filter-" + name)){
			$("html").removeClass("filter-sunset filter-darkness filter-grayscale");
			if (name != "off"){
				$("html").addClass("filter-" + name);
			}
		}
		$("#blog_setting_filters .blog-setting-filter-btn").removeClass("active");
		$("#blog_setting_filters .blog-setting-filter-btn[filter-name='" + name + "']").addClass("active");
		localStorage['Argon_Filter'] = name;
	}
	setBlogFilter(localStorage['Argon_Filter']);
	$(".blog-setting-filter-btn").on("click" , function(){
		setBlogFilter(this.getAttribute("filter-name"));
	});

	function changefabtnDisplayStatus(){
		// 阅读进度
		let readingProgress = $(window).scrollTop() / Math.max($(document).height() - $(window).height(), 0.01);
		$readingProgressDetails.html((readingProgress * 100).toFixed(0) + "%");
		$readingProgressBar.css("width" , (readingProgress * 100).toFixed(0) + "%");
		// 是否显示回顶
		if ($(window).scrollTop() >= 400 || readingProgress >= 0.5){
			$backToTopBtn.removeClass("fabtn-hidden");
		}else{
			$backToTopBtn.addClass("fabtn-hidden");
		}
	}
	changefabtnDisplayStatus();
	$(window).scroll(function(){
		changefabtnDisplayStatus();
	});
	$fabtns.removeClass("fabtns-unloaded");
}();

/* 卡片圆角大小调整 */
!function(){
	function setCardRadius(radius, save){
		document.documentElement.style.setProperty('--card-radius', radius + "px");
		if (save){
			localStorage["argon_card_radius"] = radius;
		}
	}
	let slider = document.getElementById('blog_setting_card_radius');
	noUiSlider.create(slider, {
		start: [localStorage["argon_card_radius"] == undefined ? $("meta[name='theme-card-radius']").attr("content") : localStorage["argon_card_radius"]],
		step: 0.5,
		connect: [true, false],
		range: {
			'min': [0],
			'max': [30]
		}
	});
	slider.noUiSlider.on('update', function (values){
		let value = values[0];
		setCardRadius(value, false);
	});
	slider.noUiSlider.on('set', function (values){
		let value = values[0];
		setCardRadius(value, true);
	});
	$(document).on("click" , "#blog_setting_card_radius_to_default" , function(){
		slider.noUiSlider.set($("meta[name='theme-card-radius']").attr("content"));
		setCardRadius($("meta[name='theme-card-radius']").attr("content"), false);
		localStorage.removeItem("argon_card_radius");
	});
	if (localStorage["argon_card_radius"] != undefined){
		setCardRadius(localStorage["argon_card_radius"], false);
	}
}();

/* 需要密码的文章加载 */
$(document).on("submit" , ".post-password-form" , function(){
	$("input[type='submit']", this).attr("disabled", "disabled");
	let url = $(this).attr("action");
	$.pjax.form(this, {
		push: false,
		replace: false
	});
	return false;
});
/* URL 中 # 根据 ID 定位 */
function gotoHash(hash , durtion){
	if (hash.length == 0){
		return;
	}
	if ($(hash).length == 0){
		return;
	}
	if (durtion == null){
		durtion = 200;
	}
	$("body,html").animate({
		scrollTop: $(hash).offset().top - 80
	}, durtion);
}
function getHash(url){
	return url.substring(url.indexOf('#'));
}
!function(){
	$(window).on("hashchange" , function(){
		hash = window.location.hash;
		gotoHash(hash);
	});
	$(window).trigger("hashchange");
}();

/* 显示文章过时信息 Toast */
function showPostOutdateToast(){
	if ($("#primary #post_outdate_toast").length > 0){
		iziToast.show({
			title: '',
			message: $("#primary #post_outdate_toast").data("text"),
			class: 'shadow-sm',
			position: 'topRight',
			backgroundColor: 'var(--themecolor)',
			titleColor: '#ffffff',
			messageColor: '#ffffff',
			iconColor: '#ffffff',
			progressBarColor: '#ffffff',
			icon: 'fa fa-info',
			close: false,
			timeout: 8000
		});
		$("#primary #post_outdate_toast").remove();
	}
}
showPostOutdateToast();

/* Zoomify */
function zoomifyInit(){
	if (argonConfig.zoomify == false){
		return;
	}
	$("article img").zoomify(argonConfig.zoomify);
}
zoomifyInit();

/* Lazyload */
function lazyloadInit(){
	if (argonConfig.lazyload == false){
		return;
	}
	if (argonConfig.lazyload.effect == "none"){
		delete argonConfig.lazyload.effect;
	}
	$("article img.lazyload:not(.lazyload-loaded) , .post-thumbnail.lazyload:not(.lazyload-loaded) , .related-post-thumbnail.lazyload:not(.lazyload-loaded)").lazyload(Object.assign(argonConfig.lazyload, {load: function(){$(this).addClass("lazyload-loaded")}}));
	$(".comment-item-text .comment-sticker.lazyload").lazyload(Object.assign(argonConfig.lazyload, {load: function(){$(this).removeClass("lazyload")}}));
}
lazyloadInit();

/* Pangu.js */
function panguInit(){
	if (argonConfig.pangu == true){
		pangu.spacingElementById('post_content');
	}
}
panguInit();

/* Clamp.js */
function clampInit(){
	$(".clamp").each(function(index, dom) {
		$clamp(dom, {clamp: dom.getAttribute("clamp-line")});
	});
}
clampInit();

/* Pjax */
$.pjax.defaults.timeout = 10000;
$.pjax.defaults.container = ['#primary', '#leftbar_part1_menu', '#leftbar_part2_inner', '.page-information-card-container', '#wpadminbar'];
$.pjax.defaults.fragment = ['#primary', '#leftbar_part1_menu', '#leftbar_part2_inner', '.page-information-card-container', '#wpadminbar'];
$(document).pjax("a[href]:not([no-pjax]):not(.no-pjax):not([target='_blank']):not([download])")
.on('pjax:click', function(e, f, g){
	if (argonConfig.disable_pjax == true){
		e.preventDefault();
		return;
	}
	NProgress.remove();
	NProgress.start();
}).on('pjax:afterGetContainers', function(e, f, g) {
	if (g.is("#main article.post-preview a.post-title")){
		let $card = $(g.parents("article.post-preview")[0]);
		$card.append("<div class='loading-css-animation'><div class='loading-dot loading-dot-1' ></div><div class='loading-dot loading-dot-2' ></div><div class='loading-dot loading-dot-3' ></div><div class='loading-dot loading-dot-4' ></div><div class='loading-dot loading-dot-5' ></div><div class='loading-dot loading-dot-6' ></div><div class='loading-dot loading-dot-7' ></div><div class='loading-dot loading-dot-8' ></div></div></div>");
		$card.addClass("post-pjax-loading");
		$("#main").addClass("post-list-pjax-loading");
		let offsetTop = $($card).offset().top - $("#main").offset().top;
		$card.css("transform" , "translateY(-" + offsetTop + "px)");
		$("body,html").animate({
			scrollTop: 0
		}, 450);
	}
}).on('pjax:send', function() {
	NProgress.set(0.618);
}).on('pjax:beforeReplace', function(e, dom) {
	if ($("#post_comment", dom[0]).length > 0){
		$("#fabtn_go_to_comment").removeClass("d-none");
	}else{
		$("#fabtn_go_to_comment").addClass("d-none");
	}
}).on('pjax:complete', function() {
	NProgress.inc();
	try{
		if (MathJax != undefined){
			MathJax.typeset();
		}
	}catch (err){}
	try{
		if ($("script#mathjax_v2_script" , $vdom).length > 0){
			MathJax.Hub.Typeset();
		}
	}catch (err){}
	try{
		if (renderMathInElement != undefined){
			renderMathInElement(document.body,{
				delimiters: [
					{left: "$$", right: "$$", display: true},
					{left: "$", right: "$", display: false},
					{left: "\\(", right: "\\)", display: false}
				]
			});
		}
	}catch (err){}

	lazyloadInit();
	zoomifyInit();
	highlightJsRender();
	panguInit();
	clampInit();
	getGithubInfoCardContent();
	showPostOutdateToast();
	calcHumanTimesOnPage();

	if (typeof(window.pjaxLoaded) == "function"){
		try{
			window.pjaxLoaded();
		}catch (err){
			console.error(err);
		}
	}

	NProgress.done();
}).on('pjax:end', function() {
	lazyloadInit();
});


/* Tags Dialog pjax 加载后自动关闭 */
$(document).on("click" , "#blog_tags .tag" , function(){
	$("#blog_tags button.close").trigger("click");
});
$(document).on("click" , "#blog_categories .tag" , function(){
	$("#blog_categories button.close").trigger("click");
});

/* 侧栏 & 顶栏菜单手机适配 */
!function(){
	$(document).on("click" , "#fabtn_open_sidebar" , function(){
		$("html").addClass("leftbar-opened");
	});
	$(document).on("click" , "#sidebar_mask" , function(){
		$("html").removeClass("leftbar-opened");
	});
	$(document).on("click" , "#leftbar a[href]:not([no-pjax]):not([href^='#'])" , function(){
		$("html").removeClass("leftbar-opened");
	});
	$(document).on("click" , "#navbar_global.show .navbar-nav a[href]:not([no-pjax]):not([href^='#'])" , function(){
		$("#navbar_global .navbar-toggler").click();
	});
	$(document).on("click" , "#navbar_global.show #navbar_search_btn_mobile" , function(){
		$("#navbar_global .navbar-toggler").click();
	});
}();

/* 折叠区块小工具 */
$(document).on("click" , ".collapse-block .collapse-block-title" , function(){
	let id = this.getAttribute("collapse-id");
	let selecter = ".collapse-block[collapse-id='" + id +"']";
	$(selecter).toggleClass("collapsed");
	if ($(selecter).hasClass("collapsed")){
		$(selecter + " .collapse-block-body").stop(true , false).slideUp(200);
	}else{
		$(selecter + " .collapse-block-body").stop(true , false).slideDown(200);
	}
	$("html").trigger("scroll");
});

/* 获得 Github Repo Shortcode 信息卡内容 */
function getGithubInfoCardContent(){
	$(".github-info-card").each(function(){
		(function($this){
			if ($this.attr("data-getdata") == "backend"){
				$(".github-info-card-description" , $this).html($this.attr("data-description"));
				$(".github-info-card-stars" , $this).html($this.attr("data-stars"));
				$(".github-info-card-forks" , $this).html($this.attr("data-forks"));
				return;
			}
			$(".github-info-card-description" , $this).html("Loading...");
			$(".github-info-card-stars" , $this).html("-");
			$(".github-info-card-forks" , $this).html("-");
			author = $this.attr("data-author");
			project = $this.attr("data-project");
			$.ajax({
				url : "https://api.github.com/repos/" + author + "/" + project,
				type : "GET",
				dataType : "json",
				success : function(result){
					description = result.description;
					if (result.homepage != ""){
						description += " <a href='" + result.homepage + "' target='_blank' no-pjax>" + result.homepage + "</a>"
					}
					$(".github-info-card-description" , $this).html(description);
					$(".github-info-card-stars" , $this).html(result.stargazers_count);
					$(".github-info-card-forks" , $this).html(result.forks_count);
					// console.log(result);
				},
				error : function(xhr){
					if (xhr.status == 404){
						$(".github-info-card-description" , $this).html(__("找不到该 Repo"));
					}else{
						$(".github-info-card-description" , $this).html(__("获取 Repo 信息失败"));
					}
				}
			});
		})($(this));
	});
}
getGithubInfoCardContent();

// 颜色计算
function rgb2hsl(R,G,B){
	let r = R / 255;
	let g = G / 255;
	let b = B / 255;

	let var_Min = Math.min(r, g, b);
	let var_Max = Math.max(r, g, b);
	let del_Max = var_Max - var_Min;

	let H, S, L = (var_Max + var_Min) / 2;

	if (del_Max == 0){
		H = 0;
		S = 0;
	}else{
		if (L < 0.5){
			S = del_Max / (var_Max + var_Min);
		}else{
			S = del_Max / (2 - var_Max - var_Min);
		}

		del_R = (((var_Max - r) / 6) + (del_Max / 2)) / del_Max;
		del_G = (((var_Max - g) / 6) + (del_Max / 2)) / del_Max;
		del_B = (((var_Max - b) / 6) + (del_Max / 2)) / del_Max;

		if (r == var_Max){
			H = del_B - del_G;
		}
		else if (g == var_Max){
			H = (1 / 3) + del_R - del_B;
		}
		else if (b == var_Max){
			H = (2 / 3) + del_G - del_R;
		}
		if (H < 0) H += 1;
		if (H > 1) H -= 1;
	}
	return {
		'h': H, // 0~1
		's': S,
		'l': L
	};
}
function Hue_2_RGB(v1,v2,vH){
	if (vH < 0) vH += 1;
	if (vH > 1) vH -= 1;
	if ((6 * vH) < 1) return (v1 + (v2 - v1) * 6 * vH);
	if ((2 * vH) < 1) return v2;
	if ((3 * vH) < 2) return (v1 + (v2 - v1) * ((2 / 3) - vH) * 6);
	return v1;
}
function hsl2rgb(h,s,l){
	let r, g, b, var_1, var_2;
	if (s == 0){
		r = l;
		g = l;
		b = l;
	}
	else{
		if (l < 0.5){
			var_2 = l * (1 + s);
		}
		else{
			var_2 = (l + s) - (s * l);
		}
		var_1 = 2 * l - var_2;
		r = Hue_2_RGB(var_1, var_2, h + (1 / 3));
		g = Hue_2_RGB(var_1, var_2, h);
		b = Hue_2_RGB(var_1, var_2, h - (1 / 3));
	}
	return {
		'R': Math.round(r * 255), // 0~255
		'G': Math.round(g * 255),
		'B': Math.round(b * 255),
		'r': r, // 0~1
		'g': g,
		'b': b
	};
}
function rgb2hex(r,g,b){
	let hex = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
	let rh, gh, bh;
	rh = "", gh ="", bh="";
	while (rh.length < 2){
		rh = hex[r%16] + rh;
		r = Math.floor(r / 16);
	}
	while (gh.length < 2){
		gh = hex[g%16] + gh;
		g = Math.floor(g / 16);
	}
	while (bh.length < 2){
		bh = hex[b%16] + bh;
		b = Math.floor(b / 16);
	}
	return "#" + rh + gh + bh;
}
function hex2rgb(hex){
	// hex: #XXXXXX
	let dec = {
		'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
	};
	return {
		'R': (dec[hex.substr(1,1)] * 16 + dec[hex.substr(2,1)]), // 0~255
		'G': (dec[hex.substr(3,1)] * 16 + dec[hex.substr(4,1)]),
		'B': (dec[hex.substr(5,1)] * 16 + dec[hex.substr(6,1)]),
		'r': (dec[hex.substr(1,1)] * 16 + dec[hex.substr(2,1)]) / 255, // 0~1
		'g': (dec[hex.substr(3,1)] * 16 + dec[hex.substr(4,1)]) / 255,
		'b': (dec[hex.substr(5,1)] * 16 + dec[hex.substr(6,1)]) / 255
	};
}
function rgb2gray(R,G,B){
	return Math.round(R * 0.299 + G * 0.587 + B * 0.114);
}
function hex2gray(hex){
	let rgb_array = hex2rgb(hex);
	return hex2gray(rgb_array['R'], rgb_array['G'], rgb_array['B']);
}
function rgb2str(rgb){
	return rgb['R'] + "," + rgb['G'] + "," + rgb['B'];
}
function hex2str(hex){
	return rgb2str(hex2rgb(hex));
}
// 颜色选择器 & 切换主题色
if ($("meta[name='argon-enable-custom-theme-color']").attr("content") == 'true'){
	let themeColorPicker = new Pickr({
		el: '#theme-color-picker',
		container: 'body',
		theme: 'monolith',
		closeOnScroll: false,
		appClass: 'theme-color-picker-box',
		useAsButton: false,
		padding: 8,
		inline: false,
		autoReposition: true,
		sliders: 'h',
		disabled: false,
		lockOpacity: true,
		outputPrecision: 0,
		comparison: false,
		default: localStorage["argon_custom_theme_color"] == undefined ? ($("meta[name='theme-color']").attr("content")) : localStorage["argon_custom_theme_color"],
		swatches: ['#5e72e4', '#fa7298', '#009688', '#607d8b', '#2196f3', '#3f51b5', '#ff9700', '#109d58', '#dc4437', '#673bb7', '#212121', '#795547'],
		defaultRepresentation: 'HEX',
		showAlways: false,
		closeWithKey: 'Escape',
		position: 'top-start',
		adjustableNumbers: false,
		components: {
			palette: true,
			preview: true,
			opacity: false,
			hue: true,
			interaction: {
				hex: true,
				rgba: true,
				hsla: false,
				hsva: false,
				cmyk: false,
				input: true,
				clear: false,
				cancel: true,
				save: true
			}
		},
		strings: {
			save: __('确定'),
			clear: __('清除'),
			cancel: __('恢复博客默认')
		}
	});
	themeColorPicker.on('change', instance => {
		updateThemeColor(pickrObjectToHEX(instance), true);
	})
	themeColorPicker.on('save', (color, instance) => {
		updateThemeColor(pickrObjectToHEX(instance._color), true);
		themeColorPicker.hide();
	})
	themeColorPicker.on('cancel', instance => {
		themeColorPicker.hide();
		themeColorPicker.setColor($("meta[name='theme-color-origin']").attr("content").toUpperCase());
		updateThemeColor($("meta[name='theme-color-origin']").attr("content").toUpperCase(), false);
		localStorage.removeItem("argon_custom_theme_color");
	});
}
function pickrObjectToHEX(color){
	let HEXA = color.toHEXA();
	return ("#" + HEXA[0] + HEXA[1] + HEXA[2]).toUpperCase();
}
function updateThemeColor(color, save){
	let themecolor = color;
	let themecolor_rgbstr = hex2str(themecolor);
	let RGB = hex2rgb(themecolor);
	let HSL = rgb2hsl(RGB['R'], RGB['G'], RGB['B']);

	let RGB_dark0 = hsl2rgb(HSL['h'], HSL['s'], Math.max(HSL['l'] - 0.025, 0));
	let themecolor_dark0 = rgb2hex(RGB_dark0['R'],RGB_dark0['G'],RGB_dark0['B']);

	let RGB_dark = hsl2rgb(HSL['h'], HSL['s'], Math.max(HSL['l'] - 0.05, 0));
	let themecolor_dark = rgb2hex(RGB_dark['R'], RGB_dark['G'], RGB_dark['B']);

	let RGB_dark2 = hsl2rgb(HSL['h'], HSL['s'], Math.max(HSL['l'] - 0.1, 0));
	let themecolor_dark2 = rgb2hex(RGB_dark2['R'],RGB_dark2['G'],RGB_dark2['B']);

	let RGB_dark3 = hsl2rgb(HSL['h'], HSL['s'], Math.max(HSL['l'] - 0.15, 0));
	let themecolor_dark3 = rgb2hex(RGB_dark3['R'],RGB_dark3['G'],RGB_dark3['B']);

	let RGB_light = hsl2rgb(HSL['h'], HSL['s'], Math.min(HSL['l'] + 0.1, 1));
	let themecolor_light = rgb2hex(RGB_light['R'],RGB_light['G'],RGB_light['B']);

	document.documentElement.style.setProperty('--themecolor', themecolor);
	document.documentElement.style.setProperty('--themecolor-dark0', themecolor_dark0);
	document.documentElement.style.setProperty('--themecolor-dark', themecolor_dark);
	document.documentElement.style.setProperty('--themecolor-dark2', themecolor_dark2);
	document.documentElement.style.setProperty('--themecolor-dark3', themecolor_dark3);
	document.documentElement.style.setProperty('--themecolor-light', themecolor_light);
	document.documentElement.style.setProperty('--themecolor-rgbstr', themecolor_rgbstr);

	if (rgb2gray(RGB['R'], RGB['G'], RGB['B']) < 50){
		$("html").addClass("themecolor-toodark");
	}else{
		$("html").removeClass("themecolor-toodark");
	}

	$("meta[name='theme-color']").attr("content", themecolor);
	$("meta[name='theme-color-rgb']").attr("content", themecolor_rgbstr);

	if (save){
		localStorage["argon_custom_theme_color"] = themecolor;
	}
}
if (localStorage["argon_custom_theme_color"] != undefined){
	updateThemeColor(localStorage["argon_custom_theme_color"], false);
}

/* 评论区图片链接点击处理 */
!function(){
	let invid = 0;
	let activeImg = null;
	$(document).on("click" , ".comment-item-text .comment-image" , function(){
		$(".comment-image-preview", this).attr("data-easing", "cubic-bezier(0.4, 0, 0, 1)");
		$(".comment-image-preview", this).attr("data-duration", "500");
		if (!$(this).hasClass("comment-image-preview-zoomed")){
			activeImg = this;
			$(this).addClass("comment-image-preview-zoomed");
			if (!$(this).hasClass("loaded")){
				$(".comment-image-preview", this).attr('src', $(this).attr("data-src"));
			}
			$(".comment-image-preview", this).zoomify('zoomIn');
			if (!$(this).hasClass("loaded")){
				invid = setInterval(function(){
					if (activeImg.width != 0){
						$("html").trigger("scroll");
						$(activeImg).addClass("loaded");
						clearInterval(invid);
						activeImg = null;
					}
				}, 50);
			}
		}else{
			clearInterval(invid);
			activeImg = null;
			$(this).removeClass("comment-image-preview-zoomed");
			$(".comment-image-preview", this).zoomify('zoomOut');
		}
	});
}();

/* 打字效果 */
function typeEffect(element, text, now, interval){
	element.classList.add('typing-effect');
	if (now > text.length){
		setTimeout(function(){
			element.classList.remove('typing-effect');
		}, 1000 - ((interval * now) % 1000) - 50);
		return;
	}
	element.innerText = text.substring(0, now);
	setTimeout(function(){typeEffect(element, text, now + 1, interval)}, interval);
}
!function(){
	$bannerTitle = $(".banner-title");
	if ($bannerTitle.data("text") != undefined){
		typeEffect($(".banner-title-inner")[0], $bannerTitle.data("text"), 0, $bannerTitle.data("interval"));
	}
}();

/* 一言 */
if ($(".hitokoto").length > 0){
	$.ajax({
		type: 'GET',
		url: "https://v1.hitokoto.cn",
		success: function(result){
			$(".hitokoto").text(result.hitokoto);
		},
		error: function(result){
			$(".hitokoto").text(__("Hitokoto 获取失败"));
		}
	});
}

/* Highlight.js */
// 从 <code> 的 class / data-lang 上解析语言，取不到时返回 plaintext
function getCodeLanguage($code){
	let raw = $code.attr("data-lang") || $code.attr("data-language");
	if (raw){
		return raw.toLowerCase();
	}
	let className = $code.attr("class") || "";
	// hexo-renderer-marked 输出 "highlight <lang>"，部分渲染器输出 "lang-<lang>"
	let matched = className.match(/(?:^|\s)(?:highlight|lang(?:uage)?)[\s-]+([^\s]+)/);
	if (matched){
		return matched[1].toLowerCase();
	}
	matched = className.match(/(?:^|\s)(?:lang(?:uage)?)-([^\s]+)/);
	if (matched){
		return matched[1].toLowerCase();
	}
	return "plaintext";
}
// 语言标签：交给 hljs 给出规范名（sh -> Bash、js -> JavaScript）。
// plaintext 与 hljs 不认识的语言都不显示：后者 hljs 走的是自动探测，
// 把原文照抄出来会让人误以为它真的识别了这个语言。
function getCodeLanguageLabel(lang){
	if (!lang){
		return "";
	}
	let lower = lang.toLowerCase();
	if (lower === "plaintext" || lower === "text" || lower === "nohighlight" || lower === "no-highlight"){
		return "";
	}
	if (typeof(hljs.getLanguage) == "function"){
		try{
			let langDef = hljs.getLanguage(lower);
			if (langDef && langDef.name){
				return langDef.name;
			}
		}catch (err){}
	}
	return "";
}
// 取代码块的纯文本。line-numbers 插件把行号放在独立的 td 里，所以只取 .hljs-ln-code 列
function getCodeFromBlock(block){
	if (!block){
		return "";
	}
	let code = $("code[hljs-codeblock-inner]", block);
	if (code.length == 0){
		return "";
	}
	let lines = code.find(".hljs-ln-code");
	if (lines.length == 0){
		return code.text();
	}
	let arr = [];
	lines.each(function(){
		let line = $(this).text();
		// 抵消 line-numbers 插件的空行占位符：它把空行填成单个空格
		// （行模板与 v() 里都是 `0<t[o].length?t[o]:" "`），直接拼接会让空行
		// 变成"带一个空格的行"，bash 里无害，Makefile / heredoc / diff 输出里会出错。
		// 只认恰好一个空格这个占位符：源码里本来就有的纯空白行（4 空格、8 空格等）
		// 是真实内容，trim() 后判空会把它们一起吃掉，反而破坏"逐字一致"。
		if (line == " "){
			line = "";
		}
		arr.push(line);
	});
	return arr.join("\n");
}
var highlightBlockSeq = 0;
function highlightJsRender(){
	if (typeof(hljs) == "undefined"){
		return;
	}
	if (typeof(argonEnableCodeHighlight) == "undefined"){
		return;
	}
	if (!argonEnableCodeHighlight){
		return;
	}
	$("article pre.code").each(function(){
		let pre = $(this);
		if (pre.hasClass("no-hljs") || pre.find("code").length > 0){
			return;
		}
		pre.html("<code>" + pre.html() + "</code>");
	});
	$("article pre > code").each(function(){
		let code = $(this);
		let pre = code.parent();
		// 幂等：pjax 重入、line-numbers 插件的自动扫描都可能让同一块被处理两次
		if (pre.hasClass("hljs-codeblock-pre")){
			return;
		}
		if (code.hasClass("no-hljs")){
			return;
		}
		try{
			if (typeof(hljs.highlightElement) == "function"){
				hljs.highlightElement(this);
			}else{
				hljs.highlightBlock(this);
			}
			if (typeof(hljs.lineNumbersBlock) == "function"){
				hljs.lineNumbersBlock(this, {singleLine: true});
			}
		}catch (err){
			console.error("Highlight.js 渲染失败: ", err);
			return;
		}
		pre.addClass("hljs-codeblock-pre");
		pre.attr("data-hljs-block", ++highlightBlockSeq);
		code.attr("hljs-codeblock-inner", "");

		let wrapper = $('<div class="hljs-codeblock"></div>');
		let header = $('<div class="hljs-header"></div>');
		let label = getCodeLanguageLabel(getCodeLanguage(code));
		if (label){
			header.append($('<span class="hljs-lang"></span>').text(label));
		}
		header.append(
			'<div class="hljs-control">' +
				'<button type="button" class="hljs-control-btn hljs-control-toggle-linenumber" aria-pressed="true" aria-label="' + __("隐藏行号") + '" tooltip-hide-linenumber="' + __("隐藏行号") + '" tooltip-show-linenumber="' + __("显示行号") + '"><i class="fa fa-list"></i></button>' +
				'<button type="button" class="hljs-control-btn hljs-control-toggle-break-line" aria-pressed="false" aria-label="' + __("折行") + '" tooltip-enable-breakline="' + __("开启折行") + '" tooltip-disable-breakline="' + __("关闭折行") + '"><i class="fa fa-align-left"></i></button>' +
				'<button type="button" class="hljs-control-btn hljs-control-copy" aria-label="' + __("复制") + '" tooltip="' + __("复制") + '"><i class="fa fa-clipboard"></i></button>' +
				'<button type="button" class="hljs-control-btn hljs-control-editor" aria-label="' + __("在编辑器中打开") + '" tooltip-editor="' + __("在编辑器中打开") + '"><i class="fa fa-pencil"></i></button>' +
			'</div>'
		);
		wrapper.append(header);
		pre.before(wrapper);
		wrapper.append(pre);
	});
}
// 复制结果提示，代码框复制按钮与编辑层复制按钮共用
function showCodeCopyToast(success){
	iziToast.show({
		title: success ? __("复制成功") : __("复制失败"),
		message: success ? __("代码已复制到剪贴板") : __("请手动复制代码"),
		class: 'shadow',
		position: 'topRight',
		backgroundColor: success ? '#2dce89' : '#f5365c',
		titleColor: '#ffffff',
		messageColor: '#ffffff',
		iconColor: '#ffffff',
		progressBarColor: '#ffffff',
		icon: success ? 'fa fa-check' : 'fa fa-close',
		timeout: 5000
	});
}
// 复制按钮只注册一次，事件靠 ClipboardJS 自身的委托，pjax 换页后依然有效
if (typeof(ClipboardJS) != "undefined"){
	new ClipboardJS(".hljs-control-copy", {
		text: function(trigger){
			return getCodeFromBlock(trigger.closest(".hljs-codeblock"));
		}
	}).on("success", function(){
		showCodeCopyToast(true);
	}).on("error", function(){
		showCodeCopyToast(false);
	});
	// 编辑层里的复制按钮是后插入的，ClipboardJS 是 document 级委托，照样生效
	new ClipboardJS(".hljs-editor-copy", {
		text: function(){
			return getCodeblockEditorCode();
		}
	}).on("success", function(){
		showCodeCopyToast(true);
	}).on("error", function(){
		showCodeCopyToast(false);
	});
}else{
	// 没有 ClipboardJS 时退回到 navigator.clipboard
	$(document).on("click" , ".hljs-editor-copy" , function(){
		if (typeof(navigator.clipboard) == "undefined"){
			showCodeCopyToast(false);
			return;
		}
		navigator.clipboard.writeText(getCodeblockEditorCode()).then(function(){
			showCodeCopyToast(true);
		} , function(){
			showCodeCopyToast(false);
		});
	});
}
function codeblockOf(el){
	return $(el).closest(".hljs-codeblock");
}

/* 代码框「在编辑器中打开」：挂全屏 Monaco 编辑层 */
// 配置读取：优先 argonConfig（header.ejs 注入），其次 <meta>，最后回落到主题默认
function isCodeblockEditorEnabled(){
	let value = argonConfig.enable_codeblock_editor;
	// 判空必须用严格比较：`false == ""` 在 JS 里是 true，
	// 用 `value == ""` 会把注入的布尔 false 误当成"没配置"，然后回落到默认启用
	if (value === undefined || value === null || value === ""){
		value = $("meta[name='argon-enable-codeblock-editor']").attr("content");
	}
	if (value === undefined || value === null || value === ""){
		return true;
	}
	if (value === false){
		return false;
	}
	return !(value == "false" || value == "0" || value == "off" || value == "no");
}
function getMonacoCdnUrl(){
	let url = argonConfig.monaco_cdn_url;
	if (url == undefined || url == null){
		url = $("meta[name='argon-monaco-cdn-url']").attr("content");
	}
	if (url == undefined || url == null){
		url = "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/";
	}
	url = String(url);
	// 末尾没有 / 的话后面拼 "loader.js" 会拼错。
	// 注意：这个值要保留尾斜杠（拼 loader.js 用），只在传给 AMD 的 paths.vs 时才剥离 ——
	// loader 的 _applyPaths 是纯字符串拼接，paths.vs 带尾斜杠会得到 .../min/vs//editor/... 的双斜杠。
	if (url != "" && url.slice(-1) != "/"){
		url += "/";
	}
	return url;
}
// 站点根路径：配置 -> 搜索框上的 data-config.root -> 加载本文件的 <script src> 反推
function getSiteRoot(){
	let root = "";
	if (typeof(window.config) == "object" && window.config != null && typeof(window.config.root) == "string"){
		root = window.config.root;
	}
	if (root == ""){
		root = $("meta[name='argon-config-root']").attr("content") || "";
	}
	if (root == ""){
		root = $("#local-search-input").data("config.root") || "";
	}
	if (root == ""){
		// footer.ejs 里是 js('/argontheme.js')，截掉文件名就是 config.root
		let self = $("script[src*='argontheme']").attr("src") || "";
		root = self.replace(/^(?:[a-z]+:)?\/\/[^\/]*/i, "").replace(/\/argontheme\.js(\?.*)?$/, "");
	}
	return String(root).replace(/\/+$/, "");
}
function getMonacoLocalBase(){
	return getSiteRoot() + "/assets/vendor/monaco/min/vs/";
}
// hljs 语言名 -> Monaco 语言 id / 文件扩展名（契约第 5 节）。
// key 必须全小写：getCodeLanguage() 返回 raw.toLowerCase()，```C# 围栏到这里是 "c#"。
// id 一律是 Monaco 0.52.2 真实注册过的语言；注册表里没有的显式给 null ——
// createModel(code, "不存在的id") 不抛异常，会静默降级 plaintext，那是事实错误。
// ext 与 id 分开：即使没有对应语言，扩展名仍要给对，「另存为」出来的文件名才是对的。
var codeLanguageMetaMap = {
	"bash": {id: "shell", ext: "sh"},
	"sh": {id: "shell", ext: "sh"},
	"shell": {id: "shell", ext: "sh"},
	"zsh": {id: "shell", ext: "sh"},
	"console": {id: "shell", ext: "sh"},
	"shellsession": {id: "shell", ext: "sh"},
	"cmd": {id: "bat", ext: "cmd"},
	"bat": {id: "bat", ext: "cmd"},
	"batch": {id: "bat", ext: "cmd"},
	"js": {id: "javascript", ext: "js"},
	"javascript": {id: "javascript", ext: "js"},
	"jsx": {id: "javascript", ext: "jsx"},
	"ts": {id: "typescript", ext: "ts"},
	"typescript": {id: "typescript", ext: "ts"},
	"tsx": {id: "typescript", ext: "tsx"},
	"html": {id: "html", ext: "html"},
	"htm": {id: "html", ext: "html"},
	"xhtml": {id: "html", ext: "html"},
	"xml": {id: "xml", ext: "xml"},
	"svg": {id: "xml", ext: "xml"},
	"css": {id: "css", ext: "css"},
	"scss": {id: "scss", ext: "scss"},
	"less": {id: "less", ext: "less"},
	"json": {id: "json", ext: "json"},
	"jsonc": {id: "json", ext: "json"},
	"yml": {id: "yaml", ext: "yml"},
	"yaml": {id: "yaml", ext: "yml"},
	"md": {id: "markdown", ext: "md"},
	"markdown": {id: "markdown", ext: "md"},
	"py": {id: "python", ext: "py"},
	"python": {id: "python", ext: "py"},
	"rb": {id: "ruby", ext: "rb"},
	"ruby": {id: "ruby", ext: "rb"},
	"php": {id: "php", ext: "php"},
	"go": {id: "go", ext: "go"},
	"golang": {id: "go", ext: "go"},
	"rs": {id: "rust", ext: "rs"},
	"rust": {id: "rust", ext: "rs"},
	"java": {id: "java", ext: "java"},
	"kotlin": {id: "kotlin", ext: "kt"},
	"kt": {id: "kotlin", ext: "kt"},
	"cs": {id: "csharp", ext: "cs"},
	"csharp": {id: "csharp", ext: "cs"},
	"c#": {id: "csharp", ext: "cs"},
	// c 与 cpp 必须是两个独立 id：Monaco 里 c 的 extensions 是 .c,.h，
	// 混在一起会让纯 C 文件另存成 snippet.cpp
	"c": {id: "c", ext: "c"},
	"h": {id: "c", ext: "c"},
	"cpp": {id: "cpp", ext: "cpp"},
	"c++": {id: "cpp", ext: "cpp"},
	"cxx": {id: "cpp", ext: "cpp"},
	"hpp": {id: "cpp", ext: "cpp"},
	"cc": {id: "cpp", ext: "cpp"},
	"sql": {id: "sql", ext: "sql"},
	"mysql": {id: "mysql", ext: "sql"},
	"pgsql": {id: "pgsql", ext: "sql"},
	"postgres": {id: "pgsql", ext: "sql"},
	"redis": {id: "redis", ext: "redis"},
	"graphql": {id: "graphql", ext: "graphql"},
	"gql": {id: "graphql", ext: "graphql"},
	"lua": {id: "lua", ext: "lua"},
	"r": {id: "r", ext: "r"},
	"perl": {id: "perl", ext: "pl"},
	"pl": {id: "perl", ext: "pl"},
	"clojure": {id: "clojure", ext: "clj"},
	"clj": {id: "clojure", ext: "clj"},
	"elixir": {id: "elixir", ext: "ex"},
	"ex": {id: "elixir", ext: "ex"},
	"julia": {id: "julia", ext: "jl"},
	"coffeescript": {id: "coffeescript", ext: "coffee"},
	"coffee": {id: "coffeescript", ext: "coffee"},
	"dockerfile": {id: "dockerfile", ext: "dockerfile"},
	"docker": {id: "dockerfile", ext: "dockerfile"},
	"ini": {id: "ini", ext: "ini"},
	"toml": {id: "ini", ext: "toml"},
	"hcl": {id: "hcl", ext: "tf"},
	"terraform": {id: "hcl", ext: "tf"},
	"tf": {id: "hcl", ext: "tf"},
	"proto": {id: "proto", ext: "proto"},
	"protobuf": {id: "proto", ext: "proto"},
	"sol": {id: "sol", ext: "sol"},
	"solidity": {id: "sol", ext: "sol"},
	"restructuredtext": {id: "restructuredtext", ext: "rst"},
	"rst": {id: "restructuredtext", ext: "rst"},
	"pascal": {id: "pascal", ext: "pas"},
	"delphi": {id: "pascal", ext: "pas"},
	"handlebars": {id: "handlebars", ext: "hbs"},
	"hbs": {id: "handlebars", ext: "hbs"},
	"twig": {id: "twig", ext: "twig"},
	// powershell 是 Monaco 真实注册的语言，契约表里漏了这两行，补上
	"powershell": {id: "powershell", ext: "ps1"},
	"ps": {id: "powershell", ext: "ps1"},
	// ↓ 主题自带 highlight.js 定制构建里有、但这里最初漏掉的语言（页面有高亮、编辑器纯文本）
	"objectivec": {id: "objective-c", ext: "m"},
	"objective-c": {id: "objective-c", ext: "m"},
	"objc": {id: "objective-c", ext: "m"},
	"swift": {id: "swift", ext: "swift"},
	"vbnet": {id: "vb", ext: "vb"},
	"vb.net": {id: "vb", ext: "vb"},
	"visual basic": {id: "vb", ext: "vb"},
	"visual basic .net": {id: "vb", ext: "vb"},
	// php-template 是「HTML 里嵌 PHP」；Monaco 的 php 词法本身就带 html 状态，映射到 php 比纯文本好
	"php-template": {id: "php", ext: "php"},
	"php template": {id: "php", ext: "php"},
	// hljs 的 Shell Session 用的是带连字符的 id，原来只登记了 shellsession
	"shell-session": {id: "shell", ext: "sh"},
	"mdx": {id: "mdx", ext: "mdx"},
	"pug": {id: "pug", ext: "pug"},
	"jade": {id: "pug", ext: "pug"},
	// Monaco 有、顺手补上的常见语言（此前不在表里，会退化成 .txt + 纯文本）
	"fs": {id: "fsharp", ext: "fs"},
	"fsharp": {id: "fsharp", ext: "fs"},
	"scala": {id: "scala", ext: "scala"},
	"dart": {id: "dart", ext: "dart"},
	"scheme": {id: "scheme", ext: "scm"},
	"tcl": {id: "tcl", ext: "tcl"},
	"verilog": {id: "systemverilog", ext: "v"},
	"systemverilog": {id: "systemverilog", ext: "sv"},
	"cypher": {id: "cypher", ext: "cql"},
	"bicep": {id: "bicep", ext: "bicep"},
	"azcli": {id: "azcli", ext: "azcli"},
	"sparql": {id: "sparql", ext: "rq"},
	"liquid": {id: "liquid", ext: "liquid"},
	"apex": {id: "apex", ext: "cls"},
	"wgsl": {id: "wgsl", ext: "wgsl"},
	"xsl": {id: "xml", ext: "xsl"},
	"xslt": {id: "xml", ext: "xsl"},
	"plist": {id: "xml", ext: "plist"},
	// ↓ diff / makefile：Monaco 0.52.2 没有内置，但主题的 highlight.js 构建里有。
	// 这两个在技术博客里非常常见，不补就是「页面有高亮、编辑器纯文本」，
	// 所以用下面 registerMonacoCustomLanguages() 里的精简 Monarch 规则在运行时补上。
	"diff": {id: "argon-diff", ext: "diff"},
	"patch": {id: "argon-diff", ext: "diff"},
	"makefile": {id: "argon-makefile", ext: "mk"},
	"make": {id: "argon-makefile", ext: "mk"},
	"mk": {id: "argon-makefile", ext: "mk"},
	// ↓ 以下语言 Monaco 0.52.2 与主题的 highlight.js 构建都没有，id 一律 null。
	// 显式登记成 null（而不是留给扩展名兜底）是刻意的：否则 matlab(.m) 会被兜成
	// Objective-C、nginx(conf) 会被兜成 ini，属于张冠李戴的假高亮。
	"haskell": {id: null, ext: "hs"},
	"hs": {id: null, ext: "hs"},
	"erlang": {id: null, ext: "erl"},
	"erl": {id: null, ext: "erl"},
	"latex": {id: null, ext: "tex"},
	"tex": {id: null, ext: "tex"},
	"stylus": {id: null, ext: "styl"},
	"styl": {id: null, ext: "styl"},
	"ejs": {id: null, ext: "ejs"},
	"matlab": {id: null, ext: "m"},
	"cmake": {id: null, ext: "cmake"},
	"nginx": {id: null, ext: "conf"},
	"apache": {id: null, ext: "conf"},
	"plaintext": {id: null, ext: "txt"},
	"text": {id: null, ext: "txt"},
	"txt": {id: null, ext: "txt"},
	"nohighlight": {id: null, ext: "txt"},
	"no-highlight": {id: null, ext: "txt"}
};
// 识别不出的语言：id 为 null（Monaco 按纯文本处理），扩展名回落到 txt。
// known=false 表示「表里根本没有这个语言」，此时允许用扩展名/别名去 Monaco 注册表里猜一次；
// known=true 表示表里登记过，null 就是 null，不许猜。
function getCodeLanguageMeta(lang){
	let key = (lang == undefined || lang == null) ? "" : String(lang).trim().toLowerCase();
	let meta = codeLanguageMetaMap[key];
	if (!meta){
		return {id: null, ext: "txt", known: false};
	}
	return {id: meta.id, ext: meta.ext, known: true};
}
/* diff / makefile 的精简 Monarch 词法。
   为什么手写：Monaco 0.52.2 的 81 个 basic languages 里没有这两个，而主题自带的
   highlight.js 构建里有，不补就会出现「页面有高亮、点开编辑器变纯文本」。
   配色说明：Monaco 的基础 token 类型里没有专门的 diff 增删色，
   这里借用 comment（亮色 #008000 / 暗色 #6A9955，都是绿色）表示新增行，
   invalid（#cd3131 / #F44747，红色）表示删除行，视觉上与 VS Code 的 diff 语义一致。
   这是 best-effort：与 VS Code 的 TextMate 规则不会逐字一致，只保证关键字/注释/增删行可辨。 */
var monacoCustomLanguagesReady = false;
function registerMonacoCustomLanguages(monaco){
	if (monacoCustomLanguagesReady){
		return;
	}
	monacoCustomLanguagesReady = true;
	try{
		monaco.languages.register({
			id: "argon-diff",
			aliases: ["Diff", "diff", "patch"],
			extensions: [".diff", ".patch"]
		});
		monaco.languages.setMonarchTokensProvider("argon-diff", {
			defaultToken: "",
			tokenPostfix: ".diff",
			tokenizer: {
				root: [
					[/^(?:diff|index|new file mode|deleted file mode|old mode|new mode|similarity index|rename from|rename to|Binary files)\b.*$/, "keyword"],
					[/^---\s.*$/, "type"],
					[/^\+\+\+\s.*$/, "type"],
					[/^@@.*@@.*$/, "metatag"],
					[/^\+.*$/, "comment"],
					[/^-.*$/, "invalid"],
					[/^!.*$/, "keyword"]
				]
			}
		});
		// diff 没有注释语法：这里刻意不注册 language configuration，
		// 传空字符串反而会造出一份语义可疑的配置
		monaco.languages.register({
			id: "argon-makefile",
			aliases: ["Makefile", "makefile", "make"],
			extensions: [".mk", ".mak"]
		});
		monaco.languages.setMonarchTokensProvider("argon-makefile", {
			defaultToken: "",
			tokenPostfix: ".makefile",
			tokenizer: {
				root: [
					// 命令行必须以 tab 开头，整行当字符串处理（放在最前面，内部再有 # 也不当注释）
					[/^\t.*$/, "string"],
					[/^\.[A-Z][A-Z0-9_]*/, "keyword"],
					[/#[^!].*$/, "comment"],
					// 目标行：目标名 + 冒号（排除 := 这种赋值）
					[/^[A-Za-z0-9_$(){}./%+-]+\s*:(?!=)/, "type"],
					[/^[A-Za-z_][A-Za-z0-9_]*\s*[:+?]?=/, "variable"],
					[/\$[({]?[A-Za-z0-9_][A-Za-z0-9_]*[)}]?/, "variable"]
				]
			}
		});
		monaco.languages.setLanguageConfiguration("argon-makefile", {
			comments: {lineComment: "#"}
		});
	}catch (err){
		// 注册失败不影响打开编辑器，最多是这两个语言没有高亮
		console.warn("[Monaco] 自定义语言注册失败: ", err);
	}
}
/* 兜底识别：显式表里没有这个语言时，用围栏名去 Monaco 注册表里按别名/扩展名猜一次。
   只认「围栏名本身就是扩展名」的情况（```dart → .dart、```fs → .fs），
   不会为了 .m 这种多义扩展名猜（那会认成错误语言）。 */
var monacoLanguageIndex = null;
function getMonacoLanguageIndex(monaco){
	if (monacoLanguageIndex != null){
		return monacoLanguageIndex;
	}
	monacoLanguageIndex = {alias: {}, ext: {}};
	let langs = monaco.languages.getLanguages();
	for (let i = 0; i < langs.length; i++){
		let lang = langs[i];
		let aliases = lang.aliases || [];
		for (let j = 0; j < aliases.length; j++){
			let key = String(aliases[j]).toLowerCase();
			if (monacoLanguageIndex.alias[key] == undefined){
				monacoLanguageIndex.alias[key] = lang.id;
			}
		}
		let exts = lang.extensions || [];
		for (let j = 0; j < exts.length; j++){
			let key = String(exts[j]).toLowerCase();
			if (monacoLanguageIndex.ext[key] == undefined){
				monacoLanguageIndex.ext[key] = lang.id;
			}
		}
	}
	return monacoLanguageIndex;
}
function resolveMonacoLanguageId(monaco, lang, meta){
	if (meta.id != null){
		return meta.id;
	}
	// 表里登记过却给 null：Monaco 确实没有这个语言，保持纯文本，不要瞎猜
	if (meta.known){
		return undefined;
	}
	let key = (lang == undefined || lang == null) ? "" : String(lang).trim().toLowerCase();
	if (key == ""){
		return undefined;
	}
	let index = getMonacoLanguageIndex(monaco);
	let hit = index.alias[key] || index.ext["." + key];
	return hit == undefined ? undefined : hit;
}
// 懒加载 Monaco：window.monaco 常驻，连点多次只加载一次
var monacoLoadState = "idle";
var monacoPendingCallbacks = [];
// P0-5 的兜底：整轮加载（所有候选 base 加起来）的硬上限。
// 必要性：Module.complete() 在工厂抛异常时只设 this.error 并走 config.onError，
// 不调本模块的 errback —— 存在「ok 不调、err 也不调」的情况，
// 没有这个定时器，.hljs-editor-status 会永远转下去。
var monacoLoadDeadline = null;
var monacoLoadTimeout = 20000;
// 一次加载结束后，把排队等着的调用一起回调（并发去重）
function monacoFlushPending(ok){
	let pending = monacoPendingCallbacks;
	monacoPendingCallbacks = [];
	for (let i = 0; i < pending.length; i++){
		if (ok){
			pending[i].onReady(window.monaco);
		}else{
			pending[i].onFail();
		}
	}
}
/* ★ 绝对红线：loader.js 绝不能早于 argon_js_merged.js 执行。
   merged 里有 jQuery / Bootstrap / Popper / pangu / ClipboardJS / noUiSlider / Headroom
   等 ≥9 个 UMD 包会探测 define.amd，loader.js 先跑会让 window.$ / window.jQuery
   根本不被赋值，整个主题立刻崩。这里懒加载（点按钮才注入）天然满足这条，别改成同步引入。 */
var monacoWorkerProxyUrl = null;
var monacoWorkerProxyBase = null;
/* 真实 language service worker：智能提示 / 校验 / 格式化 / 跨文件重命名都靠它。
   为什么不能直接把 worker 脚本 URL 交给 Monaco：
   worker 脚本受同源策略约束，走 CDN 时 base/worker/workerMain.js 在另一个域上，
   new Worker(cdnUrl) 会被浏览器直接拒绝。所以这里用 blob 造一个「同源代理」，
   代理内部 importScripts 真正的 workerMain.js。

   workerMain.js 的约定（已核对 0.52.2 的 min 产物）：
   - 自读 self.MonacoEnvironment.baseUrl，拿它拼 baseUrl + "vs/loader.js" 自举 AMD 加载器，
     所以 baseUrl 必须指向 vs/ 的上一级（.../min/），不是 paths.vs 那个值（.../min/vs/）。
   - 它是通用 worker：按主线程给的 moduleId/label 用 AMD 拉 json/css/html/tsWorker，
     因此 5 个 label 共用一个代理，不需要按 label 分发。
   - 末尾自带 globalThis.onmessage 握手，不需要我们再 require 一次。 */
function getMonacoWorkerProxyUrl(base){
	if (monacoWorkerProxyUrl != null && monacoWorkerProxyBase == base){
		return monacoWorkerProxyUrl;
	}
	/* 必须转成绝对 URL：blob worker 里 importScripts / fetch 都不接受站内相对路径，
	   传 "/assets/..." 会直接抛 "The URL ... is invalid"，
	   结果是 Monaco 退回主线程执行语言服务（UI 卡顿 + 控制台告警）。
	   CDN 场景本来就是绝对 URL，这里对两种 base 都安全。 */
	let absoluteBase = base;
	try{
		absoluteBase = new URL(base, window.location.href).href;
	}catch (err){}
	let trimmed = absoluteBase.replace(/\/+$/, "");
	// vs/ 的上一级；配置成 .../min/vs 这种不以 /vs 结尾的路径时按原样补斜杠
	let rootBase = (/\/vs$/.test(trimmed) ? trimmed.replace(/\/vs$/, "") : trimmed) + "/";
	let code = "self.MonacoEnvironment = { baseUrl: " + JSON.stringify(rootBase) + " };\n"
		+ "importScripts(" + JSON.stringify(absoluteBase + "base/worker/workerMain.js") + ");\n";
	if (monacoWorkerProxyUrl != null){
		// 换 base 时释放旧的：已经跑起来的 worker 不受影响，这里只防止 URL 泄漏
		try{
			URL.revokeObjectURL(monacoWorkerProxyUrl);
		}catch (err){}
	}
	monacoWorkerProxyUrl = URL.createObjectURL(new Blob([code], {type: "application/javascript"}));
	monacoWorkerProxyBase = base;
	return monacoWorkerProxyUrl;
}
function setupMonacoEnvironment(base){
	window.MonacoEnvironment = {
		getWorkerUrl: function(){
			if (typeof(Blob) == "undefined" || typeof(URL) == "undefined" || typeof(URL.createObjectURL) != "function"){
				return "";
			}
			return getMonacoWorkerProxyUrl(base);
		}
	};
}
// 清掉 loader.js 留在全局的三个符号。
// loader 的初始化条件是 `typeof define !== "function" || !define.amd`，只换 base 不清全局的话，
// 二次执行会整个跳过 init，拿到的还是被 _modules2 污染过的旧 loader。
// 不要改成「保存旧 window.require 再恢复」：editor.main.js 有三处硬依赖 globalThis.require 是 Monaco 的。
function resetMonacoAmd(){
	try{
		delete window.define;
	}catch (err){}
	try{
		delete window.require;
	}catch (err){}
	try{
		delete window.AMDLoader;
	}catch (err){}
}
// 探测式加载：先只注入 {base}loader.js 判可达性，第一个成功的 base 即胜者，AMD 只对它接线。
// loader.js 只有 30 KB，跨域经典脚本不需要 CORS。这样「CDN 被墙」这个最常见的失败场景
// 根本不进入 AMD 层，也就不会污染模块注册表（下面换 base 的恢复退化成第二道防线）。
function monacoTryBase(base, next){
	let script = document.createElement("script");
	script.type = "text/javascript";
	script.async = true;
	script.src = base + "loader.js";
	let settled = false;
	let done = function(ok){
		if (settled){
			return;
		}
		settled = true;
		// loader.js 404 时 AMD 层根本不存在，errback 永远不会触发，只能靠这个 onerror
		script.onload = null;
		script.onerror = null;
		if (!ok){
			next(false);
			return;
		}
		// loader 没把 AMD 装上（或被别的库占了同名 require）就当这一处失败
		if (typeof(window.require) != "function" || typeof(window.require.config) != "function"){
			next(false);
			return;
		}
		monacoRequireEditor(base, next);
	};
	script.onload = function(){
		done(true);
	};
	script.onerror = function(){
		done(false);
	};
	document.head.appendChild(script);
}
// 已确定胜者 base 之后才接 AMD
function monacoRequireEditor(base, next){
	// 必须用这一轮的胜者 base：worker 代理要 importScripts 同一个 base 下的 workerMain.js
	setupMonacoEnvironment(base);
	try{
		// paths.vs 必须去掉尾斜杠：loader 的 _applyPaths 是纯字符串拼接 base + moduleId.substr(2)，
		// 带尾斜杠会得到 .../min/vs//editor/editor.main.js 的双斜杠。
		// 注意 base 本身（用于拼 loader.js）要保留尾斜杠，两者用途不同。
		window.require.config({paths: {vs: base.replace(/\/+$/, "")}});
	}catch (err){
		next(false);
		return;
	}
	// 这里不设自己的超时：P0-5 的兜底在最外层 loadMonaco（monacoLoadDeadline），
	// 覆盖「所有候选 base 加起来」的整体时长，而不是每个 base 各等 20s。
	window.require(["vs/editor/editor.main"], function(){
		// 统一用 window.monaco：require 回调的参数与它是不同的对象
		if (typeof(window.monaco) == "undefined" || !window.monaco || typeof(window.monaco.editor) == "undefined"){
			next(false);
			return;
		}
		next(true);
	} , function(err){
		// err.message 恒为字面量 "[object Event]"（DOM Event 没有 .message），零诊断价值。
		// 只有 err.phase（"loading" / "factory"）和 err.moduleId 有用。
		console.warn("[Monaco] 加载失败: " + (err && err.phase ? err.phase : "unknown")
			+ " / " + (err && err.moduleId ? err.moduleId : "?"), err);
		next(false);
	});
}
function loadMonaco(onReady, onFail){
	if (typeof(onReady) != "function"){
		onReady = function(){};
	}
	if (typeof(onFail) != "function"){
		onFail = function(){};
	}
	// 已经加载过一次：直接回调，第二次打开是瞬开的
	if (typeof(window.monaco) != "undefined" && window.monaco && typeof(window.monaco.editor) != "undefined"){
		onReady(window.monaco);
		return;
	}
	monacoPendingCallbacks.push({onReady: onReady, onFail: onFail});
	// 正在加载：只挂回调，不重复发起请求
	if (monacoLoadState == "loading"){
		return;
	}
	monacoLoadState = "loading";
	// 整轮硬超时：到点就判定失败并收尾，绝不让加载动画悬着
	monacoLoadDeadline = setTimeout(function(){
		monacoLoadDeadline = null;
		monacoLoadState = "failed";
		console.warn("[Monaco] 加载超时（" + (monacoLoadTimeout / 1000) + "s）");
		monacoFlushPending(false);
	}, monacoLoadTimeout);
	let bases = [];
	let cdn = getMonacoCdnUrl();
	if (cdn != ""){
		bases.push(cdn);
	}
	bases.push(getMonacoLocalBase());
	let index = 0;
	// amdTouched：这一轮是否已经进过 AMD 层。只有进过才需要在换 base 前清全局 ——
	// 探测阶段就失败的话 AMD 从没初始化，清了反而多余。
	let amdTouched = false;
	let done = function(ok){
		if (monacoLoadDeadline != null){
			clearTimeout(monacoLoadDeadline);
			monacoLoadDeadline = null;
		}
		monacoLoadState = ok ? "ready" : "failed";
		monacoFlushPending(ok);
	};
	let tryNext = function(){
		// 已经被超时兜底收尾了，别再往下钻
		if (monacoLoadState != "loading"){
			return;
		}
		if (index >= bases.length){
			done(false);
			return;
		}
		let base = bases[index];
		index++;
		monacoTryBase(base, function(ok){
			if (monacoLoadState != "loading"){
				return;
			}
			if (ok){
				done(true);
				return;
			}
			if (amdTouched){
				// loader 的 _onLoadError 会把失败的模块永久登记进 _modules2 并标记 error，
				// 不清理直接换 base 会同步短路到 errback —— 本地兼底就成了死代码
				resetMonacoAmd();
			}
			amdTouched = true;
			tryNext();
		});
	};
	tryNext();
}
/* 编辑层状态 */
var codeblockEditor = null;
var codeblockEditorSeq = 0;
var monacoThemeWatched = false;
// 用内置的 vs / vs-dark，跟随 html.darkmode（amoled-dark 也是暗色，一并归到 vs-dark）
function getMonacoThemeName(){
	return $("html").hasClass("darkmode") ? "vs-dark" : "vs";
}
function watchMonacoTheme(){
	if (monacoThemeWatched){
		return;
	}
	if (typeof(MutationObserver) == "undefined"){
		return;
	}
	monacoThemeWatched = true;
	let observer = new MutationObserver(function(){
		if (codeblockEditor == null || codeblockEditor.editor == null){
			return;
		}
		if (typeof(window.monaco) == "undefined" || !window.monaco || typeof(window.monaco.editor.setTheme) != "function"){
			return;
		}
		try{
			window.monaco.editor.setTheme(getMonacoThemeName());
		}catch (err){}
	});
	observer.observe(document.documentElement, {attributes: true, attributeFilter: ["class"]});
}
// 编辑器没起来时退回打开时的原文，供复制 / 另存为使用
function getCodeblockEditorCode(){
	if (codeblockEditor == null){
		return "";
	}
	if (codeblockEditor.model != null && typeof(codeblockEditor.model.getValue) == "function"){
		return codeblockEditor.model.getValue();
	}
	return codeblockEditor.code;
}
// 字号跟代码块一致，跟不上就退回 style.css 里写死的 14px
function getCodeblockEditorFontSize($block){
	let code = $block.find("code[hljs-codeblock-inner]")[0];
	if (code != null && typeof(window.getComputedStyle) == "function"){
		let size = parseFloat(window.getComputedStyle(code).fontSize);
		if (size > 0){
			return size;
		}
	}
	return 14;
}
// 图标按钮：文案统一走 data-tooltip（配合 style.css 的 .hljs-editor-btn[data-tooltip]:before），
// 与代码框头栏的提示样式保持一致，另外补 aria-label 给读屏
function buildEditorIconButton(className, icon, label){
	let button = $('<button type="button" class="hljs-editor-btn hljs-editor-icon-btn"></button>');
	button.addClass(className);
	button.attr("aria-label", label);
	button.attr("data-tooltip", label);
	button.append($('<i></i>').addClass(icon));
	return button;
}
function buildCodeblockEditorOverlay(ext){
	let overlay = $('<div class="hljs-editor-overlay" role="dialog" aria-modal="true" aria-label="代码编辑器"></div>');
	let toolbar = $('<div class="hljs-editor-toolbar"></div>');
	toolbar.append($('<span class="hljs-editor-filename"></span>').text("snippet." + ext));
	let actions = $('<div class="hljs-editor-actions"></div>');
	actions.append(buildEditorIconButton("hljs-editor-find", "fa fa-search", __("查找")));
	actions.append(buildEditorIconButton("hljs-editor-replace", "fa fa-exchange", __("替换")));
	actions.append(buildEditorIconButton("hljs-editor-font-dec", "fa fa-minus", __("减小字号")));
	actions.append(buildEditorIconButton("hljs-editor-font-inc", "fa fa-plus", __("增大字号")));
	let wrap = buildEditorIconButton("hljs-editor-wrap", "fa fa-align-left", __("折行"));
	// 与 createCodeblockEditor 里的 wordWrap: "on" 对齐
	wrap.attr("aria-pressed", "true");
	actions.append(wrap);
	actions.append($('<button type="button" class="hljs-editor-btn hljs-editor-save"></button>').text(__("另存为")));
	actions.append($('<button type="button" class="hljs-editor-btn hljs-editor-copy"></button>').text(__("复制")));
	let close = $('<button type="button" class="hljs-editor-btn hljs-editor-close"></button>').attr("aria-label", __("关闭"));
	close.append($('<i class="fa fa-times"></i>'));
	actions.append(close);
	toolbar.append(actions);
	overlay.append(toolbar);
	// 加载中占位，Monaco 就位后移除
	overlay.append($('<div class="hljs-editor-status"></div>').text(__("加载编辑器中")));
	overlay.append($('<div class="hljs-editor-container"></div>'));
	// 状态栏：布局对齐 VSCode —— 左侧是光标位置与选中数，右侧是缩进 / 换行符 / 语言
	let statusbar = $('<div class="hljs-editor-statusbar"></div>');
	statusbar.append($('<span class="hljs-editor-info hljs-editor-pos"></span>'));
	statusbar.append($('<span class="hljs-editor-info hljs-editor-select"></span>'));
	statusbar.append($('<span class="hljs-editor-info hljs-editor-indent"></span>'));
	statusbar.append($('<span class="hljs-editor-info hljs-editor-eol"></span>').attr("title", __("换行符")));
	let langSelect = $('<select class="hljs-editor-lang"></select>');
	langSelect.attr("aria-label", __("选择语言"));
	// select 不是 .hljs-editor-btn，用原生 title 提示
	langSelect.attr("title", __("选择语言"));
	statusbar.append(langSelect);
	overlay.append(statusbar);
	return overlay;
}
// 语言切换器的选项：直接用 Monaco 自己注册的语言表（含我们运行时补的 diff / makefile），
// 所以「表里认不出语言」时用户能自己纠正，不用改围栏重发文章
function fillCodeblockEditorLanguages(monaco, currentId){
	let state = codeblockEditor;
	if (state == null){
		return;
	}
	let select = state.overlay.find(".hljs-editor-lang");
	if (select.length == 0){
		return;
	}
	let languages = monaco.languages.getLanguages().slice();
	let nameOf = function(lang){
		return (lang.aliases && lang.aliases.length > 0) ? String(lang.aliases[0]) : String(lang.id);
	};
	languages.sort(function(a, b){
		let an = nameOf(a).toLowerCase();
		let bn = nameOf(b).toLowerCase();
		if (an == bn){
			return 0;
		}
		return an < bn ? -1 : 1;
	});
	select.empty();
	let hasPlainText = false;
	for (let i = 0; i < languages.length; i++){
		let id = String(languages[i].id);
		if (id == "plaintext"){
			hasPlainText = true;
		}
		// 用 jQuery 建节点而不是拼 HTML：语言名来自 Monaco 注册表，不给自己留注入面
		select.append($('<option></option>').attr("value", id).text(nameOf(languages[i])));
	}
	if (!hasPlainText){
		select.prepend($('<option></option>').attr("value", "plaintext").text("Plain Text"));
	}
	select.val(currentId);
}
// 换语言后「另存为」的扩展名要跟着换，否则 snippet.php 会被存成 snippet.txt
function getMonacoLanguageExtension(monaco, id){
	let languages = monaco.languages.getLanguages();
	for (let i = 0; i < languages.length; i++){
		if (languages[i].id != id){
			continue;
		}
		let exts = languages[i].extensions || [];
		if (exts.length > 0){
			return String(exts[0]).replace(/^\./, "");
		}
		return null;
	}
	return null;
}
function updateCodeblockEditorStatusBar(){
	let state = codeblockEditor;
	if (state == null || state.editor == null || state.model == null){
		return;
	}
	let position = state.editor.getPosition();
	let posText = "";
	if (position != null){
		posText = __("行") + " " + position.lineNumber + ", " + __("列") + " " + position.column;
	}
	state.overlay.find(".hljs-editor-pos").text(posText);
	let selection = state.editor.getSelection();
	let selectText = "";
	if (selection != null && typeof(selection.isEmpty) == "function" && !selection.isEmpty()){
		let count = 0;
		try{
			count = state.model.getValueLengthInRange(selection);
		}catch (err){
			count = 0;
		}
		selectText = __("已选择") + " " + count + " " + __("个字符");
	}
	state.overlay.find(".hljs-editor-select").text(selectText);
	let options = state.model.getOptions();
	state.overlay.find(".hljs-editor-indent").text((options.insertSpaces === false ? __("制表符") : __("空格")) + ": " + options.tabSize);
	state.overlay.find(".hljs-editor-eol").text(state.model.getEOL() === "\r\n" ? "CRLF" : "LF");
	state.overlay.find(".hljs-editor-lang").val(state.model.getLanguageId());
}
function runCodeblockEditorAction(actionId){
	let state = codeblockEditor;
	if (state == null || state.editor == null){
		return;
	}
	let action = state.editor.getAction(actionId);
	if (action == null){
		return;
	}
	try{
		let result = action.run();
		if (result != null && typeof(result.catch) == "function"){
			result.catch(function(err){
				console.warn("[Monaco] action 执行失败: " + actionId, err);
			});
		}
	}catch (err){
		console.warn("[Monaco] action 执行失败: " + actionId, err);
	}
}
// 字号上下限：与 Monaco 自己的容错范围一致，避免用户点到 0 或 200 这种看不了的值
var codeblockEditorFontSizeMin = 8;
var codeblockEditorFontSizeMax = 32;
function changeCodeblockEditorFontSize(delta){
	let state = codeblockEditor;
	if (state == null || state.editor == null){
		return;
	}
	let next = state.fontSize + delta;
	if (next < codeblockEditorFontSizeMin || next > codeblockEditorFontSizeMax){
		return;
	}
	state.fontSize = next;
	state.editor.updateOptions({fontSize: next});
}
function toggleCodeblockEditorWordWrap(){
	let state = codeblockEditor;
	if (state == null || state.editor == null){
		return;
	}
	let button = state.overlay.find(".hljs-editor-wrap");
	let enable = button.attr("aria-pressed") != "true";
	button.attr("aria-pressed", enable ? "true" : "false");
	state.editor.updateOptions({wordWrap: enable ? "on" : "off"});
}
/* 编辑层里是否有 Monaco 自己的浮层开着（查找框 / 建议 / 悬停 / 参数提示 / 命令面板）。
   难点在于这些浮层的隐藏方式不统一，挨个核对过 editor.main.css：
   - .find-widget：隐藏时只是去掉 .visible 并把 transform 往视野外推，
     元素照样参加布局（实测 offsetWidth = 419），所以尺寸判断对它完全无效；
   - .monaco-hover：加 .hidden 类做 display:none；
   - .suggest-widget / .parameter-hints-widget / .rename-box：同样以 .visible 为准；
   - 命令面板（F1）：style.display = "none"。
   结论：这几个已知浮层一律只看 .visible / .hidden 类，不用尺寸猜；
   将来遇到不认识的浮层就退回尺寸判断。 */
function isMonacoWidgetOpen(el){
	if (el == null){
		return false;
	}
	if (el.classList.contains("hidden")){
		return false;
	}
	let style = window.getComputedStyle(el);
	if (style.display === "none" || style.visibility === "hidden"){
		return false;
	}
	if (el.classList.contains("find-widget") || el.classList.contains("suggest-widget")
		|| el.classList.contains("parameter-hints-widget") || el.classList.contains("rename-box")
		|| el.classList.contains("monaco-hover")){
		return el.classList.contains("visible");
	}
	return !!(el.offsetWidth || el.offsetHeight || (el.getClientRects && el.getClientRects().length > 0));
}
function codeblockEditorHasOpenWidget(){
	let state = codeblockEditor;
	if (state == null || state.overlay == null){
		return false;
	}
	let root = state.overlay[0];
	let selectors = [".find-widget", ".suggest-widget", ".monaco-hover", ".parameter-hints-widget", ".rename-box"];
	for (let i = 0; i < selectors.length; i++){
		if (isMonacoWidgetOpen(root.querySelector(selectors[i]))){
			return true;
		}
	}
	// 命令面板（F1）挂在 document 上，不在编辑层里
	if (isMonacoWidgetOpen(document.querySelector(".quick-input-widget"))){
		return true;
	}
	return false;
}
// 加载失败：清掉半开的遮罩并弹提示
function showCodeblockEditorFail(){
	closeCodeblockEditor();
	iziToast.show({
		title: __("加载失败"),
		message: __("编辑器加载失败"),
		class: 'shadow',
		position: 'topRight',
		backgroundColor: '#f5365c',
		titleColor: '#ffffff',
		messageColor: '#ffffff',
		iconColor: '#ffffff',
		progressBarColor: '#ffffff',
		icon: 'fa fa-close',
		timeout: 5000
	});
}
function openCodeblockEditor(block){
	if (!isCodeblockEditorEnabled()){
		return;
	}
	// 已经开着一个就不重复开
	if (codeblockEditor != null){
		return;
	}
	let $block = codeblockOf(block);
	if ($block.length == 0){
		return;
	}
	// 内容与复制按钮同源，保证不含行号
	let code = getCodeFromBlock($block);
	let inner = $block.find("code[hljs-codeblock-inner]")[0];
	let lang = inner == null ? "" : getCodeLanguage($(inner));
	let meta = getCodeLanguageMeta(lang);
	// 加载期间可能已经被 Esc 关掉，用 token 认回来
	let token = ++codeblockEditorSeq;
	// 焦点归还：沿用 data-hljs-restore-focus 那套写法
	let trigger = $block.find(".hljs-control-editor")[0];
	if (trigger){
		$(trigger).attr("data-hljs-restore-focus", "1");
	}
	let overlay = buildCodeblockEditorOverlay(meta.ext);
	$("body").addClass("hljs-editor-open").append(overlay);
	// 窄屏开着左边栏时 html.leftbar-opened 也锁滚动（锁的是 html 而不是 body），
	// 关闭时我们只摘 hljs-editor-open，不摘它页面就会一直滚不动
	$("html").removeClass("leftbar-opened");
	codeblockEditor = {
		token: token,
		block: $block,
		overlay: overlay,
		editor: null,
		model: null,
		code: code,
		lang: lang,
		ext: meta.ext,
		fontSize: getCodeblockEditorFontSize($block),
		listeners: []
	};
	loadMonaco(function(monaco){
		if (codeblockEditor == null || codeblockEditor.token != token){
			return;
		}
		let container = codeblockEditor.overlay.find(".hljs-editor-container")[0];
		if (container == null){
			showCodeblockEditorFail();
			return;
		}
		// 自定义语言必须在 createModel 之前注册：createModel 拿到未注册的 id 不抛异常，
		// 会静默按纯文本渲染，那样 diff / makefile 依然是「页面有高亮、编辑器没有」
		registerMonacoCustomLanguages(monaco);
		let languageId = resolveMonacoLanguageId(monaco, lang, meta);
		try{
			codeblockEditor.model = monaco.editor.createModel(code, languageId);
			codeblockEditor.editor = monaco.editor.create(container, {
				model: codeblockEditor.model,
				automaticLayout: true,
				minimap: {enabled: false},
				fontSize: codeblockEditor.fontSize,
				wordWrap: "on",
				scrollBeyondLastLine: false,
				theme: getMonacoThemeName()
			});
		}catch (err){
			console.error("Monaco 初始化失败: ", err);
			showCodeblockEditorFail();
			return;
		}
		bindCodeblockEditorUi(monaco);
		codeblockEditor.overlay.find(".hljs-editor-status").remove();
		watchMonacoTheme();
		updateCodeblockEditorStatusBar();
		if (typeof(codeblockEditor.editor.focus) == "function"){
			codeblockEditor.editor.focus();
		}
	} , function(){
		if (codeblockEditor == null || codeblockEditor.token != token){
			return;
		}
		showCodeblockEditorFail();
	});
}
/* 编辑层 UI 事件的绑定。
   直接绑在本次新建的节点上而不是 document 委托：节点随编辑层一起销毁，不存在重复绑定与泄漏。
   光标/选区监听器是 Monaco 的对象，必须显式 dispose，放在 closeCodeblockEditor 里统一收尾。 */
function bindCodeblockEditorUi(monaco){
	let state = codeblockEditor;
	if (state == null || state.editor == null){
		return;
	}
	fillCodeblockEditorLanguages(monaco, state.model.getLanguageId());
	state.listeners.push(state.editor.onDidChangeCursorPosition(function(){
		updateCodeblockEditorStatusBar();
	}));
	state.listeners.push(state.editor.onDidChangeCursorSelection(function(){
		updateCodeblockEditorStatusBar();
	}));
	state.overlay.find(".hljs-editor-lang").on("change", function(){
		let id = String($(this).val() == null ? "" : $(this).val());
		if (id == "" || state.model == null){
			return;
		}
		// setModelLanguage 会触发新语言的懒加载；本地副本已带 81 个词法文件，离线也能切换
		monaco.editor.setModelLanguage(state.model, id);
		let ext = getMonacoLanguageExtension(monaco, id);
		if (ext != null){
			state.ext = ext;
			state.overlay.find(".hljs-editor-filename").text("snippet." + ext);
		}
		updateCodeblockEditorStatusBar();
	});
	state.overlay.find(".hljs-editor-find").on("click", function(){
		runCodeblockEditorAction("actions.find");
	});
	state.overlay.find(".hljs-editor-replace").on("click", function(){
		runCodeblockEditorAction("editor.action.startFindReplaceAction");
	});
	state.overlay.find(".hljs-editor-font-dec").on("click", function(){
		changeCodeblockEditorFontSize(-1);
	});
	state.overlay.find(".hljs-editor-font-inc").on("click", function(){
		changeCodeblockEditorFontSize(1);
	});
	state.overlay.find(".hljs-editor-wrap").on("click", function(){
		toggleCodeblockEditorWordWrap();
	});
}
function closeCodeblockEditor(){
	let state = codeblockEditor;
	codeblockEditor = null;
	// 先销毁编辑器再销毁 model，否则 Monaco 会把 model 一起带走
	if (state != null){
		// 状态栏监听的是 Monaco 的对象，不 dispose 会随着每次开合累积
		if (state.listeners != null){
			for (let i = 0; i < state.listeners.length; i++){
				try{
					state.listeners[i].dispose();
				}catch (err){}
			}
			state.listeners = [];
		}
		// editor.dispose() 只解绑 model、不销毁它，monaco.d.ts 的推荐写法是先 setModel(null) 再 dispose
		if (state.editor != null && typeof(state.editor.setModel) == "function"){
			try{
				state.editor.setModel(null);
			}catch (err){}
		}
		if (state.editor != null && typeof(state.editor.dispose) == "function"){
			try{
				state.editor.dispose();
			}catch (err){}
		}
		if (state.model != null && typeof(state.model.dispose) == "function"){
			try{
				state.model.dispose();
			}catch (err){}
		}
	}
	$(".hljs-editor-overlay").remove();
	$("body").removeClass("hljs-editor-open");
	let restore = $("[data-hljs-restore-focus]")[0];
	if (restore){
		restore.focus();
		$(restore).removeAttr("data-hljs-restore-focus");
	}
}
function saveCodeblockEditorAs(){
	if (codeblockEditor == null){
		return;
	}
	if (typeof(URL) == "undefined" || typeof(URL.createObjectURL) != "function"){
		showCodeCopyToast(false);
		return;
	}
	let blob = new Blob([getCodeblockEditorCode()], {type: "text/plain;charset=utf-8"});
	let url = URL.createObjectURL(blob);
	let link = document.createElement("a");
	link.href = url;
	link.download = "snippet." + codeblockEditor.ext;
	// Firefox 需要链接在文档里才会触发下载
	$("body").append(link);
	link.click();
	$(link).remove();
	setTimeout(function(){
		URL.revokeObjectURL(url);
	} , 0);
}
$(document).ready(function(){
	highlightJsRender();
});
$(document).on("click" , ".hljs-control-editor" , function(){
	openCodeblockEditor(codeblockOf(this));
});
$(document).on("click" , ".hljs-editor-overlay" , function(e){
	// 容器与工具条内部的点击留给 Monaco 与自己的按钮，只有点在遮罩空白处才关闭
	if (e.target !== this){
		return;
	}
	closeCodeblockEditor();
});
$(document).on("click" , ".hljs-editor-save" , function(){
	saveCodeblockEditorAs();
});
$(document).on("click" , ".hljs-editor-close" , function(){
	closeCodeblockEditor();
});
/* Esc 分层关闭：VSCode 的语义是「先关最上层的东西，最后才关窗口」。
   必须用捕获阶段（第三个参数 true）：Monaco 自己也监听 Esc 来关查找框，
   冒泡阶段轮到我们时查找框已经被它关掉了，那时再判断就会把整个编辑层一起关掉。
   捕获阶段先看一眼「浮层还开着吗」，开着就什么都不做，把 Esc 让给 Monaco。 */
document.addEventListener("keydown", function(e){
	if (e.key !== "Escape" && e.keyCode !== 27){
		return;
	}
	if ($(".hljs-editor-overlay").length == 0){
		return;
	}
	if (codeblockEditorHasOpenWidget()){
		return;
	}
	// 语言下拉展开时 Esc 由浏览器/原生 select 自己处理
	let active = document.activeElement;
	if (active != null && active.classList != null && active.classList.contains("hljs-editor-lang")){
		return;
	}
	closeCodeblockEditor();
	e.preventDefault();
}, true);
// pjax 换页后触发按钮所在的代码块已经被替换，编辑层留着只会挡住页面
$(document).on('pjax:end', function(){
	if ($(".hljs-editor-overlay").length > 0){
		closeCodeblockEditor();
	}
});
$(document).on("click" , ".hljs-control-toggle-break-line" , function(){
	let block = codeblockOf(this);
	block.toggleClass("hljs-break-line");
	$(this).attr("aria-pressed", block.hasClass("hljs-break-line"));
});
$(document).on("click" , ".hljs-control-toggle-linenumber" , function(){
	let block = codeblockOf(this);
	block.toggleClass("hljs-hide-linenumber");
	$(this).attr("aria-pressed", !block.hasClass("hljs-hide-linenumber"));
});

/* 时间差计算 */
function addPreZero(num, n) {
	var len = num.toString().length;
	while(len < n) {
		num = "0" + num;
		len++;
	}
	return num;
}
function humanTimeDiff(time){
	let now = new Date();
	time = new Date(time);
	let delta = now - time;
	if (delta < 0){
		delta = 0;
	}
	if (delta < 1000 * 60){
		return __("刚刚");
	}
	if (delta < 1000 * 60 * 60){
		return parseInt(delta / (1000 * 60)) + " " + __("分钟前");
	}
	if (delta < 1000 * 60 * 60 * 24){
		return parseInt(delta / (1000 * 60 * 60)) + " " + __("小时前");
	}
	let yesterday = new Date(now - 1000 * 60 * 60 * 24);
	yesterday.setHours(0);
	yesterday.setMinutes(0);
	yesterday.setSeconds(0);
	yesterday.setMilliseconds(0);
	if (time > yesterday){
		return __("昨天") + " " + time.getHours() + ":" + addPreZero(time.getMinutes(), 2);
	}
	let theDayBeforeYesterday = new Date(now - 1000 * 60 * 60 * 24 * 2);
	theDayBeforeYesterday.setHours(0);
	theDayBeforeYesterday.setMinutes(0);
	theDayBeforeYesterday.setSeconds(0);
	theDayBeforeYesterday.setMilliseconds(0);
	if (time > theDayBeforeYesterday && argonConfig.language.indexOf("zh") == 0){
		return __("前天") + " " + time.getHours() + ":" + addPreZero(time.getMinutes(), 2);
	}
	if (delta < 1000 * 60 * 60 * 24 * 30){
		return parseInt(delta / (1000 * 60 * 60 * 24)) + " " + __("天前");
	}
	let theFirstDayOfThisYear = new Date(now);
	theFirstDayOfThisYear.setMonth(0);
	theFirstDayOfThisYear.setDate(1);
	theFirstDayOfThisYear.setHours(0);
	theFirstDayOfThisYear.setMinutes(0);
	theFirstDayOfThisYear.setSeconds(0);
	theFirstDayOfThisYear.setMilliseconds(0);
	if (time > theFirstDayOfThisYear){
		if (argonConfig.dateFormat == "YMD" || argonConfig.dateFormat == "MDY"){
			return (time.getMonth() + 1) + "-" + time.getDate();
		}else{
			return time.getDate() + "-" + (time.getMonth() + 1);
		}
	}
	if (argonConfig.dateFormat == "YMD"){
		return time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
	}else if (argonConfig.dateFormat == "MDY"){
		return time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
	}else if (argonConfig.dateFormat == "DMY"){
		return time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
	}
}
function calcHumanTimesOnPage(){
	$(".human-time").each(function(){
		$(this).text(humanTimeDiff(parseInt($(this).data("time")) * 1000));
	});
}
calcHumanTimesOnPage();
setInterval(function(){
	calcHumanTimesOnPage()
}, 15000);

/* 搜索 */
// https://github.com/PaicHyperionDev/hexo-generator-search
var searchFunc = function(path, search_id, content_id) {
	'use strict';
	$.ajax({
		url: path,
		dataType: "xml",
		success: function( xmlResponse ) {
			var datas = $( "entry", xmlResponse ).map(function() {
				return {
					title: $( "title", this ).text(),
					content: $("content",this).text(),
					url: $( "url" , this).text()
				};
			}).get();
			var $input = document.getElementById(search_id);
			if (!$input) return;
			var $resultContent = document.getElementById(content_id);
			if ($("#local-search-input").length > 0) {
				$input.addEventListener('input', function () {
					var str = '<ul class=\"search-result-list\">';
					var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
					$resultContent.innerHTML = "";
					if (this.value.trim().length <= 0) {
						return;
					}
					datas.forEach(function (data) {
						var isMatch = true;
						var content_index = [];
						if (!data.title || data.title.trim() === '') {
							data.title = "Untitled";
						}
						var data_title = data.title.trim().toLowerCase();
						var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
						var data_url = data.url;
						var index_title = -1;
						var index_content = -1;
						var first_occur = -1;
						if (data_content !== '') {
							keywords.forEach(function (keyword, i) {
								index_title = data_title.indexOf(keyword);
								index_content = data_content.indexOf(keyword);

								if (index_title < 0 && index_content < 0) {
									isMatch = false;
								} else {
									if (index_content < 0) {
										index_content = 0;
									}
									if (i == 0) {
										first_occur = index_content;
									}
								}
							});
						} else {
							isMatch = false;
						}
						if (isMatch) {
							str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
							var content = data.content.trim().replace(/<[^>]+>/g, "");
							if (first_occur >= 0) {
								var start = first_occur - 20;
								var end = first_occur + 80;
								if (start < 0) {
									start = 0;
								}
								if (start == 0) {
									end = 100;
								}
								if (end > content.length) {
									end = content.length;
								}
								var match_content = content.substring(start, end);
								keywords.forEach(function (keyword) {
									var regS = new RegExp(keyword, "gi");
									match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
								});
								str += "<p class=\"search-result\">" + match_content + "...</p>"
							}
							str += "</li>";
						}
					});
					str += "</ul>";
					$resultContent.innerHTML = str;
				});
			}
		}
	});
}
var search_path = $("#local-search-input").data("search.path");
if (search_path.length == 0) {
	search_path = "search.xml";
}
searchFunc($("#local-search-input").data("config.root") + search_path, 'local-search-input', 'local-search-result');

$(document).on("click" , ".search-result-title" , function(){
	$("#argon_search_modal button[data-dismiss='modal']").click();
});


/* Console */
!function(){
	console.log('%cTheme: %cArgon%c-Hexo%c By solstice23', 'color: rgba(255,255,255,.6); background: #5e72e4; font-size: 15px;border-radius:5px 0 0 5px;padding:10px 0 10px 20px;','color: rgba(255,255,255,1); background: #5e72e4; font-size: 15px;border-radius:0;padding:10px 0 10px 0px;', 'color: rgba(255,255,255,.6); background: #5e72e4; font-size: 15px;padding:10px 15px 10px 0px;','color: #fff; background: #92A1F4; font-size: 15px;border-radius:0 5px 5px 0;padding:10px 20px 10px 15px;');
	console.log('%cVersion%c' + $("meta[name='theme-version']").attr("content"), 'color:#fff; background: #5e72e4;font-size: 12px;border-radius:5px 0 0 5px;padding:3px 10px 3px 10px;','color:#fff; background: #92a1f4;font-size: 12px;border-radius:0 5px 5px 0;padding:3px 10px 3px 10px;');
	console.log('%chttps://github.com/solstice23/hexo-theme-argon', 'font-size: 12px;border-radius:5px;padding:3px 10px 3px 10px;border:1px solid #5e72e4;');
}();
