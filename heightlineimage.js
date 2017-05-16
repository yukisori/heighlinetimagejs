
$(function(){
	$.fn.heightLineImages = function(options){

		var options = options || 0;
		var m_width = options.count || 3; //最大表示させたい横の数

		var box_e   = this; //参照するbox
		var elem    = $(box_e).children('img');
		var h_arr = [];
		var w_arr = [];
		var line  = 0;//行番号
		//横配列
		var wsum  = function(arr,num) {
			var num = num || 0;
		    var wsum = 0;
		    for (var i=num,len=arr.length; i<len; ++i) {
		    	if(  i%m_width != 0 ){
		    		wsum += arr[i];
		    	}
		    };
		    return wsum;
		};
		//縦配列計算
		var hsum  = function(arr,line,num) {
			var num = num || 0;
			var line = line || 0;
		    var hsum = 0;
			if(line != 0){
				for (var i = 1; i <= line; i++) {

					h = arr.length - (num*i);
					hsum += arr[h-1];
				}
			}
		    return hsum;
		};
		$(box_e).css({'position':'relative'});
		elem.css({'position':'absolute'});
		for (var i = 0; i < elem.length; i++) {
			var img_i  =  elem.eq(i);
			h_arr.push(img_i.height());
			w_arr.push(img_i.width());
			if (i%m_width == 0 && i >= m_width){line += 1;}
			if(i < m_width){
				var mapsize_w = ( i == 0 ) ? 0 : wsum(w_arr);
				var mapsize_h = 0;
				img_i.css({'left':mapsize_w});
				img_i.css({'top':mapsize_h});
			}else{
				var mapsize_w = ( i%m_width == 0 ) ? 0 : wsum(w_arr,line*m_width);
				var mapsize_h = hsum(h_arr,line,m_width);
				img_i.css({'left':mapsize_w});
				img_i.css({'top':mapsize_h});
			}
		}
	};
});

