# documentcloud-dropdownify
## What is this?
A small script to embed [public notes](http://www.documentcloud.org/help/notes) from [DocumentCloud](http://www.documentcloud.org) into an article on a website. The script creates a clickable `<span>` element that will activate a dropdown to reveal the embedded note.

**tl;dr** Click a highlighted sentence and an embedded portion of a DocumentCloud document will appear in a dropdown between paragraphs.

`NOTE: This script is optimized for the Tampa Bay Times's website and CMS. That means it has a lot of weird hacks that aren't necessary for other CMS's and definitely not for flat files.`

## I still have no idea what you're talking about
[Here's an example of what you'll be making.](http://www.tampabay.com/news/specials/tampa-homeless-program-uses-unpaid-destitute-residents-as-steady-labor/2208350) Go to any of the highlighted sentences and click them to see similar functionality.

## Ingredients
- `documentcloud-dropdownify.css`
- `documentcloud-dropdownify.js`
- [jQuery](http://jquery.com/)
- public DocumentCloud document ([I'm using this one.](http://tampabay.com/tbprojects/dcloud/dcloud-template.html?doc=1312602-uf-poll-results-10-13-14))

## Use
Load the css and jQuery in your head:
```html
<link rel="stylesheet" type="text/css" href="css/documentcloud-dropdownify.css">
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
```
Put the js file all the way at the bottom of your body:
```html
<script type="text/javascript" src="js/documentcloud-dropdownify.js"></script>
```

### Now for the nitty gritty
Find a paragraph/sentence/phrase that you want to reference to a public note in your document. For example:
```html
<p>The exclusive poll finds 40 percent of likely voters supporting Crist, 40 percent backing Scott, and 6 percent for Libertarian nominee Adrian Wyllie.</p>
```
We want to embed [this note](http://tampabay.com/tbprojects/dcloud/dcloud-template.html?doc=1312602-uf-poll-results-10-13-14#document/p4/a182522) inline right below this paragraph. **Easy peasy.**

#### Step 1
Wrap a span around whatever you want to be highlighted -- whether that's a paragraph, sentence or phrase. I'm going to wrap the whole paragraph.

```html
<p><span>The exclusive poll finds 40 percent of likely voters supporting Crist, 40 percent backing Scott, and 6 percent for Libertarian nominee Adrian Wyllie.</span></p>
```

#### Step 2
Add two classes to your span, `document-cloud-highlight` and `not-open`.
```html
<p><span class="document-cloud-highlight not-open">The exclusive poll finds 40 percent of likely voters supporting Crist, 40 percent backing Scott, and 6 percent for Libertarian nominee Adrian Wyllie.</span></p>
```

- `document-cloud-highlight`: attaches the css styling to the element
- `not-open`: tells the javascript that the dropdown is not open

#### Step 3
Put DocumentCloud's embed code after the paragraph you're highlighting. Even if you are **not highlighting a whole paragraph**, you will have to put the embed after the outmost encompassing span tag.
```html
<p><span class="document-cloud-highlight not-open">The exclusive poll finds 40 percent of likely voters supporting Crist, 40 percent backing Scott, and 6 percent for Libertarian nominee Adrian Wyllie.</span></p>
<div id="DC-note-182522" class="DC-note-container">.</div>
<script src="http://s3.amazonaws.com/s3.documentcloud.org/notes/loader.js"></script>
<script type="text/javascript">
  dc.embed.loadNote('http://www.documentcloud.org/documents/1312602-uf-poll-results-10-13-14/annotations/182522.js');
</script>
```
`NOTE: You'll see that there's a random period (.) in the empty div container. That's a bypass for the Times CMS, which will automatically delete empty divs. If this doesn't happen in your CMS/you are making a flat file, you can delete the period.`

#### Step 4
Wrap the DocumentCloud div container in another div with a `class="doc-cloud-holder"` and a unique id. I'm going to use `id="dch1"`.

```html
<div class="doc-cloud-holder" id="dch1">
    <div id="DC-note-182522" class="DC-note-container">.</div>
</div>
```

#### Step 5
Add an `onclick` attribute to your span element that will call the `docCloudDropdown()` function with the following parameters:
- the id of the DocumentCloud container you made in Step 4 ('dch1')
- the id of DocumentCloud note ('DC-note-182522')
- the span element ('this')

```html
<p><span class="document-cloud-highlight not-open" onclick="docCloudDropdown('dch1','DC-note-182522',this);">The exclusive poll finds 40 percent of likely voters supporting Crist, 40 percent backing Scott, and 6 percent for Libertarian nominee Adrian Wyllie.</span></p>
```

### ...and you're done!

## Credits
Hi, I'm [Alex](http://www.alexisnsanchez.com). I'm a front-end developer at the [Tampa Bay Times](http://www.tampabay.com).