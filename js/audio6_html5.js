/*
 * Hero - Shoutcast and Icecast Radio Player With History - v4.4.1
 * Copyright 2017-2022, LambertGroup
 *
 */

 var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(k){return k.raw=k};$jscomp.createTemplateTagFirstArgWithRaw=function(k,K){k.raw=K;return k};
 (function(k){function K(a,b,e,f){k(a.thumbsHolder_Thumbs[a.current_img_no]).css({background:b.playlistRecordBgOnColor,"border-bottom-color":b.playlistRecordBottomBorderOnColor,color:b.playlistRecordTextOnColor});a.is_very_first||Q(-1,a,b,e);if(""!=b.radio_stream)var v=b.radio_stream;return v}function W(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);b.send();return 404!=b.status}function X(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A,B,t){""!=e.optional_images_path?b.playlist_images_arr[t]=a:""!=a&&void 0!=a&&
 (b.playlist_images_arr[t]=a);0!==(t+1)%3&&t!=b.playlist_arr.length-1||setTimeout(function(){O(b,e,f,v,l,y,q,g,w,n,u,p,x,r,A,B)},1E3)}function ca(a){var b;a=a.split("");a.forEach(function(e,f){b="\u00c0\u00c1\u00c2\u00c3\u00c4\u00c5\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u00df\u00d2\u00d3\u00d4\u00d5\u00d5\u00d6\u00d8\u00f2\u00f3\u00f4\u00f5\u00f6\u00f8\u00c8\u00c9\u00ca\u00cb\u00e8\u00e9\u00ea\u00eb\u00f0\u00c7\u00e7\u00d0\u00cc\u00cd\u00ce\u00cf\u00ec\u00ed\u00ee\u00ef\u00d9\u00da\u00db\u00dc\u00f9\u00fa\u00fb\u00fc\u00d1\u00f1\u0160\u0161\u0178\u00ff\u00fd\u017d\u017e\u2019".indexOf(e);
 -1!=b&&(a[f]="AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz'"[b])});return a.join("").trim()}function M(a,b){var e=new XMLHttpRequest;e.open(a.method,"https://zet.pluginsandthemes.ro/"+a.url);e.onload=e.onerror=function(){b(a.method+" "+a.url+"\n"+e.status+" "+e.statusText+"\n\n"+(e.responseText||""))};/^POST/i.test(a.method)&&(e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.setRequestHeader("X-Requested-With","XMLHttpRequest"));e.send(a.data)}function S(a,
 b,e,f,v,l,y,q,g,w,n,u,p,x,r,A){""!=a.curTitle&&a.isHistoryGenerated&&a.prevTitle!=a.curTitle&&(""!=a.prevTitle&&(a.gen_total_images>=b.historyMaxNumberOfSongs&&(a.gen_total_images--,a.playlist_arr.pop(),a.playlist_images_arr.pop()),b.grabLastFmPhoto||b.azuracast_get_image||b.mscp_pro_api_url||(a.prev_song_image=b.noImageAvailable),a.gen_total_images++,a.playlist_arr.unshift(a.prevTitle),a.playlist_images_arr.unshift(a.prev_song_image),O(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A)),a.prevTitle=a.curTitle)}function P(a,
 b,e,f,v,l,y,q,g,w,n,u,p,x,r,A){if(b.showOnlyPlayButton||a.isRadiojar||""!=b.azuracast_api_nowplaying_url)a.isRadiojar&&(M({method:"GET",url:"http://www.radiojar.com/api/stations/"+a.mount_point+"/now_playing/?my_rand="+Math.random()},function(c){var E=c.indexOf("{");if(-1!==E){var F=c.length;c=c.substr(E,F);c=JSON.parse(c);a.curTitle=c.artist+" - "+c.title;a.curTitle=a.curTitle.replace(/(\r?\n|\r)/gm," ").trim();J(a,b,e,l,y,q,g,w,n,u,p)}}),S(a,b,l,e,f,v,x,y,q,g,w,n,u,p,r,A)),""!=b.azuracast_api_nowplaying_url&&
 (M({method:"GET",url:b.azuracast_api_nowplaying_url+"?my_rand="+Math.random()},function(c){var E=c.indexOf("{");if(-1!==E){var F=c.length;c=c.substr(E,F);c=JSON.parse(c);a.curTitle=c.now_playing.song.text;a.curTitle=a.curTitle.replace(/(\r?\n|\r)/gm," ").trim();b.azuracast_get_image&&(a.azuracast_cur_song_image=b.noImageAvailable,""!=c.now_playing.song.art&&(a.azuracast_cur_song_image=c.now_playing.song.art),a.prev_song_image=a.azuracast_cur_song_image);J(a,b,e,l,y,q,g,w,n,u,p)}}),S(a,b,l,e,f,v,x,
 y,q,g,w,n,u,p,r,A));else{if(""!=b.metadata_file_type||""!=b.azuracast_api_nowplaying_url)if(a.now_playing_found=!0,a.now_playing_current_k=b.metadata_file_type-1,""==a.ip||void 0==a.ip)a.ip=1;!1===a.now_playing_found&&a.now_playing_current_k<a.now_playing_arr_lenght&&a.now_playing_current_k++;var B=a.http_or_https+"://"+a.ip+":"+a.port+"/"+a.now_playing_arr[a.now_playing_current_k]+("7.html"!=a.now_playing_arr[a.now_playing_current_k]?"?my_rand="+Math.random():"");0===a.now_playing_current_k&&(B=
 a.http_or_https+"://"+a.ip+":"+a.port+"/"+a.now_playing_arr[a.now_playing_current_k]+("7.html"!=a.now_playing_arr[a.now_playing_current_k]?"&my_rand="+Math.random():""));""!=b.url_custom_metdata_file&&(B=b.url_custom_metdata_file);var t="",m,h,z,D,d;""!=a.ip&&a.now_playing_current_k<a.now_playing_arr_lenght?(M({method:"GET",url:B},function(c){switch(a.now_playing_current_k){case 0:-1!=c.indexOf("<SONGTITLE>")?(a.now_playing_found=!0,m=c.indexOf("<SONGTITLE>")+11,z=c.indexOf("</SONGTITLE>")-m,t=c.substr(m,
 z),a.curTitle=t,a.curTitle=a.curTitle.replace(/(\r?\n|\r)/gm," ").trim(),D=c.indexOf("<CURRENTLISTENERS>")+18,d=c.indexOf("</CURRENTLISTENERS>")-D,a.currentListeners=c.substr(D,d),J(a,b,e,l,y,q,g,w,n,u,p)):P(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A);break;case 1:m=c.indexOf("<body>")+6;z=c.length;c=c.substr(m,z);c=c.replace("</body></html>","");c=c.split(",");""!=c[6]&&void 0!=c[6]&&"oracle:0"!=c[6]?(a.now_playing_found=!0,t=c[6],a.curTitle=t,a.curTitle=a.curTitle.replace(/(\r?\n|\r)/gm," ").trim(),J(a,b,
 e,l,y,q,g,w,n,u,p)):P(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A);break;case 2:m=c.indexOf('{"icestats":');if(-1!==m){z=c.length;c=c.substr(m,z);c=JSON.parse(c);var E=!1,F=0;if(c.icestats.source instanceof Array){for(;F<Object.keys(c.icestats.source).length&&!E;){var H=c.icestats.source[F].listenurl;0<H.indexOf(a.mount_point)&&(E=!0,F--);F++}E&&(""!=c.icestats.source[F].listeners&&void 0!=c.icestats.source[F].listeners&&(a.currentListeners=c.icestats.source[F].listeners),""!=c.icestats.source[F].title&&void 0!=
 c.icestats.source[F].title&&(a.now_playing_found=!0,t=c.icestats.source[F].title,a.curTitle=t,a.curTitle=a.curTitle.replace(/(\r?\n|\r)/gm," ").trim(),J(a,b,e,l,y,q,g,w,n,u,p)))}else""!=c.icestats.source.listeners&&void 0!=c.icestats.source.listeners&&a.currentListenersobj_json.icestats.source.listeners,""!=c.icestats.source.title&&void 0!=c.icestats.source.title&&(a.now_playing_found=!0,t=c.icestats.source.title,a.curTitle=t,a.curTitle=a.curTitle.replace(/(\r?\n|\r)/gm," ").trim(),J(a,b,e,l,y,q,
 g,w,n,u,p))}""==t&&(a.now_playing_found=!1,P(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A));break;case 3:""!=a.mount_point&&(m=c.indexOf(a.mount_point));0<m&&(z=c.length,c=c.substr(m,z));h=c.indexOf("Currently playing:");-1==h&&(h=c.indexOf("Current Song:"));0<h&&(a.now_playing_found=!0,m=c.indexOf('<td class="streamstats">',h),m=0<m?m+24:c.indexOf('<td class="streamdata">',h)+23,z=c.indexOf("</td>",m),z-=m,t=c.substr(m,z),a.curTitle=t,a.curTitle=a.curTitle.replace(/(\r?\n|\r)/gm," ").trim(),h=c.indexOf("Listeners"),
 0<h&&(m=c.indexOf('<td class="streamstats">',h),m=0<m?m+24:c.indexOf('<td class="streamdata">',h)+23,z=c.indexOf("</td>",m),z-=m,a.currentListeners=c.substr(m,z)),J(a,b,e,l,y,q,g,w,n,u,p));""==t&&(a.now_playing_found=!1,P(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A));break;default:console.log("no ip"),a.now_playing_found=!0,t="Not available...",a.curTitle=t,a.curTitle=a.curTitle.replace(/(\r?\n|\r)/gm," ").trim(),J(a,b,e,l,y,q,g,w,n,u,p)}}),S(a,b,l,e,f,v,x,y,q,g,w,n,u,p,r,A)):(t="Data not available...",a.curTitle=
 t,a.curTitle=a.curTitle.replace(/(\r?\n|\r)/gm," ").trim(),J(a,b,e,l,y,q,g,w,n,u,p))}}function T(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A,B){b.grabLastFmPhoto&&(clearTimeout(a.musicbrainzHistory_setTimeout_arr[B]),a.musicbrainzHistory_setTimeout_arr[B]=setTimeout(function(){var t=a.playlist_arr[B].split("-");t[0]=t[0].trim();a.the_artist_id_history_arr[B]="";a.the_wikidata_id_history_arr[B]="";var m=b.noImageAvailable;a.wiki_photo_path=m;t[0]=t[0].trim();if(""!=b.optional_images_path){var h=b.optional_images_path+
 a.playlist_arr[B]+".jpg";h=encodeURI(h);h=h.replace("(","%28");h=h.replace(")","%29");h=h.replace("&apos;","%27");h=h.replace("&amp;","%26");W(h)||(h=b.noImageAvailable);m=h}m!=b.noImageAvailable?X(h,a,b,f,e,p,u,x,v,l,y,q,g,w,n,r,A,B):(h=t[0],h=h.toLowerCase(),h=ca(h),k.get("https://theaudiodb.com/api/v1/json/"+a.zerx+"/search.php?s="+t[0],{},function(z){var D=b.noImageAvailable;z.artists instanceof Array&&""!=z.artists[0].strArtistThumb&&void 0!=z.artists[0].strArtistThumb&&null!=z.artists[0].strArtistThumb&&
 (D=z.artists[0].strArtistThumb);X(D,a,b,f,e,p,u,x,v,l,y,q,g,w,n,r,A,B)}))},3E3*(B+1)))}function da(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A,B){clearInterval(a.radioReaderAjaxInterval);if(-1!==b.radio_stream.indexOf("radiojar.com")){a.isRadiojar=!0;var t=b.radio_stream.match(a.myregexp_radiojar);null!=t&&(a.http_or_https=t[1],a.ip=t[2],a.mount_point=t[3],a.port="")}else t=b.radio_stream.match(a.myregexp),null!=t&&(a.http_or_https=t[1],a.ip=t[2],a.port=t[3],a.mount_point=t[4],";"==a.mount_point.trim()&&(a.mount_point=
 ""));n.css({width:b.playerWidth+"px",height:b.imageHeight+"px",background:"url("+b.noImageAvailable+") #000000","background-repeat":"no-repeat","background-position":"top center","background-size":"cover"});if(!b.showOnlyPlayButton){P(a,b,e,p,u,f,v,l,y,q,g,w,n,x,r,A);a.radioReaderAjaxInterval=setInterval(function(){P(a,b,e,p,u,f,v,l,y,q,g,w,n,x,r,A)},1E3*b.nowPlayingInterval);a.playlist_arr=[];a.playlist_images_arr=[];var m=-1,h,z,D,d=0;a.isRadiojar&&M({method:"GET",url:"http://www.radiojar.com/api/stations/"+
 a.mount_point+"/tracks/?my_rand="+Math.random()},function(c){h=c.indexOf("[{");if(-1!==h){z=c.length;c=c.substr(h,z);var E=JSON.parse(c);E.reverse()}for(d=0;d<Object.keys(E).length;d++)""!=E[d].track&&"Empty Title"!=E[d].track&&(m++,a.playlist_arr[m]=E[d].artist+" - "+E[d].track,a.playlist_images_arr[m]=b.noImageAvailable,T(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A,m));a.playlist_arr.length?O(a,b,f,e,p,u,x,v,l,y,q,g,w,n,r,A):a.isHistoryGenerated=!0;b.sticky&&b.startMinified&&B.click()});""!=b.azuracast_api_nowplaying_url&&
 M({method:"GET",url:b.azuracast_api_nowplaying_url+"?my_rand="+Math.random()},function(c){h=c.indexOf("{");if(-1!==h){z=c.length;c=c.substr(h,z);c=JSON.parse(c);for(d=0;d<Object.keys(c.song_history).length;d++)""!=c.song_history[d].song.text&&"Empty Title"!=c.song_history[d].song.text.text&&(m++,a.playlist_arr[m]=c.song_history[d].song.text,a.playlist_images_arr[m]=b.noImageAvailable,b.azuracast_get_image&&""!=c.song_history[d].song.art&&(a.playlist_images_arr[m]=c.song_history[d].song.art),T(a,b,
 e,f,v,l,y,q,g,w,n,u,p,x,r,A,m));a.playlist_arr.length?O(a,b,f,e,p,u,x,v,l,y,q,g,w,n,r,A):a.isHistoryGenerated=!0;b.sticky&&b.startMinified&&B.click()}});a.isRadiojar||""!=b.azuracast_api_nowplaying_url||b.iceCastFirst||M({method:"GET",url:a.http_or_https+"://"+a.ip+":"+a.port+"/"+a.history_arr[a.history_current_k]},function(c){if(-1!=c.indexOf("Current Song"))for(h=c.indexOf("Current Song")+12,z=c.length,c=c.substr(h,z),D=c.split("</td><td>"),D.shift(),c=0;c<D.length;c++)h=D[c].indexOf("</"),-1!=
 h&&(z=h,D[c]=D[c].substr(0,z),D[c]=D[c].replace(/<\/?[^>]+(>|$)/g,""),""!=D[c]&&"Empty Title"!=D[c]&&(m++,a.playlist_arr[m]=D[c],a.playlist_arr[m]=a.playlist_arr[m].replace(/(\r?\n|\r)/gm," ").trim(),a.playlist_images_arr[m]=b.noImageAvailable,T(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A,m)));a.playlist_arr.length?O(a,b,f,e,p,u,x,v,l,y,q,g,w,n,r,A):a.isHistoryGenerated=!0;b.sticky&&b.startMinified&&B.click()})}a.isFlashNeeded?""!=a.myFlashObject&&a.myFlashObject.myAS3function(K(a,b,e,f),b.initialVolume):(document.getElementById(a.audioID).src=
 K(a,b,e,f),document.getElementById(a.audioID).load(),b.autoPlay&&v.click())}function R(a,b,e,f){e.css({background:"url("+f+") #000000","background-repeat":"no-repeat","background-position":"top center","background-size":"cover"});b.prev_song_image=b.cur_song_image;b.cur_song_image=f}function J(a,b,e,f,v,l,y,q,g,w,n){a.curSongText="";b.showTitle&&null!=a.curTitle&&""!=a.curTitle&&(a.curSongText+=a.curTitle);e="";b.showRadioStation&&null!=b.radio_name&&""!=b.radio_name&&(e=b.radio_name);b.showListeners&&
 0<a.currentListeners&&null!=a.currentListeners&&""!=a.currentListeners&&(e+=" ("+a.currentListeners+" "+b.translateListeners+")");g.html(e);var u=a.curTitle.split("-"),p=b.noImageAvailable;u[0]=u[0].trim();3<=u.length&&(u[0]=u[0].trim()+"-"+u[1].trim());if(b.grabLastFmPhoto&&""!=u[0].trim()){var x="";a.the_artist_id="";a.the_wikidata_id="";p=b.noImageAvailable;a.wiki_photo_path=p;clearTimeout(a.musicbrainz_setTimeout);clearTimeout(a.no_artist_image_setTimeout);u[0]=u[0].trim();""!=u[0]&&void 0!=u[0]&&
 a.prevTitle!=a.curTitle&&(n.css({background:"url("+p+") #000000","background-repeat":"no-repeat","background-position":"top center","background-size":"cover"}),clearTimeout(a.musicbrainz_setTimeout),a.musicbrainz_setTimeout=setTimeout(function(){""!=b.optional_images_path&&(x=b.optional_images_path+a.curTitle+".jpg",x=encodeURI(x),x=x.replace("(","%28"),x=x.replace(")","%29"),x=x.replace("&apos;","%27"),x=x.replace("&amp;","%26"),W(x)||(x=b.noImageAvailable),p=x);p!=b.noImageAvailable?R(b,a,n,p):
 k.get("https://theaudiodb.com/api/v1/json/"+a.zerx+"/search.php?s="+u[0],{},function(r){var A=b.noImageAvailable;r.artists instanceof Array&&""!=r.artists[0].strArtistThumb&&void 0!=r.artists[0].strArtistThumb&&null!=r.artists[0].strArtistThumb&&(A=r.artists[0].strArtistThumb);R(b,a,n,A)})}))}else b.azuracast_get_image&&(p=a.azuracast_cur_song_image,R(b,a,n,p)),""!=b.mscp_pro_api_url&&a.prevTitle!=a.curTitle&&M({method:"GET",url:b.mscp_pro_api_url},function(r){var A=r.indexOf('{"mscp":'),B=r.length;
 -1!==A&&(r=r.substr(A,B),r=JSON.parse(r),""!=r.mscp.info[0].cover&&-1==r.mscp.info[0].cover.indexOf("nocover.png")&&(p=r.mscp.info[0].cover.replace(/(\s)/g,"%20"),p=r.mscp.info[0].cover.replace(/100x100/g,"400x400")),R(b,a,n,p))});a.curSongText&&(g=a.curSongText.split("-"),a.curSongAuthorText=g[0].trim(),2<=g.length&&(a.curSongText=g[1].trim()),3<=g.length&&(a.curSongAuthorText=g[0].trim()+"-"+g[1].trim(),a.curSongText=g[2].trim()),l.html(Y(a.curSongAuthorText,b)),q.css({width:"auto"}),a.isStationTitleInsideScrolling=
 !1,a.stationTitleInsideWait=0,q.stop(),q.css({"margin-left":0}),q.html(a.curSongText),clearInterval(a.timeupdateInterval),q.width()>a.titleWidth?a.timeupdateInterval=setInterval(function(){!a.isStationTitleInsideScrolling&&5<=a.stationTitleInsideWait&&q.width()>a.titleWidth?(a.isStationTitleInsideScrolling=!0,a.stationTitleInsideWait=0,q.html(a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "),q.css({"margin-left":0}),q.stop().animate({"margin-left":b.playerWidth-
 q.width()+"px"},parseInt(1E4*(q.width()-b.playerWidth)/150,10),"linear",function(){a.isStationTitleInsideScrolling=!1})):!a.isStationTitleInsideScrolling&&q.width()>a.titleWidth&&a.stationTitleInsideWait++},300):q.css({width:"100%"}))}function Q(a,b,e,f){if(b.gen_total_images>e.numberOfThumbsPerScreen){var v=(b.thumbsHolder_ThumbHeight+1)*(b.gen_total_images-e.numberOfThumbsPerScreen),l=0;f.stop(!0,!0);k("html, body").off("touchstart touchmove").on("touchstart touchmove",function(y){y.preventDefault()});
 -1==a||b.isCarouselScrolling?!b.isCarouselScrolling&&b.gen_total_images>e.numberOfThumbsPerScreen&&(b.isCarouselScrolling=!0,l=-1*parseInt((b.thumbsHolder_ThumbHeight+1)*b.current_img_no,10),Math.abs(l)>v&&(l=-1*v),b.gen_total_images>e.numberOfThumbsPerScreen&&e.showPlaylist&&b.audio6_html5_sliderVertical.slider("value",100+parseInt(100*l/v)),f.animate({top:l+"px"},500,"easeOutCubic",function(){b.isCarouselScrolling=!1;k("html, body").off("touchstart touchmove").on("touchstart touchmove",function(y){})})):
 (b.isCarouselScrolling=!0,l=2>=a?-1*v:parseInt(v*(a-100)/100,10),0<l&&(l=0),f.animate({top:l+"px"},1100,"easeOutQuad",function(){b.isCarouselScrolling=!1;k("html, body").off("touchstart touchmove").on("touchstart touchmove",function(y){})}))}}function U(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A,B,t,m,h,z,D,d,c,E,F){f.width(e.playerWidth);if(e.showOnlyPlayButton||b.isMinified)a="none";"none"==a?r.css({width:"0px",height:"0px"}):r.css({width:e.playerWidth+"px",height:parseInt(e.playerWidth/e.origWidth*e.imageHeight,
 10)+"px"});e.sticky&&e.startMinified?r.css({display:"none",top:"0px",left:"0px"}):r.css({display:a,top:"0px",left:"0px"});b.imageTopPos=0;b.imageLeftPos=0;b.frameBehindTextTopPos=r.height();b.frameBehindTextLeftPos=0;e.showOnlyPlayButton?t.css({top:b.frameBehindTextTopPos+"px",left:b.frameBehindTextLeftPos+"px",background:e.frameBehindTextColor,width:0,height:0}):t.css({top:b.frameBehindTextTopPos+"px",left:b.frameBehindTextLeftPos+"px",background:e.frameBehindTextColor,height:g.height()+2*b.playVerticalPadding+
 "px"});b.playTopPos=b.frameBehindTextTopPos+b.playVerticalPadding;b.playLeftPos=b.frameBehindTextLeftPos+b.playHorizontalPadding;g.css({top:b.playTopPos+"px",left:b.playLeftPos+"px"});b.titleWidth=e.playerWidth-4*b.playHorizontalPadding-g.width();b.titleTopPos=b.playTopPos+3;b.titleLeftPos=g.width()+2*b.playHorizontalPadding;n.css({color:e.songTitleColor,top:b.titleTopPos+"px",left:b.titleLeftPos+"px",width:b.titleWidth+"px"});b.lineSeparatorTopPos=b.titleTopPos+n.height()+2;b.lineSeparatorLeftPos=
 b.titleLeftPos;m.css({background:e.lineSeparatorColor,top:b.lineSeparatorTopPos+"px",left:b.lineSeparatorLeftPos+"px",width:b.titleWidth+"px"});b.authorTopPos=b.lineSeparatorTopPos+8;b.authorLeftPos=b.titleLeftPos;w.css({color:e.authorTitleColor,top:b.authorTopPos+"px",left:b.authorLeftPos+"px",width:b.titleWidth+"px"});b.minimizeTopPos=b.playTopPos;!e.sticky||e.showOnlyPlayButton?(b.minimizeRightPos=0,z.css({display:"none",padding:0,margin:0})):e.sticky&&(b.minimizeRightPos=b.smallButtonDistance,
 z.css({top:b.minimizeTopPos+"px",right:b.minimizeRightPos+"px"}));b.frameBehindButtonsTopPos=b.frameBehindTextTopPos+t.height();b.frameBehindButtonsLeftPos=0;e.showOnlyPlayButton?h.css({background:e.frameBehindButtonsColor,height:0,top:b.frameBehindButtonsTopPos+"px",left:b.frameBehindButtonsLeftPos+"px"}):h.css({background:e.frameBehindButtonsColor,top:b.frameBehindButtonsTopPos+"px",left:b.frameBehindButtonsLeftPos+"px"});b.radioStationTopPos=b.frameBehindButtonsTopPos+Math.floor(h.height()-p.height())/
 2;b.radioStationLeftPos=b.playHorizontalPadding;p.css({color:e.radioStationColor,top:b.radioStationTopPos+"px",left:b.radioStationLeftPos+"px",width:b.titleWidth+"px"});0==b.historyButWidth&&(b.historyButWidth=D.width());b.showhidehistoryTopPos=b.frameBehindButtonsTopPos+Math.floor((h.height()-D.height())/2);b.temp_showHistoryBut?(b.showhideplaylistRightPos=2*b.smallButtonDistance,D.css({display:"block",width:b.historyButWidth+"px",top:b.showhidehistoryTopPos+"px",right:b.showhideplaylistRightPos+
 "px"})):(b.showhideplaylistRightPos=0,D.css({display:"none",width:0,padding:0,margin:0}));d.css({display:"none",width:0,padding:0,margin:0});b.volumeTopPos=b.frameBehindButtonsTopPos+Math.floor((h.height()-c.height())/2);e.showVolume?(b.volumeRightPos=b.showhideplaylistRightPos+D.width()+b.smallButtonDistance,c.css({top:b.volumeTopPos+"px",right:b.volumeRightPos+"px"})):(b.volumeRightPos=b.showhideplaylistRightPos+D.width(),c.css({display:"none",width:0,padding:0,margin:0}));b.twitterTopPos=b.frameBehindButtonsTopPos+
 Math.floor((h.height()-E.height())/2);e.showTwitterBut?(b.twitterRightPos=b.volumeRightPos+c.width()+b.smallButtonDistance,E.css({top:b.twitterTopPos+"px",right:b.twitterRightPos+"px"})):(b.twitterRightPos=b.volumeRightPos+c.width(),E.css({display:"none",width:0,padding:0,margin:0}));b.facebookTopPos=b.frameBehindButtonsTopPos+Math.floor((h.height()-F.height())/2);e.showFacebookBut?(b.facebookRightPos=b.twitterRightPos+E.width()+b.smallButtonDistance,F.css({top:b.facebookTopPos+"px",right:b.facebookRightPos+
 "px"})):(b.facebookRightPos=b.twitterRightPos,F.css({display:"none",width:0,padding:0,margin:0}))}function O(a,b,e,f,v,l,y,q,g,w,n,u,p,x,r,A){if(!b.showOnlyPlayButton){f.stop(!0,!0);a.isCarouselScrolling=!1;k(".readingData",l).css({display:"none"});q=parseInt(b.playerWidth/b.origWidth*b.historyRecordTitleLimit,10);g=parseInt(b.playerWidth/b.origWidth*b.historyRecordAuthorLimit,10);w=[];a.isHistoryGenerated=!0;f.html("");for(n=a.gen_total_images=0;n<a.playlist_arr.length;n++)a.gen_total_images++,w=
 a.playlist_arr[n].split("-"),1>w.length?a.gen_total_images--:(a.thumbsHolder_Thumb=k('<div class="thumbsHolder_ThumbOFF" rel="'+(a.gen_total_images-1)+'" data-origID="'+n+'"><div class="padding"><div class="img_div" style="background-image:url('+a.playlist_images_arr[n]+');background-color:#000000;"></div><span class="titlex">'+Z(w[1],q,b)+'</span><span class="authorx">'+Z(w[0],g,b)+"</span></div></div>"),f.append(a.thumbsHolder_Thumb),0==a.thumbsHolder_ThumbHeight&&(a.thumbsHolder_ThumbHeight=a.thumbsHolder_Thumb.height()),
 a.thumbsHolder_Thumb.css({top:(a.thumbsHolder_ThumbHeight+1)*a.gen_total_images+"px",background:b.historyRecordBgColor,"border-bottom-color":b.historyRecordBottomBorderColor,color:b.historyRecordTextColor}),k(".titlex",a.thumbsHolder_Thumb).css({color:b.historyRecordSongColor,"border-bottom-color":b.historyRecordSongBottomBorderColor}),k(".authorx",a.thumbsHolder_Thumb).css({color:b.historyRecordAuthorColor}),a.current_img_no=0);v.height(2*b.historyPadding+(a.thumbsHolder_ThumbHeight+1)*b.numberOfThumbsPerScreen+
 A.height()+b.historyPadding);l.height((a.thumbsHolder_ThumbHeight+1)*b.numberOfThumbsPerScreen);l.css({"margin-top":A.height()+b.historyPadding+"px"});y.css({padding:b.historyPadding+"px"});a.thumbsHolder_Thumbs=k(".thumbsHolder_ThumbOFF",e);a.wrapperHeight=a.audioPlayerHeight+v.height()+b.historyTopPos;if(!b.showHistory||!b.showHistoryOnInit||0>v.css("margin-top").substring(0,v.css("margin-top").length-2))a.wrapperHeight=a.audioPlayerHeight;a.isMinified||r.css({height:a.wrapperHeight+"px"});a.gen_total_images>
 b.numberOfThumbsPerScreen&&b.showHistory?(b.isPlaylistSliderInitialized&&a.audio6_html5_sliderVertical.slider("destroy"),a.audio6_html5_sliderVertical.slider({orientation:"vertical",range:"min",min:1,max:100,step:1,value:100,slide:function(B,t){Q(t.value,a,b,f)}}),b.isPlaylistSliderInitialized=!0,a.audio6_html5_sliderVertical.css({display:"inline",position:"absolute",height:v.height()-20-3*b.historyPadding-A.height()+"px",left:e.width()-a.audio6_html5_sliderVertical.width()-b.historyPadding+"px",
 top:a.audioPlayerHeight+b.historyTopPos+2*b.historyPadding+2+A.height()+"px"}),b.showHistoryOnInit||a.audio6_html5_sliderVertical.css({opacity:0,display:"none"}),k(".thumbsHolder_ThumbOFF",e).css({width:e.width()-a.audio6_html5_sliderVertical.width()-2*b.historyPadding-3+"px"})):(b.isPlaylistSliderInitialized&&(a.audio6_html5_sliderVertical.slider("destroy"),b.isPlaylistSliderInitialized=!1),k(".thumbsHolder_ThumbOFF",e).css({width:e.width()-2*b.historyPadding+"px"}));l.mousewheel(function(B,t,m,
 h){a.gen_total_images>b.numberOfThumbsPerScreen&&(B.preventDefault(),B=a.audio6_html5_sliderVertical.slider("value"),1<parseInt(B)&&-1==parseInt(t)||100>parseInt(B)&&1==parseInt(t))&&(B+=3*t,a.audio6_html5_sliderVertical.slider("value",B),Q(B,a,b,f))});f.css({top:"0px"})}}function Y(a,b){b.preserveOriginalUpperLowerCase||(a=a.toLowerCase(),a=a.replace(/\b[a-z]/g,function(e){return e.toUpperCase()}),a=a.replace(/&Apos;/gi,"'"),a=a.replace(/&Amp;/gi,"&"),a=a.replace(/'[A-Z]/g,function(e){return e.toLowerCase()}));
 return a}function Z(a,b,e){a=String(a);var f="";if(a.length>b){a=a.substring(0,b);var v=a.split(" ");a=a.substring(b-2,b-1);""!=a&&(v.pop(),f="...");a=v.join(" ")}a=Y(a,e);return a+f}function ea(){k("audio").each(function(){k(".AudioPlay").removeClass("AudioPause");k(this)[0].pause()})}function aa(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,e=RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=e.exec(b)&&(a=parseFloat(RegExp.$1))}else"Netscape"==navigator.appName&&
 (b=navigator.userAgent,e=RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"),null!=e.exec(b)&&(a=parseFloat(RegExp.$1)));return parseInt(a,10)}function fa(a){var b=!1;document.getElementById(a.audioID).canPlayType&&"no"!=document.getElementById(a.audioID).canPlayType("audio/mpeg")&&""!=document.getElementById(a.audioID).canPlayType("audio/mpeg")||(b=!0);return b}var L=navigator.userAgent.toLowerCase();k.fn.audio6_html5=function(a){a=k.extend({},k.fn.audio6_html5.defaults,a);aa();return this.each(function(){var b=
 k(this),e=k('<div class="frameBehindText"></div><div class="frameBehindButtons"></div> <div class="ximage"></div> <div class="AudioControls"> <a class="AudioCloseBut" title="Minimize"></a><a class="AudioFacebook" title="Facebook"></a><a class="AudioTwitter" title="Twitter"></a><a class="AudioPlay" title="Play/Pause"></a><a class="AudioShowHidePlaylist" title="Show/Hide Playlist"></a><a class="VolumeButton" title="Mute/Unmute"></a><div class="VolumeSlider"></div>   </div>   <div class="songTitle"><div class="songTitleInside"></div></div>  <div class="songAuthorLineSeparator"></div>  <div class="songAuthor"></div>  <div class="radioStation"></div>     <div class="thumbsHolderWrapper"><div class="historyPadding">  <div class="historyTitle"></div> <div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div></div>  <div class="slider-vertical"></div>'),
 f=b.parent(".audio6_html5");f.addClass(a.skin);f.append(e);var v=k(".frameBehindText",f),l=k(".frameBehindButtons",f);k(".AudioControls",f);var y=k(".AudioFacebook",f),q=k(".AudioTwitter",f),g=k(".AudioPlay",f),w=k(".AudioShowHidePlaylist",f),n=k(".VolumeButton",f),u=k(".VolumeSlider",f),p=k(".AudioCloseBut",f),x=k(".songTitle",f),r=k(".songTitleInside",f),A=k(".songAuthor",f),B=k(".songAuthorLineSeparator",f),t=k(".radioStation",f),m=k(".ximage",f),h=k(".historyTitle",f);f.wrap("<div class='the_wrapper'></div>");
 var z=f.parent(),D=aa();if(-1!=L.indexOf("ipad")||-1!=L.indexOf("iphone")||-1!=L.indexOf("ipod")||-1!=L.indexOf("webos")||-1!=navigator.userAgent.indexOf("Android"))a.autoPlay=!1;f.css({background:"transparent"});e=Math.floor(1E5*Math.random());var d={current_img_no:0,origID:0,is_very_first:!0,total_images:0,gen_total_images:0,is_changeSrc:!1,timeupdateInterval:"",totalTime:"",playlist_arr:"",playlist_images_arr:"",isCarouselScrolling:!1,isHistoryGenerated:!1,isStationTitleInsideScrolling:!1,curTitle:"",
 prevTitle:"",cur_song_image:"",prev_song_image:"",azuracast_cur_song_image:a.noImageAvailable,curSongText:"",curSongAuthorText:"",stationTitleInsideWait:0,audioPlayerWidth:0,audioPlayerHeight:0,wrapperHeight:0,temp_showHistoryBut:!0,historyButWidth:0,isRadiojar:!1,historyInitialHeight:90,thumbsHolder_Thumb:k('<div class="thumbsHolder_ThumbOFF" rel="0"><div class="padding">test</div></div>'),thumbsHolder_ThumbHeight:0,thumbsHolder_Thumbs:"",constantDistance:0,titleWidth:0,radioStationTopPos:0,radioStationLeftPos:0,
 titleTopPos:0,titleLeftPos:0,lineSeparatorTopPos:0,lineSeparatorLeftPos:0,authorTopPos:0,authorLeftPos:0,minimizeTopPos:0,minimizeRightPos:0,isMinified:!1,imageTopPos:0,imageLeftPos:0,frameBehindButtonsTopPos:0,frameBehindButtonsLeftPos:0,frameBehindTextTopPos:0,frameBehindTextLeftPos:0,playTopPos:0,playLeftPos:0,volumeTopPos:0,volumeRightPos:0,volumesliderTopPos:0,volumesliderLeftPos:0,showhidehistoryTopPos:0,showhideplaylistRightPos:0,smallButtonDistance:4,playVerticalPadding:10,playHorizontalPadding:16,
 facebookTopPos:0,facebookRightPos:0,twitterTopPos:0,twitterRightPos:0,origParentFloat:"",origParentPaddingTop:"",origParentPaddingRight:"",origParentPaddingBottom:"",origParentPaddingLeft:"",windowWidth:0,audioObj:"",radioReaderAjaxInterval:"",totalRadioStationsNo:0,ajaxReturnedRadioStationsNo:0,lastfm:"",isFlashNeeded:!0,myFlashObject:"",rndNum:0,prevVolumeVal:1,myregexp:/^(http|https):\/\/(.*):(.*)\/(.*)$/,myregexp_radiojar:/^(http|https):\/\/(.*)\/(.*)$/,http_or_https:"http",ip:"",port:"",mount_point:"",
 now_playing_current_k:-1,now_playing_found:!1,now_playing_arr_lenght:0,now_playing_arr:["stats?sid=1","7.html","status-json.xsl","status.xsl"],history_current_k:0,history_arr:["played.html"],the_artist_id:"",the_wikidata_id:"",musicbrainz_setTimeout:"",no_artist_image_setTimeout:"",the_artist_id_history_arr:[""],the_wikidata_id_history_arr:[""],musicbrainzHistory_setTimeout_arr:[""],wiki_photo_path:a.noImageAvailable,zerx:"523532",html5_audio_tag:"",audioID:"hero_audio_tag_id_"+e,currentListeners:0};
 a.azuracast_get_image&&""!=a.azuracast_api_nowplaying_url&&(a.grabLastFmPhoto=!1);""!=a.mscp_pro_api_url&&(a.grabLastFmPhoto=!1);a.iceCastFirst&&(d.now_playing_current_k=1,d.isHistoryGenerated=!0);a.preserveOriginalUpperLowerCase||(r.css({"text-transform":"uppercase"}),A.css({"text-transform":"capitalize"}));a.sticky||(a.startMinified=!1);30>a.nowPlayingInterval&&(a.nowPlayingInterval=44);a.showOnlyPlayButton&&(a.startMinified=!1,a.showFacebookBut=!1,a.showVolume=!1,a.showTwitterBut=!1,a.showRadioStation=
 !1,a.showTitle=!1,a.showHistoryBut=!1,a.showHistory=!1,a.playerWidth=g.width()+2*d.playHorizontalPadding,a.historyPadding=0);a.origWidth=a.playerWidth;d.temp_showHistoryBut=a.showHistoryBut;d.now_playing_arr_lenght=Object.keys(d.now_playing_arr).length;d.html5_audio_tag=k('<audio id="'+d.audioID+'" preload="metadata"></audio>');f.append(d.html5_audio_tag);-1==(-1==navigator.userAgent.indexOf("Opera")&&navigator.userAgent.indexOf("OPR"))&&(-1!=navigator.userAgent.indexOf("Chrome")&&-1!=navigator.vendor.indexOf("Google")&&
 (a.autoPlay=!1),-1<navigator.userAgent.indexOf("Firefox")&&(a.autoPlay=!1),-1!=navigator.userAgent.indexOf("Safari")&&-1!=navigator.vendor.indexOf("Apple")&&-1==navigator.platform.indexOf("Win")&&(a.autoPlay=!1));d.isFlashNeeded=fa(d);-1!=D&&(d.isFlashNeeded=!0);d.isFlashNeeded=!1;a.showFacebookBut&&(window.fbAsyncInit=function(){FB.init({appId:a.facebookAppID,version:"v3.2",status:!0,cookie:!0,xfbml:!0})},function(C,G,I){var N=C.getElementsByTagName(G)[0];C.getElementById(I)||(C=C.createElement(G),
 C.id=I,C.src="//connect.facebook.com/en_US/sdk.js",N.parentNode.insertBefore(C,N))}(document,"script","facebook-jssdk"),y.on("click",function(){FB.ui({method:"share_open_graph",action_type:"og.likes",action_properties:JSON.stringify({object:{"og:url":document.URL,"og:title":a.facebookShareTitle,"og:description":a.facebookShareDescription,"og:image":a.facebookShareImage}})},function(C){})}));if(a.showTwitterBut)q.on("click",function(){window.open("https://twitter.com/intent/tweet?url="+document.URL+
 "&text="+a.radio_name,"Twitter","status = 1, left = 430, top = 270, height = 550, width = 420, resizable = 0")});U("block",d,a,f,H,c,F,E,g,A,x,r,t,b,m,z,h,v,B,l,p,w,u,n,q,y);d.audioPlayerHeight=m.height()+v.height()+l.height();a.showOnlyPlayButton&&(d.audioPlayerHeight=g.height()+2*d.playVerticalPadding);f.height(d.audioPlayerHeight);if(a.startMinified||a.showOnlyPlayButton)d.historyInitialHeight=0;d.wrapperHeight=d.audioPlayerHeight+d.historyInitialHeight+a.historyTopPos;a.showHistory&&a.showHistoryOnInit||
 (d.wrapperHeight=d.audioPlayerHeight);z.css({border:a.playerBorderSize+"px solid "+a.playerBorderColor,width:f.width()+"px",height:d.wrapperHeight+"px"});a.centerPlayer&&z.css({margin:"0 auto"});var c=k(".thumbsHolderWrapper",f),E=k(".historyPadding",f),F=k(".thumbsHolderVisibleWrapper",f),H=k(".thumbsHolder",f);d.audio6_html5_sliderVertical=k(".slider-vertical",f);E.css({padding:a.historyPadding+"px"});F.append('<div class="readingData">'+a.translateReadingData+"</div>");h.width(a.playerWidth-2*
 a.historyPadding);h.html(a.historyTranslate);h.css({color:a.historyTitleColor});a.showHistory||c.css({opacity:0});a.showHistoryOnInit||c.css({opacity:0,"margin-top":"-20px"});c.css({width:f.width()+"px",top:d.audioPlayerHeight+a.historyTopPos+"px",left:"0px",background:a.historyBgColor});F.width(f.width());a.sticky&&(z.addClass("audio6_html5_sticky_div"),p.on("click",function(){var C=500;if(d.isMinified){d.isMinified=!1;p.removeClass("AudioOpenBut");var G="block";d.temp_showHistoryBut=a.showHistoryBut;
 d.audioPlayerHeight=parseInt(a.playerWidth/a.origWidth*a.imageHeight,10)+v.height()+l.height();var I=0>c.css("margin-top").substring(0,c.css("margin-top").length-2)?d.audioPlayerHeight:d.audioPlayerHeight+c.height()+a.historyTopPos}else d.isMinified=!0,p.addClass("AudioOpenBut"),G="none",d.audioPlayerHeight=v.height()+l.height(),I=d.audioPlayerHeight,d.temp_showHistoryBut=!1;U(G,d,a,f,H,c,F,E,g,A,x,r,t,b,m,z,h,v,B,l,p,w,u,n,q,y);m.css({display:G});a.startMinified?(C=0,a.startMinified=!1):C=500;c.css({display:G,
 top:d.audioPlayerHeight+a.historyTopPos+"px"});d.gen_total_images>a.numberOfThumbsPerScreen&&d.audio6_html5_sliderVertical.css({display:G,top:d.audioPlayerHeight+a.historyTopPos+2*a.historyPadding+2+h.height()+"px"});z.animate({height:I},C,"easeOutQuad",function(){})}));u.slider({value:a.initialVolume,step:.05,orientation:"horizontal",range:"min",max:1,animate:!0,slide:function(C,G){a.initialVolume=G.value;d.isFlashNeeded?d.myFlashObject.myAS3function(K(d,a,H,f),a.initialVolume):document.getElementById(d.audioID).volume=
 G.value},stop:function(C,G){}});document.getElementById(d.audioID).volume=a.initialVolume;u.css({background:a.volumeOffColor});k(".ui-slider-range",u).css({background:a.volumeOnColor});g.on("click",function(){var C=d.isFlashNeeded?!g.hasClass("AudioPause"):document.getElementById(d.audioID).paused;ea();0==C?(d.isFlashNeeded?d.myFlashObject.myAS3function("_pause_radio_stream_",a.initialVolume):document.getElementById(d.audioID).pause(),g.removeClass("AudioPause")):(d.isFlashNeeded?d.myFlashObject.myAS3function("_play_radio_stream_",
 a.initialVolume):(document.getElementById(d.audioID).src=K(d,a,H,f),document.getElementById(d.audioID).load(),document.getElementById(d.audioID).play()),g.addClass("AudioPause"))});w.on("click",function(){if(0>c.css("margin-top").substring(0,c.css("margin-top").length-2)){var C=1;var G="block";var I="0px";var N=d.audioPlayerHeight+c.height()+a.historyTopPos;c.css({display:G});d.gen_total_images>a.numberOfThumbsPerScreen&&d.audio6_html5_sliderVertical.css({opacity:1,display:"block"})}else C=0,G="none",
 I="-20px",d.gen_total_images>a.numberOfThumbsPerScreen&&d.audio6_html5_sliderVertical.css({opacity:0,display:"none"}),N=d.audioPlayerHeight;c.css({"z-index":-1});c.animate({opacity:C,"margin-top":I},500,"easeOutQuad",function(){c.css({display:G,"z-index":"auto"})});z.animate({height:N},500,"easeOutQuad",function(){})});n.on("click",function(){document.getElementById(d.audioID).muted?(document.getElementById(d.audioID).muted=!1,n.removeClass("VolumeButtonMuted"),d.isFlashNeeded&&(a.initialVolume=d.prevVolumeVal,
 d.myFlashObject.myAS3function(K(d,a,H,f),a.initialVolume))):(document.getElementById(d.audioID).muted=!0,n.addClass("VolumeButtonMuted"),d.isFlashNeeded&&(d.prevVolumeVal=a.initialVolume,a.initialVolume=0,d.myFlashObject.myAS3function(K(d,a,H,f),a.initialVolume)))});c.swipe({swipeStatus:function(C,G,I,N,ia,ja){"up"!=I&&"down"!=I||0==N||(C=d.audio6_html5_sliderVertical.slider("value"),C="up"==I?C-1.5:C+1.5,d.audio6_html5_sliderVertical.slider("value",C),k("html, body").off("touchstart touchmove").on("touchstart touchmove",
 function(ha){ha.preventDefault()}),Q(C,d,a,H))},threshold:100,maxTimeThreshold:500,fingers:"all",allowPageScroll:"none",preventDefaultEvents:!1});d.isFlashNeeded&&(d.rndNum=parseInt(998999*Math.random()+1E3),f.append("<div id='swfHolder"+d.rndNum+"'></div>"),swfobject.addDomLoadEvent(function(){d.myFlashObject=swfobject.createSWF({data:a.pathToAjaxFiles+"flash_player.swf",width:"0",height:"0"},{flashvars:"streamUrl="+a.radio_stream+"&autoPlay="+a.autoPlay+"&initialVolume="+a.initialVolume},"swfHolder"+
 d.rndNum)}),a.autoPlay&&g.addClass("AudioPause"));da(d,a,H,f,g,A,x,r,t,b,m,F,c,E,z,h,p);-1==L.indexOf("ipad")&&-1==L.indexOf("iphone")&&-1==L.indexOf("ipod")&&-1==L.indexOf("webos")||g.removeClass("AudioPause");var ba=function(){""==d.origParentFloat&&(d.origParentFloat=f.parent().css("float"),d.origParentPaddingTop=f.parent().css("padding-top"),d.origParentPaddingRight=f.parent().css("padding-right"),d.origParentPaddingBottom=f.parent().css("padding-bottom"),d.origParentPaddingLeft=f.parent().css("padding-left"));
 a.playerWidth!=a.origWidth||a.playerWidth>k(window).width()?f.parent().css({"float":"none","padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0}):f.parent().css({"float":d.origParentFloat,"padding-top":d.origParentPaddingTop,"padding-right":d.origParentPaddingRight,"padding-bottom":d.origParentPaddingBottom,"padding-left":d.origParentPaddingLeft});var C=f.parent().parent().width();if(f.width()!=C){a.playerWidth=a.origWidth>C?C:a.origWidth;if(f.width()!=a.playerWidth){U("block",d,
 a,f,H,c,F,E,g,A,x,r,t,b,m,z,h,v,B,l,p,w,u,n,q,y);d.audioPlayerHeight=m.height()+v.height()+l.height();d.isMinified&&(d.audioPlayerHeight=v.height()+l.height());f.height(d.audioPlayerHeight);d.wrapperHeight=d.audioPlayerHeight+c.height()+a.historyTopPos;if(!a.showHistory||!a.showHistoryOnInit||d.isMinified||0>c.css("margin-top").substring(0,c.css("margin-top").length-2))d.wrapperHeight=d.audioPlayerHeight;z.css({width:f.width()+"px",height:d.wrapperHeight+"px"});h.width(a.playerWidth-2*a.historyPadding);
 c.css({width:f.width()+"px",top:d.audioPlayerHeight+a.historyTopPos+"px"});F.width(f.width());O(d,a,f,H,c,F,E,g,A,x,r,t,b,m,z,h)}a.playerWidth<k(window).width()&&f.parent().css({"float":d.origParentFloat,"padding-top":d.origParentPaddingTop,"padding-right":d.origParentPaddingRight,"padding-bottom":d.origParentPaddingBottom,"padding-left":d.origParentPaddingLeft})}},V=!1;k(window).on("resize",function(){var C=!0;-1!=D&&9==D&&0==d.windowWidth&&(C=!1);d.windowWidth==k(window).width()?(C=!1,a.windowCurOrientation!=
 window.orientation&&-1!=navigator.userAgent.indexOf("Android")&&(a.windowCurOrientation=window.orientation,C=!0)):d.windowWidth=k(window).width();a.responsive&&C&&(!1!==V&&clearTimeout(V),V=setTimeout(function(){ba()},300))});a.responsive&&ba()})};k.fn.audio6_html5.defaults={radio_stream:"http://194.232.200.150:80/;",radio_name:"Idobi Anthm",url_custom_metdata_file:"",metadata_file_type:"",playerWidth:335,imageHeight:335,skin:"whiteControllers",initialVolume:1,autoPlay:!0,loop:!0,playerBg:"#000000",
 volumeOffColor:"#454545",volumeOnColor:"#ffffff",timerColor:"#ffffff",songTitleColor:"#ffffff",authorTitleColor:"#ffffff",lineSeparatorColor:"#636363",radioStationColor:"#ffffff",frameBehindTextColor:"#000000",frameBehindButtonsColor:"#454545",playerBorderSize:0,playerBorderColor:"#000000",sticky:!1,startMinified:!1,showOnlyPlayButton:!1,centerPlayer:!1,iceCastFirst:!1,showFacebookBut:!0,facebookAppID:"",facebookShareTitle:"HTML5 Radio Player With History - Shoutcast and Icecast",facebookShareDescription:"A top-notch responsive HTML5 Radio Player compatible with all major browsers and mobile devices.",
 facebookShareImage:"",showVolume:!0,showTwitterBut:!0,showRadioStation:!0,showTitle:!0,showHistoryBut:!0,showHistory:!0,showHistoryOnInit:!0,translateReadingData:"reading history...",historyTranslate:"HISTORY - latest played songs",historyTitleColor:"#858585",historyTopPos:0,historyBgColor:"#ebebeb",historyRecordBgColor:"transparent",historyRecordBottomBorderColor:"transparent",historyRecordSongColor:"#000000",historyRecordSongBottomBorderColor:"#d0d0d0",historyRecordAuthorColor:"#6d6d6d",numberOfThumbsPerScreen:3,
 historyPadding:16,preserveOriginalUpperLowerCase:!1,responsive:!0,historyRecordTitleLimit:25,historyRecordAuthorLimit:36,nowPlayingInterval:35,grabLastFmPhoto:!0,optional_images_path:"",azuracast_api_nowplaying_url:"",azuracast_get_image:!1,mscp_pro_api_url:"",showListeners:!0,translateListeners:"Listeners",historyMaxNumberOfSongs:12,pathToAjaxFiles:"",noImageAvailable:"noimageavailable.jpg",lastFMApiKey:"",lastFMSecret:"",origWidth:0,isSliderInitialized:!1,isProgressInitialized:!1,isPlaylistSliderInitialized:!1}})(jQuery);