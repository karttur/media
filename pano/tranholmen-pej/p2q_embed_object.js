/*  
    IE + ActiveX + EOLAS - Javascript workaround

	Author: 
		Thomas Rauscher <rauscher@pano2qtvr.com>
		http://www.pano2qtvr.com
		
	To embed a panorama just call one of these functions with 
	additional pairs for additional paramameters f.e:
	
	p2q_EmbedQuicktime('pano.mov','640','480','scale','tofit','background','#eeeeee');
	
	Use this file at your own risk
*/

window.p2q_Version	= 1.0;

function p2q_EmbedQuicktime(sFile,sWidth,sHeight) {
	document.writeln('<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"');
	document.writeln('codebase="http://www.apple.com/qtactivex/qtplugin.cab"');
	document.writeln('  width="' + sWidth + '" height="' + sHeight + '" >');
	document.writeln('  <param name="src" value="' + sFile + '">');
	for(i=3;i<arguments.length;i+=2) {
		document.writeln('  <param name="' + arguments[i] + '" value="' + arguments[i+1] + '">');
	}
	document.writeln('<embed width="' + sWidth + '" height="' + sHeight + '"');
	document.writeln('	pluginspage="http://www.apple.com/quicktime/download/"');
	document.writeln('	type="video/quicktime"');
	document.writeln('	src="' + sFile + '"');
	for(i=3;i<arguments.length;i+=2) {
		document.writeln('  ' + arguments[i] + '="' + arguments[i+1] + '"');
	}
	document.writeln('	/>');
	document.writeln('</object>');
}

function p2q_EmbedSPiV(sFile,sWidth,sHeight) {
	document.writeln('<object id="SPi-V_object"	classid="clsid:166B1BCA-3F9C-11CF-8075-444553540000"');
	document.writeln('codebase="http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=8,5,1,0"');
	document.writeln('  width="' + sWidth + '" height="' + sHeight + '" >');
	document.writeln('	<param name="src" value="SPi-V.dcr">');
	document.writeln('	<param name="swStretchStyle" value="stage">');
	document.writeln('	<param name="swRemote"       value="swContextMenu=' + "'" + 'FALSE' + "'" + '">');
	document.writeln('	<param name="progress"       value="true">'); 
	document.writeln('	<param name="logo"           value="false">'); 

	document.writeln('  <param name="swURL" value="' + sFile + '">');
	for(i=3;i<arguments.length;i+=2) {
		document.writeln('  <param name="' + arguments[i] + '" value="' + arguments[i+1] + '">');
	}
	document.writeln('<embed name="SPi-V_object" width="' + sWidth + '" height="' + sHeight + '"');
	document.writeln('	pluginspage="http://www.macromedia.com/shockwave/download/"');
	document.writeln('	type="application/x-director" ');
	document.writeln('	swURL="' + sFile + '" ');
	document.writeln('	src="SPi-V.dcr" ');
	document.writeln('	swStretchStyle="stage" ');
	document.writeln('	swRemote="swContextMenu=' + "'" + 'FALSE' + "'" + '" ');
	document.writeln('	progress="true" ');
	document.writeln('	logo="false" ');
	for(i=3;i<arguments.length;i+=2) {
		document.writeln('  ' + arguments[i] + '="' + arguments[i+1] + '"');
	}
	document.writeln('	/>');
	document.writeln('</object>');
}

function p2q_EmbedDevalVR(sFile,sWidth,sHeight) {
	document.writeln('<object classid="clsid:5D2CF9D0-113A-476B-986F-288B54571614"');
	document.writeln('codebase="http://www.devalvr.com/instalacion/plugin/devalocx.cab#version=0,2,9,0"');
	document.writeln('  width="' + sWidth + '" height="' + sHeight + '" >');
	document.writeln('  <param name="src" value="' + sFile + '">');
	for(i=3;i<arguments.length;i+=2) {
		document.writeln('  <param name="' + arguments[i] + '" value="' + arguments[i+1] + '">');
	}
	document.writeln('<embed width="' + sWidth + '" height="' + sHeight + '"');
	document.writeln('	pluginspage="http://www.devalvr.com/instalacion/plugin/install.html"');
	document.writeln('	type="application/x-devalvrx"');
	document.writeln('	src="' + sFile + '"');
	for(i=3;i<arguments.length;i+=2) {
		document.writeln('  ' + arguments[i] + '="' + arguments[i+1] + '"');
	}
	document.writeln('	/>');
	document.writeln('</object>');
}

function p2q_EmbedFlash(sFile,sWidth,sHeight) {
	document.writeln('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"');
	document.writeln('  codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"');
	document.writeln('  width="' + sWidth + '" height="' + sHeight + '" >');
	document.writeln('  <param name="movie" value="' + sFile + '">');
	for(i=3;i<arguments.length;i+=2) {
		document.writeln('  <param name="' + arguments[i] + '" value="' + arguments[i+1] + '">');
	}
	document.writeln('<embed width="' + sWidth + '" height="' + sHeight + '"');
	document.writeln('	pluginspage="http://www.macromedia.com/go/getflashplayer"');
	document.writeln('	type="application/x-shockwave-flash"');
	document.writeln('	src="' + sFile + '"');
	for(i=3;i<arguments.length;i+=2) {
		document.writeln('  ' + arguments[i] + '="' + arguments[i+1] + '"');
	}
	document.writeln('	/>');
	document.writeln('</object>');
}

function p2q_EmbedPtviewer(sFile,sWidth,sHeight) {
	document.writeln('<applet code="ptviewer.class" archive="ptviewer.jar"'); 
	document.writeln('  width="' + sWidth + '" height="' + sHeight + '" >');
	document.writeln('	<param name="file" value="' + sFile + '">');
	for(i=3;i<arguments.length;i+=2) {
		document.writeln('  <param name="' + arguments[i] + '" value="' + arguments[i+1] + '">');
	}
	document.writeln('</applet>');
}

