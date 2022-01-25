/*===========================================================*/
/* スライダー
/*===========================================================*/

$('.slider').slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
});

/*===========================================================*/
/* ハンバーガーメニュー
/*===========================================================*/

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
/*===========================================================*/
/* PCヘッダー
/*===========================================================*/

var headerH = $("#pc-nav").outerHeight(true);//headerの高さを取得    

//スクロール途中からヘッダーの高さを変化させるための設定を関数でまとめる
function FixedAnime() {
    //ヘッダーの高さを取得
    var scroll = $(window).scrollTop();
    if (scroll >= headerH){//ヘッダーの高さを超えたら
        $('#pc-nav').addClass('HeightMin');//#headerについているHeightMinというクラス名を付与
    }else{
        $('#pc-nav').removeClass('HeightMin');//HeightMinというクラス名を除去
    }    
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
});


//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
$('#pc-nav li a').click(function () {
    var headerVal = $("#pc-nav").outerHeight(true);	//現在のheaderの高さを取得    

    //ヘッダーが高さの状態を取得してスクロールする範囲を調整する
    var scroll = $(window).scrollTop();	//スクロール
    var adjust = 0						//調整の変数
    if(scroll <= headerVal ){			//スクロールとヘッダーの高さを取得
    	adjust = 70;					//スクロール値がヘッダーの高さ以内であれば調整変数に70を入れる
    }
    
    var elmHash = $(this).attr('href'); //hrefを取得
    var pos = $(elmHash).offset().top-headerVal-adjust;	//クリックしたheader分の高さと調整分を引いた高さまでスクロール
    
    $('body,html').animate({scrollTop: pos}, 700);
    return false;
});

$('#page-link a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-10;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});
