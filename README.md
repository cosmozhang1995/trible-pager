<h1>
	Trible Pager
</h1>
<h2>
	Introduction
</h2>
<p>
	TriblePager is a new method of showing a list of pictures in a slider view. It's main element always has three item elements. One is the current page, one is the previous and one is the next. I invented this for making slider view easier to be responsive.
</p>
<p>
	Here are some features:
	<ul>
		<li>
			Update list without update view.
		</li>
		<li>
			Responsive for screen size.
		</li>
		<li>
			Designed for mobile
		</li>
		<li>
			Flexible callbacks.
		</li>
	</ul>
</p>
<p>
	This is my first js widget. And there must be a lot of stains in this. I will be appreciative if you could improve it.
</p>
<p>
	<a href="http://cosmozhang1995.github.io/trible-pager/">Click here to view the demo</a>
</p>
<h2>
	Dependencies
</h2>
<p>
	<ul>
		<li>
			jQuery 1.9.0 or later
		</li>
	</ul>
</p>
<h2>
	Get start
</h2>
<p>
	Include trible-pager.css as a CSS stylesheet. Then you must include jquery.js or jquery.min.js into your html document. With jquery included, include trible-pager.js or trible-pager.min.js.
</p>
<p>
	Just a single sentence to make a pager view: <code>var pv = new PagerView(list, 0)</code>. <code>list</code> must be an array of which each element object has a property named <code>url</code>. The second argument specifies the index of the picture in <code>list</code> to show when the pager view is initialized.
<h2>
	More complex example
</h2>
<p>
	The constructer of TriblePager can has a third argument, named <code>config</code>. It's a JSON object that specifies more complex performances and event callbacks of TriblePager. Here comes a more complex example to show the usage of <code>config</code> argument.
<p>
<code>
	pagerView = new TriblePager(pictures, 0, {<br/>
	&nbsp;&nbsp;animateDuration: 500,<br/>
	&nbsp;&nbsp;animateEasing: "linear",<br/>
	&nbsp;&nbsp;imageAdjustment: "auto",<br/>
	&nbsp;&nbsp;pageSize: {<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;width: "50%",<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;height: "50%"<br/>
	&nbsp;&nbsp;},<br/>
	&nbsp;&nbsp;loadingIndicator: "&lt;i class=\"fa fa-spinner\"&gt;&lt;/i&gt;",<br/>
	&nbsp;&nbsp;closeButton: "&lt;i class=\"fa fa-spinner\">&lt;/i&gt;,<br/>
	&nbsp;&nbsp;clickListener: function(event,pagerview){<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;pagerview.destroy();<br/>
	&nbsp;&nbsp;},<br/>
	&nbsp;&nbsp;pagingRegion: "50%",<br/>
	&nbsp;&nbsp;sensitivity: 0.3<br/>
	});
</code>
</p>
<p>
	This example create a pager view with some specified configurations. You can try it by yourself. As I think many of them are very easy to understand.
</p>
<p>
	I will show you all available configurations in the next chapter.
</p>
<h2>
	Configuration fields
</h2>
<p>
	This table shows all available configuration fields of the <code>config</code> argument.
</p>
<p>
<table>
<tr>
<th>
Field
</th>
<th>
Instruction
</th>
<th>
Default
</th>
</tr>
<tr>
<td>
animateDuration
</td>
<td>
Integer. Duration of the page slide animation.
</td>
<td>
200
</td>
</tr>
<tr>
<td>
animateEasing
</td>
<td>
String. Easing style of the page slide animation. This is a type of jquery animation easing.
</td>
<td>
"swing"
</td>
</tr>
<tr>
<td>
imgSrcKey
</td>
<td>
String. Name of the property indication the img's src of the <code>list</code>'s elements
</td>
<td>
"url"
</td>
</tr>
<tr>
<td>
defaultImgSrc
</td>
<td>
String. Url of the image to be loaded on original image loading failed
</td>
<td>
null
</td>
</tr>
<tr>
<td>
clickListener
</td>
<td>
<code>click</code> event callback. When page is clicked, emit <code>click</code> event<br/>
@param <code>[Event]</code> touchend event<br/>
@param <code>[TriblePager]</code> this TriblePager object
</td>
<td>
null
</td>
</tr>
<tr>
<td>
clickDelay
</td>
<td>
Integer. The maximum delay to emit click event
</td>
<td>
300
</td>
</tr>
<tr>
<td>
longTouchListener
</td>
<td>
<code>longTouch</code> event callback. When page is longtouched, emit <code>longTouch</code> event<br/>
@param <code>[Event]</code> touchstart event<br/>
@param <code>[TriblePager]</code> this TriblePager object
</td>
<td>
null
</td>
</tr>
<tr>
<td>
longTouchDelay
</td>
<td>
Integer. The minimum delay time to emit longTouch event
</td>
<td>
2000
</td>
</tr>
<tr>
<td>
sensitivity
</td>
<td>
Float. If slide length is larger than (page's width)×sensitivity, turn page 
</td>
<td>
0.5
</td>
</tr>
</tr>
<tr>
<td>
pageSize
</td>
<td>
Configure size of a single page, it should be like this:<br/>
{<br/>
&nbsp;&nbsp;width: '10px',<br/>
&nbsp;&nbsp;height: '10px'<br/>
}<br/>
width or height can be a percentage('xx%'), a pixel length('xxpx') or a number
</td>
<td>
{<br/>
&nbsp;&nbsp;width: '90%',<br/>
&nbsp;&nbsp;height: '90%'<br/>
}
</td>
</tr>
<tr>
<td>
imageAdjustment
</td>
<td>
Configure the adjustment of the image, this can be one of these strings:<br/>
'proportion': Image is resized to fit the page size with the aspect ratio not changed<br/>
'cut': Image is cut to fill the page size with the aspect ratio not changed<br/>
'fill': Image is resized to fill the page size exactly<br/>
'auto': Image use its original size<br/>
'proportion|auto' or 'cut|auto': Image is adjusted by 'proportion' or 'cut' option unless it needs to be scale larger
</td>
<td>
"proportion"
</td>
</tr>
<tr>
<td>
loadingIndicator
</td>
<td>
String. The inner html of image loading indicator.<br/>
If set null, there is no loading indicator.
</td>
<td>
null
</td>
</tr>
<tr>
<td>
closeButton
</td>
<td>
String. The inner html of close button.<br/>
If set null, there is no close button.
</td>
<td>
null
</td>
</tr>
<tr>
<td>
destroyCallback
</td>
<td>
Function. Called after the view is closed<br/>
@param <code>[TriblePager]</code> this TriblePager object
</td>
<td>
null
</td>
</tr>
<tr>
<td>
createCallback
</td>
<td>
Function. Called after the view is created<br/>
@param <code>[TriblePager]</code> this TriblePager object
</td>
<td>
null
</td>
</tr>
<tr>
<td>
immediately
</td>
<td>
Boolean. Specifies if the view is showed immediately after allocated
</td>
<td>
true
</td>
</tr>
<tr>
<td>
elementId
</td>
<td>
The id of the container element.<br/>
If set null, the container element doesn't has <code>id</code> attribute.
</td>
<td>
null
</td>
</tr>
<tr>
<td>
pagingRegion
</td>
<td>
Paging regions are to region in the left and right side of the pager, click on them will navigate on left or right<br/>
The width of paging region, this can be a percentage('xx%'), a pixel length('xxpx') or a number.
If set to "0px" or 0 or "0%", this region is not shown.
</td>
<td>
0%
</td>
</tr>
</table>
</p>
<h2>
Contact me
</h2>
<p>
As I mentioned before, this is my first js widget and there must be a lot of stains in this. I will be appreciative if you could improve it.
</p>
<p>
If you have any question, or if you have found any bug, or if you think this widget can be better, or, if you are interested about any thing about me and my projects, I will be very glad to be contacted.
</p>
<p>
Here are my contacts:
</p>
<p>
Email: <a href="mailto:zjzxz3006@126.com">zjzxz3006@126.com</a><br/>
Tel: <a href="tel:+8618610965714">+86 18610965714</a><br/>
Github: <a href="https://github.com/cosmozhang1995">cosmozhang1995</a>
</p>
<p style="text-align:right;">
Cosmo Zhang<br/>
Beijing University of Posts and Telecommunications<br/>
Sep 9th, 2014
</p>